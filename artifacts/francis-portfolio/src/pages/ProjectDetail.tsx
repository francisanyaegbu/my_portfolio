import { useState } from 'react';
import { useRoute, Link } from 'wouter';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Github,
  Laptop,
  Maximize2,
  Monitor,
  RefreshCw,
  Smartphone,
  Tablet,
  Zap,
} from 'lucide-react';
import { useProjects } from '@/hooks/use-projects';
import NotFound from '@/pages/not-found';
import { LivePreviewModal } from '@/components/projects/LivePreviewModal';

export function ProjectDetail() {
  const [, params] = useRoute('/projects/:slug');
  const slug = params?.slug?.toLowerCase();

  const { projects, isLoading } = useProjects();

  const projectIndex = projects.findIndex(
    (p) => p.slug.toLowerCase() === slug || p.id.toLowerCase() === slug || p.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === slug,
  );
  const project = projectIndex !== -1 ? projects[projectIndex] : null;

  const [interactiveMode, setInteractiveMode] = useState<'screenshot' | 'live-demo'>('live-demo');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  if (isLoading && !project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0d0f12] text-[#b8e986]">
        <div className="flex items-center gap-3 font-mono text-sm">
          <div className="size-4 animate-spin rounded-full border-2 border-[#b8e986] border-t-transparent" />
          <span>Synchronizing project from GitHub...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return <NotFound />;
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#0d0f12]">
      {/* Top Back Navigation */}
      <div className="border-b border-white/[0.08] bg-[#0d0f12] px-6 pt-28 pb-6 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between">
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 text-xs font-medium text-[#9ca0a8] hover:text-[#b8e986] transition-colors"
          >
            <ArrowLeft className="size-3.5" />
            <span>Back to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded bg-[#b8e986] px-3 py-1.5 text-xs font-semibold text-[#0d0f12] hover:bg-[#c9f59c] transition-colors"
            >
              <span>Direct Live Site</span>
              <ExternalLink className="size-3" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center gap-1.5 rounded border border-white/[0.12] px-3 py-1.5 text-xs text-[#c4c5c0] hover:text-[#f0efe8] transition-colors"
            >
              <Github className="size-3.5" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* Case Study Hero */}
      <section className="border-b border-white/[0.08] bg-[#0f1217] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex items-center gap-2 text-xs text-[#b8e986] font-mono mb-4">
            <span>{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
            <span>·</span>
            <span className="text-emerald-400">Live Vercel Preview</span>
          </div>

          <h1 className="text-3xl font-semibold tracking-[-0.05em] text-[#f0efe8] sm:text-5xl lg:text-6xl text-balance">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#a8acb5]">
            {project.longDescription || project.description}
          </p>

          {/* Metrics bar */}
          {project.metrics && (
            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-3 lg:grid-cols-4">
              {project.metrics.map((metric) => (
                <div key={metric.label}>
                  <p className="text-xs text-[#777b84]">{metric.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-[#b8e986] font-mono">
                    {metric.value}
                  </p>
                </div>
              ))}
              <div>
                <p className="text-xs text-[#777b84]">Core Stack</p>
                <p className="mt-1 text-sm font-semibold text-[#f0efe8]">
                  {project.technologies.slice(0, 2).join(' + ')}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Live Demo & Preview Sandbox */}
      <section className="border-b border-white/[0.08] bg-[#07090c] px-6 py-12 lg:px-10">
        <div className="mx-auto max-w-[1360px]">
          {/* Sandbox Header Controls */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#14171d] p-1">
                <button
                  type="button"
                  onClick={() => setInteractiveMode('live-demo')}
                  className={`focus-ring inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                    interactiveMode === 'live-demo'
                      ? 'bg-[#b8e986] text-[#0d0f12]'
                      : 'text-[#848891] hover:text-[#f0efe8]'
                  }`}
                >
                  <Monitor className="size-3.5" />
                  <span>Interactive Live Preview</span>
                </button>
                <button
                  type="button"
                  onClick={() => setInteractiveMode('screenshot')}
                  className={`focus-ring inline-flex items-center gap-1.5 rounded px-3 py-1.5 text-xs font-semibold transition-colors ${
                    interactiveMode === 'screenshot'
                      ? 'bg-[#b8e986] text-[#0d0f12]'
                      : 'text-[#848891] hover:text-[#f0efe8]'
                  }`}
                >
                  <span>Screenshot View</span>
                </button>
              </div>

              {interactiveMode === 'live-demo' && (
                <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#14171d] p-1">
                  <button
                    type="button"
                    onClick={() => setViewport('desktop')}
                    className={`rounded p-1.5 text-xs ${
                      viewport === 'desktop'
                        ? 'bg-white/[0.1] text-[#b8e986]'
                        : 'text-[#777b83] hover:text-[#f0efe8]'
                    }`}
                    title="Desktop"
                  >
                    <Laptop className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('tablet')}
                    className={`rounded p-1.5 text-xs ${
                      viewport === 'tablet'
                        ? 'bg-white/[0.1] text-[#b8e986]'
                        : 'text-[#777b83] hover:text-[#f0efe8]'
                    }`}
                    title="Tablet (768px)"
                  >
                    <Tablet className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setViewport('mobile')}
                    className={`rounded p-1.5 text-xs ${
                      viewport === 'mobile'
                        ? 'bg-white/[0.1] text-[#b8e986]'
                        : 'text-[#777b83] hover:text-[#f0efe8]'
                    }`}
                    title="Mobile (375px)"
                  >
                    <Smartphone className="size-3.5" />
                  </button>
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {interactiveMode === 'live-demo' && (
                <button
                  type="button"
                  onClick={() => setIframeKey((k) => k + 1)}
                  className="focus-ring inline-flex items-center gap-1.5 rounded border border-white/[0.1] px-2.5 py-1.5 text-xs text-[#8e929a] hover:text-[#f0efe8]"
                  title="Reload frame"
                >
                  <RefreshCw className="size-3" />
                  <span>Reload</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="focus-ring inline-flex items-center gap-1.5 rounded border border-[#b8e986]/40 bg-[#b8e986]/10 px-3 py-1.5 text-xs font-semibold text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
              >
                <Maximize2 className="size-3" />
                <span>Fullscreen Sandbox</span>
              </button>
            </div>
          </div>

          {/* Sandbox Frame Container */}
          <div className="relative overflow-hidden rounded-xl border border-white/[0.12] bg-[#111419] shadow-2xl">
            {/* Top Browser Bar */}
            <div className="flex h-9 items-center justify-between border-b border-white/[0.08] bg-[#0c0e12] px-4">
              <div className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-red-500/70" />
                <span className="size-2.5 rounded-full bg-yellow-500/70" />
                <span className="size-2.5 rounded-full bg-green-500/70" />
              </div>
              <div className="flex items-center gap-2 rounded bg-black/40 px-3 py-0.5 font-mono text-[11px] text-[#8e929b]">
                <span className="text-emerald-400">https://</span>
                <span>{project.liveUrl.replace(/^https?:\/\//, '')}</span>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#8e929b] hover:text-[#b8e986]"
                title="Open live site"
              >
                <ExternalLink className="size-3.5" />
              </a>
            </div>

            {/* Content Viewport */}
            <div className="flex min-h-[520px] items-center justify-center bg-[#08090c] p-2 sm:p-6">
              {interactiveMode === 'live-demo' ? (
                <div
                  className={`relative h-[560px] overflow-hidden rounded border border-white/[0.1] bg-white transition-all ${
                    viewport === 'desktop'
                      ? 'w-full'
                      : viewport === 'tablet'
                        ? 'w-[768px] max-w-full'
                        : 'w-[375px] max-w-full'
                  }`}
                >
                  <iframe
                    key={iframeKey}
                    src={project.liveUrl}
                    title={`Live preview of ${project.title}`}
                    className="size-full border-0"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                  />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded bg-[#0d0f12]/90 backdrop-blur-md p-2.5 text-xs text-[#f0efe8] border border-white/[0.1]">
                    <span>Interactive Prototype · Click around to test features</span>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-[#b8e986] hover:underline"
                    >
                      Open full app ↗
                    </a>
                  </div>
                </div>
              ) : (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="max-h-[560px] w-full rounded object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Details Grid */}
      <main className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-[1.8fr_1fr] lg:gap-20">
          {/* Main Narrative */}
          <div className="space-y-16">
            {/* The Challenge & The Solution */}
            <div className="grid gap-10 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.08] bg-[#111419] p-8">
                <span className="eyebrow block mb-3 text-[#b8e986]">01 / Project Scope</span>
                <h3 className="text-xl font-semibold text-[#f0efe8]">The Challenge</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9498a1]">
                  {project.problem}
                </p>
              </div>

              <div className="rounded-xl border border-white/[0.08] bg-[#111419] p-8">
                <span className="eyebrow block mb-3 text-[#b8e986]">02 / The Architecture</span>
                <h3 className="text-xl font-semibold text-[#f0efe8]">The Solution</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#9498a1]">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Features List */}
            <div>
              <p className="eyebrow mb-4 text-[#b8e986]">Core Functionality</p>
              <h2 className="text-2xl font-semibold text-[#f0efe8] sm:text-3xl">
                Engineered Capabilities & Features
              </h2>
              <ul className="mt-8 space-y-4">
                {project.keyFeatures.map((feat, idx) => (
                  <li
                    key={feat}
                    className="flex items-start gap-3.5 rounded-lg border border-white/[0.06] bg-[#12151b] p-4 text-sm text-[#cfd1ca]"
                  >
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#b8e986]/15 text-[#b8e986] text-xs font-mono">
                      {idx + 1}
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="rounded-xl border border-[#b8e986]/20 bg-[#b8e986]/5 p-8">
                <p className="eyebrow mb-2 text-[#b8e986]">Technical Notes</p>
                <h3 className="text-xl font-semibold text-[#f0efe8]">
                  Repository Highlights
                </h3>
                <div className="mt-4 space-y-3">
                  {project.highlights.map((hl) => (
                    <p key={hl} className="text-sm leading-relaxed text-[#bac0b8]">
                      • {hl}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Tech Specs */}
          <div className="space-y-10">
            {/* Tech Stack Box */}
            <div className="rounded-xl border border-white/[0.08] bg-[#12151b] p-6">
              <h3 className="eyebrow mb-4 text-[#b8e986]">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-white/[0.04] px-3 py-1.5 text-xs font-mono text-[#dcded8] border border-white/[0.06]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between rounded bg-[#b8e986] px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] hover:bg-[#cbf59e] transition-colors"
                >
                  <span>Open Live Application</span>
                  <ExternalLink className="size-3.5" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring flex items-center justify-between rounded border border-white/[0.12] px-4 py-3 text-xs text-[#c4c6c0] hover:text-[#f0efe8] transition-colors"
                >
                  <span>View Repository on GitHub</span>
                  <Github className="size-3.5" />
                </a>
              </div>
            </div>

            {/* Need a Similar Project Card */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0f1217] p-6 text-center">
              <h4 className="text-base font-semibold text-[#f0efe8]">
                Need a similar web application?
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#8a8e97]">
                I build production-ready full-stack applications with custom UI and clean TypeScript architecture.
              </p>
              <Link
                href="/contact"
                className="focus-ring mt-6 inline-flex items-center gap-2 rounded bg-[#b8e986]/15 px-4 py-2 text-xs font-semibold text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Next / Previous Project Navigation */}
        <div className="mt-24 flex flex-col items-center justify-between gap-6 border-t border-white/[0.08] pt-12 sm:flex-row">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="focus-ring flex items-center gap-3 text-left hover:text-[#b8e986] transition-colors"
            >
              <ArrowLeft className="size-4 text-[#b8e986]" />
              <div>
                <span className="block text-[10px] font-mono uppercase text-[#777b84]">Previous Project</span>
                <span className="text-sm font-semibold text-[#f0efe8]">{prevProject.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextProject && (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="focus-ring flex items-center gap-3 text-right hover:text-[#b8e986] transition-colors"
            >
              <div>
                <span className="block text-[10px] font-mono uppercase text-[#777b84]">Next Project</span>
                <span className="text-sm font-semibold text-[#f0efe8]">{nextProject.title}</span>
              </div>
              <ArrowRight className="size-4 text-[#b8e986]" />
            </Link>
          )}
        </div>
      </main>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <LivePreviewModal
          project={project}
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
