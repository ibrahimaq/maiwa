import { CtaBand, JobCard, StatRow, Swash } from "@/components/sections";
import {
  ArrowLink,
  ButtonLink,
  Container,
  Eyebrow,
  inputClass,
  Section,
  SectionHeading,
  Tag,
} from "@/components/ui";
import { headlineStats, latestJobs, sectors } from "@/lib/content";

const testimonials = [
  {
    quote:
      "Maiwa took the time to understand our culture before sending a single CV. Every candidate felt considered.",
    name: "Sarah Whitfield",
    role: "COO, Northbank Logistics",
  },
  {
    quote:
      "Honest, calm and genuinely helpful. I've never felt so looked after during a job move.",
    name: "James Okafor",
    role: "Placed as Head of Finance",
  },
  {
    quote:
      "Three senior hires in a quarter, each one still with us two years on. That says everything.",
    name: "Priya Raman",
    role: "Founder, Leaf Health",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <Swash className="absolute -right-10 top-10 hidden w-[720px] text-primary/40 lg:block" />
        <Container className="relative grid items-center gap-16 py-24 md:py-32 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Eyebrow>Specialist recruitment consultancy</Eyebrow>
            <h1 className="text-[40px] font-medium leading-[1.06] tracking-tight text-heading md:text-[56px]">
              The right people,
              <br />
              <span className="text-primary">thoughtfully</span> placed.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              We connect ambitious organisations with exceptional talent — through
              careful listening, honest advice and relationships that last well
              beyond the offer.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <ButtonLink href="/candidates">Find a job</ButtonLink>
              <ButtonLink href="/employers" variant="secondary">
                Hire talent
              </ButtonLink>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="ml-auto max-w-sm rotate-[-2deg] rounded-xl border border-border bg-white p-6 shadow-[0_20px_50px_-30px_rgba(23,35,43,0.35)]">
              <div className="flex gap-2">
                <Tag>Finance</Tag>
                <Tag>Permanent</Tag>
              </div>
              <p className="mt-5 text-xl font-semibold text-heading">Senior Finance Manager</p>
              <p className="mt-1 text-sm text-text-muted">London · Hybrid · £85k – £95k</p>
            </div>
            <div className="-mt-4 mr-16 max-w-xs rotate-[1.5deg] rounded-xl bg-heading p-6 text-white shadow-[0_20px_50px_-30px_rgba(23,35,43,0.6)]">
              <p className="text-sm leading-relaxed text-white/80">
                “Placed within three weeks — and it genuinely feels like the right fit.”
              </p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Candidate, 2026
              </p>
            </div>
            <div className="-mt-3 ml-auto mr-4 w-fit rounded-lg border border-border bg-primary-pale px-5 py-4">
              <p className="text-2xl font-medium text-heading">94%</p>
              <p className="text-xs text-text-muted">offer acceptance</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Job search */}
      <section className="bg-primary-pale py-16">
        <Container>
          <div className="rounded-xl border border-border bg-white p-6 md:p-8">
            <p className="mb-5 text-lg font-semibold text-heading">Search current vacancies</p>
            <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr_auto]">
              <input className={inputClass} placeholder="Job title or keyword" />
              <input className={inputClass} placeholder="Location" />
              <select className={`${inputClass} text-text-muted`} defaultValue="">
                <option value="" disabled>
                  Sector
                </option>
                {sectors.map((sector) => (
                  <option key={sector}>{sector}</option>
                ))}
              </select>
              <ButtonLink href="/candidates">Search</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest vacancies */}
      <Section>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Latest vacancies"
            title="Roles we're working on right now"
          />
          <div className="mb-12 md:mb-16">
            <ArrowLink href="/candidates">View all vacancies</ArrowLink>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {latestJobs.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>
      </Section>

      {/* Employers / Candidates */}
      <Section tone="alt">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="flex flex-col rounded-xl border border-border bg-white p-10 md:p-12">
            <Eyebrow>For employers</Eyebrow>
            <h2 className="text-[28px] font-medium leading-tight text-heading">
              Build teams that stay.
            </h2>
            <p className="mt-4 flex-1 leading-relaxed">
              From single critical hires to scaling whole functions, we deliver
              shortlists of people who fit your culture as well as the brief.
            </p>
            <div className="mt-8">
              <ArrowLink href="/employers">Hiring with Maiwa</ArrowLink>
            </div>
          </div>
          <div className="flex flex-col rounded-xl bg-primary p-10 text-white md:p-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              For candidates
            </p>
            <h2 className="text-[28px] font-medium leading-tight">Your next move, made simpler.</h2>
            <p className="mt-4 flex-1 leading-relaxed text-white/85">
              Honest advice, access to roles you won&apos;t find advertised and a
              consultant who stays with you from first call to first day.
            </p>
            <div className="mt-8">
              <ButtonLink href="/candidates" variant="dark">
                Submit your CV
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* Stats */}
      <Section className="!py-20">
        <StatRow stats={headlineStats} />
      </Section>

      {/* Testimonials */}
      <Section tone="pale">
        <SectionHeading eyebrow="Testimonials" title="Trusted by clients and candidates" align="center" />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }) => (
            <figure key={name} className="flex flex-col rounded-lg border border-border bg-white p-8">
              <span className="text-5xl leading-none text-primary">“</span>
              <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed text-heading">
                {quote}
              </blockquote>
              <figcaption className="mt-8 border-t border-border pt-5">
                <p className="font-semibold text-heading">{name}</p>
                <p className="text-sm text-text-muted">{role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Let's start a conversation."
        intro="Whether you're hiring or exploring what's next, we'd love to hear from you."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/candidates", label: "Submit CV" }}
      />
    </>
  );
}
