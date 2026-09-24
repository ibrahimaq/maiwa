import type { ReactNode } from "react";
import { ButtonLink, Container, Eyebrow, Tag } from "./ui";

/** Sweeping line motif borrowed from the "M" in the Maiwa logo. */
export function Swash({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 400"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden
    >
      <path
        d="M10 60 C 120 -10, 200 40, 280 170 S 440 390, 590 350"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M40 110 C 140 50, 220 90, 300 210 S 450 400, 590 380"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
}

interface IPageHeroProps {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  children?: ReactNode;
}

export function PageHero({ eyebrow, title, intro, children }: IPageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <Swash className="absolute -right-24 top-0 hidden w-[640px] text-primary/35 md:block" />
      <Container className="relative py-24 md:py-32">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="text-[40px] font-medium leading-[1.08] tracking-tight text-heading md:text-[56px]">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{intro}</p>
          {children && <div className="mt-10 flex flex-wrap gap-3">{children}</div>}
        </div>
      </Container>
    </section>
  );
}

interface ICtaBandProps {
  title: string;
  intro: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}

export function CtaBand({ title, intro, primary, secondary }: ICtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-heading">
      <Swash className="absolute -left-20 -top-10 w-[560px] text-primary/25" />
      <Container className="relative flex flex-col items-start justify-between gap-10 py-20 md:flex-row md:items-center md:py-24">
        <div className="max-w-xl">
          <h2 className="text-[32px] font-medium leading-tight tracking-tight text-white md:text-[40px]">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/65">{intro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={primary.href}>{primary.label}</ButtonLink>
          {secondary && (
            <ButtonLink href={secondary.href} variant="light">
              {secondary.label}
            </ButtonLink>
          )}
        </div>
      </Container>
    </section>
  );
}

export interface IFeature {
  title: string;
  body: string;
}

export function FeatureGrid({ features, columns = 3 }: { features: IFeature[]; columns?: 2 | 3 }) {
  const grid = columns === 2 ? "md:grid-cols-2" : "md:grid-cols-3";
  return (
    <div className={`grid gap-px overflow-hidden rounded-lg border border-border bg-border ${grid}`}>
      {features.map(({ title, body }, index) => (
        <div key={title} className="bg-white p-8 md:p-10">
          <span className="text-sm font-semibold text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-6 text-[22px] font-semibold leading-snug text-heading">{title}</h3>
          <p className="mt-3 leading-relaxed">{body}</p>
        </div>
      ))}
    </div>
  );
}

export interface IStep {
  title: string;
  body: string;
}

export function Steps({ steps }: { steps: IStep[] }) {
  return (
    <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
      {steps.map(({ title, body }, index) => (
        <li key={title} className="border-t border-heading/80 pt-6">
          <span className="text-sm font-medium text-text-muted">Step {index + 1}</span>
          <h3 className="mt-2 text-xl font-semibold text-heading">{title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed">{body}</p>
        </li>
      ))}
    </ol>
  );
}

export interface IJob {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  sector: string;
}

export function JobCard({ job }: { job: IJob }) {
  return (
    <article className="group flex flex-col rounded-lg border border-border bg-white p-6 transition-all duration-[180ms] hover:-translate-y-0.5 hover:border-primary">
      <div className="flex flex-wrap gap-2">
        <Tag>{job.sector}</Tag>
        <Tag>{job.type}</Tag>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-heading">{job.title}</h3>
      <p className="mt-1 text-[15px] text-text-muted">{job.company}</p>
      <div className="mt-8 flex items-end justify-between border-t border-border pt-5 text-sm">
        <div>
          <p className="font-semibold text-heading">{job.salary}</p>
          <p className="text-text-muted">{job.location}</p>
        </div>
        <span className="font-semibold text-primary-hover transition-transform duration-[180ms] group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </article>
  );
}

export interface IStat {
  value: string;
  label: string;
}

export function StatRow({ stats }: { stats: IStat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
      {stats.map(({ value, label }) => (
        <div key={label} className="border-l border-border pl-6">
          <dt className="text-[40px] font-medium tracking-tight text-heading">{value}</dt>
          <dd className="mt-1 text-sm text-text-muted">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
