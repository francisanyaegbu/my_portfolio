import { Link } from 'wouter';
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
  Code2,
  Download,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from 'lucide-react';
import profilePhoto from '@assets/0_pfp_1789734200457.jpg';
import {
  experienceData,
  profile,
  skillsData,
} from '@/data/portfolio';
import { PageHeader } from '@/components/common/PageHeader';

export function About() {
  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <PageHeader
        eyebrow="Developer Background"
        title="Engineering Thoughtful Digital Products"
        description="I am a Full-Stack & Frontend Developer bridging high-craft UI design and dependable system architecture."
      />

      <main className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28 space-y-32">
        {/* Story & Biography Section */}
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 items-start">
          <div>
            <span className="eyebrow block mb-4 text-[#b8e986]">01 / Narrative</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              From design intent to resilient, accessible production code.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#9ea2aa]">
              <p>{profile.about}</p>
              <p>{profile.story}</p>
              <p>
                Whether I am collaborating with product designers on component hierarchies or tuning server-rendered React applications for sub-second global delivery, my focus remains constant: eliminate unnecessary complexity and make the digital experience effortless for the end user.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded bg-[#b8e986] px-4 py-2.5 text-xs font-semibold text-[#0d0f12] hover:bg-[#cbf59e] transition-colors"
              >
                <Github className="size-4" />
                <span>GitHub Profile</span>
                <ArrowUpRight className="size-3.5" />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="focus-ring inline-flex items-center gap-2 rounded border border-white/[0.15] px-4 py-2.5 text-xs font-semibold text-[#f0efe8] hover:border-white/30 transition-colors"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn Profile</span>
              </a>

              <Link
                href="/contact"
                className="focus-ring inline-flex items-center gap-2 text-xs font-semibold text-[#b8e986] hover:underline ml-2"
              >
                <span>Let's talk about your project →</span>
              </Link>
            </div>
          </div>

          {/* Profile Card / Facts */}
          <div className="rounded-xl border border-white/[0.09] bg-[#12151b] p-8 shadow-xl">
            <div className="flex items-center gap-5 border-b border-white/[0.08] pb-6">
              <img
                src={profilePhoto}
                alt="Francis Anyaegbu"
                className="size-20 rounded-lg object-cover ring-2 ring-[#b8e986]/40"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#f0efe8]">
                  {profile.name}
                </h3>
                <p className="text-xs font-mono text-[#b8e986] mt-0.5">
                  {profile.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-[#7d818a] mt-2">
                  <MapPin className="size-3.5 text-[#b8e986]" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3.5 text-xs">
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-[#7d818a]">Timezone:</span>
                <span className="font-mono text-[#e1e2db]">{profile.timezone}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-[#7d818a]">Status:</span>
                <span className="font-mono text-[#b8e986]">Open for Work</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/[0.04]">
                <span className="text-[#7d818a]">Specialization:</span>
                <span className="text-[#e1e2db]">React, Next.js, Full-Stack</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#7d818a]">Languages:</span>
                <span className="text-[#e1e2db]">English (Fluent)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Career Timeline */}
        <section>
          <div className="mb-12">
            <span className="eyebrow block mb-3 text-[#b8e986]">02 / Experience</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              Professional Work & Track Record
            </h2>
          </div>

          <div className="relative border-l border-white/[0.1] pl-6 sm:pl-10 space-y-12">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node */}
                <span className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-3 rounded-full border-2 border-[#b8e986] bg-[#0d0f12] group-hover:bg-[#b8e986] transition-colors" />

                <div className="rounded-xl border border-white/[0.08] bg-[#12151b] p-6 sm:p-8 transition-all group-hover:border-[#b8e986]/40">
                  <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-[#f0efe8]">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-medium text-[#b8e986]">
                        {exp.company} <span className="text-white/30">·</span>{' '}
                        <span className="text-xs text-[#848891]">{exp.location}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-white/[0.05] px-3 py-1 font-mono text-xs text-[#a0a4ad] border border-white/[0.08]">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#9ea2aa]">
                    {exp.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {exp.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-2.5 text-xs text-[#cad0c8]">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#b8e986] mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
                    {exp.technologies.map((t) => (
                      <span
                        key={t}
                        className="rounded bg-white/[0.03] px-2.5 py-1 text-[11px] font-mono text-[#8b8e97] border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Matrix */}
        <section>
          <div className="mb-12">
            <span className="eyebrow block mb-3 text-[#b8e986]">03 / Capabilities</span>
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-[#f0efe8] sm:text-4xl">
              Technical Skill Matrix
            </h2>
            <p className="mt-2 text-sm text-[#8c9099]">
              Technologies and methodologies applied daily in real production code.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillsData.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-white/[0.08] bg-[#111419] p-8 hover:border-white/[0.15] transition-colors"
              >
                <h3 className="text-lg font-semibold text-[#f0efe8]">
                  {category.title}
                </h3>
                <p className="mt-1 text-xs text-[#7e828c]">
                  {category.description}
                </p>

                <div className="mt-6 divide-y divide-white/[0.06]">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between py-2.5 text-xs"
                    >
                      <span className="text-[#e2e3dc]">{skill.name}</span>
                      <span className="font-mono text-[#b8e986]">{skill.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Working Principles */}
        <section className="rounded-xl border border-white/[0.08] bg-[#111419] p-8 sm:p-12">
          <span className="eyebrow block mb-3 text-[#b8e986]">04 / Principles</span>
          <h2 className="text-2xl font-semibold text-[#f0efe8] sm:text-3xl">
            Core Engineering Tenets
          </h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="font-mono text-sm text-[#b8e986]">01</span>
              <h3 className="mt-2 text-base font-semibold text-[#f0efe8]">Zero Vanity Clutter</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#858992]">
                Every component, border, and state transition must serve the user's intent.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#b8e986]">02</span>
              <h3 className="mt-2 text-base font-semibold text-[#f0efe8]">Keyboard & A11y</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#858992]">
                Full WCAG AA keyboard compliance, focus visibility, and screen-reader semantics.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#b8e986]">03</span>
              <h3 className="mt-2 text-base font-semibold text-[#f0efe8]">Performance Baseline</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#858992]">
                Sub-second initial paint, zero layout shift, and minimal bundle overhead.
              </p>
            </div>
            <div>
              <span className="font-mono text-sm text-[#b8e986]">04</span>
              <h3 className="mt-2 text-base font-semibold text-[#f0efe8]">Transparent Process</h3>
              <p className="mt-1 text-xs leading-relaxed text-[#858992]">
                Frequent incremental releases, clean PR descriptions, and zero surprises.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
