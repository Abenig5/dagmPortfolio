import AboutSection from "@/sections/AboutSection";
import ContactSection from "@/sections/ContactSection";
import ExperienceSection from "@/sections/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection";
import SkillsSection from "@/sections/SkillsSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;
