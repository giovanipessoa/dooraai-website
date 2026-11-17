import { useEffect, useId, useRef, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Logo } from "./Logo";
import { Modal } from "./ui/Modal";
import { Icon } from "./ui/Icon";

type DemoModalProps = {
  open: boolean;
  onClose: () => void;
};

type FormValues = {
  name: string;
  clinic: string;
  phone: string;
  area: string;
  professionals: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type LeadPayload = {
  name: string;
  clinic_name: string;
  whatsapp: string;
  professionals_count: string;
  specialty_area: string;
  lgpd_consent: boolean;
  website_hp: string;
};

const LEAD_NOTICE_ERROR =
  "Alguns dados não foram aceitos. Revise as informações e tente novamente.";
const LEAD_RATE_LIMIT_ERROR =
  "Recebemos muitas solicitações em sequência. Aguarde alguns instantes e tente novamente.";
const LEAD_UNAVAILABLE_ERROR =
  "Não foi possível enviar agora. Tente novamente em instantes.";
const LEAD_NETWORK_ERROR =
  "Não foi possível enviar agora. Verifique sua conexão e tente novamente.";

class LeadSubmitError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadSubmitError";
  }
}

const INITIAL_VALUES: FormValues = {
  name: "",
  clinic: "",
  phone: "",
  area: "",
  professionals: "",
  consent: false,
};

const AREAS = [
  "Estética Avançada",
  "Dermatologia",
  "Odontologia",
  "Clínica Médica",
  "Outra",
];

const LEAD_FALLBACK_EMAIL = "contato@dooraai.com.br";

type Delivery = "api" | "email";

const inputClass =
  "w-full rounded-[10px] border border-slate-300 bg-white px-3.5 py-3 text-sm text-doora-ink shadow-[0_1px_0_rgba(8,11,50,0.02)] transition placeholder:text-slate-400 focus:border-doora-blue focus:outline-none focus:ring-4 focus:ring-doora-blue/10 aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:ring-red-100";

const labelClass =
  "mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.08em] text-doora-ink";

function formatPhone(rawValue: string) {
  const digits = rawValue.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) {
    return "";
  }
  if (digits.length <= 2) {
    return `(${digits}`;
  }
  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  const phoneDigits = values.phone.replace(/\D/g, "");
  const professionals = Number(values.professionals);

  if (values.name.trim().length < 2) {
    errors.name = "Informe o seu nome.";
  }
  if (values.clinic.trim().length < 2) {
    errors.clinic = "Informe o nome da clínica.";
  }
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.phone = "Informe um WhatsApp com DDD.";
  }
  if (!values.area) {
    errors.area = "Selecione a área de atuação.";
  }
  if (
    values.professionals.trim() === "" ||
    !Number.isInteger(professionals) ||
    professionals < 1 ||
    professionals > 500
  ) {
    errors.professionals = "Informe um número entre 1 e 500.";
  }
  if (!values.consent) {
    errors.consent = "Precisamos da sua autorização para entrar em contato.";
  }

  return errors;
}

