import React from 'react';
import { personalInfo } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { ArrowRight, Sparkles, Building2, GraduationCap, Code2 } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export function HeroSection() {
  return (
    <section id="top" className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden bg-white">
      {/* Subtle background ambient light (Apple style: extremely gentle) */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[420px] pointer-events-none opacity-60 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#F2F7FF] via-[#F8FAFC] to-transparent rounded-full blur-3xl" />
      </div>

      <Container size="wide" className="relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-6">
            <Badge variant="accent" className="py-1 px-3.5 text-xs font-medium gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Portfolio & Technical Work</span>
            </Badge>
          </div>

          {/* Primary Name & Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-[#1D1D1F] leading-[1.08] mb-6">
            {personalInfo.name}
          </h1>

          {/* Core Positioning */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1D1D1F] tracking-tight mb-6">
            AI/ML Student <span className="text-[#86868B] font-light">•</span> Developer <span className="text-[#86868B] font-light">•</span> CTO at Orbion Technologies
          </p>

          {/* Articulated Bio / Positioning Statement */}
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed max-w-2xl mb-10 font-normal">
            Undergraduate in Artificial Intelligence & Machine Learning at{' '}
            <strong className="font-semibold text-[#1D1D1F]">MIT Vishwaprayag University</strong>, directing technical strategy and system architecture as Chief Technology Officer at{' '}
            <strong className="font-semibold text-[#1D1D1F]">Orbion Technologies</strong>. Committed to technical curiosity, practical software engineering, and disciplined product execution.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-16">
            <Button href="#projects" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
              Explore Projects
            </Button>
            <Button href="#about" variant="secondary" size="lg">
              About My Work
            </Button>
            <Button href="#orbion" variant="ghost" size="lg" className="border border-[#E5E5EA]">
              Orbion Technologies
            </Button>
            <Button
              href={personalInfo.github}
              variant="ghost"
              size="lg"
              isExternal
              className="border border-[#E5E5EA]"
              icon={<GithubIcon className="w-4 h-4" />}
              aria-label="Visit Apurv Nimbarge GitHub profile"
            >
              GitHub
            </Button>
          </div>

          {/* Key Facts Strip (Apple-inspired clean grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#E5E5EA]">
            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]/70">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6E73] uppercase tracking-wider mb-1.5">
                <Building2 className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>Executive Role</span>
              </div>
              <div className="text-sm font-semibold text-[#1D1D1F]">
                CTO, Orbion Technologies
              </div>
              <div className="text-xs text-[#86868B] mt-0.5">
                Technical strategy & architecture
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]/70">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6E73] uppercase tracking-wider mb-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>Academic Pursuit</span>
              </div>
              <div className="text-sm font-semibold text-[#1D1D1F]">
                B.Tech AI & Machine Learning
              </div>
              <div className="text-xs text-[#86868B] mt-0.5">
                MIT Vishwaprayag University
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]/70">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#6E6E73] uppercase tracking-wider mb-1.5">
                <Code2 className="w-3.5 h-3.5 text-[#0071E3]" />
                <span>Engineering Focus</span>
              </div>
              <div className="text-sm font-semibold text-[#1D1D1F]">
                Applied ML & Web Systems
              </div>
              <div className="text-xs text-[#86868B] mt-0.5">
                TypeScript, Python, System Design
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
