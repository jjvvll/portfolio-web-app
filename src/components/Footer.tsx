import React from "react";

export const Footer: React.FC = () => {
  const footerLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Cookies", href: "#" },
  ];

  return (
    <footer className="py-12 px-6 border-t border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium tracking-widest uppercase">
        <p>
          © {new Date().getFullYear()} John Ver Llaneta — Designed for impact
        </p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          {/* {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[var(--primary)]"
            >
              {link.label}
            </a>
          ))} */}
          <a
            href="#intro"
            className="hover:text-[var(--primary)] flex items-center"
          >
            Back to Top{" "}
            <span className="material-icons text-sm ml-1">arrow_upward</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
