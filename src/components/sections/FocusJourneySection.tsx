import React from 'react';
import { journeyMilestones } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Building2, Compass, ArrowRight, ShieldCheck, Zap, Workflow } from 'lucide-react';
import { Button } from '@/components/common/Button';

export function FocusJourneySection() {
  return (
    <section id="journey" className="py-24 sm:py-32 bg-white">
      <Container size="wide">
        {/* Journey Timeline */}
        <SectionHeading
          eyebrow="Chronological Trajectory"
          title="Academic & Leadership Journey"
          description="Tracing continuous growth across formal machine learning education and executive engineering leadership."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-[#E5E5EA] ml-3 sm:ml-4 space-y-12 mb-28">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0071E3] group-hover:scale-125 transition-transform" />

              <div className="max-w-3xl">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <Badge variant="accent" className="font-mono text-[11px]">
                    {milestone.year}
                  </Badge>
                  <span className="text-xs font-semibold text-[#6E6E73]">
                    {milestone.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] mb-2">
                  {milestone.title}
                </h3>

                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Orbion Spotlight Section */}
        <div
          id="orbion"
          className="rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="neutral" className="gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>Orbion Technologies</span>
                </Badge>
              </div>

              <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
                Engineering Direction at Orbion Technologies
              </h3>

              <p className="text-base text-[#6E6E73] leading-relaxed">
                As Chief Technology Officer, I lead the technical vision and engineering roadmap for Orbion Technologies. My focus centers on establishing stable architectural foundations, choosing resilient modern stacks, and fostering an engineering culture that prioritizes product quality over unnecessary complexity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA]">
                  <ShieldCheck className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    System Stability
                  </div>
                  <div className="text-[11px] text-[#86868B]">
                    Deterministic code and clear boundaries
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA]">
                  <Zap className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    High Performance
                  </div>
                  <div className="text-[11px] text-[#86868B]">
                    Fast load times and lean dependencies
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E5E5EA]">
                  <Workflow className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    Product Alignment
                  </div>
                  <div className="text-[11px] text-[#86868B]">
                    Translating objectives to architecture
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-[#E5E5EA] space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                <Compass className="w-4 h-4 text-[#0071E3]" />
                <span>Executive Summary</span>
              </div>

              <div className="space-y-3 text-xs text-[#6E6E73] leading-relaxed">
                <p>
                  <strong className="text-[#1D1D1F]">Role:</strong> Chief Technology Officer (CTO)
                </p>
                <p>
                  <strong className="text-[#1D1D1F]">Core Focus:</strong> Enterprise architecture, modern web platforms, developer standards, technical decision-making.
                </p>
                <p>
                  <strong className="text-[#1D1D1F]">Philosophy:</strong> Software excellence emerges from thoughtful simplification, disciplined type systems, and direct accountability to user experience.
                </p>
              </div>

              <div className="pt-4 border-t border-[#F5F5F7]">
                <Button
                  href="#contact"
                  variant="primary"
                  size="sm"
                  className="w-full"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Inquire Regarding Orbion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
