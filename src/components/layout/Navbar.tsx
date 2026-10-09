'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navigationItems, personalInfo } from '@/content/portfolio-data';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '@/components/common/Icons';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-[#E5E5EA] shadow-[0_1px_3px_rgba(0,0,0,0.03)]'
          : 'bg-white/60 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-base sm:text-lg font-semibold tracking-tight text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded-md px-1 py-0.5"
            aria-label="Apurv Nimbarge - Home"
          >
            <span>Apurv Nimbarge</span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#0071E3] opacity-80 group-hover:scale-125 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6E6E73]"
            aria-label="Main Navigation"
          >
            {navigationItems.map((item) => {
              const isContact = item.label.toLowerCase() === 'contact';
              if (isContact) return null; // We display Contact as a separate CTA pill
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-[#1D1D1F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3] rounded px-1.5 py-1"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2 rounded-full text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#E5E5EA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
              aria-label={`Visit Apurv Nimbarge GitHub profile (@${personalInfo.githubUsername})`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-[#1D1D1F] text-white hover:bg-[#333336] active:bg-[#000000] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-[#1D1D1F] hover:bg-[#F5F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0071E3]"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E5E5EA] bg-white/95 backdrop-blur-lg px-4 pt-3 pb-6 animate-in fade-in slide-in-from-top-2 duration-200 shadow-lg">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors"
              >
                <span>{item.label}</span>
                <span className="text-[#86868B] text-xs">→</span>
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E5E5EA] flex flex-col gap-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#F5F5F7] text-[#1D1D1F] text-sm font-semibold hover:bg-[#E5E5EA] transition-colors border border-[#E5E5EA]"
                aria-label={`Open GitHub profile @${personalInfo.githubUsername}`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (@{personalInfo.githubUsername})</span>
              </a>

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1D1D1F] text-white text-sm font-semibold hover:bg-[#333336] transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
