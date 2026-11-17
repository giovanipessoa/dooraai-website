import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

type Pillar = {
  icon: IconName;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
};

const PILLARS: Pillar[] = [
  {
    icon: "database",
    tag: "RAG semântico",
    title: "Conversação Contextual",
    description:
      "Base de conhecimento configurável por área da saúde e por clínica, garantindo respostas precisas, acolhedoras e alinhadas aos protocolos do seu workspace.",
    bullets: [
      "Base configurável por área da saúde",
      "Respostas alinhadas ao workspace",
      "Escopo clínico respeitado",
    ],
  },
  {
    icon: "mic",
    tag: "Sua voz",
    title: "Identidade e Voz Configuráveis",
    description:
      "Personalização da linguagem e recursos de voz sintética com controles e consentimento apropriados, além de supressão inteligente de áudio quando o paciente precisa clicar em links ou cartões.",
    bullets: [
      "Tom de voz definido pela clínica",
      "Voz sintética com consentimento",
      "Áudio suprimido em links e cartões",
    ],
  },
  {
    icon: "users",
    tag: "Transbordo humano",
    title: "Continuidade Humana com 1 Clique",
    description:
      "A equipe pode pausar a IA a qualquer momento, assumir a conversa no painel de Mensagens com histórico completo e reenviar links de pagamento diretamente.",
    bullets: [
      "Pausa da IA em 1 clique",
      "Histórico completo em Mensagens",
      "Reenvio de links de pagamento",
    ],
  },
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-title"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
          <div className="self-start lg:sticky lg:top-28">
            <p className="eyebrow">
              <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
              Diferenciais
            </p>
            <h2
              id="diferenciais-title"
              className="mt-4 text-[1.9rem] font-bold leading-[1.14] tracking-[-0.02em] sm:text-[2.35rem]"
            >
              O Diferencial DooraAI: Tecnologia sob seu Comando
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
              A plataforma não impõe um roteiro pronto. Ela aprende com a base
              da sua clínica, respeita os seus limites e devolve a conversa para
              a equipe quando o cuidado humano é necessário.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-2xl bg-doora-navy p-6">
              <div
                className="bg-doora-gradient absolute inset-y-0 left-0 w-1"
                aria-hidden="true"
              />
              <p className="font-display text-[17px] font-semibold leading-relaxed text-white">
                A IA acolhe e organiza. A sua equipe decide e cuida.
              </p>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-doora-cyan">
                Princípio DooraAI
              </p>
            </div>

            <p className="mt-5 flex items-start gap-2 text-[12px] leading-relaxed text-slate-500">
              <Icon
                name="shieldCheck"
                className="mt-0.5 h-4 w-4 shrink-0 text-doora-blue"
              />
              A IA atua como assistente especializada, configurada pela clínica,
              sem diagnóstico ou prescrição.
            </p>
          </div>

          <div className="space-y-4">
            {PILLARS.map((pillar) => (
              <article
                key={pillar.title}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 transition duration-300 hover:border-slate-300 hover:shadow-soft sm:p-7"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                  <span className="bg-doora-gradient inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl p-[1px]">
                    <span className="inline-flex h-full w-full items-center justify-center rounded-[11px] bg-doora-mist text-doora-navy">
                      <Icon name={pillar.icon} className="h-5 w-5" />
                    </span>
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-[18px] font-bold leading-snug">
                        {pillar.title}
                      </h3>
                      <span className="rounded-full border border-slate-200 bg-doora-mist px-2.5 py-1 text-[9.5px] font-semibold uppercase tracking-[0.1em] text-doora-blue">
                        {pillar.tag}
                      </span>
                    </div>
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
                      {pillar.description}
                    </p>

                    <ul className="mt-4 grid gap-x-5 gap-y-2 sm:grid-cols-2">
                      {pillar.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-1.5 text-[11.5px] font-medium leading-snug text-doora-ink"
                        >
                          <Icon
                            name="check"
                            className="mt-0.5 h-3 w-3 shrink-0 text-doora-blue"
                            strokeWidth={2.4}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}

            <p className="pt-2 text-[12px] leading-relaxed text-slate-500">
              Toda configuração fica no workspace da clínica e pode ser revisada
              pela equipe a qualquer momento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

