import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowUpRight, Github, Linkedin, Menu, X, Sparkles, Monitor } from 'lucide-react';
import profilePhoto from '@assets/0_pfp_1789734200457.jpg';
import { navigation, profile } from '@/data/portfolio';

export function Header() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#0d0f12]/85 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-[4.5rem] max-w-[1360px] items-center justify-between px-6 lg:px-10">
        {/* Zone 1: Wordmark Brand Lockup */}
        <Link
          href="/"
          onClick={closeMenu}
          className="focus-ring flex items-center gap-3 rounded-sm group"
          data-testid="link-home"
        >
          <img
            src={profilePhoto}
            alt="Francis Anyaegbu"
            className="size-8 rounded-sm object-cover ring-1 ring-white/10 group-hover:ring-[#b8e986]/60 transition-all"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[-0.02em] text-[#f0efe8] group-hover:text-[#b8e986] transition-colors">
              Francis Anyaegbu
            </span>
            <span className="text-[10px] font-mono text-[#777b84] hidden sm:block">
              Full-Stack & Frontend
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => {
            const isActive =
              item.href === '/'
                ? location === '/'
                : location.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring relative py-1 text-xs uppercase tracking-[0.12em] font-medium transition-colors ${
                  isActive
                    ? 'text-[#b8e986]'
                    : 'text-[#9c9fa6] hover:text-[#f0efe8]'
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-[-1.3rem] left-0 right-0 h-[2px] bg-[#b8e986]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-xs text-[#b8e986] border border-[#b8e986]/30 bg-[#b8e986]/5 hover:bg-[#b8e986]/10 transition-colors"
            data-testid="link-header-live-previews"
          >
            <Monitor className="size-3.5" />
            <span>Live Previews</span>
          </Link>

          <Link
            href="/contact"
            className="focus-ring inline-flex items-center gap-2 rounded-sm border border-[#b8e986] bg-[#b8e986] px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#0d0f12] transition-transform hover:bg-[#c9f59c] active:scale-[0.98]"
            data-testid="link-header-contact"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="focus-ring rounded-sm p-2 text-[#f0efe8] hover:text-[#b8e986] md:hidden"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="border-t border-white/[0.08] bg-[#111419]/95 backdrop-blur-xl px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navigation.map((item) => {
              const isActive =
                item.href === '/'
                  ? location === '/'
                  : location.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`focus-ring flex items-center justify-between rounded-md px-3 py-3 text-base transition-colors ${
                    isActive
                      ? 'bg-[#b8e986]/10 text-[#b8e986] font-medium'
                      : 'text-[#c4c5c0] hover:bg-white/[0.04] hover:text-[#f0efe8]'
                  }`}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="size-1.5 rounded-full bg-[#b8e986]" />}
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-white/[0.08]">
            <Link
              href="/projects"
              onClick={closeMenu}
              className="focus-ring flex items-center justify-center gap-2 rounded-sm border border-[#b8e986]/40 bg-[#b8e986]/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#b8e986]"
              data-testid="link-mobile-live-previews"
            >
              <Monitor className="size-4" />
              <span>Explore Live Previews</span>
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="focus-ring flex items-center justify-center gap-2 rounded-sm bg-[#b8e986] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12]"
              data-testid="link-mobile-contact"
            >
              <span>Let's Work Together</span>
              <ArrowUpRight className="size-4" />
            </Link>

            <div className="mt-2 flex items-center justify-center gap-6 pt-3 text-[#858991]">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#f0efe8]"
                aria-label="GitHub profile"
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs hover:text-[#f0efe8]"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
