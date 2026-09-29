import { useState } from 'react';
import { Link } from 'wouter';
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Monitor,
  RefreshCw,
  Sparkles,
  Zap,
} from 'lucide-react';
import profilePhoto from '@assets/0_pfp_1789734200457.jpg';
import { profile, services, type FeaturedProject } from '@/data/portfolio';
import { useProjects } from '@/hooks/use-projects';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { LivePreviewModal } from '@/components/projects/LivePreviewModal';

export function Home() {
  const [selectedPreview, setSelectedPreview] = useState<FeaturedProject | null>(null);
  const { projects, liveDeploymentsCount, isRefetching, refreshProjects } = useProjects();

  const featured = projects.filter((p) => p.featured).slice(0, 4);
  const displayProjects = featured.length >= 3 ? featured : projects.slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0d0f12]">
      {/* Hero Section */}
      <section className="relative flex min-h-[min(880px,100dvh)] items-end overflow-hidden border-b border-white/[0.08] px-6 pb-16 pt-32 lg:px-10 lg:pb-24">
        {/* Subtle geometric circle background */}
        <div className="pointer-events-none absolute right-[-10vw] top-[15%] size-[44rem] rounded-full border border-[#b8e986]/[0.08]">
          <div className="absolute inset-12 rounded-full border border-[#b8e986]/[0.06]" />
          <div className="absolute inset-28 rounded-full border border-[#b8e986]/[0.05]" />
          <div className="absolute left-1/2 top-0 h-full w-px bg-[#b8e986]/[0.08]" />
          <div className="absolute left-0 top-1/2 h-px w-full bg-[#b8e986]/[0.08]" />
        </div>

        <div className="pointer-events-none absolute bottom-0 left-[55%] top-0 hidden w-px bg-white/[0.04] lg:block" />

        <div className="relative z-10 mx-auto w-full max-w-[1360px]">
          {/* Availability Status */}
          <div className="mb-10 flex items-center gap-3 text-[#a9adb5]">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#b8e986] opacity-75" />
              <span className="relative inline-flex size-2.5 rounded-full bg-[#b8e986]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-[#b8e986]">
              {profile.location}
            </span>
          </div>

          <div className="max-w-[1020px]">
            <p className="eyebrow mb-4 text-[#b8e986]">
              Full-Stack / Frontend Developer
            </p>
            <h1 className="text-[clamp(3.2rem,7.5vw,7.8rem)] font-semibold leading-[0.92] tracking-[-0.075em] text-[#f0efe8] text-balance">
              Digital work
              <br />
              <span className="text-[#7c8088]">with a point of view.</span>
            </h1>

            <div className="mt-10 grid max-w-3xl gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
              <p className="max-w-xl text-base leading-relaxed text-[#a8aaa4] sm:text-lg">
                {profile.intro}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] hover:bg-[#cbf59e] transition-all"
                >
                  <Monitor className="size-4" />
                  <span>View Projects & Demos</span>
                </Link>

                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#f0efe8] hover:border-[#b8e986] hover:text-[#b8e986] transition-colors"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom quick ticker */}
          <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-white/[0.08] pt-6 text-xs text-[#71757e]">
            <span>Frontend systems</span>
            <span>Product interfaces</span>
            <span>Full-stack architecture</span>
            <div className="ml-auto flex items-center gap-2 font-mono text-[#b8e986]">
              <Github className="size-3.5" />
              <span>{projects.length} Repositories Online</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Live Previews Callout Banner */}
      <section className="border-b border-white/[0.08] bg-[#111419]/60 py-10 px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4">
            <div className="flex size-12 items-center justify-center rounded-lg border border-[#b8e986]/30 bg-[#b8e986]/10 text-[#b8e986]">
              <Monitor className="size-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-[#f0efe8]">
                Real GitHub Repositories & Live Vercel Deployments
              </h2>
              <p className="text-sm text-[#8c9099]">
                Every repository you deploy to Vercel updates automatically on this site with interactive live preview sandboxes.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => refreshProjects()}
              disabled={isRefetching}
              className="focus-ring inline-flex items-center gap-1.5 rounded border border-white/[0.12] bg-[#14171d] px-3 py-2 text-xs font-mono text-[#8f929a] hover:text-[#f0efe8] transition-colors"
              title="Sync latest GitHub repositories"
            >
              <RefreshCw className={`size-3.5 ${isRefetching ? 'animate-spin text-[#b8e986]' : ''}`} />
              <span>{isRefetching ? 'Syncing...' : 'Sync GitHub'}</span>
            </button>
            <Link
              href="/projects"
              className="focus-ring inline-flex items-center gap-2 rounded border border-[#b8e986]/50 bg-[#b8e986]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
            >
              <span>Explore All Demos</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3 text-[#b8e986]">Selected Real Work</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#f0efe8] sm:text-4xl lg:text-5xl">
              Production-ready web applications.
            </h2>
          </div>
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 text-xs font-medium text-[#b8e986] hover:underline"
          >
            <span>View All ({projects.length}) Projects</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        {/* Lead Featured Project (Bento format) */}
        <div className="space-y-10">
          {displayProjects[0] && (
            <ProjectCard
              project={displayProjects[0]}
              onOpenPreview={setSelectedPreview}
              layout="featured"
            />
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.slice(1, 4).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenPreview={setSelectedPreview}
                layout="grid"
              />
            ))}
          </div>
        </div>
      </section>

      {/* About & Philosophy Teaser */}
      <section className="border-y border-white/[0.08] bg-[#111419]">
        <div className="mx-auto max-w-[1360px] px-6 py-28 lg:px-10 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div>
              <p className="eyebrow mb-4 text-[#b8e986]">Engineering Philosophy</p>
              <h2 className="text-3xl font-semibold leading-[1.15] tracking-[-0.045em] text-[#f0efe8] sm:text-4xl">
                Good software should feel obvious, fast, and durable.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#9ca0a8]">
                {profile.about}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#e8e9e2] hover:border-[#b8e986] hover:text-[#b8e986] transition-colors"
                >
                  <span>Read Full Background & Timeline</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 border-l border-white/[0.08] pl-6 lg:pl-10">
              <div className="border-b border-white/[0.08] pb-6">
                <span className="eyebrow block mb-2 text-[#b8e986]">01 / Clarity</span>
                <h3 className="text-sm font-semibold text-[#f0efe8]">Problem First</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#81858e]">
                  Understand the business reality and core workflows before writing code.
                </p>
              </div>
              <div className="border-b border-white/[0.08] pb-6">
                <span className="eyebrow block mb-2 text-[#b8e986]">02 / Precision</span>
                <h3 className="text-sm font-semibold text-[#f0efe8]">Considered Detail</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#81858e]">
                  Micro-interactions, keyboard accessibility, and state resilience.
                </p>
              </div>
              <div className="pt-2">
                <span className="eyebrow block mb-2 text-[#b8e986]">03 / Speed</span>
                <h3 className="text-sm font-semibold text-[#f0efe8]">Sub-Second Speed</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#81858e]">
                  Aggressive code-splitting, asset budgeting, and 95+ Lighthouse targets.
                </p>
              </div>
              <div className="pt-2">
                <span className="eyebrow block mb-2 text-[#b8e986]">04 / Ownership</span>
                <h3 className="text-sm font-semibold text-[#f0efe8]">Clean Handoff</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#81858e]">
                  TypeScript strict typing, documentation, and zero technical debt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="mx-auto max-w-[1360px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3 text-[#b8e986]">Services & Solutions</p>
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-[#f0efe8] sm:text-4xl lg:text-5xl">
              How I can help your team.
            </h2>
          </div>
          <Link
            href="/services"
            className="focus-ring inline-flex items-center gap-2 text-xs font-medium text-[#b8e986] hover:underline"
          >
            <span>Explore All Services</span>
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.slice(0, 3).map((srv) => (
            <div
              key={srv.id}
              className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#12151b] p-8 hover:border-[#b8e986]/40 transition-colors"
            >
              <div>
                <span className="eyebrow block mb-4 text-[#b8e986]">{srv.number}</span>
                <h3 className="text-xl font-semibold text-[#f0efe8]">{srv.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#8f939c]">
                  {srv.description}
                </p>
              </div>
              <div className="mt-8 border-t border-white/[0.08] pt-4">
                <p className="text-[11px] font-mono text-[#b8e986]">
                  {srv.technologies.slice(0, 3).join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Contact Callout */}
      <section className="border-t border-white/[0.08] bg-[#0c0e12] px-6 py-24 lg:px-10 lg:py-32 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow mb-4 text-[#b8e986]">Ready to Build?</p>
          <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[#f0efe8] sm:text-5xl lg:text-6xl text-balance">
            Let's turn your concept into high-performance software.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-[#989ca5]">
            Whether you need a new full-stack application, an optimized marketing site, or an accessible design system, I am available to help.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] hover:bg-[#cbf59e] transition-colors"
            >
              <span>Start A Project Conversation</span>
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#f0efe8] hover:border-white/30"
            >
              <span>Email Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* Live Preview Modal */}
      {selectedPreview && (
        <LivePreviewModal
          project={selectedPreview}
          onClose={() => setSelectedPreview(null)}
        />
      )}
    </div>
  );
}
