import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import { contactLinks } from "@/data/portfolio";
import { FiGithub, FiGlobe, FiLinkedin, FiMapPin, FiMessageCircle } from "react-icons/fi";

const socialIcons = {
  LinkedIn: FiLinkedin,
  Github: FiGithub,
  Telegram: FiMessageCircle,
  LeetCode: FiGlobe
};

const ContactSection = () => {
  const email = contactLinks.find((link) => link.label === "Email");
  const socialLinks = contactLinks.filter((link) => ["LinkedIn", "Github", "Telegram", "LeetCode"].includes(link.label));

  return (
    <section id="contact" className="relative overflow-hidden bg-background py-32">
      <div className="glow-effect -left-28 -top-24" />
      <div className="glow-effect -bottom-28 -right-28" />
      <Container className="relative z-10 grid gap-12 lg:grid-cols-12">
        <header className="flex flex-col gap-6 lg:col-span-5">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">Available for projects</span>
            <h2 className="text-5xl font-bold leading-tight text-on-surface sm:text-6xl lg:text-7xl">
              Get in <br />
              <span className="italic text-primary">Touch</span>
            </h2>
            <p className="max-w-md text-lg leading-8 text-on-surface-variant">
              Available for software development, frontend work, full-stack projects, and collaborative engineering roles.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-outline">Direct Contact</span>
              <a className="text-3xl font-semibold text-on-surface transition hover:text-primary" href={email?.href}>
                dagmawimuluwork@gmail.com
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-widest text-outline">Location</span>
              <p className="text-lg text-on-surface">Addis Ababa, Ethiopia</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-outline">Social Presence</span>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((link) => {
                  const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? FiGlobe;

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      aria-label={link.label}
                      className="glass-card flex h-12 w-12 items-center justify-center rounded-lg text-on-surface transition hover:bg-primary/10 hover:text-primary"
                    >
                      <Icon aria-hidden="true" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </header>

        <div className="lg:col-span-7">
          <div className="glass-card relative overflow-hidden rounded-xl p-8 md:p-12">
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-primary/60 to-transparent" />
            <ContactForm />
          </div>

          <div className="glass-card mt-8 h-48 overflow-hidden rounded-xl">
            <div className="relative flex h-full items-end overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(210,187,255,0.24),transparent_24%),linear-gradient(135deg,#0e0e0e,#201f1f_50%,#25005a)] opacity-80" />
              <div className="absolute inset-0 page-grid opacity-40" />
              <div className="relative z-10 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                  <FiMapPin aria-hidden="true" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface">Addis Ababa, ET</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
