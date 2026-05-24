import Container from "@/components/Container";
import { contactLinks } from "@/data/portfolio";
import { NAV_LINKS, SITE_NAME } from "@/constants/site";

const Footer = () => {
  return (
    <footer className="rounded-t-xl border-t border-outline-variant/20 bg-surface-container-lowest">
      <Container className="flex flex-col items-center py-24 text-center">
        <div className="mb-8 font-mono text-sm font-semibold uppercase tracking-widest text-on-surface">{SITE_NAME}</div>
        <div className="mb-10 flex flex-wrap justify-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-xs uppercase text-outline transition hover:text-primary">
              {link.label}
            </a>
          ))}
          {contactLinks.slice(2, 6).map((link) => (
            <a key={link.href} href={link.href} className="font-mono text-xs uppercase text-outline transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <div className="mb-10 h-px w-full bg-outline-variant/20" />
        <p className="font-mono text-xs uppercase text-on-surface-variant opacity-70">
          Portfolio for Dagmawi Muluwork - built with Next.js and Tailwind CSS.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
