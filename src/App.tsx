import React from 'react';
import HeroSection from '../app/components/HeroSection';
import AboutSection from '../app/components/AboutSection';
import PublicationsSection from '../app/components/PublicationsSection';
import ExperienceSection from '../app/components/ExperienceSection';
import SkillsSection from '../app/components/SkillsSection';
import AwardsSection from '../app/components/AwardsSection';
import ContactSection from '../app/components/ContactSection';
import Navigation from '../app/components/Navigation';
import ParticleBackground from '../app/components/ParticleBackground';
import { ThemeProvider } from '../app/components/ThemeProvider';
import '../app/globals.css';

function App() {
  return (
    <ThemeProvider>
      <div className="relative">
        <ParticleBackground />
        <Navigation />
        <main id="main-content">
          <HeroSection />
          <AboutSection />
          <PublicationsSection />
          <ExperienceSection />
          <SkillsSection />
          <AwardsSection />
          <ContactSection />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;