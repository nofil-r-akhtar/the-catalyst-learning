import { ArrowRight, GraduationCap } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const STATS = [
  { value: '500+', label: 'Students taught' },
  { value: '15+',  label: 'Expert faculty' },
  { value: '95%',  label: 'Pass rate' },
  { value: '10+',  label: 'Years of trust' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
      style={{ fontFamily: FONT_SANS, backgroundColor: COLORS.ink, color: '#E2E8F0' }}
    >
      {/* Atmospheric blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="catalyst-blob absolute rounded-full blur-3xl"
          style={{ width: 620, height: 620, top: -180, left: -160,
            background: 'radial-gradient(circle, rgba(245,177,76,0.45) 0%, transparent 70%)' }} />
        <div className="catalyst-blob-2 absolute rounded-full blur-3xl"
          style={{ width: 720, height: 720, top: '15%', right: -220,
            background: 'radial-gradient(circle, rgba(37,99,235,0.55) 0%, transparent 70%)' }} />
        <div className="catalyst-blob absolute rounded-full blur-3xl"
          style={{ width: 500, height: 500, bottom: -120, left: '38%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)' }} />
      </div>

      {/* Noise overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-overlay"
        style={{ opacity: 0.06,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Faint grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ opacity: 0.035,
          backgroundImage: 'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Eyebrow */}
        <div className="catalyst-anim-1 mb-10 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase"
          style={{ border: '1px solid rgba(245,177,76,0.25)', background: 'rgba(245,177,76,0.06)',
            color: COLORS.amber, letterSpacing: '0.22em' }}>
          <GraduationCap className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span>The Catalyst Learning Centre</span>
        </div>

        {/* Heading */}
        <h1 className="catalyst-anim-2 max-w-5xl text-5xl md:text-7xl lg:text-[5.25rem]"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, fontVariationSettings: "'opsz' 144",
            letterSpacing: '-0.035em', lineHeight: 1.04, color: '#F8FAFC' }}>
          Where curious minds become{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amber }}>confident</em>{' '}
          learners.
        </h1>

        {/* Subhead */}
        <p className="catalyst-anim-3 mt-8 max-w-2xl text-base md:text-lg lg:text-xl"
          style={{ color: 'rgba(226,232,240,0.75)', lineHeight: 1.6 }}>
          Personalized tuition for O-Levels and A-Levels, taught by mentors who have walked the path before.
          Small groups. Real conversations. Results that last.
        </p>

        {/* CTAs */}
        <div className="catalyst-anim-4 mt-12 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <button
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: `linear-gradient(180deg, ${COLORS.amberSoft} 0%, ${COLORS.amber} 100%)`,
              color: COLORS.ink, boxShadow: '0 10px 30px -10px rgba(245,177,76,0.6), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
            Request a free demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
          </button>
          <button
            onClick={() => document.getElementById('faculty')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            style={{ border: '1px solid rgba(255,255,255,0.18)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
            Meet the faculty
          </button>
        </div>

        {/* Stats strip */}
        <div className="catalyst-anim-5 mt-24 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label}
              className="rounded-2xl p-5 text-center backdrop-blur-md transition-colors hover:bg-white/[0.06]"
              style={{ background: 'rgba(255,255,255,0.035)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div className="text-3xl md:text-4xl"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, fontVariationSettings: "'opsz' 144",
                  color: '#F8FAFC', letterSpacing: '-0.02em' }}>
                {s.value}
              </div>
              <div className="mt-2 text-[0.65rem] uppercase"
                style={{ color: 'rgba(148,163,184,0.85)', letterSpacing: '0.18em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32"
        style={{ background: `linear-gradient(to top, ${COLORS.ink}, transparent)` }} />
    </section>
  );
}
