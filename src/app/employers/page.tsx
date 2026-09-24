import { CtaBand, FeatureGrid, PageHero, Steps, type IFeature, type IStep } from "@/components/sections";
import { ButtonLink, Section, SectionHeading, Tag } from "@/components/ui";
import { sectors } from "@/lib/content";

const services: IFeature[] = [
  {
    title: "Permanent recruitment",
    body: "Considered search for key hires, from mid-level specialists to senior leadership.",
  },
  {
    title: "Interim & contract",
    body: "Experienced professionals ready to step in quickly for projects, cover or change.",
  },
  {
    title: "Executive search",
    body: "Discreet, research-led headhunting for board and C-suite appointments.",
  },
];

const process: IStep[] = [
  { title: "Discover", body: "We learn your business, team dynamics and what success looks like in the role." },
  { title: "Search", body: "Targeted outreach across our network and the wider market — not just job boards." },
  { title: "Shortlist", body: "A focused shortlist of interviewed candidates, each with a clear rationale." },
  { title: "Support", body: "Offer management, onboarding and check-ins long after day one." },
];

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="Hire with confidence, not compromise."
        intro="We help organisations find people who raise the bar — and stay. Precise shortlists, honest advice and a partner invested in the long term."
      >
        <ButtonLink href="/contact">Register a vacancy</ButtonLink>
        <ButtonLink href="/why-maiwa" variant="secondary">
          Why Maiwa
        </ButtonLink>
      </PageHero>

      <Section tone="pale">
        <SectionHeading eyebrow="Our services" title="Flexible support for every hire" />
        <FeatureGrid features={services} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How it works"
          title="A clear process, from brief to first day"
        />
        <Steps steps={process} />
      </Section>

      <Section tone="alt">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <SectionHeading
            eyebrow="Sectors"
            title="Specialists across the markets that matter"
            intro="Dedicated consultants for each discipline, with networks built over years."
          />
          <div className="flex flex-wrap gap-2.5">
            {sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-border bg-white px-5 py-2.5 text-[15px] font-medium text-heading"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 rounded-xl border border-border p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
          <div>
            <Tag>Case study</Tag>
            <h3 className="mt-5 text-[28px] font-medium leading-tight text-heading">
              Scaling a finance function from 4 to 18 in nine months.
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed">
              For a fast-growing logistics group, we built an entire finance team —
              from Financial Controller to analysts — with 100% retention after year one.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-1">
            <div>
              <p className="text-[40px] font-medium text-primary">14</p>
              <p className="text-sm text-text-muted">hires delivered</p>
            </div>
            <div>
              <p className="text-[40px] font-medium text-primary">100%</p>
              <p className="text-sm text-text-muted">12-month retention</p>
            </div>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Have a role to fill?"
        intro="Tell us about it — we'll come back within one working day."
        primary={{ href: "/contact", label: "Register a vacancy" }}
      />
    </>
  );
}
