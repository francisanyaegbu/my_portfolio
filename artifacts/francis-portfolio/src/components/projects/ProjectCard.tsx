import { Link } from 'wouter';
import { ArrowUpRight, ExternalLink, Github, Monitor, Sparkles } from 'lucide-react';
import type { FeaturedProject } from '@/data/portfolio';

interface ProjectCardProps {
  project: FeaturedProject;
  onOpenPreview?: (project: FeaturedProject) => void;
  layout?: 'grid' | 'list' | 'featured';
}

export function ProjectCard({
  project,
  onOpenPreview,
  layout = 'grid',
}: ProjectCardProps) {
  if (layout === 'featured') {
    return (
      <div
        className="group relative overflow-hidden rounded-xl border border-white/[0.1] bg-[#13161c] transition-all hover:border-[#b8e986]/40 hover:shadow-2xl"
        data-testid={`card-project-${project.id}`}
      >
        <div className="grid gap-0 lg:grid-cols-12 lg:items-stretch">
          {/* Visual Showcase Half */}
          <div className="relative overflow-hidden bg-[#0a0c0f] lg:col-span-7 min-h-[300px] lg:min-h-[420px]">
            <img
              src={project.image}
              alt={`${project.title} live interface preview`}
              className="size-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13161c] via-transparent to-transparent opacity-80 lg:hidden" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="rounded bg-[#0d0f12]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider text-[#b8e986] border border-white/[0.1]">
                {project.category}
              </span>
              <span className="rounded bg-[#0d0f12]/80 backdrop-blur-md px-2.5 py-1 text-[11px] font-mono text-[#8f939c] border border-white/[0.1]">
                {project.year}
              </span>
            </div>

            {/* Quick Live Preview Overlay Button */}
            {onOpenPreview && (
              <button
                type="button"
                onClick={() => onOpenPreview(project)}
                className="focus-ring absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-lg border border-white/[0.2] bg-[#0d0f12]/90 px-3.5 py-2 text-xs font-semibold text-[#f0efe8] backdrop-blur-md shadow-lg transition-all hover:border-[#b8e986] hover:text-[#b8e986]"
                title="Open in interactive preview sandbox"
              >
                <Monitor className="size-3.5 text-[#b8e986]" />
                <span>Interactive Preview</span>
              </button>
            )}
          </div>

          {/* Details Half */}
          <div className="flex flex-col justify-between p-6 lg:col-span-5 lg:p-8">
            <div>
              <div className="mb-2 flex items-center gap-2 text-xs text-[#7c8089]">
                <span>{project.category}</span>
                <span aria-hidden="true">·</span>
                <span>{project.year}</span>
              </div>

              <Link href={`/projects/${project.slug}`}>
                <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#f0efe8] hover:text-[#b8e986] transition-colors">
                  {project.title}
                </h3>
              </Link>

              <p className="mt-3 text-sm leading-relaxed text-[#9ca0a8]">
                {project.description}
              </p>

              {/* Unboxed Metadata / Technologies */}
              <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#b8e986] font-mono">
                {project.technologies.map((tech, idx) => (
                  <span key={tech}>
                    {tech}
                    {idx < project.technologies.length - 1 && (
                      <span className="text-white/20 ml-2" aria-hidden="true">
                        /
                      </span>
                    )}
                  </span>
                ))}
              </div>

              {/* Key Metrics / Highlights */}
              {project.metrics && (
                <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/[0.08] pt-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <span className="block text-xs text-[#71757e]">{m.label}</span>
                      <span className="text-sm font-semibold text-[#e5e6df] font-mono">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
              {onOpenPreview ? (
                <button
                  type="button"
                  onClick={() => onOpenPreview(project)}
                  className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-3.5 py-2 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbfaa0] transition-colors"
                >
                  <Monitor className="size-3.5" />
                  <span>Live Preview</span>
                </button>
              ) : (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-3.5 py-2 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbfaa0] transition-colors"
                >
                  <span>Live Preview</span>
                  <ArrowUpRight className="size-3.5" />
                </a>
              )}

              <Link
                href={`/projects/${project.slug}`}
                className="focus-ring inline-flex items-center gap-1.5 rounded border border-white/[0.15] px-3.5 py-2 text-xs font-medium text-[#c4c6c0] hover:border-white/30 hover:text-[#f0efe8] transition-colors"
              >
                <span>Case Study</span>
              </Link>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring ml-auto inline-flex items-center gap-1 text-xs text-[#848891] hover:text-[#f0efe8] transition-colors"
                title="View GitHub Repository"
              >
                <Github className="size-3.5" />
                <span className="hidden sm:inline">Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Standard Grid Card
  return (
    <div
      className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-white/[0.09] bg-[#12151b] transition-all duration-200 hover:border-[#b8e986]/40 hover:shadow-xl"
      data-testid={`card-project-${project.id}`}
    >
      {/* Top Image Preview Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#090b0e]">
        <img
          src={project.image}
          alt={`${project.title} live interface`}
          className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12151b] via-transparent to-transparent opacity-60" />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="rounded bg-[#0d0f12]/85 backdrop-blur-md px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[#b8e986] border border-white/[0.08]">
            {project.category}
          </span>
        </div>

        {/* Live Preview badge clicker */}
        {onOpenPreview && (
          <button
            type="button"
            onClick={() => onOpenPreview(project)}
            className="focus-ring absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded bg-[#0d0f12]/90 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#f0efe8] border border-white/[0.15] hover:border-[#b8e986] hover:text-[#b8e986] transition-all shadow-md"
            title="Interactive Live Preview"
          >
            <Monitor className="size-3 text-[#b8e986]" />
            <span>Preview</span>
          </button>
        )}
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-xs text-[#71757e]">
            <span>{project.category}</span>
            <span className="font-mono">{project.year}</span>
          </div>

          <Link href={`/projects/${project.slug}`}>
            <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#f0efe8] group-hover:text-[#b8e986] transition-colors">
              {project.title}
            </h3>
          </Link>

          <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[#93979f]">
            {project.tagline || project.description}
          </p>

          {/* Unboxed tech metadata */}
          <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-[#b8e986]">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span key={tech}>
                {tech}
                {idx < Math.min(project.technologies.length, 4) - 1 && (
                  <span className="text-white/20 ml-2" aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
          <div className="flex items-center gap-2">
            {onOpenPreview ? (
              <button
                type="button"
                onClick={() => onOpenPreview(project)}
                className="focus-ring inline-flex items-center gap-1.5 rounded bg-[#b8e986]/15 px-2.5 py-1.5 text-xs font-semibold text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
              >
                <Monitor className="size-3" />
                <span>Live Demo</span>
              </button>
            ) : (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded bg-[#b8e986]/15 px-2.5 py-1.5 text-xs font-semibold text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
              >
                <span>Live Demo</span>
                <ArrowUpRight className="size-3" />
              </a>
            )}

            <Link
              href={`/projects/${project.slug}`}
              className="focus-ring inline-flex items-center gap-1 text-xs text-[#a0a3ab] hover:text-[#f0efe8] transition-colors px-2 py-1"
            >
              <span>Details</span>
            </Link>
          </div>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1 text-xs text-[#777b83] hover:text-[#f0efe8] transition-colors"
            title="GitHub Repository"
          >
            <Github className="size-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
