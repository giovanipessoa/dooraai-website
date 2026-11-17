import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

type TrustItem = {
  number: string;
  icon: IconName;
  title: string;
  description: string;
};

const TRUST_ITEMS: TrustItem[] = [
  {
    number: "01",
    icon: "lock",
    title: "Isolamento Estrito por Workspace",
    description:
      "Dados de pacientes, conversas, agendamentos e arquivos em nuvem totalmente segregados por clínica.",
  },
  {
    number: "02",
    icon: "key",
    title: "Controle de Acesso Granular (RBAC)",
    description:
      "Permissões configuráveis por módulo (WhatsApp, Agenda, Prontuários, Pagamentos, Ajustes) para cada perfil da equipe.",
  },
  {
    number: "03",
    icon: "shieldCheck",
    title: "Autenticação Multifator (MFA) e Auditoria",
    description:
      "Proteção em duas etapas no login (TOTP) e trilha de auditoria nas evoluções clínicas assinadas.",
  },
];

const TRUST_CHIPS = [
  "LGPD",
  "MFA TOTP",
  "RBAC por módulo",
  "Trilha de auditoria",
];

export function Security() {
  return (
    <section
      id="seguranca"
      aria-labelledby="seguranca-title"
      className="relative overflow-hidden bg-doora-navy py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -right-40 -top-32 h-[500px] w-[500px] rounded-full bg-doora-violet/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-doora-cyan/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div>
            <p className="eyebrow eyebrow-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-doora-cyan" />
              Governança
            </p>
            <h2
              id="seguranca-title"
              className="mt-4 text-[1.9rem] font-bold leading-[1.14] tracking-[-0.02em] text-white sm:text-[2.35rem]"
            >
              Governança, Privacidade e Segurança
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-300">
              A confiança do paciente começa na forma como a clínica trata os
              dados. A plataforma foi desenhada para separar acessos, registrar
              decisões e proteger informações sensíveis.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-doora-cyan">
                  <Icon name="shield" className="h-5 w-5" />
                </span>
                <p className="text-sm font-semibold text-white">
                  Segurança por design
                </p>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {TRUST_CHIPS.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-200"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[11.5px] leading-relaxed text-slate-300">
                A DooraAI é construída para apoiar a conformidade com a LGPD. A
                IA atua como assistente e a decisão clínica permanece com a
                equipe profissional.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {TRUST_ITEMS.map((item) => (
              <article
                key={item.number}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.06] sm:p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-doora-cyan">
                    <Icon name={item.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[15.5px] font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <span aria-hidden="true" className="font-display text-[10px] font-semibold tracking-[0.14em] text-slate-400">
                        {item.number}
                      </span>
                    </div>
                    <p className="mt-2 text-[12.5px] leading-relaxed text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <p className="flex items-start gap-2 pt-2 text-[11px] leading-relaxed text-slate-400">
              <Icon name="globe" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-doora-cyan" />
              Cada workspace mantém o próprio contexto clínico, a própria equipe
              e os próprios registros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
