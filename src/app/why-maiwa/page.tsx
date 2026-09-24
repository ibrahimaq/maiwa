import { CtaBand, FeatureGrid, PageHero, type IFeature } from "@/components/sections";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";

const reasons: IFeature[] = [
  {
    title: "Specialist, not generalist",
    body: "Each consultant focuses on a single market, so they know the people, the pay and the pressures.",
  },
  {
    title: "Shortlists, not stacks",
    body: "We send fewer CVs — each one interviewed, referenced and genuinely right for the role.",
  },
  {
    title: "Culture-first matching",
    body: "We spend time inside your business to understand how work actually gets done.",
  },
  {
    title: "Honest by default",
    body: "Clear feedback for clients and candidates alike. No ghosting, no guesswork.",
  },
  {
    title: "Transparent fees",
    body: "Simple, fair pricing agreed upfront, with a rebate period that reflects our confidence.",
  },
  {
    title: "Long-term aftercare",
    body: "We check in at 1, 3 and 6 months to make sure every placement is working for everyone.",
  },
];

const comparison = [
  { topic: "Candidates per shortlist", typical: "10–15 unfiltered CVs", maiwa: "3–5 interviewed candidates" },
  { topic: "Market knowledge", typical: "Broad and shallow", maiwa: "Deep, sector-focused" },
  { topic: "Communication", typical: "Sporadic updates", maiwa: "Weekly, proactive" },
  { topic: "After placement", typical: "Invoice and move on", maiwa: "Six months of aftercare" },
];

export default function WhyMaiwaPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Maiwa Recruitment"
        title="Recruitment that feels considered."
        intro="We're deliberately small, deeply specialist and relentlessly focused on fit. Here's what that means for you."
      >
        <ButtonLink href="/contact">Talk to a consultant</ButtonLink>
      </PageHero>

      <Section tone="pale">
        <SectionHeading eyebrow="What sets us apart" title="Six reasons people choose Maiwa" />
        <FeatureGrid features={reasons} />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The difference"
          title="A calmer, more precise approach"
          intro="How working with Maiwa compares with a typical high-volume agency."
        />
        <div className="overflow-hidden rounded-lg border border-border">
          <div className="grid grid-cols-3 bg-heading px-6 py-4 text-sm font-semibold text-white">
            <span />
            <span>Typical agency</span>
            <span className="text-primary">Maiwa</span>
          </div>
          {comparison.map(({ topic, typical, maiwa }) => (
            <div
              key={topic}
              className="grid grid-cols-3 gap-4 border-t border-border px-6 py-5 text-[15px] odd:bg-background-alt"
            >
              <span className="font-semibold text-heading">{topic}</span>
              <span className="text-text-muted">{typical}</span>
              <span className="font-medium text-primary-active">{maiwa}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="text-[26px] font-medium leading-snug tracking-tight text-heading md:text-[32px]">
            “Maiwa don&apos;t just fill roles — they understand what makes a team
            work, and they protect it.”
          </blockquote>
          <figcaption className="mt-8 text-sm text-text-muted">
            <span className="font-semibold text-heading">Helen Marsh</span> · People
            Director, Arden Group
          </figcaption>
        </figure>
      </Section>

      <CtaBand
        title="See the difference for yourself."
        intro="Book a no-obligation call with one of our specialists."
        primary={{ href: "/contact", label: "Book a call" }}
        secondary={{ href: "/employers", label: "For employers" }}
      />
    </>
  );
}
