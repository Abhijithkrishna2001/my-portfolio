import { ThemeToggle } from "@/Components/ThemeToggle";
import { StarBackground } from "../Components/StarBackground";
import { Navbar } from "@/Components/Navbar";
import { HeroSection } from "../Components/HeroSection";
import { AboutSection } from "../Components/AboutSection";
import { SkillsSection } from "../Components/SkillsSection";
import { ProjectsSection } from "../Components/ProjectsSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";

export const Homes = () => {
  return (
    <div className="min-h-screen bg-background text=foreground overflow-x-hidden">
      {/* Theme toggle  */}
      <ThemeToggle />
      {/* Background */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>
      </main>

      {/* Footer */}

      <Footer/>
    </div>
  );
};
