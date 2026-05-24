type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-semibold leading-tight text-on-surface sm:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-on-surface-variant">{description}</p> : null}
    </div>
  );
};

export default SectionHeading;
