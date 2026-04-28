import {
  ArrowUpRight, BookOpen, FlaskConical, Calculator, Atom, Code2, PenLine, Microscope,
} from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const SUBJECTS = [
  { Icon: Calculator,   label: 'Mathematics' },
  { Icon: Atom,         label: 'Physics' },
  { Icon: FlaskConical, label: 'Chemistry' },
  { Icon: Microscope,   label: 'Biology' },
  { Icon: Code2,        label: 'Computer Sci.' },
  { Icon: PenLine,      label: 'English' },
  { Icon: BookOpen,     label: 'Business' },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden"
      style={{ backgroundColor: '#ffffff', color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase"
            style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
            · Programs
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
              lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
            Built for the{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>boards</em>{' '}
            you're preparing for.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base md:text-lg"
            style={{ color: '#475569', lineHeight: 1.7 }}>
            From foundational year groups to final-year exam intensives, every program is taught by faculty
            specialised in that exact board and level.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-6 md:grid-rows-2">
          <BentoCard
            className="md:col-span-4 md:row-span-2"
            tone="dark"
            tag="Most popular"
            title="O-Levels"
            subjects="Cambridge IGCSE & GCE"
            description="Years 9–11. Build the foundation. We cover Mathematics, Physics, Chemistry, Biology, English, Computer Science, Business Studies, and more — taught by subject specialists who know the mark scheme inside out."
            stats={[
              { value: '12+', label: 'Subjects' },
              { value: '6',   label: 'Max per group' },
              { value: '92%', label: 'A & A*' },
            ]}
          />
          <BentoCard
            className="md:col-span-2"
            tone="amber"
            title="A-Levels"
            subjects="Cambridge & Edexcel"
            description="Years 12–13. Sharpen for the universities you actually want."
          />
          <BentoCard
            className="md:col-span-2"
            tone="light"
            title="IGCSE"
            subjects="Cambridge International"
            description="A specialised track with focused exam practice and past-paper drilling."
          />
        </div>

        {/* Subject chips */}
        <div className="mt-10 rounded-3xl p-8 md:p-10"
          style={{ backgroundColor: COLORS.cream, border: '1px solid rgba(10,14,26,0.06)' }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="md:max-w-md">
              <div className="text-xs uppercase"
                style={{ color: COLORS.amberDeep, letterSpacing: '0.2em', fontWeight: 600 }}>
                Subject tutoring
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Need help with just one subject? Pick yours.
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {SUBJECTS.map(({ Icon, label }) => (
                <span key={label}
                  className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs transition-colors hover:bg-white"
                  style={{ backgroundColor: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(10,14,26,0.08)', fontWeight: 500 }}>
                  <Icon className="h-3.5 w-3.5" style={{ color: COLORS.amberDeep }} strokeWidth={1.75} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* — Inline helper: only used by Programs — */
function BentoCard({ className = '', tone = 'light', tag, title, subjects, description, stats }) {
  const styles = {
    dark:  { bg: COLORS.ink,    fg: '#F8FAFC',  sub: 'rgba(226,232,240,0.7)', accent: COLORS.amber,    border: 'transparent' },
    amber: { bg: '#FBE6BB',     fg: COLORS.ink, sub: 'rgba(10,14,26,0.65)',   accent: COLORS.amberDeep, border: 'rgba(10,14,26,0.08)' },
    light: { bg: COLORS.cream,  fg: COLORS.ink, sub: 'rgba(10,14,26,0.6)',    accent: COLORS.amberDeep, border: 'rgba(10,14,26,0.08)' },
  }[tone];

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 md:p-10 transition-transform hover:-translate-y-1 ${className}`}
      style={{ backgroundColor: styles.bg, color: styles.fg,
        border: `1px solid ${styles.border}`, minHeight: 280 }}
    >
      {tone === 'dark' && (
        <div className="pointer-events-none absolute rounded-full blur-3xl"
          style={{ width: 320, height: 320, top: -100, right: -80,
            background: 'radial-gradient(circle, rgba(245,177,76,0.4) 0%, transparent 70%)' }} />
      )}

      <div className="relative">
        {tag && (
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-[0.65rem] uppercase mb-4"
            style={{ background: 'rgba(245,177,76,0.18)', color: COLORS.amber,
              border: '1px solid rgba(245,177,76,0.3)', letterSpacing: '0.18em', fontWeight: 600 }}>
            {tag}
          </span>
        )}
        <div className="text-xs uppercase"
          style={{ color: styles.accent, letterSpacing: '0.2em', fontWeight: 600 }}>
          {subjects}
        </div>
        <h3 className="mt-2 text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, letterSpacing: '-0.025em',
            lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
          {title}
        </h3>
        <p className="mt-4 text-sm md:text-base" style={{ color: styles.sub, lineHeight: 1.65 }}>
          {description}
        </p>
      </div>

      <div className="relative mt-8 flex items-end justify-between">
        {stats ? (
          <div className="flex gap-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: '1.5rem', fontWeight: 500,
                  color: styles.fg, letterSpacing: '-0.02em' }}>
                  {s.value}
                </div>
                <div className="mt-1 text-[0.65rem] uppercase"
                  style={{ color: styles.sub, letterSpacing: '0.15em' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        ) : <div />}
        <button className="grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:rotate-45"
          style={{ background: tone === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(10,14,26,0.06)',
            border: `1px solid ${tone === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(10,14,26,0.08)'}` }}>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
