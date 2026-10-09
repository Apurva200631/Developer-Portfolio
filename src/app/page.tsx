import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OverviewSection } from '@/components/sections/OverviewSection';
import { FeaturedProjectsSection } from '@/components/sections/FeaturedProjectsSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { JourneySection } from '@/components/sections/JourneySection';
import { OrbionSection } from '@/components/sections/OrbionSection';
import { ContactCtaSection } from '@/components/sections/ContactCtaSection';

export default function HomePage() {
  return (
    <>
      {/* Accessible skip-link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#0071E3] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none text-xs font-semibold"
      >
        Skip to main content
      </a>

      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-1 flex flex-col">
        <HeroSection />
        <OverviewSection />
        <FeaturedProjectsSection />
        <SkillsSection />
        <JourneySection />
        <OrbionSection />
        <ContactCtaSection />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}
