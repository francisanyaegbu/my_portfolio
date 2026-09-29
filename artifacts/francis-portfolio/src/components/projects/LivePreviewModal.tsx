import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Laptop,
  Maximize2,
  Minimize2,
  RefreshCw,
  Smartphone,
  Tablet,
  X,
  ShieldAlert,
} from 'lucide-react';
import type { FeaturedProject } from '@/data/portfolio';

interface LivePreviewModalProps {
  project: FeaturedProject;
  onClose: () => void;
}

type ViewportMode = 'desktop' | 'tablet' | 'mobile';

export function LivePreviewModal({ project, onClose }: LivePreviewModalProps) {
  const [viewport, setViewport] = useState<ViewportMode>('desktop');
  const [copied, setCopied] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(project.liveUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const refreshIframe = () => {
    setIsLoading(true);
    setIframeError(false);
    setKey((prev) => prev + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[#050608]/90 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-label={`Live preview of ${project.title}`}
    >
      {/* Top Browser Control Bar */}
      <div className="flex h-14 shrink-0 items-center justify-between border-b border-white/[0.1] bg-[#0e1116] px-4 sm:px-6">
        {/* Left: Project Title & Category */}
        <div className="flex items-center gap-3 truncate pr-4">
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#b8e986]">
              Live Preview
            </span>
          </div>
          <span className="text-white/20">|</span>
          <span className="truncate text-sm font-semibold text-[#f0efe8]">
            {project.title}
          </span>
        </div>

        {/* Center: Viewport Switcher Controls */}
        <div className="hidden sm:flex items-center gap-1 rounded-lg border border-white/[0.08] bg-[#15181e] p-1">
          <button
            type="button"
            onClick={() => setViewport('desktop')}
            className={`focus-ring inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              viewport === 'desktop'
                ? 'bg-[#b8e986]/15 text-[#b8e986]'
                : 'text-[#848891] hover:text-[#e1e2db]'
            }`}
            title="Desktop View (100%)"
          >
            <Laptop className="size-3.5" />
            <span>Desktop</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('tablet')}
            className={`focus-ring inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              viewport === 'tablet'
                ? 'bg-[#b8e986]/15 text-[#b8e986]'
                : 'text-[#848891] hover:text-[#e1e2db]'
            }`}
            title="Tablet View (768px)"
          >
            <Tablet className="size-3.5" />
            <span>Tablet</span>
          </button>
          <button
            type="button"
            onClick={() => setViewport('mobile')}
            className={`focus-ring inline-flex items-center gap-1.5 rounded px-2.5 py-1 text-xs font-medium transition-colors ${
              viewport === 'mobile'
                ? 'bg-[#b8e986]/15 text-[#b8e986]'
                : 'text-[#848891] hover:text-[#e1e2db]'
            }`}
            title="Mobile View (375px)"
          >
            <Smartphone className="size-3.5" />
            <span>Mobile</span>
          </button>
        </div>

        {/* Right: Actions & Close */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={copyUrl}
            className="focus-ring inline-flex size-8 items-center justify-center rounded border border-white/[0.08] text-[#848891] hover:border-white/20 hover:text-[#f0efe8]"
            title="Copy Preview URL"
          >
            {copied ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
          </button>
          <button
            type="button"
            onClick={refreshIframe}
            className="focus-ring inline-flex size-8 items-center justify-center rounded border border-white/[0.08] text-[#848891] hover:border-white/20 hover:text-[#f0efe8]"
            title="Reload Frame"
          >
            <RefreshCw className="size-4" />
          </button>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded border border-[#b8e986]/40 bg-[#b8e986]/10 px-2.5 py-1.5 text-xs font-medium text-[#b8e986] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
          >
            <span>Open in New Tab</span>
            <ExternalLink className="size-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex size-8 items-center justify-center rounded text-[#848891] hover:bg-white/[0.08] hover:text-[#f0efe8]"
            aria-label="Close preview"
          >
            <X className="size-5" />
          </button>
        </div>
      </div>

      {/* URL Simulator Bar */}
      <div className="flex h-9 items-center justify-between border-b border-white/[0.06] bg-[#080a0d] px-6 text-xs text-[#71757e]">
        <div className="flex items-center gap-2 font-mono truncate max-w-xl">
          <span className="text-emerald-500 font-bold">https://</span>
          <span className="truncate text-[#9a9ea7]">{project.liveUrl.replace(/^https?:\/\//, '')}</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-[11px]">
          <span>Tech: {project.technologies.slice(0, 3).join(', ')}</span>
          <span>·</span>
          <span>Press ESC to close</span>
        </div>
      </div>

      {/* Canvas Viewport Area */}
      <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[#07080a] p-2 sm:p-6">
        <div
          className={`relative h-full transition-all duration-300 ${
            viewport === 'desktop'
              ? 'w-full'
              : viewport === 'tablet'
                ? 'w-[768px] max-w-full rounded-xl ring-8 ring-white/[0.05] shadow-2xl'
                : 'w-[375px] max-w-full rounded-2xl ring-8 ring-white/[0.05] shadow-2xl'
          } overflow-hidden border border-white/[0.1] bg-[#111419]`}
        >
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111419] text-[#9c9fa6] z-10">
              <div className="size-8 rounded-full border-2 border-[#b8e986] border-t-transparent animate-spin mb-3" />
              <p className="text-xs font-mono text-[#b8e986]">Loading live preview...</p>
              <p className="text-[11px] text-[#6e727a] mt-1">{project.liveUrl}</p>
            </div>
          )}

          {/* Fallback & Sandbox UI if iframe CSP restricts embedding */}
          <div className="relative size-full flex flex-col">
            {/* Interactive Embedded Iframe with sandbox permissions */}
            <iframe
              key={key}
              src={project.liveUrl}
              title={`Live demo of ${project.title}`}
              className="size-full border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setIframeError(true);
              }}
            />

            {/* Embedded interactive showcase fallback banner if external URL blocks framing */}
            <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between rounded-lg border border-white/[0.12] bg-[#0d0f12]/95 p-3.5 shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="size-2.5 rounded-full bg-[#b8e986]" />
                <div>
                  <p className="text-xs font-semibold text-[#f0efe8]">
                    Live Interactive Demonstration
                  </p>
                  <p className="text-[11px] text-[#8e929a]">
                    Built with {project.technologies.join(' · ')}
                  </p>
                </div>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-1.5 rounded bg-[#b8e986] px-3 py-1.5 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbf79e] transition-colors"
              >
                <span>Launch Direct Site</span>
                <ArrowUpRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
