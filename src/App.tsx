import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PainPoints } from "./components/PainPoints";
import { Differentials } from "./components/Differentials";
import { Platform } from "./components/Platform";
import { Security } from "./components/Security";
import { Steps } from "./components/Steps";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";
import { DemoModal } from "./components/DemoModal";
import { PrivacyModal } from "./components/PrivacyModal";

export default function App() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const openDemo = useCallback(() => {
    setPrivacyOpen(false);
    setDemoOpen(true);
  }, []);

  const closeDemo = useCallback(() => setDemoOpen(false), []);

  const openPrivacy = useCallback(() => {
    setDemoOpen(false);
    setPrivacyOpen(true);
  }, []);

  const closePrivacy = useCallback(() => setPrivacyOpen(false), []);

  return (
    <div className="min-h-screen bg-doora-white">
      <a
        href="#conteudo"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-[10px] bg-doora-navy px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-doora-cyan"
      >
        Pular para o conteúdo
      </a>

      <Navbar onOpenDemo={openDemo} />

      <main id="conteudo" tabIndex={-1} className="focus:outline-none">
        <Hero onOpenDemo={openDemo} />
        <PainPoints />
        <Differentials />
        <Platform />
        <Security />
        <Steps />
        <Faq onOpenDemo={openDemo} onOpenPrivacy={openPrivacy} />
        <FinalCta onOpenDemo={openDemo} />
      </main>

      <Footer onOpenDemo={openDemo} onOpenPrivacy={openPrivacy} />

      <DemoModal open={demoOpen} onClose={closeDemo} />
      <PrivacyModal open={privacyOpen} onClose={closePrivacy} />
    </div>
  );
}
