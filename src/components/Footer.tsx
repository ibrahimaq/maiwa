import Image from "next/image";
import Link from "next/link";
import { assetPath, navLinks } from "@/lib/navigation";
import { Container } from "./ui";

export function Footer() {
  return (
    <footer className="bg-heading text-white/60">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src={assetPath("/maiwa-logo-light.png")}
            alt="Maiwa Recruitment"
            width={1557}
            height={451}
            className="h-11 w-auto"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed">
            Specialist recruitment built on honest conversations and lasting
            relationships.
          </p>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Explore
          </p>
          <ul className="space-y-3 text-sm">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="transition-colors duration-[180ms] hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
            Get in touch
          </p>
          <ul className="space-y-3 text-sm">
            <li>hello@maiwarecruitment.com</li>
            <li>+44 (0)20 7946 0321</li>
            <li>London, United Kingdom</li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs sm:flex-row">
        <p>© 2026 Maiwa Recruitment. All rights reserved.</p>
        <p>Privacy · Terms · Cookies</p>
      </Container>
    </footer>
  );
}
