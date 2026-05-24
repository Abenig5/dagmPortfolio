"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_LINKS } from "@/constants/site";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/40 bg-surface-container text-primary"
      >
        {isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
      </button>

      {isOpen ? (
        <div className="absolute left-5 right-5 top-[4.75rem] rounded-xl border border-outline-variant/30 bg-surface-container/95 p-3 shadow-soft backdrop-blur-xl">
          <nav className="grid gap-1 font-mono text-xs font-semibold uppercase tracking-widest text-on-surface-variant">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 transition hover:bg-surface-container-high hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNav;
