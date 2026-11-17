import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

const STAGE_INTERVAL = 1700;
const LAST_STAGE = 3;

function ChatBubble({
  children,
  from,
  time,
}: {
  children: ReactNode;
  from: "patient" | "agent";
  time: string;
}) {
  const isPatient = from === "patient";

  return (
    <div
      className={`animate-rise max-w-[88%] ${
        isPatient ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={
          isPatient
            ? "rounded-2xl rounded-br-md bg-doora-navy px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white shadow-sm"
            : "rounded-2xl rounded-bl-md border border-slate-200 bg-white px-3.5 py-2.5 text-[12.5px] leading-relaxed text-doora-ink shadow-sm"
        }
      >
        {children}
      </div>
      <p
        className={`mt-1 flex items-center gap-1 text-[10px] text-slate-500 ${
          isPatient ? "justify-end" : "justify-start"
        }`}
      >
        {time}
        {isPatient ? (
          <Icon name="check" className="h-3 w-3 text-doora-blue" strokeWidth={2.4} />
        ) : null}
      </p>
    </div>
  );
}

function StatusItem({
  icon,
  label,
  detail,
  active,
}: {
  icon: IconName;
  label: string;
  detail: string;
  active: boolean;
}) {
  return (
    <li className="flex gap-2.5">
      <span
        className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
          active
            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
            : "border-slate-200 bg-slate-50 text-slate-400"
        }`}
      >
        <Icon
          name={active ? "check" : icon}
          className="h-3.5 w-3.5"
          strokeWidth={active ? 2.4 : 1.8}
        />
      </span>
      <span>
        <span
          className={`block text-[11px] font-semibold transition-colors duration-500 ${
            active ? "text-doora-navy" : "text-slate-500"
          }`}
        >
          {label}
        </span>
        <span className="mt-0.5 block text-[10px] leading-snug text-slate-500">
          {active ? detail : "Aguardando"}
        </span>
      </span>
    </li>
  );
}

