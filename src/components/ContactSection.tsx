import React from "react";
import { socialLinks } from "../data/socialLinks";

export const ContactSection: React.FC = () => {
  return (
    <section
      className="py-32 px-6 bg-slate-100 bg-opacity-50 dark:bg-slate-900 dark:bg-opacity-40"
      id="contact"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">
          LET'S <span className="text-[var(--primary)]">TALK.</span>
        </h2>
        <div className="flex flex-col items-center">
          <a
            href="mailto:llanetajohnver@gmail.com"
            className="text-xl sm:text-2xl md:text-4xl font-light hover:text-[var(--primary)] transition-colors border-b-2 border-[var(--primary)] pb-2 mb-12 md:mb-16 text-center break-all sm:break-normal"
          >
            llanetajohnver@gmail.com
          </a>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 md:gap-24 items-center justify-center w-full max-w-2xl">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.href}
                className="group flex flex-col items-center text-center min-w-[140px]"
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-400 group-hover:text-[var(--primary)] transition-colors mb-1">
                  {link.platform}
                </p>
                <p className="text-lg md:text-xl font-bold">{link.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
