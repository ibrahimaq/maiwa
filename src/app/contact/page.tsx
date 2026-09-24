import { PageHero } from "@/components/sections";
import { Field, inputClass, Section } from "@/components/ui";

const details = [
  { label: "Email", value: "hello@maiwarecruitment.com" },
  { label: "Phone", value: "+44 (0)20 7946 0321" },
  { label: "Office", value: "20 Finsbury Circus\nLondon EC2M 7EA" },
  { label: "Hours", value: "Monday – Friday\n8:30am – 6:00pm" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let's talk."
        intro="Hiring, job hunting or just curious? Send us a message and one of our consultants will be in touch within one working day."
      />

      <Section tone="pale">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-8">
            {details.map(({ label, value }) => (
              <div key={label} className="border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-hover">
                  {label}
                </p>
                <p className="mt-2 whitespace-pre-line text-lg text-heading">{value}</p>
              </div>
            ))}
          </div>

          <form className="rounded-xl border border-border bg-white p-8 md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name">
                <input className={inputClass} placeholder="Jane" />
              </Field>
              <Field label="Last name">
                <input className={inputClass} placeholder="Smith" />
              </Field>
              <Field label="Email">
                <input type="email" className={inputClass} placeholder="jane@company.com" />
              </Field>
              <Field label="Phone">
                <input className={inputClass} placeholder="+44" />
              </Field>
            </div>

            <div className="mt-5">
              <Field label="I am…">
                <div className="grid grid-cols-2 gap-3">
                  {["Hiring talent", "Looking for a role"].map((option, index) => (
                    <label
                      key={option}
                      className="flex h-12 cursor-pointer items-center gap-3 rounded-md border border-border px-4 text-[15px] text-heading transition-colors duration-[180ms] hover:border-border-hover has-[:checked]:border-primary has-[:checked]:bg-primary-pale"
                    >
                      <input
                        type="radio"
                        name="enquiry"
                        defaultChecked={index === 0}
                        className="accent-primary"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </Field>
            </div>

            <div className="mt-5">
              <Field label="Message">
                <textarea
                  rows={5}
                  className={`${inputClass} h-auto resize-none py-3`}
                  placeholder="Tell us a little about what you need…"
                />
              </Field>
            </div>

            <button
              type="button"
              className="mt-8 h-12 w-full rounded-md bg-primary px-6 text-[15px] font-semibold text-white transition-colors duration-[180ms] hover:bg-primary-hover sm:w-auto"
            >
              Send message
            </button>
          </form>
        </div>
      </Section>
    </>
  );
}
