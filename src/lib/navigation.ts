export interface INavLink {
  href: string;
  label: string;
}

export const navLinks: INavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/why-maiwa", label: "Why Maiwa" },
  { href: "/employers", label: "Employers" },
  { href: "/candidates", label: "Candidates" },
  { href: "/contact", label: "Contact" },
];

/** Prefix for files in /public, which next/image does not add basePath to automatically. */
export const assetPath = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
