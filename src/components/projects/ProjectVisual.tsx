import React from 'react';
import { Camera, Sparkles, MapPin, Compass, ShieldCheck, Database, LayoutTemplate, Layers } from 'lucide-react';

interface ProjectVisualProps {
  type: 'ai-vision' | 'tourism-portal' | 'pilgrim-portal' | 'css-system' | 'architecture';
  title: string;
}

export function ProjectVisual({ type }: ProjectVisualProps) {
  switch (type) {
    case 'ai-vision':
      return (
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] overflow-hidden flex flex-col justify-between p-5 select-none">
          {/* Subtle grid background */}
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(#D2D2D7 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Top Bar */}
          <div className="relative z-10 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[11px] font-semibold text-[#1D1D1F]">
                WEBCAM_STREAM // ACTIVE
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E5E5EA] text-[11px] font-medium text-[#0071E3] shadow-xs">
              <Sparkles className="w-3 h-3 text-[#0071E3]" />
              <span>Gemini AI Verified</span>
            </div>
          </div>

          {/* Center Schematic: Facial Landmark Grid */}
          <div className="relative z-10 flex items-center justify-center my-auto">
            <div className="relative w-36 h-44 sm:w-44 sm:h-52 rounded-3xl border-2 border-dashed border-[#0071E3]/50 bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center p-3 shadow-xs">
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-[#0071E3]" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-[#0071E3]" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-[#0071E3]" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-[#0071E3]" />

              <div className="w-12 h-12 rounded-full bg-[#F0F6FF] flex items-center justify-center mb-2 border border-[#CCE1FB]">
                <Camera className="w-6 h-6 text-[#0071E3]" />
              </div>

              <div className="text-[11px] font-semibold text-[#1D1D1F] tracking-tight">
                Biometric Detection
              </div>
              <div className="text-[10px] text-[#86868B] font-mono mt-0.5">
                face-api.js // 68 Landmarks
              </div>

              {/* Status pill inside detection box */}
              <div className="mt-3 px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-medium">
                Attendance Recorded
              </div>
            </div>
          </div>

          {/* Bottom Bar: Stack telemetry */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-[#E5E5EA] text-[11px] text-[#6E6E73] font-mono">
            <span>Runtime: React 19 + Vite</span>
            <span>Database: Cloud Firestore</span>
          </div>
        </div>
      );

    case 'tourism-portal':
      return (
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] overflow-hidden flex flex-col justify-between p-5 select-none">
          {/* Subtle layout grid */}
          <div className="relative z-10 flex items-center justify-between text-xs pb-3 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="ml-2 font-mono text-[11px] text-[#6E6E73]">
                apurva200631.github.io/
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white border border-[#E5E5EA] text-[10px] font-medium text-emerald-700">
              Live Production
            </span>
          </div>

          {/* Middle Content Preview */}
          <div className="relative z-10 grid grid-cols-3 gap-3 my-auto py-2">
            <div className="bg-white p-3 rounded-xl border border-[#E5E5EA] shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-[#F0F6FF] flex items-center justify-center mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#0071E3]" />
              </div>
              <div className="text-[11px] font-semibold text-[#1D1D1F]">Siddeshwar</div>
              <div className="text-[9px] text-[#86868B] mt-0.5">Heritage Landmark</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E5E5EA] shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-[#F0F6FF] flex items-center justify-center mb-2">
                <Compass className="w-3.5 h-3.5 text-[#0071E3]" />
              </div>
              <div className="text-[11px] font-semibold text-[#1D1D1F]">Pandharpur</div>
              <div className="text-[9px] text-[#86868B] mt-0.5">Pilgrim Routes</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E5E5EA] shadow-xs">
              <div className="w-7 h-7 rounded-lg bg-[#F0F6FF] flex items-center justify-center mb-2">
                <LayoutTemplate className="w-3.5 h-3.5 text-[#0071E3]" />
              </div>
              <div className="text-[11px] font-semibold text-[#1D1D1F]">Culture & Food</div>
              <div className="text-[9px] text-[#86868B] mt-0.5">Regional Directories</div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E73] font-mono pt-2 border-t border-[#E5E5EA]">
            <span>Platform: GitHub Pages</span>
            <span>Static HTML5 / CSS3</span>
          </div>
        </div>
      );

    case 'pilgrim-portal':
      return (
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] overflow-hidden flex flex-col justify-between p-5 select-none">
          <div className="relative z-10 flex items-center justify-between text-xs pb-3 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#E5E5EA]" />
              <span className="ml-2 font-mono text-[11px] text-[#6E6E73]">
                visittulajpur.github.io/
              </span>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-white border border-[#E5E5EA] text-[10px] font-medium text-emerald-700">
              Live Production
            </span>
          </div>

          {/* Center Blueprint */}
          <div className="relative z-10 grid grid-cols-2 gap-3 my-auto py-2">
            <div className="bg-white p-3 rounded-xl border border-[#E5E5EA] space-y-1 shadow-xs">
              <div className="text-[10px] font-semibold text-[#0071E3] uppercase tracking-wider">
                Darshan Status
              </div>
              <div className="text-xs font-semibold text-[#1D1D1F]">Queue Tracking</div>
              <div className="text-[10px] text-[#86868B]">Real-time pilgrim guidance schedule</div>
            </div>

            <div className="bg-white p-3 rounded-xl border border-[#E5E5EA] space-y-1 shadow-xs">
              <div className="text-[10px] font-semibold text-[#0071E3] uppercase tracking-wider">
                Temple Map
              </div>
              <div className="text-xs font-semibold text-[#1D1D1F]">Grounds Navigation</div>
              <div className="text-[10px] text-[#86868B]">Interactive area & transport routes</div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E73] font-mono pt-2 border-t border-[#E5E5EA]">
            <span>Architecture: Multi-Route Web</span>
            <span>Dedicated Pilgrim Modules</span>
          </div>
        </div>
      );

    case 'architecture':
    default:
      return (
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-[#F5F5F7] border border-[#E5E5EA] overflow-hidden flex flex-col justify-between p-5 select-none">
          <div className="relative z-10 flex items-center justify-between text-xs pb-3 border-b border-[#E5E5EA]">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0071E3]" />
              <span className="font-semibold text-[#1D1D1F]">
                Orbion System Topology
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#6E6E73]">
              CTO Architecture Specification
            </span>
          </div>

          {/* 3-Tier Layer Blueprint */}
          <div className="relative z-10 space-y-2 my-auto">
            <div className="bg-white p-2.5 rounded-xl border border-[#E5E5EA] flex items-center justify-between shadow-xs">
              <span className="text-xs font-medium text-[#1D1D1F]">
                01. Presentation & Tokens Layer
              </span>
              <span className="text-[10px] font-mono text-[#0071E3]">
                React 19 • Tailwind v4
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#E5E5EA] flex items-center justify-between shadow-xs">
              <span className="text-xs font-medium text-[#1D1D1F]">
                02. Application Router & Typed Contracts
              </span>
              <span className="text-[10px] font-mono text-[#0071E3]">
                Next.js App Router • TS 5
              </span>
            </div>
            <div className="bg-white p-2.5 rounded-xl border border-[#E5E5EA] flex items-center justify-between shadow-xs">
              <span className="text-xs font-medium text-[#1D1D1F]">
                03. Resilient Delivery & Standards
              </span>
              <span className="text-[10px] font-mono text-[#0071E3]">
                Sub-second LCP • Strict CI
              </span>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between text-[11px] text-[#6E6E73] font-mono pt-2 border-t border-[#E5E5EA]">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Type-Safe Contracts</span>
            </span>
            <span className="flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>Modular Scalability</span>
            </span>
          </div>
        </div>
      );
  }
}
