'use client';

import React, { useState } from 'react';
import { contactChannels, personalInfo } from '@/content/portfolio-data';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  GmailIcon,
  YahooIcon,
} from '@/components/common/Icons';
import { MapPin, ArrowUpRight, Copy, Check, Mail } from 'lucide-react';

export function ContactCtaSection() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2500);
    } catch {
      setCopiedId(null);
    }
  };

  const renderServiceIcon = (service: string) => {
    switch (service) {
      case 'linkedin':
        return <LinkedinIcon className="w-5 h-5 text-[#0071E3]" />;
      case 'github':
        return <GithubIcon className="w-5 h-5 text-[#1D1D1F]" />;
      case 'gmail':
        return <GmailIcon className="w-5 h-5" />;
      case 'yahoo':
        return <YahooIcon className="w-5 h-5 text-[#6001D2]" />;
      case 'x':
        return <XIcon className="w-4 h-4 text-[#1D1D1F]" />;
      default:
        return <Mail className="w-5 h-5 text-[#0071E3]" />;
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Direct Communication"
          title="Initiate a Conversation"
          description="Direct, verified contact destinations for software development inquiries, academic discussions at MIT Vishwaprayag University, and official matters concerning Orbion Technologies."
        />

        {/* Location & Availability Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 p-4 rounded-2xl bg-white border border-[#E5E5EA] shadow-xs">
          <div className="flex items-center gap-2 text-xs text-[#6E6E73]">
            <MapPin className="w-4 h-4 text-[#0071E3]" />
            <span>
              Based in <strong className="text-[#1D1D1F]">{personalInfo.location}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[#1D1D1F]">
              Direct Inboxes Active & Monitored
            </span>
          </div>
        </div>

        {/* 6 Official Contact Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactChannels.map((channel) => {
            const isEmail = channel.type === 'email';
            const isCopied = copiedId === channel.id;

            return (
              <div
                key={channel.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] ${
                  channel.isCompany
                    ? 'border-[#0071E3]/40 ring-1 ring-[#0071E3]/20 bg-gradient-to-b from-white to-[#F0F6FF]/30'
                    : 'border-[#E5E5EA] hover:border-[#D2D2D7]'
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] flex items-center justify-center">
                      {renderServiceIcon(channel.service)}
                    </div>

                    {channel.isCompany ? (
                      <Badge variant="accent" className="font-semibold text-[11px]">
                        Orbion Company Email
                      </Badge>
                    ) : (
                      <Badge variant="neutral" className="text-[11px]">
                        {channel.label}
                      </Badge>
                    )}
                  </div>

                  {/* Channel Name & Details */}
                  <h3 className="text-lg font-semibold tracking-tight text-[#1D1D1F] mb-1">
                    {channel.name}
                  </h3>

                  <p className="text-xs text-[#6E6E73] leading-relaxed mb-4">
                    {channel.description}
                  </p>

                  <div className="p-3 rounded-xl bg-[#F5F5F7] border border-[#E5E5EA] text-xs font-mono text-[#1D1D1F] break-all select-all mb-6">
                    {channel.value}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-[#F5F5F7] flex items-center gap-2">
                  {isEmail ? (
                    <>
                      <a
                        href={channel.href}
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#1D1D1F] text-white hover:bg-[#333336] active:bg-[#000000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
                        aria-label={`Send email to ${channel.value}`}
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send Email</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleCopy(channel.id, channel.value)}
                        className="inline-flex items-center justify-center p-2.5 min-w-[44px] min-h-[44px] rounded-full text-xs font-medium bg-white border border-[#D2D2D7] text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
                        aria-label={`Copy email ${channel.value}`}
                        title="Copy email address"
                      >
                        {isCopied ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5 text-[#6E6E73]" />
                        )}
                      </button>
                    </>
                  ) : (
                    <a
                      href={channel.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs font-semibold bg-[#1D1D1F] text-white hover:bg-[#333336] active:bg-[#000000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
                      aria-label={`Open ${channel.name} profile in new tab`}
                    >
                      <span>Open {channel.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
