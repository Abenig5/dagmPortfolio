import Container from "@/components/Container";
import MotionBlock from "@/components/MotionBlock";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/portfolio";
import { FiCloud, FiCode, FiLayers } from "react-icons/fi";

const icons = {
  primary: FiCode,
  secondary: FiLayers,
  tertiary: FiCloud
};

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-surface-container-lowest py-32">
      <Container>
        <MotionBlock className="mx-auto mb-20 text-center [&>div]:mx-auto">
          <SectionHeading
            eyebrow="Competencies"
            title="Precision across the stack."
            description="Skills taken from Dagmawi's resume and grouped around the way he builds production software."
          />
        </MotionBlock>
        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <MotionBlock key={group.title} delay={index * 0.08}>
              <SkillCard group={group} />
            </MotionBlock>
          ))}
        </div>
      </Container>
    </section>
  );
};

type SkillCardProps = {
  group: (typeof skillGroups)[number];
};

const SkillCard = ({ group }: SkillCardProps) => {
  const Icon = icons[group.tone];
  const colorClass = {
    primary: "text-primary bg-primary/10",
    secondary: "text-secondary bg-secondary/10",
    tertiary: "text-tertiary bg-tertiary/10"
  }[group.tone];
  const dotClass = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary"
  }[group.tone];

  return (
    <article className="glass-card rounded-xl p-10 transition duration-500 hover:-translate-y-2 hover:border-primary/50">
      <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-lg ${colorClass}`}>
        <Icon aria-hidden="true" className="h-7 w-7" />
      </div>
      <h3 className="mb-4 text-3xl font-semibold text-on-surface">{group.title}</h3>
      <p className="mb-6 text-base leading-7 text-on-surface-variant">{group.description}</p>
      <ul className="space-y-3">
        {group.skills.map((skill) => (
          <li key={skill} className="flex items-center gap-3 font-mono text-xs uppercase text-outline">
            <span className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SkillsSection;
