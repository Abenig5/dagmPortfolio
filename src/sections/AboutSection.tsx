import Container from "@/components/Container";
import MotionBlock from "@/components/MotionBlock";
import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
  return (
    <section id="about" className="py-32">
      <Container className="grid gap-10 md:grid-cols-12">
        <MotionBlock className="md:col-span-4" direction="right">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">Profile</p>
          <div className="h-px w-12 bg-primary" />
        </MotionBlock>
        <MotionBlock className="md:col-span-8" direction="left" delay={0.08}>
          <p className="text-4xl font-semibold leading-tight text-on-surface sm:text-5xl">
            I create scalable products where{" "}
            <span className="text-primary">user experience</span>, backend reliability, and practical delivery work together.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <MotionBlock className="space-y-4" delay={0.08}>
              <h3 className="text-3xl font-semibold text-secondary">Integrated</h3>
              <p className="text-base leading-7 text-on-surface-variant">
                Frontend and backend systems built to work as one product, from interface to data flow.
              </p>
            </MotionBlock>
            <MotionBlock className="space-y-4" delay={0.16}>
              <h3 className="text-3xl font-semibold text-tertiary">Scalable</h3>
              <p className="text-base leading-7 text-on-surface-variant">
                Experience with .NET Core, Django, RESTful APIs, Azure services, and clean architecture.
              </p>
            </MotionBlock>
            <MotionBlock className="space-y-4" delay={0.24}>
              <h3 className="text-3xl font-semibold text-primary">Curious</h3>
              <p className="text-base leading-7 text-on-surface-variant">
                Passionate about AI, automation, and collaborative projects that create community impact.
              </p>
            </MotionBlock>
          </div>
        </MotionBlock>
      </Container>
    </section>
  );
};

export default AboutSection;
