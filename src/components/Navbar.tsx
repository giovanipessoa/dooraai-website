import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Icon } from "./ui/Icon";
import { APP_URL } from "../lib/navigation";

const NAV_LINKS = [
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Plataforma", href: "#plataforma" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
];

type NavbarProps = {
  onOpenDemo: () => void;
};

export function Navbar({ onOpenDemo }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="shell">
        <nav
          className="flex h-[72px] items-center justify-between gap-4"
          aria-label="Navegação principal"
        >
          <a
            href="#inicio"
            className="inline-flex shrink-0 items-center rounded-lg py-1 pr-2"
            aria-label="DooraAI, ir para o início"
            onClick={() => setMenuOpen(false)}
          >
            <Logo className="h-9 w-auto sm:h-10" loading="eager" />
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-2 text-sm font-medium text-doora-ink transition hover:text-doora-navy after:absolute after:bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-doora-gradient after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={APP_URL}
              className="hidden rounded-lg px-1 py-2 text-sm font-semibold text-doora-ink transition hover:text-doora-navy sm:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              Entrar
            </a>
            <button
              type="button"
              onClick={onOpenDemo}
              className="hidden items-center justify-center rounded-[10px] bg-doora-navy px-4 py-2.5 text-sm font-semibold text-white shadow-[0_8px_24px_-14px_rgba(8,11,50,0.7)] transition hover:bg-doora-ink sm:inline-flex"
            >
              Agendar demonstração
            </button>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-slate-200 text-doora-navy transition hover:border-slate-300 hover:bg-doora-mist lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              onClick={() => setMenuOpen((current) => !current)}
            >
              <Icon
                name={menuOpen ? "close" : "menu"}
                className="h-5 w-5"
                strokeWidth={1.8}
              />
            </button>
          </div>
        </nav>
      </div>

      <div
        id="menu-mobile"
        className={`lg:hidden ${
          menuOpen ? "block border-t border-slate-200/80 bg-white" : "hidden"
        }`}
      >
        <div className="shell py-4">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[10px] px-3 py-3 text-sm font-medium text-doora-ink transition hover:bg-doora-mist hover:text-doora-navy"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={APP_URL}
              className="rounded-[10px] px-3 py-3 text-sm font-semibold text-doora-ink transition hover:bg-doora-mist hover:text-doora-navy"
              target="_blank"
              rel="noreferrer"
            >
              Entrar
            </a>
          </div>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              onOpenDemo();
            }}
            className="mt-3 inline-flex w-full items-center justify-center rounded-[10px] bg-doora-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-doora-ink"
          >
            Agendar demonstração
          </button>
        </div>
      </div>
    </header>
  );
}
