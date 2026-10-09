import React from 'react';
import { focusAreas } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Brain, Cpu, Briefcase, CheckCircle2 } from 'lucide-react';

export function OverviewSection() {
  const getIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-5 h-5 text-[#0071E3]" />;
      case 'product-dev':
        return <Cpu className="w-5 h-5 text-[#0071E3]" />;
      case 'technology-leadership':
        return <Briefcase className="w-5 h-5 text-[#0071E3]" />;
      default:
        return <Brain className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Core Identity & Focus"
          title="Bridging Theoretical AI with Practical Production"
          description="A dual focus on academic machine learning foundations and enterprise software execution. Building systems that are mathematically grounded and engineered for real-world reliability."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {focusAreas.map((area) => (
            <div
              key={area.id}
              className="group flex flex-col justify-between p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#D2D2D7] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0F6FF] flex items-center justify-center border border-[#CCE1FB]">
                    {getIcon(area.id)}
                  </div>
                  <Badge variant="neutral" className="text-[11px]">
                    {area.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] mb-1">
                  {area.title}
                </h3>
                <p className="text-xs font-medium text-[#0071E3] mb-4">
                  {area.subtitle}
                </p>
                <p className="text-sm text-[#6E6E73] leading-relaxed mb-6 font-normal">
                  {area.description}
                </p>
              </div>

              <div className="pt-6 border-t border-[#F5F5F7]">
                <ul className="space-y-2.5">
                  {area.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] shrink-0 mt-0.5" />
                      <span className="leading-snug">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
