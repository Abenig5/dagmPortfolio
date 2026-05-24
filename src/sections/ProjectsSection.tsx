import Container from "@/components/Container";
import TiltCard from "@/components/TiltCard";
import { contactLinks, projects } from "@/data/portfolio";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative overflow-hidden bg-black py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-primary/10 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-40 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-[90px]" />

      <Container className="relative z-10">
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Portfolio</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
            Featured <span className="italic text-primary">Works</span>
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-on-surface-variant">
            Resume-backed projects across travel booking, hospitality, payments, and autonomous vehicle experimentation.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <FeaturedProject key={project.title} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-on-surface-variant">
            Interested in the process?
          </p>
          <a
            href={contactLinks[0].href}
            className="inline-flex rounded-full bg-primary px-10 py-4 font-mono text-sm font-bold uppercase tracking-widest text-on-primary transition hover:scale-105 active:scale-95"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </Container>
    </section>
  );
};

type FeaturedProjectProps = {
  project: (typeof projects)[number];
  index: number;
};

const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const reversed = index % 2 === 1;

  return (
    <TiltCard className="glass-card tilt-card group relative overflow-hidden rounded-xl will-change-transform">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className={`h-[260px] overflow-hidden sm:h-[340px] md:h-[500px] lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
          <ProjectVisual project={project} />
        </div>
        <div className={`flex flex-col justify-center p-5 sm:p-8 md:p-12 lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-outline-variant/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant">
              {project.category}
            </span>
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-outline-variant/30 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-on-surface-variant"
              >
                {item}
              </span>
            ))}
          </div>
          <h3 className="mb-4 text-3xl font-semibold leading-tight text-on-surface sm:text-4xl">{project.title}</h3>
          <p className="mb-8 text-base leading-7 text-on-surface-variant">{project.description}</p>
          <ul className="mb-8 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-6 text-on-surface-variant">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <a href={project.href} className="inline-flex items-center gap-3 font-mono text-sm font-semibold uppercase text-primary group/link">
            View Project
            <FiArrowRight aria-hidden="true" className="transition group-hover/link:translate-x-1" />
          </a>
        </div>
      </div>
    </TiltCard>
  );
};

type ProjectVisualProps = {
  project: (typeof projects)[number];
};

const ProjectVisual = ({ project }: ProjectVisualProps) => {
  const visualClass = {
    travel: "project-visual-travel",
    hospitality: "project-visual-hospitality",
    payments: "project-visual-payments",
    autonomous: "project-visual-autonomous"
  }[project.visual];

  return (
    <div className={`project-visual ${visualClass} relative flex h-full items-center justify-center overflow-hidden grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0`}>
      <Image
        src={project.imageSrc}
        alt={project.imageAlt}
        fill
        sizes="(min-width: 1024px) 58vw, 100vw"
        className={`h-full w-full transition duration-700 group-hover:scale-105 ${
          project.imageFit === "contain" ? "object-contain p-12 md:p-20" : "object-cover"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="absolute inset-4 rounded-xl border border-white/10 sm:inset-8" />
      <div className="absolute left-6 top-6 font-mono text-[10px] uppercase tracking-widest text-white/60 sm:left-10 sm:top-10 sm:text-xs">{project.category}</div>
      <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/30 p-3 backdrop-blur sm:bottom-10 sm:left-10 sm:right-10 sm:p-4">
        <div className="mb-3 h-2 w-24 rounded-full bg-primary/70" />
        <div className="grid grid-cols-3 gap-3">
          <div className="h-12 rounded-lg bg-white/10" />
          <div className="h-12 rounded-lg bg-white/15" />
          <div className="h-12 rounded-lg bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
