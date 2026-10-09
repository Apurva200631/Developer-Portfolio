import React from 'react';
import Link from 'next/link';
import { personalInfo, navigationItems } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5EA] bg-[#FBFBFD] pt-16 pb-12 text-[#6E6E73] text-sm">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E5E5EA]">
          {/* Column 1: Brand & Role */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
                {personalInfo.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            </div>
            <p className="text-[#1D1D1F] font-medium text-sm">
              {personalInfo.primaryPositioning}
            </p>
            <p className="text-xs text-[#86868B] max-w-md leading-relaxed">
              Studying Artificial Intelligence & Machine Learning at MIT Vishwaprayag University while directing technological initiatives as CTO of Orbion Technologies.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#1D1D1F] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect & Profiles */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-xs hover:text-[#1D1D1F] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs hover:text-[#1D1D1F] transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#1D1D1F]" />
                  <span>github.com/apurvnimbarge</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs hover:text-[#1D1D1F] transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>linkedin.com/in/apurvnimbarge</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div>
            © 2026 {personalInfo.name}. All rights reserved. Designed with Apple minimalist principles.
          </div>
          <div className="flex items-center gap-4">
            <span>Orbion Technologies</span>
            <span>•</span>
            <span>MIT Vishwaprayag University</span>
            <span>•</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-[#1D1D1F] transition-colors"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
