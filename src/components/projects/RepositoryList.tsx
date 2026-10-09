import React from 'react';
import { verifiedRepositories } from '@/content/projects-data';
import { GithubIcon } from '@/components/common/Icons';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

interface RepositoryListProps {
  githubUsername: string;
  githubProfileUrl: string;
  reposCount: number;
}

export function RepositoryList({
  githubUsername,
  githubProfileUrl,
  reposCount,
}: RepositoryListProps) {
  return (
    <div className="mt-16 pt-16 border-t border-[#E5E5EA]">
      {/* Header with GitHub Profile Integration */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <GithubIcon className="w-5 h-5 text-[#1D1D1F]" />
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#1D1D1F]">
              Verified GitHub Repositories
            </h3>
            <Badge variant="accent" className="font-mono text-xs">
              @{githubUsername}
            </Badge>
          </div>
          <p className="text-sm text-[#6E6E73] max-w-xl">
            Public repositories and laboratory experiment codebases directly verified on GitHub.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Button
            href={githubProfileUrl}
            variant="secondary"
            size="sm"
            isExternal
            icon={<GithubIcon className="w-4 h-4" />}
            aria-label="Visit Apurv Nimbarge GitHub profile"
          >
            <span>Profile ({reposCount} Repositories)</span>
          </Button>
        </div>
      </div>

      {/* Clean Compact Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {verifiedRepositories.map((repo) => (
          <div
            key={repo.name}
            className="p-5 rounded-2xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] shadow-xs flex flex-col justify-between transition-colors group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 min-w-0">
                  <FolderGit2 className="w-4 h-4 text-[#0071E3] shrink-0" />
                  <span className="font-mono text-xs font-semibold text-[#1D1D1F] truncate group-hover:text-[#0071E3] transition-colors">
                    {repo.name}
                  </span>
                </div>
                <span className="text-[10px] font-medium font-mono px-2 py-0.5 rounded-full bg-[#F5F5F7] text-[#6E6E73] border border-[#E5E5EA] shrink-0">
                  {repo.language}
                </span>
              </div>

              <p className="text-xs text-[#6E6E73] leading-relaxed mb-4 line-clamp-2">
                {repo.description}
              </p>
            </div>

            <div className="pt-3 border-t border-[#F5F5F7] flex items-center justify-between text-xs">
              <a
                href={repo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
                aria-label={`Open repository ${repo.name} on GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>

              {repo.liveUrl && (
                <a
                  href={repo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-[#0071E3] hover:underline"
                  aria-label={`Open live deployment for ${repo.name}`}
                >
                  <span>Live Page</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
