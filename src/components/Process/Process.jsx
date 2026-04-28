import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const STEPS = [
  { n: '01', title: 'Book a free demo',          body: 'A 30-minute session with the subject lead. No commitment, no pitch.' },
  { n: '02', title: 'Get your study plan',       body: 'Diagnostic test + a custom roadmap built around what your child actually needs.' },
  { n: '03', title: 'Start small-group sessions',body: 'Maximum six students. Weekly cadence. Topic-by-topic mastery.' },
  { n: '04', title: 'Track progress monthly',    body: 'Mock papers, written feedback, and a parent update at the end of every month.' },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.cream, color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs uppercase"
            style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
            · How it works
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
              lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
            From first call to{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>final exam</em>.
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="pointer-events-none absolute top-12 hidden lg:block"
            style={{ left: '12.5%', right: '12.5%', height: 1, background: 'rgba(10,14,26,0.12)' }} />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl"
                  style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10,14,26,0.08)',
                    boxShadow: '0 8px 24px -12px rgba(10,14,26,0.15)' }}>
                  <span style={{ fontFamily: FONT_DISPLAY, color: COLORS.amber,
                    fontSize: '0.95rem', fontWeight: 600 }}>
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-xl md:text-2xl"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {s.title}
                </h3>
                <p className="mt-3 text-sm md:text-[0.95rem]" style={{ color: '#52525b', lineHeight: 1.65 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
