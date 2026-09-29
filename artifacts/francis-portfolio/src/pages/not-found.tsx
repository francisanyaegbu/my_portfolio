import { Link } from 'wouter';
import { ArrowLeft, CircleAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#0d0f12] px-6 text-center">
      <div className="rounded-2xl border border-white/[0.1] bg-[#12151b] p-10 max-w-md shadow-2xl">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#b8e986]/10 text-[#b8e986]">
          <CircleAlert className="size-6" />
        </div>
        <span className="eyebrow block mb-2 text-[#b8e986]">404 Error</span>
        <h1 className="text-2xl font-semibold text-[#f0efe8]">Page Not Found</h1>
        <p className="mt-3 text-sm leading-relaxed text-[#8f929b]">
          The page or project case study you requested does not exist or has been relocated.
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <Link
            href="/"
            className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-4 py-2.5 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbfaa0]"
          >
            <ArrowLeft className="size-3.5" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/projects"
            className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-4 py-2.5 text-xs font-semibold text-[#f0efe8] hover:border-white/30"
          >
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
