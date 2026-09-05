import Image from "next/image";

export function Brand({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand${large ? " brand-large" : ""}`}>
      <span className="brand-mark">
        <Image src="/brand/logo.svg" width={48} height={37} alt="" />
      </span>
      <span>
        codeylon<span className="brand-dot">.</span>
      </span>
    </span>
  );
}
