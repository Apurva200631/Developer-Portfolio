import React from 'react';
import { featuredProjects } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function FeaturedProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <Container size="wide">
        <SectionHeading
          eyebrow="Architectural Initiatives"
          title="Featured Projects & Systems"
          description="Selected technical implementations covering production web architecture, machine learning exploration, and systems design."
        />

        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="p-8 sm:p-10 rounded-3xl bg-[#FBFBFD] border border-[#E5E5EA] hover:border-[#D2D2D7] transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column: Project Overview */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs font-mono font-medium text-[#86868B]">
                      0{index + 1}
                    </span>
                    <Badge variant="accent">{project.category}</Badge>
                    <span className="text-xs text-[#86868B]">•</span>
                    <span className="text-xs font-medium text-[#6E6E73]">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base font-medium text-[#0071E3]">
                    {project.tagline}
                  </p>

                  <p className="text-sm text-[#6E6E73] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-3">
                      Architectural Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-[#1D1D1F]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0071E3] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Column: Stack & Metadata */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E5EA] flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-4">
                      <Layers className="w-4 h-4 text-[#0071E3]" />
                      <span>Technology Stack</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium bg-[#F5F5F7] text-[#1D1D1F] border border-[#E5E5EA]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#F5F5F7] flex items-center justify-between text-xs text-[#86868B]">
                    <span>Status: Production / Active</span>
                    <span className="inline-flex items-center gap-1 font-medium text-[#0071E3]">
                      <span>Documented</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
