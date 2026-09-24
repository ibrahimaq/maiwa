import { CtaBand, JobCard, PageHero, Steps, type IStep } from "@/components/sections";
import { ButtonLink, inputClass, Section, SectionHeading } from "@/components/ui";
import { latestJobs, sectors } from "@/lib/content";

const journey: IStep[] = [
  { title: "Share your CV", body: "Upload your CV or simply tell us what you're looking for." },
  { title: "Meet your consultant", body: "An honest conversation about your goals, strengths and priorities." },
  { title: "Explore opportunities", body: "Curated roles — many of which are never advertised publicly." },
  { title: "Land the role", body: "Interview prep, offer negotiation and support through your first months." },
];

const tips = [
  { title: "Writing a CV that gets read", time: "4 min read" },
  { title: "Preparing for competency interviews", time: "6 min read" },
  { title: "How to negotiate your offer", time: "5 min read" },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For candidates"
        title="Find work that fits your life."
        intro="Browse our latest vacancies or register with us for access to opportunities before they reach the market."
      >
        <ButtonLink href="/contact" variant="dark">
          Submit CV
        </ButtonLink>
        <ButtonLink href="#vacancies" variant="secondary">
          Browse jobs
        </ButtonLink>
      </PageHero>

      <section className="bg-primary-pale py-12">
        <div className="mx-auto grid w-full max-w-6xl gap-3 px-6 md:grid-cols-[1.4fr_1fr_1fr_auto] lg:px-8">
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
          <ButtonLink href="#vacancies">Search</ButtonLink>
        </div>
      </section>


      <Section>
        <div id="vacancies" className="scroll-mt-28">
          <SectionHeading
            eyebrow="Current vacancies"
            title={`${latestJobs.length} roles available`}
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latestJobs.map((job) => (
              <JobCard key={job.title} job={job} />
            ))}
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Your journey" title="How we support your search" />
        <Steps steps={journey} />
      </Section>

      <Section tone="pale">
        <SectionHeading eyebrow="Career advice" title="Resources for your next move" />
        <div className="grid gap-5 md:grid-cols-3">
          {tips.map(({ title, time }) => (
            <article
              key={title}
              className="group rounded-lg border border-border bg-white transition-all duration-[180ms] hover:-translate-y-0.5 hover:border-primary"
            >
              <div className="aspect-[16/9] rounded-t-lg bg-gradient-to-br from-primary-light to-primary/40" />
              <div className="p-6">
                <p className="text-sm text-text-muted">{time}</p>
                <h3 className="mt-2 text-lg font-semibold text-heading">{title}</h3>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Can't see the right role?"
        intro="Register your CV and we'll be in touch when something fits."
        primary={{ href: "/contact", label: "Submit CV" }}
      />
    </>
  );
}
