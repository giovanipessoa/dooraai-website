import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

type Step = {
  number: string;
  label: string;
  icon: IconName;
  title: string;
  description: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    number: "01",
    label: "Configuração",
    icon: "building",
    title: "Ative sua clínica no workspace",
    description:
      "Cadastre serviços, equipe, permissões e a base de conhecimento clínica. Cada clínica opera isolada, com o próprio contexto e as próprias regras.",
    detail: "Sem instalação complexa",
  },
  {
    number: "02",
    label: "Conexão",
    icon: "whatsapp",
    title: "Conecte seu WhatsApp",
    description:
      "A IA passa a atender com a identidade da clínica, qualifica o lead, responde dúvidas sobre procedimentos e agenda direto na sua agenda.",
    detail: "Atendimento 24/7",
  },
  {
    number: "03",
    label: "Operação",
    icon: "chart",
    title: "Acompanhe os resultados em tempo real",
    description:
      "Funil Kanban, agenda, pagamentos e dashboard trabalhando juntos. A equipe assume a conversa em 1 clique quando precisar.",
    detail: "Controle da equipe",
  },
];

const STEP_GUARANTEES = [
  { icon: "sparkles" as IconName, text: "IA assistiva, sem diagnóstico ou prescrição" },
  { icon: "refresh" as IconName, text: "Transbordo humano em 1 clique" },
  { icon: "shieldCheck" as IconName, text: "Dados isolados por workspace" },
];

export function Steps() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-funciona-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.85fr] lg:items-end lg:gap-12">
          <div>
            <p className="eyebrow">
              <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
              Como funciona
            </p>
            <h2
              id="como-funciona-title"
              className="mt-4 max-w-xl text-[1.9rem] font-bold leading-[1.14] tracking-[-0.02em] sm:text-[2.35rem]"
            >
              Da Conversa à Agenda em 3 Passos
            </h2>
          </div>
          <p className="max-w-md text-[14.5px] leading-relaxed text-slate-600 lg:justify-self-end lg:pb-1.5">
            A implantação acontece junto com a sua equipe. Do primeiro acesso ao
            atendimento no WhatsApp, cada etapa tem acompanhamento próximo.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            className="absolute inset-x-6 top-7 hidden h-px bg-gradient-to-r from-doora-violet/30 via-doora-blue/30 to-doora-cyan/30 md:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map((step) => (
              <li key={step.number}>
                <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white shadow-soft">
                  <span className="bg-doora-gradient absolute inset-[3px] rounded-full opacity-10" />
                  <span className="font-display relative text-[17px] font-bold text-doora-navy">
                    {step.number}
                  </span>
                </div>
                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-doora-blue">
                  {step.label}
                </p>
                <h3 className="mt-2 text-[19px] font-bold leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
                  {step.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-doora-navy">
                  <Icon name={step.icon} className="h-3.5 w-3.5 text-doora-blue" />
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-12 grid gap-3 rounded-2xl border border-slate-200 bg-doora-mist px-5 py-4 sm:grid-cols-3">
          {STEP_GUARANTEES.map((item) => (
            <p
              key={item.text}
              className="flex items-start gap-2 text-[11.5px] font-medium leading-snug text-doora-ink"
            >
              <Icon
                name={item.icon}
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-doora-blue"
              />
              {item.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
