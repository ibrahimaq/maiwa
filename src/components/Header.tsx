"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { navLinks } from "@/lib/navigation";
import { ButtonLink, Container } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-white/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-8">
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/maiwa-logo.png"
            alt="Maiwa Recruitment"
            width={1557}
            height={451}
            preload
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative py-2 text-[15px] font-medium transition-colors duration-[180ms] hover:text-primary ${
                  isActive ? "text-primary-hover" : "text-heading"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/candidates" className="h-11 px-5">
            Find a job
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-border lg:hidden"
        >
          <span
            className={`h-px w-5 bg-heading transition-transform duration-[180ms] ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-heading transition-transform duration-[180ms] ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </Container>

      {menuOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <Container className="flex flex-col py-4">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`border-b border-border/60 py-4 text-lg font-medium last:border-0 ${
                  pathname === href ? "text-primary-hover" : "text-heading"
                }`}
              >
                {label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  );
}
