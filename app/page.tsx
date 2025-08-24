import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import PublicationsSection from './components/PublicationsSection'
import ExperienceSection from './components/ExperienceSection'
import SkillsSection from './components/SkillsSection'
import AwardsSection from './components/AwardsSection'
import ContactSection from './components/ContactSection'
import Navigation from './components/Navigation'
import ParticleBackground from './components/ParticleBackground'

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <PublicationsSection />
      <ExperienceSection />
      <SkillsSection />
      <AwardsSection />
      <ContactSection />
    </>
  )
}