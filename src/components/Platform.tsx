import { Icon } from "./ui/Icon";
import type { IconName } from "./ui/Icon";

type ModuleCard = {
  number: string;
  icon: IconName;
  title: string;
  description: string;
};

const MODULES: ModuleCard[] = [
  {
    number: "03",
    icon: "kanban",
    title: "Funil Comercial Visual (Kanban)",
    description:
      "Acompanhe cada lead desde o primeiro contato até a consulta realizada, vinculando contatos e oportunidades sem perder nenhuma conversa.",
  },
  {
    number: "04",
    icon: "clipboard",
    title: "Pagamentos e Formulários Pré-Consulta",
    description:
      "Envio de anamnese digital antes da consulta e links de checkout InfinitePay integrados ao agendamento.",
  },
  {
    number: "05",
    icon: "chart",
    title: "Dashboard Executivo da Clínica",
    description:
      "Visão geral em tempo real com receita confirmada, taxa de comparecimento, conversão do funil e eficiência do atendimento.",
  },
];

function FacialMapVisual() {
  return (
    <div className="mx-auto w-full max-w-md rounded-xl border border-slate-200 bg-doora-mist p-2.5 md:max-w-none">
      <svg
        viewBox="0 0 280 200"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustração de mapeamento facial 3D com pinos, dosagens e vetores"
      >
        <defs>
          <pattern
            id="doora-face-grid"
            width="16"
            height="16"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M16 0H0V16"
              fill="none"
              stroke="#DFE6F2"
              strokeWidth="0.6"
            />
          </pattern>
          <linearGradient
            id="doora-face-gradient"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor="#A33CFA" />
            <stop offset="55%" stopColor="#2866F5" />
            <stop offset="100%" stopColor="#12D5F0" />
          </linearGradient>
        </defs>

        <rect
          width="280"
          height="200"
          rx="12"
          fill="url(#doora-face-grid)"
          opacity="0.7"
        />

        <path
          d="M140 24c-29 0-49 21-49 53 0 17 5 31 14 43 7 9 16 17 27 21h16c11-4 20-12 27-21 9-12 14-26 14-43 0-32-20-53-49-53Z"
          fill="#FFFFFF"
          stroke="#CBD5E1"
          strokeWidth="1.2"
        />
        <path
          d="M140 32v104"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1"
          strokeDasharray="3 4"
        />
        <path
          d="M110 81c5-4 12-4 17 0"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M153 81c5-4 12-4 17 0"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M140 84v19l-6 6"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M126 122c8 4 20 4 28 0"
          fill="none"
          stroke="#94A3B8"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M104 92c0 24 12 42 36 52 24-10 36-28 36-52"
          fill="none"
          stroke="#E2E8F0"
          strokeWidth="1"
        />

        <g strokeWidth="1.1" strokeLinecap="round">
          <circle cx="112" cy="101" r="2.8" fill="#2866F5" stroke="#2866F5" />
          <path d="M112 101 95 84" stroke="#2866F5" />
          <circle cx="168" cy="101" r="2.8" fill="#A33CFA" stroke="#A33CFA" />
          <path d="M168 101 185 84" stroke="#A33CFA" />
          <circle cx="130" cy="136" r="2.8" fill="#12D5F0" stroke="#12D5F0" />
          <path d="M130 136 118 153" stroke="#12D5F0" />
        </g>

        <g
          fontFamily="Inter, Arial, sans-serif"
          fontSize="7"
          fill="#202944"
          fontWeight="600"
        >
          <text x="63" y="79">
            Vetor: 0.3 ml
          </text>
          <text x="190" y="79">
            Vetor: 0.5 ml
          </text>
          <text x="86" y="168">
            Pino: 0.2 ml
          </text>
        </g>

        <g
          fontFamily="Inter, Arial, sans-serif"
          fontSize="6.5"
          fill="#475569"
          fontWeight="600"
          letterSpacing="0.8"
        >
          <text x="16" y="22">
            MAPA FACIAL 3D
          </text>
          <text x="16" y="186">
            SNAPSHOT AUDITÁVEL
          </text>
          <text x="205" y="186">
            ARQUIVO .GLB
          </text>
        </g>

        <path
          d="M16 28h20"
          stroke="url(#doora-face-gradient)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Platform() {
  return (
    <section
      id="plataforma"
      aria-labelledby="plataforma-title"
      className="relative bg-doora-mist py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">
              <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
              Plataforma
            </p>
            <h2
              id="plataforma-title"
              className="mt-4 text-[1.9rem] font-bold leading-[1.15] tracking-[-0.02em] sm:text-[2.35rem]"
            >
              Ecossistema Completo para Clínicas de Estética e Saúde
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Cada módulo foi desenhado a partir da rotina de uma clínica.
              Juntos, eles formam uma jornada contínua entre o primeiro
              contato e o pós-atendimento.
            </p>
          </div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[11px] font-semibold text-doora-ink">
            <Icon name="layers" className="h-4 w-4 text-doora-blue" />
            6 módulos, 1 ecossistema
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-doora-mist text-doora-blue">
                <Icon name="calendar" className="h-5 w-5" />
              </span>
              <span aria-hidden="true" className="font-display text-[11px] font-semibold tracking-[0.16em] text-slate-500">
                01
              </span>
            </div>
            <h3 className="mt-5 text-[17px] font-bold leading-snug">
              Agenda Inteligente e Link Público
            </h3>
            <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
              Página personalizada da clínica com capa, serviços, QR Code e
              agendamento online 24/7 integrado ao cadastro de pacientes.
            </p>

            <div className="mt-auto pt-5">
              <div className="flex items-center gap-2.5 rounded-xl border border-dashed border-slate-300 bg-doora-mist px-3 py-2.5">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-doora-blue">
                  <Icon name="globe" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-[8.5px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Página pública
                  </p>
                  <p className="truncate text-[10.5px] font-semibold text-doora-navy">
                    /agenda/suaclinica
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-white px-2 py-1 text-[8.5px] font-semibold text-emerald-700">
                  24/7
                </span>
              </div>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 md:col-span-2">
            <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-doora-mist text-doora-blue">
                    <Icon name="scanFace" className="h-5 w-5" />
                  </span>
                  <span aria-hidden="true" className="font-display text-[11px] font-semibold tracking-[0.16em] text-slate-500">
                    02
                  </span>
                </div>
                <h3 className="mt-5 text-[17px] font-bold leading-snug">
                  Prontuário Eletrônico (PEP) com Mapeamento Facial 3D e Foto 2D
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
                  Recurso clínico avançado para estética e harmonização: insira
                  pinos com dosagens e observações, desenhe vetores sobre
                  modelos 3D (feminino, masculino ou arquivo .glb próprio) ou
                  fotos do paciente no computador ou tablet, gerando snapshots
                  auditáveis.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "Pinos e dosagens",
                    "Vetores 3D",
                    "Foto 2D no tablet",
                    "Snapshots auditáveis",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-doora-mist px-2.5 py-1 text-[9.5px] font-semibold text-doora-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-start gap-2 text-[10.5px] leading-relaxed text-slate-500">
                  <Icon
                    name="shieldCheck"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-doora-blue"
                  />
                  Recurso de registro e apoio visual. Não realiza diagnóstico ou
                  prescrição.
                </p>
              </div>

              <FacialMapVisual />
            </div>
          </article>

          {MODULES.map((module) => (
            <article
              key={module.number}
              className={`flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 ${
                module.number === "05" ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-doora-mist text-doora-blue">
                  <Icon name={module.icon} className="h-5 w-5" />
                </span>
                <span aria-hidden="true" className="font-display text-[11px] font-semibold tracking-[0.16em] text-slate-500">
                  {module.number}
                </span>
              </div>
              <h3 className="mt-5 text-[17px] font-bold leading-snug">
                {module.title}
              </h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-slate-600">
                {module.description}
              </p>

              <div className="mt-auto pt-5">
                {module.number === "03" ? <KanbanVisual /> : null}
                {module.number === "04" ? <PaymentVisual /> : null}
                {module.number === "05" ? <DashboardVisual /> : null}
              </div>
            </article>
          ))}

          <article className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-7 md:col-span-2 lg:col-span-3">
            <div className="grid gap-7 lg:grid-cols-[1fr_0.95fr] lg:items-center">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-doora-mist text-doora-blue">
                    <Icon name="building" className="h-5 w-5" />
                  </span>
                  <span aria-hidden="true" className="font-display text-[11px] font-semibold tracking-[0.16em] text-slate-500">
                    06
                  </span>
                </div>
                <h3 className="mt-5 text-[17px] font-bold leading-snug">
                  Backoffice Multi-Tenant
                </h3>
                <p className="mt-2.5 max-w-lg text-[13.5px] leading-relaxed text-slate-600">
                  Gestão centralizada para redes ou operações com múltiplos
                  workspaces e visão analítica consolidada, sem misturar dados
                  entre clínicas.
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "Multi-workspace",
                    "Visão consolidada",
                    "Governança central",
                  ].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-200 bg-doora-mist px-2.5 py-1 text-[9.5px] font-semibold text-doora-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-2 sm:grid-cols-3">
                {["Estética", "Dermatologia", "Odontologia"].map((name) => (
                  <div
                    key={name}
                    className="rounded-xl border border-slate-200 bg-doora-mist p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white text-doora-blue">
                        <Icon name="building" className="h-3.5 w-3.5" />
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <p className="mt-2.5 text-[10px] font-semibold text-doora-navy">
                      {name}
                    </p>
                    <p className="text-[8px] text-slate-500">Workspace</p>
                    <div className="mt-2 h-1 w-full rounded-full bg-white">
                      <div className="h-1 w-2/3 rounded-full bg-doora-blue/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>

        <p className="mt-6 flex items-start gap-2 text-[12px] leading-relaxed text-slate-600">
          <Icon
            name="lock"
            className="mt-0.5 h-4 w-4 shrink-0 text-doora-blue"
          />
          Todos os módulos compartilham a mesma camada de permissões e
          isolamento por workspace.
        </p>
      </div>
    </section>
  );
}


function KanbanVisual() {
  const columns = [
    { label: "Novo lead", tone: "bg-doora-violet" },
    { label: "Avaliação", tone: "bg-doora-blue" },
    { label: "Consulta", tone: "bg-doora-cyan" },
  ];

  return (
    <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
      {columns.map((column, columnIndex) => (
        <div
          key={column.label}
          className="rounded-lg border border-slate-200 bg-doora-mist p-2"
        >
          <p className="text-[8px] font-semibold text-slate-600">
            {column.label}
          </p>
          <div className="mt-1.5 space-y-1">
            {Array.from({ length: 2 }).map((_, cardIndex) => (
              <div
                key={cardIndex}
                className="rounded border border-slate-200 bg-white p-1"
              >
                <span
                  className={`block h-1 rounded-full ${column.tone} ${
                    columnIndex === 2 && cardIndex === 1
                      ? "opacity-40"
                      : "opacity-70"
                  }`}
                  style={{ width: cardIndex === 0 ? "70%" : "50%" }}
                />
                <span className="mt-1 block h-1 w-full rounded-full bg-slate-200" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function PaymentVisual() {
  return (
    <div
      className="rounded-xl border border-slate-200 bg-doora-mist p-3"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-doora-ink">
          <Icon name="clipboard" className="h-3 w-3 text-doora-blue" />
          Anamnese digital
        </span>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8px] font-semibold text-emerald-700">
          Enviada
        </span>
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2">
        <span className="inline-flex items-center gap-1.5 text-[9px] font-semibold text-doora-navy">
          <Icon name="card" className="h-3.5 w-3.5 text-doora-blue" />
          InfinitePay
        </span>
        <span className="text-[8px] font-medium text-slate-500">
          Checkout integrado
        </span>
      </div>
    </div>
  );
}

function DashboardVisual() {
  const bars = [38, 54, 44, 68, 60, 82, 72];

  return (
    <div
      className="rounded-xl border border-slate-200 bg-doora-mist p-3"
      aria-hidden="true"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-[8px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          Receita confirmada
        </span>
        <span className="inline-flex items-center gap-1 text-[8px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Em dia
        </span>
      </div>
      <div className="mt-2 flex h-10 items-end gap-1">
        {bars.map((height, index) => (
          <span
            key={index}
            className={`flex-1 rounded-t ${
              index === 5 ? "bg-doora-blue" : "bg-doora-blue/25"
            }`}
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex items-center justify-between gap-2 text-[7.5px] font-medium text-slate-500">
        <span>Comparecimento</span>
        <span>Conversão</span>
        <span>Atendimento</span>
      </div>
    </div>
  );
}

