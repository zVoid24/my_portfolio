import MouseGlow from "@/components/MouseGlow";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import PublicationSection from "@/components/PublicationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <MouseGlow />
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <PublicationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
};

export default Index;
