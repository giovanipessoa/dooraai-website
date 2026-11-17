import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

type PainCard = {
  number: string;
  tag: string;
  title: string;
  description: string;
  icon: IconName;
};

const PAIN_CARDS: PainCard[] = [
  {
    number: "01",
    tag: "Atendimento",
    title: "Demora e respostas impessoais no WhatsApp",
    description:
      "Pacientes interessados em procedimentos consultivos esfriam quando encontram menus robóticos ou esperam horas por resposta.",
    icon: "message",
  },
  {
    number: "02",
    tag: "Operação",
    title: "Jornada fragmentada entre canais",
    description:
      "Mensagens soltas, agenda desconectada, formulários esquecidos e cobranças manuais geram atrito e faltas.",
    icon: "layers",
  },
  {
    number: "03",
    tag: "Gestão",
    title: "Falta de controle e visibilidade operacional",
    description:
      "Sem histórico unificado, controle de acesso por perfil ou indicadores claros de conversão, a gestão perde previsibilidade.",
    icon: "chart",
  },
];

export function PainPoints() {
  return (
    <section
      id="dores"
      aria-labelledby="dores-title"
      className="bg-doora-mist py-20 sm:py-24"
    >
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">
            <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
            O atrito que passa despercebido
          </p>
          <h2
            id="dores-title"
            className="mt-4 text-[1.9rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.35rem]"
          >
            Onde a Jornada do Paciente Costuma Travar
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
            A demanda existe. O que se perde, muitas vezes, é a continuidade
            entre o interesse do paciente e o cuidado que a clínica oferece.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {PAIN_CARDS.map((card) => (
            <article
              key={card.number}
              className="group relative rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-soft sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-doora-mist text-doora-blue">
                  <Icon name={card.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-[11px] font-semibold tracking-[0.16em] text-slate-400">
                  {card.number}
                </span>
              </div>

              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-doora-blue">
                {card.tag}
              </p>
              <h3 className="mt-2 text-[17px] font-bold leading-snug">
                {card.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 flex items-start gap-2 text-[12.5px] leading-relaxed text-slate-600">
          <Icon
            name="sparkles"
            className="mt-0.5 h-4 w-4 shrink-0 text-doora-violet"
          />
          A DooraAI conecta essas três pontas em uma única jornada assistida,
          com a clínica no controle.
        </p>
      </div>
    </section>
  );
}
