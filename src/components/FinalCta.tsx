import { Icon } from "./ui/Icon";

type FinalCtaProps = {
  onOpenDemo: () => void;
};

const TRUST_POINTS = [
  "Demonstração guiada",
  "Sem compromisso",
  "Dados protegidos",
];

export function FinalCta({ onOpenDemo }: FinalCtaProps) {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="bg-doora-mist py-20 sm:py-24 lg:py-28"
    >
      <div className="shell">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-6 py-14 text-center shadow-soft sm:px-12 sm:py-16 lg:py-20">
          <div className="bg-doora-gradient absolute inset-x-0 top-0 h-1" />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
          >
            <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-doora-violet/[0.07] blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-doora-cyan/[0.09] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <p className="eyebrow justify-center">
              <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
              Próximo passo
            </p>
            <h2
              id="contato-title"
              className="mt-4 text-[2rem] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[2.6rem]"
            >
              Inteligência que aproxima.
              <br />
              Tecnologia que acolhe.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[14.5px] leading-relaxed text-slate-600">
              Veja a DooraAI em ação com o contexto da sua clínica: atendimento
              no WhatsApp, agenda, prontuário com mapeamento facial e dashboard
              no mesmo fluxo.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-doora-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-18px_rgba(8,11,50,0.8)] transition hover:bg-doora-ink sm:w-auto"
              >
                Agendar uma demonstração
                <Icon name="arrowRight" className="h-4 w-4" />
              </button>
              <a
                href="#plataforma"
                className="inline-flex w-full items-center justify-center gap-2 rounded-[10px] border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-doora-navy transition hover:border-slate-300 hover:bg-doora-mist sm:w-auto"
              >
                Conhecer a plataforma
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {TRUST_POINTS.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500"
                >
                  <Icon name="check" className="h-3 w-3 text-doora-blue" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="bg-doora-gradient mx-auto mt-10 h-px w-24 opacity-70" />
            <p className="mt-5 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-doora-ink">
              Atendimento Inteligente para Clínicas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
