import Container from "@/components/Container";
import Header from "@/components/Header";
import { contactLinks } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section className="page-grid relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#131313_0%,_#201f1f_48%,_#2a2040_100%)]">
      <Header />
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center pt-16 text-center">
        <p className="mb-6 block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
          Software Developer - Addis Ababa
        </p>
        <h1 className="max-w-5xl text-5xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
          Dagmawi Muluwork builds{" "}
          <span className="animate-gradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
            full-stack digital products
          </span>
          .
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-8 text-on-surface-variant">
          Full-stack developer with strong attention to user experience design and frontend-backend integration. Experienced with
          modern frameworks, .NET Core, Python, Azure, and AI-assisted product ideas.
        </p>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-primary px-8 py-4 font-mono text-sm font-semibold uppercase text-on-primary transition hover:scale-[1.02]"
          >
            View Projects
          </a>
          <a
            href={contactLinks[0].href}
            className="rounded-lg border border-outline-variant/50 px-8 py-4 font-mono text-sm font-semibold uppercase text-on-surface transition hover:bg-surface-container"
          >
            Get In Touch
          </a>
        </div>
        <div className="mt-14 flex flex-wrap justify-center gap-5 font-mono text-xs uppercase text-outline">
          {contactLinks.slice(2).map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-primary">
              {link.label}
            </a>
          ))}
        </div>
        <div className="absolute bottom-10 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-primary to-transparent opacity-50" />
      </Container>
    </section>
  );
};

export default HeroSection;
