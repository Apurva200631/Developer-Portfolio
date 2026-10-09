import React from 'react';
import { skillCategories } from '@/content/skills-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Brain, Code2, Globe, Wrench, CheckCircle } from 'lucide-react';

export function SkillsSection() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <Brain className="w-5 h-5 text-[#0071E3]" />;
      case 'programming':
        return <Code2 className="w-5 h-5 text-[#0071E3]" />;
      case 'web-dev':
        return <Globe className="w-5 h-5 text-[#0071E3]" />;
      case 'tools-platforms':
        return <Wrench className="w-5 h-5 text-[#0071E3]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Technical Repertoire"
          title="Verified Technical Capabilities"
          description="A disciplined taxonomy of competencies across artificial intelligence, programming languages, web engineering, and developer tooling—grounded in verified GitHub codebases and academic coursework."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="p-8 rounded-3xl bg-white border border-[#E5E5EA] shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#F0F6FF] flex items-center justify-center border border-[#CCE1FB]">
                    {getCategoryIcon(category.id)}
                  </div>
                  <Badge variant="neutral" className="text-[11px] font-mono">
                    {category.skills.length} Competencies
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] mb-2">
                  {category.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="pt-4 border-t border-[#F5F5F7]">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      title={skill.verifiedContext}
                      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA] hover:border-[#0071E3]/50 hover:bg-white transition-all cursor-default"
                    >
                      <CheckCircle className="w-3 h-3 text-[#0071E3] opacity-70 group-hover:opacity-100 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Note (Apple-inspired subtle strip) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5EA] text-xs text-[#6E6E73] flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0071E3]" />
            <span>
              <strong className="text-[#1D1D1F]">Transparency Note:</strong> All capabilities above are derived from real public repositories on GitHub (@Apurva200631) and active coursework at MIT Vishwaprayag University. Arbitrary percentage bars and unverified claims are excluded.
            </span>
          </div>
          <a
            href="https://github.com/Apurva200631"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0071E3] hover:underline font-semibold shrink-0 text-xs"
          >
            Verify on GitHub →
          </a>
        </div>
      </Container>
    </section>
  );
}
