import { ProductPreview } from "./ProductPreview";
import { Icon } from "./ui/Icon";
import { scrollToSection } from "../lib/navigation";

type HeroProps = {
  onOpenDemo: () => void;
};

const HERO_PROOFS = [
  "WhatsApp integrado",
  "Agenda 24/7",
  "Dados isolados por clínica",
];

export function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-white pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -right-40 -top-32 h-[560px] w-[560px] rounded-full bg-doora-violet/[0.07] blur-3xl" />
        <div className="absolute -left-48 top-40 h-[440px] w-[440px] rounded-full bg-doora-cyan/[0.06] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_1fr] lg:gap-10 xl:gap-14">
          <div className="max-w-[600px]">
            <p className="eyebrow animate-fade">
              <span className="bg-doora-gradient h-1.5 w-1.5 rounded-full" />
              Plataforma de Inteligência Conversacional para Clínicas
            </p>

            <h1
              id="hero-title"
              className="animate-rise mt-5 text-[2.45rem] font-bold leading-[1.06] tracking-[-0.035em] text-doora-navy sm:text-[3.4rem] lg:text-[3.75rem]"
            >
              Atendimento que acolhe. Inteligência que acompanha.
            </h1>

            <p className="animate-rise animation-delay-1 mt-6 max-w-[560px] text-[15px] leading-relaxed text-doora-ink sm:text-[17px]">
              Seu atendimento, mais próximo. Sua operação, mais inteligente.
              Conecte WhatsApp, conhecimento clínico, agenda, formulários,
              pagamentos e prontuário 3D em uma jornada fluida do primeiro
              contato até o pós-atendimento.
            </p>

            <div className="animate-rise animation-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onOpenDemo}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-[10px] bg-doora-navy px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_-20px_rgba(8,11,50,0.8)] transition hover:bg-doora-ink"
              >
                <span
                  className="bg-doora-gradient absolute inset-x-4 bottom-0 h-[2px] opacity-80"
                  aria-hidden="true"
                />
                Agendar uma demonstração
                <Icon
                  name="arrowRight"
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                />
              </button>
              <button
                type="button"
                onClick={() => scrollToSection("como-funciona")}
                className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-doora-navy transition hover:border-slate-400 hover:bg-doora-mist"
              >
                Conhecer a DooraAI
                <Icon
                  name="chevronDown"
                  className="h-4 w-4 text-slate-500"
                />
              </button>
            </div>

            <ul className="animate-rise animation-delay-3 mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5">
              {HERO_PROOFS.map((proof) => (
                <li
                  key={proof}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-600"
                >
                  <Icon
                    name="check"
                    className="h-3.5 w-3.5 text-doora-blue"
                    strokeWidth={2.4}
                  />
                  {proof}
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-[470px] border-l-2 border-slate-200 pl-3 text-[11px] leading-relaxed text-slate-500">
              IA assistiva, configurada pela clínica. Sem diagnóstico ou
              prescrição. A decisão clínica permanece com a sua equipe.
            </p>
          </div>

          <div className="animate-fade animation-delay-1 lg:pl-2">
            <ProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
