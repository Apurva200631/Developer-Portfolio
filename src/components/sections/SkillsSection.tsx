import React from 'react';
import { skillCategories } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Terminal, Code, Network } from 'lucide-react';

export function SkillsSection() {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Terminal className="w-5 h-5 text-[#0071E3]" />;
      case 1:
        return <Code className="w-5 h-5 text-[#0071E3]" />;
      case 2:
        return <Network className="w-5 h-5 text-[#0071E3]" />;
      default:
        return <Code className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Competencies & Tooling"
          title="Technical Capabilities"
          description="A structured repertoire of engineering competencies spanning artificial intelligence, full-stack web software, and systems leadership."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((group, idx) => (
            <div
              key={group.category}
              className="p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
            >
              <div className="w-10 h-10 rounded-2xl bg-[#F0F6FF] flex items-center justify-center border border-[#CCE1FB] mb-5">
                {getCategoryIcon(idx)}
              </div>

              <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] mb-4">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA] hover:border-[#0071E3]/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