export function ProductPreview() {
  const [stage, setStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const messagesRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion.current) {
      setStage(LAST_STAGE);
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }

    if (stage >= LAST_STAGE) {
      setIsPlaying(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setStage((current) => Math.min(current + 1, LAST_STAGE));
    }, STAGE_INTERVAL);

    return () => window.clearTimeout(timer);
  }, [isPlaying, stage]);

  useEffect(() => {
    const container = messagesRef.current;
    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: prefersReducedMotion.current ? "auto" : "smooth",
    });
  }, [stage]);

  function handlePlayback() {
    if (stage >= LAST_STAGE) {
      setStage(0);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((current) => !current);
  }

  const playbackLabel =
    stage >= LAST_STAGE
      ? "Reproduzir novamente"
      : isPlaying
        ? "Pausar"
        : "Continuar";

  return (
    <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
      <div
        className="bg-doora-gradient absolute -inset-3 rounded-[28px] opacity-[0.09] blur-2xl"
        aria-hidden="true"
      />

      <div className="relative rounded-2xl border border-slate-200/80 bg-white p-2.5 shadow-soft sm:p-3.5">
        <div className="flex items-center justify-between gap-3 px-1.5 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-soft absolute inline-flex h-full w-full rounded-full bg-doora-cyan" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-doora-cyan" />
            </span>
            <p className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Jornada em tempo real
            </p>
          </div>
          <button
            type="button"
            onClick={handlePlayback}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-doora-ink transition hover:border-slate-300 hover:bg-doora-mist"
          >
            <Icon
              name={stage >= LAST_STAGE ? "refresh" : isPlaying ? "pause" : "play"}
              className="h-3 w-3"
              strokeWidth={2}
            />
            <span className="sm:hidden">
              {stage >= LAST_STAGE ? "Reproduzir" : playbackLabel}
            </span>
            <span className="hidden sm:inline">{playbackLabel}</span>
          </button>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-[minmax(0,1fr)_176px]">
          <div className="flex h-[436px] flex-col overflow-hidden rounded-[14px] border border-slate-200 bg-doora-mist sm:h-[462px]">
            <div className="flex items-center gap-2.5 border-b border-slate-200 bg-white px-3 py-2.5">
              <div className="bg-doora-gradient h-8 w-8 shrink-0 rounded-full p-[1.5px]">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[9px] font-bold text-doora-navy">
                  CL
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-semibold text-doora-navy">
                  Clínica Lumina
                </p>
                <p className="flex items-center gap-1 text-[9.5px] text-slate-500">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Agente Especialista online
                </p>
              </div>
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                <Icon name="whatsapp" className="h-3.5 w-3.5" />
              </span>
            </div>

            <div
              ref={messagesRef}
              className="scrollbar-thin flex-1 space-y-3 overflow-y-auto p-3"
            >
              <ChatBubble from="patient" time="09:12">
                Oi! Queria entender melhor sobre harmonização facial. Dói?
                Quanto tempo dura?
              </ChatBubble>

              {stage >= 1 ? (
                <ChatBubble from="agent" time="09:12">
                  Olá, Mariana. Que bom ter você aqui. A avaliação é feita por
                  um profissional habilitado e a duração varia conforme o seu
                  plano de cuidado. Posso reservar um horário para conversar com
                  a equipe?
                  <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-doora-mist px-2 py-1 text-[9px] font-semibold text-doora-blue">
                    <Icon name="database" className="h-3 w-3" />
                    Base da clínica consultada
                  </span>
                </ChatBubble>
              ) : null}


              {stage >= 2 ? (
                <>
                  <div className="animate-rise mr-auto w-[92%] space-y-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-doora-blue">
                          <Icon name="calendar" className="h-3 w-3" />
                          Agenda
                        </span>
                        <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[8px] font-semibold text-emerald-700">
                          {stage >= LAST_STAGE ? "Reservado" : "Proposta"}
                        </span>
                      </div>
                      <p className="mt-1.5 text-[11.5px] font-semibold text-doora-navy">
                        Avaliação de Harmonização
                      </p>
                      <p className="text-[9.5px] text-slate-500">
                        Quinta, 21/11, às 14h30, 50 min
                      </p>
                      <div className="mt-2 flex items-center justify-between gap-1.5 rounded-lg bg-doora-mist px-2 py-1.5">
                        <span className="truncate text-[8.5px] font-semibold text-doora-blue">
                          /agenda/suaclinica
                        </span>
                        <Icon
                          name="arrowUpRight"
                          className="h-3 w-3 shrink-0 text-doora-blue"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 shadow-sm">
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 text-[8.5px] font-semibold uppercase tracking-[0.12em] text-doora-blue">
                          <Icon name="card" className="h-3 w-3" />
                          Pagamento
                        </span>
                        <span className="rounded-full bg-doora-navy px-1.5 py-0.5 text-[8px] font-semibold text-white">
                          InfinitePay
                        </span>
                      </div>
                      <div className="mt-1.5 flex items-baseline justify-between gap-2">
                        <span className="text-[10px] font-medium text-slate-600">
                          Sinal de reserva
                        </span>
                        <span className="text-[11.5px] font-bold text-doora-navy">
                          R$ 150,00
                        </span>
                      </div>
                      <p className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-semibold text-slate-500">
                        <Icon name="clock" className="h-3 w-3" strokeWidth={2} />
                        Link de pagamento enviado
                      </p>
                    </div>
                  </div>

                  <ChatBubble from="patient" time="09:13">
                    Perfeito! Quinta às 14h30 funciona para mim.
                  </ChatBubble>
                </>
              ) : null}


              {stage >= 3 ? (
                <ChatBubble from="agent" time="09:13">
                  Horário reservado, Mariana. Enviei o formulário pré-consulta e
                  o link de pagamento. A equipe da clínica pode assumir esta
                  conversa a qualquer momento, se você preferir falar com uma
                  pessoa.
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-doora-mist px-2 py-1 text-[9px] font-semibold text-doora-blue">
                      <Icon name="clipboard" className="h-3 w-3" />
                      Anamnese enviada
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-doora-mist px-2 py-1 text-[9px] font-semibold text-doora-blue">
                      <Icon name="card" className="h-3 w-3" />
                      Checkout InfinitePay
                    </span>
                  </span>
                </ChatBubble>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col rounded-[14px] border border-slate-200 bg-white p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                Status da jornada
              </p>
              <span className="inline-flex items-center gap-1 text-[8.5px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Ativo
              </span>
            </div>

            <ul className="mt-3 space-y-3.5">
              <StatusItem
                icon="calendar"
                label="Horário reservado"
                detail="Agenda, 21/11, 14h30"
                active={stage >= LAST_STAGE}
              />
              <StatusItem
                icon="clipboard"
                label="Formulário enviado"
                detail="Anamnese pré-consulta"
                active={stage >= 3}
              />
              <StatusItem
                icon="card"
                label="Pagamento"
                detail="Link InfinitePay enviado"
                active={stage >= 3}
              />
            </ul>

            <div className="mt-4 rounded-lg bg-doora-mist p-2">
              <p className="flex items-center gap-1 text-[9px] font-semibold text-doora-blue">
                <Icon name="database" className="h-3 w-3" />
                RAG semântico
              </p>
              <p className="mt-1 text-[9px] leading-snug text-slate-600">
                Respostas alinhadas aos protocolos da clínica.
              </p>
            </div>

            <div className="mt-auto border-t border-slate-100 pt-3">
              <p className="text-[8.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Continuidade humana
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-[9.5px] font-semibold text-doora-navy">
                <Icon name="users" className="h-3.5 w-3.5 text-doora-blue" />
                Assumir conversa em 1 clique
              </p>
            </div>
          </div>
        </div>

        <p className="px-1 pb-0.5 pt-2.5 text-[9px] leading-snug text-slate-500">
          Demonstração ilustrativa da jornada. Dados fictícios, sem
          identificação de pacientes reais.
        </p>
      </div>
    </div>
  );
}

