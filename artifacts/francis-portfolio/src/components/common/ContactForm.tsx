import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Send, Sparkles } from 'lucide-react';
import { profile } from '@/data/portfolio';

const projectTypes = [
  'Custom Web Application',
  'Business / Marketing Website',
  'Design System & UI Components',
  'Headless E-Commerce',
  'Performance Optimization & Audit',
  'Frontend Architecture / Consulting',
];

const budgetRanges = ['< $3,000', '$3,000 — $7,000', '$7,000 — $15,000', '$15,000+', 'Flexible / Hourly'];

export function ContactForm() {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedBudget, setSelectedBudget] = useState(budgetRanges[1]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitting(true);
    // Simulate brief network dispatch
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="rounded-xl border border-white/[0.1] bg-[#111419] p-6 sm:p-10 shadow-2xl">
      {submitted ? (
        <div className="py-12 text-center" data-testid="status-form-success">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-[#b8e986]/15 text-[#b8e986]">
            <Check className="size-6" />
          </div>
          <h3 className="text-2xl font-semibold text-[#f0efe8]">
            Message Dispatched
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#9ca0a8]">
            Thank you, {formData.name}. Your inquiry has been recorded. I typically respond within 24 hours to schedule an introductory call.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
              className="focus-ring rounded border border-white/[0.15] px-4 py-2 text-xs font-medium text-[#c4c6c0] hover:text-[#f0efe8]"
            >
              Send Another Note
            </button>
            <a
              href={`mailto:${profile.email}`}
              className="focus-ring rounded bg-[#b8e986] px-4 py-2 text-xs font-semibold text-[#0d0f12] hover:bg-[#c9f59c]"
            >
              Direct Email
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8" data-testid="form-contact">
          {/* Project Type Selector */}
          <div>
            <label className="eyebrow mb-3 block text-[#b8e986]">
              01 / Select Project Discipline
            </label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setSelectedType(type)}
                  className={`focus-ring rounded px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedType === type
                      ? 'border border-[#b8e986] bg-[#b8e986]/15 text-[#b8e986]'
                      : 'border border-white/[0.08] bg-white/[0.02] text-[#8e929a] hover:border-white/20 hover:text-[#e1e2db]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Budget Range */}
          <div>
            <label className="eyebrow mb-3 block text-[#b8e986]">
              02 / Anticipated Investment Range
            </label>
            <div className="flex flex-wrap gap-2">
              {budgetRanges.map((range) => (
                <button
                  key={range}
                  type="button"
                  onClick={() => setSelectedBudget(range)}
                  className={`focus-ring rounded px-3 py-1.5 text-xs font-medium transition-all ${
                    selectedBudget === range
                      ? 'border border-[#b8e986] bg-[#b8e986]/15 text-[#b8e986]'
                      : 'border border-white/[0.08] bg-white/[0.02] text-[#8e929a] hover:border-white/20 hover:text-[#e1e2db]'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Form Inputs */}
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="eyebrow mb-2 block text-[#d1d3cb]">
                Your Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Adaeze Okonjo"
                className="focus-ring w-full rounded border border-white/[0.12] bg-[#0c0e12] px-4 py-3 text-sm text-[#f0efe8] placeholder-[#5c6069] focus:border-[#b8e986]"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="eyebrow mb-2 block text-[#d1d3cb]">
                Your Email Address *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="adaeze@company.com"
                className="focus-ring w-full rounded border border-white/[0.12] bg-[#0c0e12] px-4 py-3 text-sm text-[#f0efe8] placeholder-[#5c6069] focus:border-[#b8e986]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-message" className="eyebrow mb-2 block text-[#d1d3cb]">
              Project Overview & Objectives *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about what you are building, timeline expectations, or links to existing designs..."
              className="focus-ring w-full rounded border border-white/[0.12] bg-[#0c0e12] px-4 py-3 text-sm text-[#f0efe8] placeholder-[#5c6069] focus:border-[#b8e986]"
            />
          </div>

          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded bg-[#b8e986] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.1em] text-[#0d0f12] transition-transform hover:bg-[#cbf59e] active:scale-[0.98] disabled:opacity-50"
            >
              <span>{submitting ? 'Transmitting...' : 'Transmit Inquiry'}</span>
              <Send className="size-3.5" />
            </button>

            <button
              type="button"
              onClick={copyEmail}
              className="focus-ring inline-flex items-center justify-center gap-2 text-xs text-[#848891] hover:text-[#f0efe8]"
            >
              {copiedEmail ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
              <span>Copy direct email: {profile.email}</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
