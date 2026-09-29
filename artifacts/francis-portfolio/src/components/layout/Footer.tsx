import { Link } from 'wouter';
import { ArrowUpRight, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { navigation, profile } from '@/data/portfolio';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#090b0e] text-[#9c9fa6]">
      <div className="mx-auto max-w-[1360px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand & Purpose Column */}
          <div>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-[#b8e986] animate-pulse" />
              <span className="text-sm font-semibold tracking-[-0.02em] text-[#f0efe8]">
                Francis Anyaegbu
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#8f929a]">
              Full-Stack & Frontend Developer translating considered interface design into production-ready web applications and resilient systems.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#b8e986]">
              <span className="inline-block size-1.5 rounded-full bg-[#b8e986]" />
              <span>{profile.availability}</span>
            </div>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <p className="eyebrow mb-4 text-[#e1e2db]">Navigation</p>
            <ul className="space-y-2.5 text-xs">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#b8e986] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1 text-[#b8e986] hover:underline"
                >
                  <span>Live Project Demos</span>
                  <ArrowUpRight className="size-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <p className="eyebrow mb-4 text-[#e1e2db]">Connect & Inquiries</p>
            <div className="space-y-3 text-xs">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 hover:text-[#f0efe8] transition-colors"
              >
                <Mail className="size-3.5 text-[#b8e986]" />
                <span>{profile.email}</span>
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#f0efe8] transition-colors"
              >
                <Github className="size-3.5 text-[#b8e986]" />
                <span>github.com/francisanyaegbu</span>
                <ArrowUpRight className="size-3 text-[#6f737c]" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#f0efe8] transition-colors"
              >
                <Linkedin className="size-3.5 text-[#b8e986]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="size-3 text-[#6f737c]" />
              </a>
            </div>
            <p className="mt-6 text-[11px] text-[#6b6f78]">
              Based in {profile.location}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-[#6b6f78] sm:flex-row">
          <p>© {new Date().getFullYear()} Francis Anyaegbu. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <span>·</span>
            <Link href="/contact" className="text-[#b8e986] hover:underline">
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
