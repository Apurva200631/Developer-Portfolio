import React from 'react';
import { VerifiedProject } from '@/types';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { GithubIcon } from '@/components/common/Icons';
import { ProjectVisual } from './ProjectVisual';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: VerifiedProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const isProminent = project.isProminent;

  return (
    <article
      className={`rounded-3xl bg-white border border-[#E5E5EA] p-6 sm:p-8 lg:p-10 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:border-[#D2D2D7] transition-all duration-300 ${
        isProminent ? 'ring-1 ring-[#0071E3]/20 bg-[#FBFBFD]' : ''
      }`}
    >
      <div
        className={`grid grid-cols-1 ${
          isProminent
            ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center'
            : 'gap-8'
        }`}
      >
        {/* Left / Main Column */}
        <div className={isProminent ? 'lg:col-span-7 space-y-5' : 'space-y-4'}>
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs">
            <span className="font-mono text-[#86868B] font-semibold">
              0{index + 1}
            </span>
            <Badge variant="accent">{project.category}</Badge>
            <span className="text-[#D2D2D7]">•</span>
            <span className="font-medium text-[#6E6E73]">{project.role}</span>
            {isProminent && (
              <Badge variant="outline" className="border-[#0071E3]/40 text-[#0071E3] bg-[#F0F6FF]">
                Featured Architecture
              </Badge>
            )}
          </div>

          {/* Title & Tagline */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F] leading-tight mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-[#0071E3]">
              {project.tagline}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#6E6E73] leading-relaxed max-w-2xl font-normal">
            {project.description}
          </p>

          {/* Highlights List */}
          <div className="pt-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-3">
              Confirmed Implementation Highlights
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1D1D1F]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                  <span className="leading-snug">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology Stack Tags */}
          <div className="pt-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-[#6E6E73] mb-2.5">
              Verified Stack
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
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

          {/* Action Links (GitHub Repo + Live Demo) */}
          <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
            <Button
              href={project.githubUrl}
              variant="primary"
              size="md"
              isExternal
              icon={<GithubIcon className="w-4 h-4" />}
              aria-label={`View ${project.title} repository on GitHub`}
            >
              View Repository
            </Button>

            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                variant="secondary"
                size="md"
                isExternal
                icon={<ArrowUpRight className="w-4 h-4 text-[#0071E3]" />}
                aria-label={`Open verified live demo for ${project.title}`}
              >
                Live Production Demo
              </Button>
            )}
          </div>
        </div>

        {/* Right / Visual Column */}
        <div className={isProminent ? 'lg:col-span-5' : 'w-full'}>
          <ProjectVisual type={project.visualType} title={project.title} />
        </div>
      </div>
    </article>
  );
}
