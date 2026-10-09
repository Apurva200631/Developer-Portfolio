import React from 'react';
import { verifiedProjects } from '@/content/projects-data';
import { personalInfo } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { RepositoryList } from '@/components/projects/RepositoryList';

export function FeaturedProjectsSection() {
  const prominentProject = verifiedProjects.find((p) => p.isProminent);
  const otherProjects = verifiedProjects.filter((p) => !p.isProminent);

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white">
      <Container size="wide">
        <SectionHeading
          eyebrow="Verified Codebases & Systems"
          title="Featured Projects & Implementations"
          description="Real-world software engineering across computer vision, intelligent systems, regional web portals, and executive architecture—verified directly from Apurv's public GitHub portfolio."
        />

        {/* 1. Prominent Lead Showcase */}
        {prominentProject && (
          <div className="mb-12">
            <ProjectCard project={prominentProject} index={0} />
          </div>
        )}

        {/* 2. Multi-column Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {otherProjects.slice(0, 2).map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx + 1}
            />
          ))}
        </div>

        {/* 3. System Architecture Showcase */}
        {otherProjects.length > 2 && (
          <div className="mb-12">
            <ProjectCard
              project={otherProjects[2]}
              index={3}
            />
          </div>
        )}

        {/* 4. Verified GitHub Repository Directory */}
        <RepositoryList
          githubUsername={personalInfo.githubUsername}
          githubProfileUrl={personalInfo.github}
          reposCount={personalInfo.publicReposCount}
        />
      </Container>
    </section>
  );
}
