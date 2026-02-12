import React from "react";
import type { NavLink } from "../types";

const navLinks: NavLink[] = [
  { label: "Intro", href: "#intro" },
  { label: "Qualifications", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact", isPrimary: true },
];

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background-light)]/80 dark:bg-[var(--background-dark)]/80 backdrop-blur-md border-b border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-xl font-black tracking-tighter uppercase">
          John Ver <span className="text-[var(--primary)]">Llaneta</span>
        </div>
        <div className="hidden md:flex space-x-12 text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) =>
            link.isPrimary ? (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-[var(--primary)] text-white rounded hover:bg-[var(--primary)]/90 transition-all"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[var(--primary)] transition-colors"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};
