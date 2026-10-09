import React from 'react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Badge } from '@/components/common/Badge';
import { Button } from '@/components/common/Button';
import { Building2, Compass, ShieldCheck, Zap, Workflow, ArrowUpRight } from 'lucide-react';
import { GmailIcon } from '@/components/common/Icons';

export function OrbionSection() {
  return (
    <section id="orbion" className="py-24 sm:py-32 bg-[#FBFBFD] border-t border-[#E5E5EA]">
      <Container size="wide">
        <SectionHeading
          eyebrow="Executive Leadership • Orbion Technologies"
          title="Engineering ideas into intelligent products."
          description="Directing the technological foundation, architectural discipline, and engineering standards at Orbion Technologies—connecting technical curiosity with purposeful product execution."
        />

        {/* Featured Leadership Bento Grid */}
        <div className="rounded-3xl bg-white border border-[#E5E5EA] p-8 sm:p-12 lg:p-16 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative overflow-hidden mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="accent" className="gap-1.5 py-1 px-3">
                  <Building2 className="w-3.5 h-3.5 text-[#0071E3]" />
                  <span>Chief Technology Officer</span>
                </Badge>
                <span className="text-xs text-[#86868B] font-mono">Orbion Technologies</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1D1D1F] leading-tight">
                Architectural Clarity & Product Stewardship
              </h3>

              <p className="text-base text-[#6E6E73] leading-relaxed font-normal">
                At Orbion Technologies, Apurv Nimbarge serves as Chief Technology Officer, overseeing technological architecture, developer standards, and platform strategy. The focus is simple: engineering systems that remain scalable, maintainable, and directly aligned with product milestones.
              </p>

              <p className="text-sm text-[#6E6E73] leading-relaxed font-normal">
                By bridging hands-on software development with executive planning, the CTO office ensures technical feasibility is established early, preventing architectural debt and fostering an engineering culture grounded in clarity.
              </p>

              {/* 3 Leadership Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
                  <ShieldCheck className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    System Stability
                  </div>
                  <div className="text-[11px] text-[#86868B] leading-relaxed">
                    Deterministic code patterns, strong type safety, and clean boundaries.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
                  <Zap className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    High Performance
                  </div>
                  <div className="text-[11px] text-[#86868B] leading-relaxed">
                    Lean dependencies, fast render cycles, and responsive ergonomics.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FBFBFD] border border-[#E5E5EA]">
                  <Workflow className="w-5 h-5 text-[#0071E3] mb-2" />
                  <div className="text-xs font-semibold text-[#1D1D1F] mb-1">
                    Product Alignment
                  </div>
                  <div className="text-[11px] text-[#86868B] leading-relaxed">
                    Translating concepts into structured, maintainable software deliverables.
                  </div>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-[#FBFBFD] rounded-2xl p-6 sm:p-8 border border-[#E5E5EA] space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6E6E73]">
                <Compass className="w-4 h-4 text-[#0071E3]" />
                <span>Leadership Profile</span>
              </div>

              <div className="space-y-3.5 text-xs text-[#6E6E73] leading-relaxed">
                <div className="p-3 rounded-xl bg-white border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-semibold text-[#86868B]">Organization</div>
                  <div className="text-sm font-semibold text-[#1D1D1F] mt-0.5">Orbion Technologies</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-semibold text-[#86868B]">Official Designation</div>
                  <div className="text-sm font-semibold text-[#1D1D1F] mt-0.5">Chief Technology Officer (CTO)</div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-[#E5E5EA]">
                  <div className="text-[10px] uppercase font-semibold text-[#86868B]">Direct Contact Channel</div>
                  <div className="text-xs font-mono font-medium text-[#0071E3] mt-0.5 select-all">
                    apurv.orbion@gmail.com
                  </div>
                  <div className="text-[10px] text-[#86868B] mt-0.5">
                    Designated Orbion company inbox
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  href="mailto:apurv.orbion@gmail.com"
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<GmailIcon className="w-4 h-4" />}
                  aria-label="Send email to Orbion company inbox apurv.orbion@gmail.com"
                >
                  <span>Inquire via Orbion Mail</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
