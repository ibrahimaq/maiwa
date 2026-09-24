import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "dark" | "light";

const buttonStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
  secondary:
    "border border-primary text-heading hover:bg-primary-pale active:bg-primary-light",
  dark: "bg-heading text-white hover:bg-heading-hover",
  light: "bg-white text-heading hover:bg-primary-pale",
};

interface IButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  className = "",
}: IButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-12 items-center justify-center rounded-md px-6 text-[15px] font-semibold transition-colors duration-[180ms] ${buttonStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 text-[15px] font-semibold text-primary-hover underline-offset-4 transition-colors duration-[180ms] hover:text-primary-active hover:underline"
    >
      {children}
      <span className="transition-transform duration-[180ms] group-hover:translate-x-0.5">
        →
      </span>
    </Link>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-6xl px-6 lg:px-8 ${className}`}>{children}</div>;
}

type SectionTone = "white" | "pale" | "alt" | "dark";

const sectionTones: Record<SectionTone, string> = {
  white: "bg-white",
  pale: "bg-primary-pale",
  alt: "bg-background-alt",
  dark: "bg-heading text-white/70",
};

export function Section({
  tone = "white",
  children,
  className = "",
}: {
  tone?: SectionTone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`${sectionTones[tone]} py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-primary" : "text-primary-hover"
      }`}
    >
      {children}
    </p>
  );
}

interface ISectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, intro, align = "left" }: ISectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`mb-12 max-w-2xl md:mb-16 ${alignment}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-[32px] font-medium leading-tight tracking-tight text-heading md:text-[40px]">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed">{intro}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-sm bg-primary-light px-2.5 py-[5px] text-[13px] font-medium text-primary-active">
      {children}
    </span>
  );
}

export const inputClass =
  "h-12 w-full rounded-md border border-border bg-white px-3.5 text-[15px] text-heading placeholder:text-placeholder outline-none transition-colors duration-[180ms] hover:border-border-hover focus:border-primary focus:ring-4 focus:ring-primary/15";

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-heading">{label}</span>
      {children}
    </label>
  );
}
