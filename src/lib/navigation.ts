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
