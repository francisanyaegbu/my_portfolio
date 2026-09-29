import { useMemo, useState } from 'react';
import {
  ArrowUpRight,
  CircleAlert,
  ExternalLink,
  Github,
  Monitor,
  Plus,
  RefreshCw,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { profile, type FeaturedProject } from '@/data/portfolio';
import { useProjects } from '@/hooks/use-projects';
import { PageHeader } from '@/components/common/PageHeader';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { LivePreviewModal } from '@/components/projects/LivePreviewModal';

const categories = [
  'All',
  'Full-Stack',
  'AI & Security',
  'E-Commerce',
  'SaaS & Dashboard',
  'Frontend',
] as const;

export function Projects() {
  const { projects, liveDeploymentsCount, isLoading, isRefetching, refreshProjects, lastUpdated } = useProjects();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPreview, setSelectedPreview] = useState<FeaturedProject | null>(null);

  // Custom Preview Link Modal State (allows testing ANY Vercel or live URL)
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customUrl, setCustomUrl] = useState('');

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleLaunchCustomPreview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customUrl) return;

    let formattedUrl = customUrl.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const tempProject: FeaturedProject = {
      id: `custom-${Date.now()}`,
      slug: 'custom-preview',
      title: customTitle || 'Vercel Live Preview',
      category: 'Frontend',
      tagline: 'Direct preview of provided URL',
      description: 'Interactive preview loaded in the live sandbox viewer.',
      longDescription: '',
      problem: '',
      solution: '',
      image: projects[0]?.image || '',
      liveUrl: formattedUrl,
      githubUrl: profile.github,
      featured: false,
      year: new Date().getFullYear().toString(),
      technologies: ['Vercel Live Deployment'],
      keyFeatures: [],
      highlights: [],
    };

    setCustomModalOpen(false);
    setSelectedPreview(tempProject);
  };

  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <PageHeader
        eyebrow="Work & Live Deployments"
        title="Real GitHub Projects & Live Vercel Previews"
        description="Explore production-ready web applications, full-stack systems, and client builds with live interactive preview sandboxes."
        action={
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => refreshProjects()}
              disabled={isRefetching}
              className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] hover:bg-[#cbf59e] transition-colors"
            >
              <RefreshCw className={`size-3.5 ${isRefetching ? 'animate-spin' : ''}`} />
              <span>{isRefetching ? 'Syncing...' : 'Sync With GitHub'}</span>
            </button>

            <button
              type="button"
              onClick={() => setCustomModalOpen(true)}
              className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#f0efe8] hover:border-[#b8e986] hover:text-[#b8e986] transition-colors"
            >
              <Plus className="size-3.5" />
              <span>Preview Any Vercel URL</span>
            </button>
          </div>
        }
      />

      {/* Filter and Search Bar */}
      <section className="sticky top-[4.5rem] z-30 border-b border-white/[0.08] bg-[#0d0f12]/95 backdrop-blur-xl px-6 py-4 lg:px-10">
        <div className="mx-auto flex max-w-[1360px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`focus-ring rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#b8e986] text-[#0d0f12] font-semibold shadow-sm'
                    : 'text-[#8c9099] hover:bg-white/[0.05] hover:text-[#f0efe8]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input & Live Count */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-xs font-mono text-[#787c86]">
              {projects.length} Repositories Synced
            </span>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#6e727b]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by tech or title..."
                className="focus-ring w-full rounded-md border border-white/[0.1] bg-[#14171d] py-1.5 pl-9 pr-8 text-xs text-[#f0efe8] placeholder-[#6e727b] focus:border-[#b8e986]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6e727b] hover:text-[#f0efe8]"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Content */}
      <main className="mx-auto max-w-[1360px] px-6 py-16 lg:px-10 lg:py-24">
        {isLoading && (
          <div className="grid gap-8 md:grid-cols-2">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="animate-pulse rounded-xl border border-white/[0.08] bg-[#12151b] h-80"
              />
            ))}
          </div>
        )}

        {!isLoading && filteredProjects.length === 0 ? (
          <div className="rounded-xl border border-white/[0.08] bg-[#111419] p-12 text-center">
            <p className="text-base text-[#d2d3cb]">
              No projects match your current search and filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="focus-ring mt-4 rounded bg-[#b8e986] px-4 py-2 text-xs font-semibold text-[#0d0f12]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenPreview={setSelectedPreview}
                layout="grid"
              />
            ))}
          </div>
        )}

        {/* Repository overview banner */}
        <div className="mt-16 rounded-xl border border-white/[0.08] bg-[#111419] p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-2.5 rounded-full bg-[#b8e986]" />
            <div>
              <p className="text-xs font-semibold text-[#f0efe8]">
                Public Repositories & Deployments
              </p>
              <p className="text-[11px] text-[#81858e]">
                Explore source code, documentation, and live preview environments across all projects.
              </p>
            </div>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono text-[#b8e986] hover:underline flex items-center gap-1"
          >
            <span>github.com/francisanyaegbu</span>
            <ArrowUpRight className="size-3" />
          </a>
        </div>
      </main>

      {/* Live Preview Modal */}
      {selectedPreview && (
        <LivePreviewModal
          project={selectedPreview}
          onClose={() => setSelectedPreview(null)}
        />
      )}

      {/* Custom Vercel URL Tester Modal */}
      {customModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#050608]/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-lg rounded-xl border border-white/[0.12] bg-[#14171d] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <Monitor className="size-4 text-[#b8e986]" />
                <h3 className="text-base font-semibold text-[#f0efe8]">
                  Preview Vercel Deployment URL
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setCustomModalOpen(false)}
                className="text-[#848891] hover:text-[#f0efe8]"
              >
                <X className="size-5" />
              </button>
            </div>

            <form onSubmit={handleLaunchCustomPreview} className="mt-6 space-y-4">
              <div>
                <label className="eyebrow mb-1.5 block text-[#b8e986]">
                  Project Name (Optional)
                </label>
                <input
                  type="text"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="e.g. My Next.js App"
                  className="focus-ring w-full rounded border border-white/[0.1] bg-[#0c0e12] px-3.5 py-2.5 text-xs text-[#f0efe8] placeholder-[#636770]"
                />
              </div>

              <div>
                <label className="eyebrow mb-1.5 block text-[#b8e986]">
                  Vercel Live URL *
                </label>
                <input
                  type="text"
                  required
                  value={customUrl}
                  onChange={(e) => setCustomUrl(e.target.value)}
                  placeholder="https://your-project.vercel.app"
                  className="focus-ring w-full rounded border border-white/[0.1] bg-[#0c0e12] px-3.5 py-2.5 text-xs text-[#f0efe8] placeholder-[#636770]"
                />
              </div>

              <p className="text-[11px] text-[#71757e]">
                Paste your Vercel deployment link to immediately inspect it across Desktop, Tablet, and Mobile viewports.
              </p>

              <div className="flex justify-end gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setCustomModalOpen(false)}
                  className="rounded border border-white/[0.1] px-4 py-2 text-xs text-[#8f939c] hover:text-[#f0efe8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded bg-[#b8e986] px-4 py-2 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbfaa0]"
                >
                  Launch Sandbox Preview
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
