'use client';

import React, { useState } from 'react';
import { personalInfo } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/common/Icons';

export function ContactCtaSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="Direct Communication"
            title="Initiate a Conversation"
            description="Whether discussing technical architecture, academic AI/ML research at MIT Vishwaprayag University, or strategic collaborations with Orbion Technologies."
          />

          {/* Contact Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E5E5EA] shadow-[0_4px_24px_rgba(0,0,0,0.03)] space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F5F5F7] border border-[#E5E5EA] text-xs text-[#6E6E73]">
              <MapPin className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>{personalInfo.location}</span>
              <span className="text-[#86868B]">•</span>
              <span className="text-[#0071E3] font-medium">Available for select collaborations</span>
            </div>

            {/* Email Box */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
              <div className="flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-[#F0F6FF] flex items-center justify-center border border-[#CCE1FB] shrink-0">
                  <Mail className="w-5 h-5 text-[#0071E3]" />
                </div>
                <div>
                  <div className="text-xs text-[#86868B]">Official Contact</div>
                  <div className="text-sm sm:text-base font-semibold text-[#1D1D1F] select-all">
                    {personalInfo.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-white border border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] active:bg-[#E5E5EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#6E6E73]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <Button
                  href={`mailto:${personalInfo.email}`}
                  variant="primary"
                  size="sm"
                  className="flex-1 sm:flex-none"
                  icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Send Email
                </Button>
              </div>
            </div>

            {/* Profile Channels */}
            <div className="pt-6 border-t border-[#F5F5F7] flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5EA] transition-colors border border-[#E5E5EA]"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#F0F6FF] text-[#0071E3] hover:bg-[#E1EFFF] transition-colors border border-[#CCE1FB]"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