export function DemoModal({ open, onClose }: DemoModalProps) {
  const titleId = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [delivery, setDelivery] = useState<Delivery>("api");
  const [submitError, setSubmitError] = useState("");
  const [firstName, setFirstName] = useState("");

  useEffect(() => {
    if (!open) {
      return;
    }

    setValues(INITIAL_VALUES);
    setErrors({});
    setStatus("idle");
    setDelivery("api");
    setSubmitError("");
    setFirstName("");
    if (honeypotRef.current) {
      honeypotRef.current.value = "";
    }
  }, [open]);

  useEffect(() => {
    if (status === "success") {
      successHeadingRef.current?.focus();
    }
  }, [status]);

  function updateField<K extends keyof FormValues>(
    key: K,
    value: FormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => {
      if (!current[key]) {
        return current;
      }
      const next = { ...current };
      delete next[key];
      return next;
    });
  }

  function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
    updateField("phone", formatPhone(event.target.value));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${firstInvalidField}"]`)
        ?.focus();
      return;
    }

    setStatus("submitting");
    setSubmitError("");

    try {
      const endpoint = import.meta.env.VITE_LEAD_ENDPOINT?.trim();

      if (endpoint) {
        const payload: LeadPayload = {
          name: values.name.trim(),
          clinic_name: values.clinic.trim(),
          whatsapp: values.phone.trim(),
          professionals_count: values.professionals.trim(),
          specialty_area: values.area,
          lgpd_consent: values.consent,
          website_hp: honeypotRef.current?.value ?? "",
        };

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (response.status === 400) {
          throw new LeadSubmitError(LEAD_NOTICE_ERROR);
        }
        if (response.status === 429) {
          throw new LeadSubmitError(LEAD_RATE_LIMIT_ERROR);
        }
        if (response.status !== 200 && response.status !== 201) {
          throw new LeadSubmitError(LEAD_UNAVAILABLE_ERROR);
        }

        setDelivery("api");
      } else {
        const subject = `Solicitação de demonstração: ${values.clinic.trim()}`;
        const body = [
          `Nome: ${values.name.trim()}`,
          `Clínica: ${values.clinic.trim()}`,
          `WhatsApp: ${values.phone}`,
          `Área de atuação: ${values.area}`,
          `Profissionais: ${values.professionals}`,
          "",
          "Solicitação enviada pelo site da DooraAI.",
        ].join("\n");

        window.location.href = `mailto:${LEAD_FALLBACK_EMAIL}?subject=${encodeURIComponent(
          subject,
        )}&body=${encodeURIComponent(body)}`;
        setDelivery("email");
      }

      setFirstName(values.name.trim().split(" ")[0]);
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setSubmitError(
        error instanceof LeadSubmitError ? error.message : LEAD_NETWORK_ERROR,
      );
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      panelClassName="max-w-4xl"
    >
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="p-6 sm:p-9">
          {status === "success" ? (
            <div className="animate-fade flex min-h-[460px] flex-col items-center justify-center text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                <Icon name="check" className="h-7 w-7" strokeWidth={2} />
              </span>
              <p className="eyebrow mt-6">Solicitação recebida</p>
              <h2
                ref={successHeadingRef}
                id={titleId}
                tabIndex={-1}
                className="mt-3 text-2xl font-bold leading-tight focus:outline-none sm:text-3xl"
              >
                Obrigado, {firstName}.
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-600">
                {delivery === "email"
                  ? "Abrimos seu aplicativo de e-mail com os dados preenchidos. Envie a mensagem para concluir a solicitação. Nossa equipe retorna pelo WhatsApp informado."
                  : `Nossa equipe entrará em contato pelo WhatsApp informado para alinhar a demonstração ao contexto da ${values.clinic.trim()}.`}
              </p>
              {delivery === "email" ? (
                <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500">
                  Se o aplicativo de e-mail não abrir, escreva para{" "}
                  <a
                    href={`mailto:${LEAD_FALLBACK_EMAIL}`}
                    className="font-semibold text-doora-blue underline underline-offset-2"
                  >
                    {LEAD_FALLBACK_EMAIL}
                  </a>
                  .
                </p>
              ) : null}
              <p className="mt-2 max-w-sm text-xs leading-relaxed text-slate-500">
                Enquanto isso, você pode continuar explorando a jornada nesta
                página.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-7 inline-flex items-center justify-center rounded-[10px] border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-doora-navy transition hover:border-slate-400 hover:bg-doora-mist"
              >
                Voltar ao site
              </button>
            </div>
          ) : (
            <>
              <p className="eyebrow">Demonstração guiada</p>
              <h2
                id={titleId}
                className="mt-3 text-[26px] font-bold leading-tight sm:text-3xl"
              >
                Vamos conhecer a sua clínica?
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
                Conte um pouco sobre a sua operação. Nossa equipe prepara uma
                apresentação alinhada ao seu contexto, sem compromisso.
              </p>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="mt-7"
              >
                <input
                  ref={honeypotRef}
                  type="text"
                  name="website_hp"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="demo-name">
                      Nome{" "}
                      <span aria-hidden="true" className="text-doora-violet">
                        *
                      </span>
                    </label>
                    <input
                      id="demo-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      data-autofocus
                      value={values.name}
                      onChange={(event) =>
                        updateField("name", event.target.value)
                      }
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={
                        errors.name ? "demo-name-error" : undefined
                      }
                      className={inputClass}
                      placeholder="Seu nome completo"
                    />
                    {errors.name ? (
                      <p
                        id="demo-name-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="demo-clinic">
                      Nome da clínica{" "}
                      <span aria-hidden="true" className="text-doora-violet">
                        *
                      </span>
                    </label>
                    <input
                      id="demo-clinic"
                      name="clinic"
                      type="text"
                      autoComplete="organization"
                      required
                      value={values.clinic}
                      onChange={(event) =>
                        updateField("clinic", event.target.value)
                      }
                      aria-invalid={Boolean(errors.clinic)}
                      aria-describedby={
                        errors.clinic ? "demo-clinic-error" : undefined
                      }
                      className={inputClass}
                      placeholder="Ex.: Clínica Lumina"
                    />
                    {errors.clinic ? (
                      <p
                        id="demo-clinic-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.clinic}
                      </p>
                    ) : null}
                  </div>


                  <div>
                    <label className={labelClass} htmlFor="demo-phone">
                      WhatsApp{" "}
                      <span aria-hidden="true" className="text-doora-violet">
                        *
                      </span>
                    </label>
                    <input
                      id="demo-phone"
                      name="phone"
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      required
                      value={values.phone}
                      onChange={handlePhoneChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={
                        errors.phone ? "demo-phone-error" : "demo-phone-hint"
                      }
                      className={inputClass}
                      placeholder="(11) 99999-9999"
                    />
                    {errors.phone ? (
                      <p
                        id="demo-phone-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.phone}
                      </p>
                    ) : (
                      <p
                        id="demo-phone-hint"
                        className="mt-1.5 text-xs text-slate-500"
                      >
                        Com DDD, para contato pelo WhatsApp.
                      </p>
                    )}
                  </div>

                  <div>
                    <label className={labelClass} htmlFor="demo-professionals">
                      Número de profissionais{" "}
                      <span aria-hidden="true" className="text-doora-violet">
                        *
                      </span>
                    </label>
                    <input
                      id="demo-professionals"
                      name="professionals"
                      type="number"
                      inputMode="numeric"
                      min={1}
                      max={500}
                      step={1}
                      required
                      value={values.professionals}
                      onChange={(event) =>
                        updateField("professionals", event.target.value)
                      }
                      aria-invalid={Boolean(errors.professionals)}
                      aria-describedby={
                        errors.professionals
                          ? "demo-professionals-error"
                          : undefined
                      }
                      className={inputClass}
                      placeholder="Ex.: 4"
                    />
                    {errors.professionals ? (
                      <p
                        id="demo-professionals-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.professionals}
                      </p>
                    ) : null}
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="demo-area">
                      Área de atuação{" "}
                      <span aria-hidden="true" className="text-doora-violet">
                        *
                      </span>
                    </label>
                    <div className="relative">
                      <select
                        id="demo-area"
                        name="area"
                        required
                        value={values.area}
                        onChange={(event) =>
                          updateField("area", event.target.value)
                        }
                        aria-invalid={Boolean(errors.area)}
                        aria-describedby={
                          errors.area ? "demo-area-error" : undefined
                        }
                        className={`${inputClass} appearance-none pr-10 ${
                          values.area ? "text-doora-ink" : "text-slate-400"
                        }`}
                      >
                        <option value="" disabled>
                          Selecione a área da clínica
                        </option>
                        {AREAS.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      <Icon
                        name="chevronDown"
                        className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
                      />
                    </div>
                    {errors.area ? (
                      <p
                        id="demo-area-error"
                        role="alert"
                        className="mt-1.5 text-xs text-red-600"
                      >
                        {errors.area}
                      </p>
                    ) : null}
                  </div>
                </div>


                <div className="mt-5">
                  <label
                    htmlFor="demo-consent"
                    className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-slate-600"
                  >
                    <input
                      id="demo-consent"
                      name="consent"
                      type="checkbox"
                      checked={values.consent}
                      onChange={(event) =>
                        updateField("consent", event.target.checked)
                      }
                      aria-invalid={Boolean(errors.consent)}
                      aria-describedby={
                        errors.consent ? "demo-consent-error" : undefined
                      }
                      className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded border-slate-300 accent-doora-blue"
                    />
                    <span>
                      Autorizo o contato da DooraAI sobre esta demonstração e
                      declaro que li o aviso de privacidade.
                    </span>
                  </label>
                  {errors.consent ? (
                    <p
                      id="demo-consent-error"
                      role="alert"
                      className="mt-1.5 pl-7 text-xs text-red-600"
                    >
                      {errors.consent}
                    </p>
                  ) : null}
                  <details className="mt-2 pl-7 text-xs text-slate-600">
                    <summary className="cursor-pointer font-medium text-doora-blue">
                      Ver aviso de privacidade
                    </summary>
                    <p className="mt-2 leading-relaxed">
                      Os dados informados são usados apenas para responder a
                      esta solicitação de demonstração. A DooraAI trata dados
                      pessoais em conformidade com a LGPD e não realiza
                      diagnóstico ou prescrição por meio deste site.
                    </p>
                  </details>
                </div>

                {submitError ? (
                  <p
                    role="alert"
                    className="mt-4 rounded-[10px] border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                  >
                    {submitError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-doora-navy px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-doora-ink focus-visible:outline-doora-blue disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting"
                    ? "Enviando solicitação..."
                    : "Solicitar demonstração"}
                  <Icon
                    name="arrowRight"
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                  />
                </button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-slate-500">
                  Retornamos pelo WhatsApp informado. Sem compromisso.
                </p>
              </form>
            </>
          )}
        </div>


        <aside className="hidden flex-col justify-between rounded-r-2xl border-l border-slate-200 bg-doora-mist p-8 lg:flex">
          <div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-doora-blue shadow-sm">
              <Icon name="sparkles" className="h-5 w-5" />
            </span>
            <p className="mt-6 text-sm font-semibold text-doora-navy">
              O que você vai ver
            </p>
            <ul className="mt-4 space-y-4">
              {[
                "Atendimento no WhatsApp com a base de conhecimento da sua clínica.",
                "Agenda, formulário pré-consulta e pagamento na mesma jornada.",
                "Prontuário 3D, funil comercial e dashboard executivo.",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-slate-600"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-doora-blue ring-1 ring-slate-200">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.2} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-doora-blue">
                <Icon name="shield" className="h-4 w-4" />
                IA responsável
              </div>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                A IA atua como assistente configurada pela clínica, sem
                diagnóstico ou prescrição, com transbordo humano em 1 clique.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              DooraAI
            </p>
            <div className="mt-3 inline-flex rounded-xl border border-slate-200 bg-white px-3 py-2">
              <Logo className="h-9 w-auto" loading="lazy" />
            </div>
          </div>
        </aside>
      </div>
    </Modal>
  );
}

