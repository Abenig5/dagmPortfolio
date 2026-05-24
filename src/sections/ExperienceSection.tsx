import Container from "@/components/Container";
import { education, experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  return (
    <section id="experience" className="gradient-mesh py-32">
      <Container>
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
            Proven Track Record
          </span>
          <h2 className="max-w-4xl text-5xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
            Professional Journey
          </h2>
        </div>

        <div className="relative pl-8 md:pl-0">
          <div className="timeline-line absolute bottom-0 left-0 top-0 w-px md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-14 md:space-y-24">
            {experiences.map((item, index) => (
              <TimelineItem key={`${item.role}-${item.company}`} item={item} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-28">
          <div className="mb-12 max-w-2xl">
            <span className="mb-4 block font-mono text-xs font-semibold uppercase tracking-widest text-primary">
              Education
            </span>
            <h3 className="text-4xl font-semibold leading-tight text-on-surface sm:text-5xl">Academic foundation</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item) => (
              <article key={item.title} className="glass-card rounded-xl p-8 transition duration-500 hover:-translate-y-2">
                <p className="mb-3 font-mono text-xs uppercase tracking-widest text-outline">{item.period}</p>
                <h4 className="text-2xl font-semibold text-on-surface">{item.title}</h4>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-secondary">{item.institution}</p>
                <p className="mt-2 text-sm text-outline">{item.location}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-on-surface-variant">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

type TimelineItemProps = {
  item: (typeof experiences)[number];
  index: number;
};

const TimelineItem = ({ item, index }: TimelineItemProps) => {
  const isLeft = index % 2 === 0;
  const dotClass =
    index === 0
      ? "bg-primary shadow-[0_0_18px_rgba(210,187,255,0.65)]"
      : "border-2 border-outline-variant bg-surface";

  return (
    <article className="relative flex flex-col md:flex-row md:items-center">
      <div className={`absolute -left-8 top-1 z-10 h-4 w-4 -translate-x-1/2 rounded-full md:left-1/2 ${dotClass}`} />
      <div className={`order-2 md:w-1/2 ${isLeft ? "md:pr-16 md:text-right" : "hidden md:block"}`}>
        {isLeft ? <TimelineCard item={item} align="right" active={index === 0} /> : null}
      </div>
      <div className={`order-2 md:w-1/2 ${isLeft ? "hidden md:block" : "md:pl-16"}`}>
        {!isLeft ? <TimelineCard item={item} align="left" active={index === 0} /> : null}
      </div>
    </article>
  );
};

type TimelineCardProps = {
  item: (typeof experiences)[number];
  align: "left" | "right";
  active: boolean;
};

const TimelineCard = ({ item, align, active }: TimelineCardProps) => {
  return (
    <div className={align === "right" ? "md:ml-auto" : ""}>
      <span className="mb-2 block font-mono text-xs uppercase tracking-widest text-outline">{item.period}</span>
      <h3 className={`mb-1 text-3xl font-semibold ${active ? "text-primary" : "text-on-surface"}`}>{item.role}</h3>
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-secondary">{item.company}</p>
      {item.location ? <p className="mb-5 text-sm text-outline">{item.location}</p> : null}
      <p className={`text-base leading-7 text-on-surface-variant ${align === "right" ? "md:ml-auto" : ""} max-w-xl`}>
        {item.description}
      </p>
      <ul className={`mt-6 space-y-3 ${align === "right" ? "md:ml-auto" : ""} max-w-xl`}>
        {item.highlights.map((highlight) => (
          <li key={highlight} className={`flex gap-3 text-sm leading-6 text-on-surface-variant ${align === "right" ? "md:flex-row-reverse" : ""}`}>
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceSection;
