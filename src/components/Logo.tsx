import type { ImgHTMLAttributes } from "react";

type LogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  alt?: string;
};

export function Logo({
  className = "h-9 w-auto sm:h-10",
  alt = "DooraAI, atendimento inteligente para clínicas",
  ...rest
}: LogoProps) {
  return (
    <img
      src="/logotype.png"
      alt={alt}
      width={1967}
      height={477}
      className={className}
      decoding="async"
      {...rest}
    />
  );
}
