import { useState } from "react";
import { Icon } from "./ui/Icon";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como a base de conhecimento da clínica é configurada?",
    answer:
      "A clínica cadastra materiais, orientações e protocolos por área de atuação dentro do próprio workspace. A IA consulta essa base para responder dentro do escopo definido, sem inventar condutas. A equipe pode revisar e atualizar o conteúdo quando quiser.",
  },
  {
    question: "Como funciona o transbordo para a equipe no WhatsApp?",
    answer:
      "A IA atua como assistente especializada e a equipe mantém o controle. Em 1 clique, o atendimento pode ser pausado e assumido no painel de Mensagens, com todo o histórico da conversa. O transbordo humano faz parte da jornada.",
  },
  {
    question: "O prontuário com mapeamento 3D funciona em tablet?",
    answer:
      "Sim. O recurso roda no navegador e foi pensado para uso em computador ou tablet. É possível inserir pinos com dosagens e observações, desenhar vetores sobre modelos 3D ou fotos 2D e gerar snapshots auditáveis vinculados à evolução clínica.",
  },
  {
    question: "Como funcionam as permissões da equipe?",
    answer:
      "O controle de acesso é granular por módulo, como WhatsApp, Agenda, Prontuários, Pagamentos e Ajustes. Cada perfil recebe apenas as permissões necessárias para a sua função, e o login pode contar com autenticação multifator.",
  },
  {
    question: "Onde ficam os dados e como a LGPD é tratada?",
    answer:
      "Os dados de pacientes, conversas, agendamentos e arquivos ficam isolados por workspace, sem compartilhamento entre clínicas. A plataforma oferece RBAC, MFA e trilha de auditoria para apoiar a conformidade com a LGPD. A política de privacidade detalha o tratamento e os direitos dos titulares.",
  },
];

type FaqProps = {
  onOpenDemo: () => void;
  onOpenPrivacy: () => void;
};

export function Faq({ onOpenDemo, onOpenPrivacy }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="bg-white pb-20 pt-4 sm:pb-24 lg:pb-28"
    >
      <div className="shell">
        <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <p className="eyebrow">
                <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
                Dúvidas frequentes
              </p>
              <h2
                id="faq-title"
                className="mt-4 text-[1.9rem] font-bold leading-[1.14] tracking-[-0.02em] sm:text-[2.25rem]"
              >
                Perguntas que toda clínica faz
              </h2>
              <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-slate-600">
                Transparência sobre a IA, os dados e a operação da plataforma
                antes de você decidir.
              </p>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-doora-mist p-5">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-doora-blue">
                  <Icon name="message" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-[15px] font-bold leading-snug">
                  Prefere falar com uma pessoa?
                </h3>
                <p className="mt-2 text-[12.5px] leading-relaxed text-slate-600">
                  Nossa equipe apresenta a plataforma com o contexto da sua
                  clínica e responde às dúvidas específicas da operação.
                </p>
                <button
                  type="button"
                  onClick={onOpenDemo}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-doora-navy px-4 py-2.5 text-[12.5px] font-semibold text-white transition hover:bg-doora-ink"
                >
                  Agendar demonstração
                  <Icon name="arrowRight" className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] px-3 py-2 text-[11.5px] font-semibold text-doora-ink transition hover:bg-white hover:text-doora-blue"
                >
                  Política de privacidade
                </button>
              </div>
            </div>

            <div className="border-t border-slate-200">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openIndex === index;
                const triggerId = `faq-trigger-${index}`;
                const panelId = `faq-panel-${index}`;

                return (
                  <div key={item.question} className="border-b border-slate-200">
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="group flex w-full items-start justify-between gap-5 py-5 text-left"
                      >
                        <span className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-0.5 font-display text-[10.5px] font-semibold tracking-[0.1em] text-doora-blue"
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[14.5px] font-semibold leading-snug text-doora-navy transition group-hover:text-doora-blue sm:text-[15px]">
                            {item.question}
                          </span>
                        </span>
                        <span
                          className={`mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${
                            isOpen
                              ? "bg-doora-navy text-white"
                              : "border border-slate-200 bg-doora-mist text-doora-ink group-hover:border-slate-300"
                          }`}
                        >
                          <Icon
                            name="chevronDown"
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      hidden={!isOpen}
                      className={`pb-6 pl-7 pr-8 sm:pr-12 ${
                        isOpen ? "animate-fade" : ""
                      }`}
                    >
                      <p className="text-[13px] leading-relaxed text-slate-600">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

