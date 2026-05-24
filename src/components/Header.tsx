import Container from "@/components/Container";
import MobileNav from "@/components/MobileNav";
import ThemeToggle from "@/components/ThemeToggle";
import { NAV_LINKS, SITE_NAME } from "@/constants/site";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-outline-variant/20 bg-surface/75 shadow-sm backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-4">
        <a href="#" className="min-w-0 truncate font-mono text-sm font-semibold uppercase tracking-widest text-on-surface">
          {SITE_NAME}
        </a>
        <nav className="hidden items-center gap-8 font-mono text-xs font-semibold uppercase text-on-surface-variant md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <MobileNav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
