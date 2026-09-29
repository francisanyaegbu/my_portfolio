import { Link } from 'wouter';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Code2,
  HelpCircle,
  Layers,
  Sparkles,
  Zap,
} from 'lucide-react';
import { process, services } from '@/data/portfolio';
import { PageHeader } from '@/components/common/PageHeader';

const engagementModels = [
  {
    title: 'Fixed-Scope Project',
    tagline: 'Ideal for clearly defined websites, platforms, or MVP releases.',
    description:
      'We establish a locked deliverable scope, explicit timeline, and milestone-based payments. Best for launching a new product or complete site rebuild.',
    features: [
      'Fixed budget & locked milestones',
      'Comprehensive QA & browser testing',
      'Bi-weekly progress demos',
      'Post-launch 30-day bug warranty',
    ],
  },
  {
    title: 'Dedicated Engineering Sprint',
    tagline: 'Ideal for active teams needing high-velocity frontend muscle.',
    description:
      'I embed directly into your sprint cycle to execute critical frontend features, design system implementations, or complex full-stack modules.',
    features: [
      'Direct integration with GitHub & Slack',
      'High daily code velocity & PR turnaround',
      'Flexible sprint-by-sprint renewal',
      'Zero onboarding overhead',
    ],
  },
  {
    title: 'Frontend Architecture & Audit',
    tagline: 'Ideal for upgrading performance, accessibility, or code quality.',
    description:
      'A deep-dive technical audit into your React/Next.js codebase, identifying performance bottlenecks, accessibility failures, and architectural improvements.',
    features: [
      'Lighthouse & Core Web Vitals audit',
      'Bundle size reduction roadmap',
      'WCAG AA accessibility review',
      'Concrete PRs with optimization fixes',
    ],
  },
];

const faqs = [
  {
    q: 'How quickly can we kick off a new project?',
    a: 'Typical kickoff occurs within 3 to 7 business days following our initial alignment call and scope approval.',
  },
  {
    q: 'What does our communication workflow look like?',
    a: 'I provide async progress updates via Loom or Slack, with weekly or bi-weekly live demos so you have full visibility at every milestone.',
  },
  {
    q: 'Do you help with design or only code implementation?',
    a: 'I specialize in translating Figma/Sketch designs into high-precision code. If you do not have finished designs, I establish clean, responsive typographic systems and layout hierarchies directly.',
  },
  {
    q: 'What happens after the project launches?',
    a: 'All deliverables include full source code transfer, deployment setup, and a 30-day post-launch support window for bug fixes.',
  },
];

export function Services() {
  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <PageHeader
        eyebrow="Services & Offerings"
        title="Production Engineering for Modern Digital Products"
        description="I partner with founders, businesses, and engineering teams to design, architect, and ship high-performance web applications."
      />

      <main className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28 space-y-32">
        {/* All Services Detailed List */}
        <section>
          <div className="mb-14">
            <span className="eyebrow block mb-3 text-[#b8e986]">01 / Core Offerings</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              What I Build for Clients
            </h2>
          </div>

          <div className="space-y-8">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="rounded-xl border border-white/[0.08] bg-[#12151b] p-8 lg:p-10 hover:border-[#b8e986]/40 transition-colors"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
                  <div>
                    <span className="eyebrow block mb-2 text-[#b8e986]">{srv.number}</span>
                    <h3 className="text-2xl font-semibold text-[#f0efe8]">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#b8e986]">
                      {srv.tagline}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#9ca0a9]">
                      {srv.description}
                    </p>

                    <div className="mt-6 rounded-lg border border-white/[0.06] bg-[#0d0f12] p-4 text-xs">
                      <span className="text-[#7d818a] block mb-1">Ideal For:</span>
                      <span className="text-[#cfd1c9]">{srv.idealFor}</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between border-t border-white/[0.08] pt-6 lg:border-t-0 lg:border-l lg:border-white/[0.08] lg:pl-10 lg:pt-0">
                    <div>
                      <p className="eyebrow mb-3 text-[#e1e2db]">Key Deliverables</p>
                      <ul className="space-y-2.5 text-xs text-[#cfd1c9]">
                        {srv.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2">
                            <CheckCircle className="size-3.5 shrink-0 text-[#b8e986] mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <p className="eyebrow mb-2 text-[#7d818a]">Primary Stack</p>
                      <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-[#b8e986]">
                        {srv.technologies.map((t) => (
                          <span
                            key={t}
                            className="rounded bg-white/[0.03] px-2.5 py-1 border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The 4-Step Process */}
        <section>
          <div className="mb-14">
            <span className="eyebrow block mb-3 text-[#b8e986]">02 / Methodology</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              The 4-Step Development Process
            </h2>
            <p className="mt-2 text-sm text-[#8a8e97]">
              A proven framework ensuring on-time delivery with zero surprises.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-white/[0.08] bg-[#111419] p-8 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xl font-bold text-[#b8e986]">
                    {step.number}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#f0efe8]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-[#8f939c]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Models */}
        <section>
          <div className="mb-14">
            <span className="eyebrow block mb-3 text-[#b8e986]">03 / Collaboration</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              Flexible Engagement Models
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className="flex flex-col justify-between rounded-xl border border-white/[0.08] bg-[#12151b] p-8 hover:border-white/[0.15] transition-colors"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#f0efe8]">
                    {model.title}
                  </h3>
                  <p className="mt-1 text-xs text-[#b8e986]">
                    {model.tagline}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-[#92969f]">
                    {model.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-xs text-[#cfd1c9] border-t border-white/[0.06] pt-4">
                    {model.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-[#b8e986]">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/[0.08] pt-6">
                  <Link
                    href="/contact"
                    className="focus-ring flex items-center justify-between rounded bg-white/[0.05] px-4 py-2.5 text-xs font-semibold text-[#f0efe8] hover:bg-[#b8e986] hover:text-[#0d0f12] transition-colors"
                  >
                    <span>Inquire for this Model</span>
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="rounded-xl border border-white/[0.08] bg-[#111419] p-8 sm:p-12">
          <div className="mb-10">
            <span className="eyebrow block mb-3 text-[#b8e986]">04 / Clarifications</span>
            <h2 className="text-2xl font-semibold text-[#f0efe8] sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-white/[0.06] pb-6">
                <h3 className="text-sm font-semibold text-[#f0efe8]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#8f939c]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Ready to start */}
        <section className="text-center py-10">
          <h2 className="text-3xl font-semibold text-[#f0efe8] sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-[#8e929a]">
            Let's discuss your timeline, technical goals, and how we can bring your vision to life.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] hover:bg-[#cbf59e] transition-colors"
            >
              <span>Schedule Introductory Chat</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
