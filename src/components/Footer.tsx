import { Logo } from "./Logo";
import { Icon } from "./ui/Icon";
import { APP_URL } from "../lib/navigation";

const FOOTER_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

type FooterProps = {
  onOpenDemo: () => void;
  onOpenPrivacy: () => void;
};

export function Footer({ onOpenDemo, onOpenPrivacy }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-doora-navy pb-8 pt-16 text-slate-300">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-doora-cyan/[0.06] blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="shell relative">
        <div className="grid gap-10 pb-12 lg:grid-cols-[1.3fr_0.6fr_0.85fr] lg:gap-12">
          <div>
            <a
              href="#inicio"
              aria-label="DooraAI, ir para o início"
              className="inline-flex items-center rounded-2xl bg-white px-4 py-3 focus-visible:outline-doora-cyan"
            >
              <Logo className="h-8 w-auto" alt="DooraAI" />
            </a>
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed text-slate-300">
              Atendimento inteligente para clínicas que tratam cada conversa
              como parte do cuidado.
            </p>
            <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-doora-cyan">
              Atendimento Inteligente para Clínicas
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white">
              Navegação
            </h2>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded text-[12.5px] text-slate-300 transition hover:text-white focus-visible:outline-doora-cyan"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-display text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white">
              Comece agora
            </h2>
            <p className="mt-4 max-w-xs text-[12px] leading-relaxed text-slate-300">
              Veja a plataforma funcionando com a realidade da sua clínica.
            </p>
            <button
              type="button"
              onClick={onOpenDemo}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-[10px] bg-white px-4 py-3 text-[12.5px] font-semibold text-doora-navy transition hover:bg-doora-mist focus-visible:outline-doora-cyan sm:w-auto"
            >
              Agendar demonstração
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </button>
            <div className="mt-2.5 flex flex-col gap-2">
              <a
                href={APP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-[10px] border border-white/15 px-4 py-2.5 text-[12px] font-semibold text-white transition hover:bg-white/5 focus-visible:outline-doora-cyan sm:w-auto"
              >
                Entrar na plataforma
                <Icon name="arrowUpRight" className="h-3 w-3" />
              </a>
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="inline-flex w-fit items-center gap-1.5 rounded px-1 py-1 text-[11px] font-medium text-slate-400 transition hover:text-white focus-visible:outline-doora-cyan"
              >
                <Icon name="shieldCheck" className="h-3.5 w-3.5" />
                Privacidade e LGPD
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-slate-400">
            © {year} DooraAI. Todos os direitos reservados.
          </p>
          <button
            type="button"
            onClick={onOpenPrivacy}
            className="w-fit rounded text-[11px] text-slate-400 underline decoration-slate-600 underline-offset-4 transition hover:text-white focus-visible:outline-doora-cyan"
          >
            Política de privacidade
          </button>
        </div>

        <p className="mt-5 max-w-3xl text-[10.5px] leading-relaxed text-slate-400">
          DooraAI é uma plataforma de apoio ao atendimento. A inteligência
          artificial atua como assistente e não realiza diagnóstico ou
          prescrição. A decisão clínica permanece com a equipe profissional.
        </p>
      </div>
    </footer>
  );
}
