import { useId } from "react";
import { Modal } from "./ui/Modal";
import { Icon } from "./ui/Icon";

type PrivacyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  const titleId = useId();

  return (
    <Modal
      open={open}
      onClose={onClose}
      labelledBy={titleId}
      panelClassName="max-w-2xl"
    >
      <div className="p-6 sm:p-9">
        <p className="eyebrow">Privacidade e LGPD</p>
        <h2
          id={titleId}
          className="mt-3 text-2xl font-bold leading-tight sm:text-3xl"
        >
          Cuidado também com os seus dados.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Este aviso resume como a DooraAI trata os dados enviados pelo site
          institucional. Ele não substitui a política de privacidade completa,
          disponível sob solicitação.
        </p>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-slate-600">
          <section>
            <h3 className="text-sm font-semibold text-doora-navy">
              Dados que recebemos
            </h3>
            <p className="mt-1.5">
              Ao solicitar uma demonstração, recebemos nome, nome da clínica,
              WhatsApp, área de atuação e número de profissionais. Esses dados
              são fornecidos por você, de forma voluntária.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-doora-navy">
              Como usamos
            </h3>
            <p className="mt-1.5">
              Utilizamos as informações para responder à solicitação, entender
              o contexto da sua operação e apresentar a plataforma de forma
              adequada. Não comercializamos dados pessoais.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-doora-navy">
              Seus direitos
            </h3>
            <p className="mt-1.5">
              Você pode solicitar confirmação de tratamento, correção,
              portabilidade ou exclusão dos seus dados, além de revogar o
              consentimento, pelos canais de atendimento da DooraAI.
            </p>
          </section>

          <section>
            <h3 className="text-sm font-semibold text-doora-navy">
              Segurança da plataforma
            </h3>
            <p className="mt-1.5">
              A plataforma é construída com isolamento de dados por workspace,
              controle de acesso por perfil, autenticação multifator e trilha de
              auditoria nas evoluções clínicas assinadas.
            </p>
          </section>
        </div>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-doora-mist p-4">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-doora-blue">
              <Icon name="shield" className="h-4 w-4" />
            </span>
            <p className="text-xs leading-relaxed text-slate-600">
              A IA da DooraAI atua como assistente configurada pela clínica e
              não realiza diagnóstico ou prescrição. A decisão clínica
              permanece com a equipe profissional.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            Dúvidas sobre privacidade: contato@dooraai.com.br
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-[10px] bg-doora-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-doora-ink"
          >
            Entendi
          </button>
        </div>
      </div>
    </Modal>
  );
}
