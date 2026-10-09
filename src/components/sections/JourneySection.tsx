import React from 'react';
import { journeyMilestones } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Building2, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';

export function JourneySection() {
  const getMilestoneIcon = (type: string) => {
    switch (type) {
      case 'leadership':
        return <Building2 className="w-5 h-5 text-[#0071E3]" />;
      case 'education':
        return <GraduationCap className="w-5 h-5 text-[#0071E3]" />;
      case 'engineering':
        return <Code2 className="w-5 h-5 text-[#0071E3]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="journey" className="py-24 sm:py-32 bg-white">
      <Container size="wide">
        <SectionHeading
          eyebrow="Academic & Professional Narrative"
          title="Verified Journey & Pursuits"
          description="Tracing confirmed milestones across undergraduate machine learning education, technical leadership at Orbion Technologies, and hands-on software development."
        />

        <div className="relative pl-6 sm:pl-10 border-l border-[#E5E5EA] ml-3 sm:ml-6 space-y-12 sm:space-y-16">
          {journeyMilestones.map((milestone, idx) => (
            <div key={idx} className="relative group">
              {/* Dot indicator */}
              <div className="absolute -left-[32px] sm:-left-[48px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0071E3] group-hover:scale-125 transition-transform shadow-xs" />

              <div className="p-6 sm:p-8 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#D2D2D7] transition-all duration-300 max-w-3xl">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white border border-[#E5E5EA] flex items-center justify-center">
                      {getMilestoneIcon(milestone.type)}
                    </div>
                    <Badge variant="accent" className="font-mono text-xs">
                      {milestone.period || 'Milestone'}
                    </Badge>
                  </div>

                  <span className="text-xs font-semibold text-[#6E6E73]">
                    {milestone.organization}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F] mb-3">
                  {milestone.title}
                </h3>

                <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="pt-3 border-t border-[#E5E5EA]/60 flex items-center gap-2 text-xs text-[#1D1D1F]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] shrink-0" />
                  <span className="font-medium text-[#6E6E73]">
                    Verified profile detail • MIT VPU & Orbion Technologies
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
