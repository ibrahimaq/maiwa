import { CtaBand, PageHero, StatRow } from "@/components/sections";
import { Eyebrow, Section, SectionHeading } from "@/components/ui";
import { headlineStats } from "@/lib/content";

const values = [
  { title: "Care", body: "Every placement changes someone's working life. We treat it that way." },
  { title: "Candour", body: "Straight answers, even when they're not the easy ones." },
  { title: "Craft", body: "Considered search, not CV volume. Quality over quantity, always." },
  { title: "Continuity", body: "We measure success by who's still thriving a year later." },
];

const team = [
  { name: "Amara Wilson", role: "Founder & Managing Director", initials: "AW" },
  { name: "Tom Hallam", role: "Director, Finance & Operations", initials: "TH" },
  { name: "Lina Kovacs", role: "Head of Technology Search", initials: "LK" },
  { name: "Daniel Price", role: "Senior Consultant, People & Legal", initials: "DP" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A recruitment partner that listens first."
        intro="Maiwa was founded on a simple belief: great hiring starts with understanding people — their ambitions, their teams and the culture they work in."
      />

      <Section tone="pale">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <Eyebrow>Our story</Eyebrow>
            <h2 className="text-[32px] font-medium leading-tight tracking-tight text-heading md:text-[40px]">
              Built by recruiters who wanted to do it differently.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              After years in high-volume agencies, our founders saw the same pattern:
              too many CVs, too little conversation. Maiwa was created to bring the
              focus back to people.
            </p>
            <p>
              Today we partner with organisations across the UK — from founder-led
              start-ups to established groups — delivering specialist, relationship-led
              recruitment across finance, technology, operations and beyond.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What guides every conversation" />
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ title, body }) => (
            <div key={title}>
              <div className="mb-6 h-px w-12 bg-primary" />
              <h3 className="text-[22px] font-semibold text-heading">{title}</h3>
              <p className="mt-3 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <StatRow stats={headlineStats} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our team"
          title="The people behind Maiwa"
          intro="Experienced specialists who know their markets inside out."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map(({ name, role, initials }) => (
            <div key={name} className="group">
              <div className="flex aspect-[4/5] items-end rounded-lg bg-primary-pale p-6 transition-colors duration-[180ms] group-hover:bg-primary-light">
                <span className="text-6xl font-medium tracking-tight text-primary/60">
                  {initials}
                </span>
              </div>
              <p className="mt-4 font-semibold text-heading">{name}</p>
              <p className="text-sm text-text-muted">{role}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Want to work with us?"
        intro="We're always keen to meet people who care about doing recruitment well."
        primary={{ href: "/contact", label: "Get in touch" }}
      />
    </>
  );
}
