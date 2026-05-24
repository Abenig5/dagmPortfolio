import Container from "@/components/Container";
import Header from "@/components/Header";
import MotionBlock from "@/components/MotionBlock";
import { contactLinks } from "@/data/portfolio";

const HeroSection = () => {
  return (
    <section className="page-grid relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#131313_0%,_#201f1f_48%,_#2a2040_100%)]">
      <Header />
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center py-24 pt-24 text-center sm:py-28">
        <MotionBlock delay={0.05}>
          <p className="mb-6 block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Software Developer - Addis Ababa
          </p>
        </MotionBlock>
        <MotionBlock delay={0.12}>
          <h1 className="max-w-5xl text-4xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
            Dagmawi Muluwork builds{" "}
            <span className="animate-gradient bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
              full-stack digital products
            </span>
            .
          </h1>
        </MotionBlock>
        <MotionBlock delay={0.2}>
          <p className="mt-6 max-w-3xl text-base leading-7 text-on-surface-variant sm:mt-8 sm:text-lg sm:leading-8">
            Full-stack developer with strong attention to user experience design and frontend-backend integration. Experienced with
            modern frameworks, .NET Core, Python, Azure, and AI-assisted product ideas.
          </p>
        </MotionBlock>
        <MotionBlock className="w-full sm:w-auto" delay={0.28}>
          <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:w-auto sm:max-w-none sm:flex-row">
            <a
              href="#projects"
              className="rounded-lg bg-primary px-6 py-4 text-center font-mono text-sm font-semibold uppercase text-on-primary transition hover:scale-[1.02] sm:px-8"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-outline-variant/50 px-6 py-4 text-center font-mono text-sm font-semibold uppercase text-on-surface transition hover:bg-surface-container sm:px-8"
            >
              Get In Touch
            </a>
          </div>
        </MotionBlock>
        <MotionBlock delay={0.36}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-3 font-mono text-xs uppercase text-outline sm:mt-14">
            {contactLinks.slice(2).map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>
        </MotionBlock>
        <div className="absolute bottom-10 left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-primary to-transparent opacity-50" />
      </Container>
    </section>
  );
};

export default HeroSection;
