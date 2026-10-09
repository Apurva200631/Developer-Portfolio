import React from 'react';
import Link from 'next/link';
import { personalInfo, navigationItems } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  GmailIcon,
  YahooIcon,
} from '@/components/common/Icons';
import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5EA] bg-[#FBFBFD] pt-16 pb-12 text-[#6E6E73] text-sm">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#E5E5EA]">
          {/* Column 1: Identity & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight text-[#1D1D1F]">
                {personalInfo.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            </div>

            <p className="text-[#1D1D1F] font-medium text-sm">
              B.Tech AI/ML Student · CTO of Orbion Technologies
            </p>

            <p className="text-xs text-[#86868B] max-w-md leading-relaxed">
              Undergraduate in Artificial Intelligence & Machine Learning at MIT Vishwaprayag University, directing technology strategy and architecture at Orbion Technologies.
            </p>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs hover:text-[#1D1D1F] transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: All 6 Contact Destinations */}
          <div className="md:col-span-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1D1D1F] mb-4">
              Verified Contact Destinations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] text-[#1D1D1F] transition-colors"
                aria-label="GitHub Profile (@Apurva200631)"
              >
                <GithubIcon className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px]">GitHub</div>
                  <div className="text-[10px] text-[#86868B] font-mono truncate">@Apurva200631</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] text-[#1D1D1F] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0071E3] shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px]">LinkedIn</div>
                  <div className="text-[10px] text-[#86868B] truncate">Apurva Nimbarge</div>
                </div>
              </a>

              {/* X */}
              <a
                href={personalInfo.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] text-[#1D1D1F] transition-colors"
                aria-label="X Profile (@apurv2116)"
              >
                <XIcon className="w-4 h-4 text-[#1D1D1F] shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px]">X</div>
                  <div className="text-[10px] text-[#86868B] font-mono truncate">@apurv2116</div>
                </div>
              </a>

              {/* Personal Gmail */}
              <a
                href={`mailto:${personalInfo.personalGmail}`}
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] text-[#1D1D1F] transition-colors"
                aria-label={`Personal Gmail (${personalInfo.personalGmail})`}
              >
                <GmailIcon className="w-4 h-4 shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px]">Personal Gmail</div>
                  <div className="text-[10px] text-[#86868B] font-mono truncate">{personalInfo.personalGmail}</div>
                </div>
              </a>

              {/* Yahoo Mail */}
              <a
                href={`mailto:${personalInfo.yahooMail}`}
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#E5E5EA] hover:border-[#D2D2D7] text-[#1D1D1F] transition-colors"
                aria-label={`Yahoo Mail (${personalInfo.yahooMail})`}
              >
                <YahooIcon className="w-4 h-4 text-[#6001D2] shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px]">Yahoo Mail</div>
                  <div className="text-[10px] text-[#86868B] font-mono truncate">{personalInfo.yahooMail}</div>
                </div>
              </a>

              {/* Orbion Company Email */}
              <a
                href={`mailto:${personalInfo.orbionEmail}`}
                className="flex items-center gap-2.5 p-2.5 min-h-[44px] rounded-xl bg-white border border-[#0071E3]/40 ring-1 ring-[#0071E3]/20 hover:border-[#0071E3] text-[#1D1D1F] transition-colors"
                aria-label={`Orbion Company Email (${personalInfo.orbionEmail})`}
              >
                <GmailIcon className="w-4 h-4 shrink-0" />
                <div className="truncate">
                  <div className="font-semibold text-[11px] text-[#0071E3]">Orbion Company Email</div>
                  <div className="text-[10px] text-[#86868B] font-mono truncate">{personalInfo.orbionEmail}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div>
            © 2026 {personalInfo.name}. All rights reserved. B.Tech AI/ML Student · CTO of Orbion Technologies.
          </div>
          <div className="flex items-center gap-4">
            <span>Solapur, Maharashtra</span>
            <span>•</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1 hover:text-[#1D1D1F] transition-colors"
              aria-label="Back to top of page"
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
