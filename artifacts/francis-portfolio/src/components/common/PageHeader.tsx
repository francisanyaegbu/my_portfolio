import type { ReactNode } from 'react';

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
  action?: ReactNode;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  action,
}: PageHeaderProps) {
  return (
    <div className="relative border-b border-white/[0.08] bg-[#0d0f12] px-6 pt-32 pb-16 lg:px-10 lg:pt-36 lg:pb-20">
      {/* Subtle architectural background grid line */}
      <div className="pointer-events-none absolute bottom-0 left-[50%] top-0 hidden w-px bg-white/[0.04] lg:block" />

      <div className="mx-auto max-w-[1360px]">
        <p className="eyebrow mb-4 text-[#b8e986]">{eyebrow}</p>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.05em] text-[#f0efe8] sm:text-5xl lg:text-[3.6rem] leading-[1.05] text-balance">
              {title}
            </h1>
          </div>
          {(description || children || action) && (
            <div className="flex flex-col justify-end lg:pl-10">
              {description && (
                <p className="max-w-xl text-base leading-relaxed text-[#9ca0a8] sm:text-lg">
                  {description}
                </p>
              )}
              {children}
              {action && <div className="mt-6">{action}</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
