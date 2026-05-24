import { FiExternalLink } from "react-icons/fi";
import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article className="glass-card rounded-xl p-7 shadow-soft transition duration-500 hover:-translate-y-2 hover:border-primary/50">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-2xl font-semibold text-on-surface">{project.title}</h3>
        <a href={project.href} aria-label={`Open ${project.title}`} className="text-outline transition hover:text-primary">
          <FiExternalLink aria-hidden="true" />
        </a>
      </div>
      <p className="mt-4 text-sm leading-6 text-on-surface-variant">{project.description}</p>
      <ul className="mt-6 space-y-3">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-3 font-mono text-xs uppercase text-outline">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {highlight}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold text-on-surface-variant">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
