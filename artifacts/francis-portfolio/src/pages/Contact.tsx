import { ArrowUpRight, Clock, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';
import { PageHeader } from '@/components/common/PageHeader';
import { ContactForm } from '@/components/common/ContactForm';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#0d0f12]">
      <PageHeader
        eyebrow="Direct Inquiries"
        title="Start a Project Conversation"
        description="Whether you have an established design ready for development or need technical guidance on a new product architecture, let's connect."
      />

      <main className="mx-auto max-w-[1360px] px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20 items-start">
          {/* Main Interactive Contact Form */}
          <div>
            <ContactForm />
          </div>

          {/* Direct Details & Information Sidebar */}
          <div className="space-y-8">
            {/* Quick Contact Box */}
            <div className="rounded-xl border border-white/[0.08] bg-[#12151b] p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-[#f0efe8]">
                Direct Coordinates
              </h3>
              <p className="mt-2 text-xs text-[#8f939c]">
                Feel free to email directly or connect on professional networks.
              </p>

              <div className="mt-6 space-y-4 text-xs">
                <div>
                  <span className="text-[#6f737c] block mb-1">Email:</span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="font-mono text-sm text-[#b8e986] hover:underline"
                  >
                    {profile.email}
                  </a>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <span className="text-[#6f737c] block mb-1">Location & Timezone:</span>
                  <p className="text-[#e2e3dc]">{profile.location}</p>
                  <p className="font-mono text-[#8a8e97] text-[11px] mt-0.5">
                    {profile.timezone}
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <span className="text-[#6f737c] block mb-2">Social Channels:</span>
                  <div className="flex flex-col gap-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#cfd1c9] hover:text-[#b8e986] transition-colors"
                    >
                      <Github className="size-4" />
                      <span>github.com/francisanyaegbu</span>
                      <ArrowUpRight className="size-3 text-[#6f737c]" />
                    </a>
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-[#cfd1c9] hover:text-[#b8e986] transition-colors"
                    >
                      <Linkedin className="size-4" />
                      <span>LinkedIn Profile</span>
                      <ArrowUpRight className="size-3 text-[#6f737c]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time & Guarantee */}
            <div className="rounded-xl border border-white/[0.08] bg-[#0f1217] p-6 text-xs">
              <div className="flex items-center gap-2 text-[#b8e986] font-semibold mb-2">
                <Clock className="size-4" />
                <span>Response Guarantee</span>
              </div>
              <p className="leading-relaxed text-[#8f939c]">
                All project inquiries receive a thoughtful technical assessment and availability reply within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
