import { Star, Quote } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const FEATURED = {
  quote: "We tried three different academies before Catalyst. The difference here is that they actually listen. My daughter went from a C in Math to an A* in eight months — but more than the grade, she stopped dreading the subject.",
  name: 'Fatima Hussain',
  role: 'Parent · A-Level Mathematics',
  rating: 5,
};

const OTHERS = [
  {
    quote: "Sir Imran doesn't just teach you to pass — he teaches you to think. Best decision I made before my A2s.",
    name: 'Hamza Akhtar',
    role: 'Student · A2 (2024)',
  },
  {
    quote: "The small group format made my son confident enough to ask questions. That alone was worth it.",
    name: 'Nadia Sheikh',
    role: 'Parent · O-Level Physics',
  },
  {
    quote: "I genuinely look forward to Chemistry now, which is something I never thought I'd say.",
    name: 'Zara Malik',
    role: 'Student · O-Level',
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden"
      style={{ backgroundColor: '#ffffff', color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="text-center">
          <span className="text-xs uppercase"
            style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
            · Voices
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl"
            style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
              lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
            What our students &{' '}
            <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>parents</em>{' '}
            say.
          </h2>
        </div>

        {/* Asymmetric layout: featured quote + 3 smaller */}
        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Featured */}
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 lg:col-span-3"
            style={{ backgroundColor: COLORS.ink, color: '#F8FAFC' }}>
            <div className="pointer-events-none absolute rounded-full blur-3xl"
              style={{ width: 400, height: 400, top: -120, right: -80,
                background: 'radial-gradient(circle, rgba(245,177,76,0.35) 0%, transparent 70%)' }} />
            <div className="relative">
              <Quote className="h-8 w-8" style={{ color: COLORS.amber }} strokeWidth={1.5} />
              <p className="mt-6 text-xl md:text-2xl lg:text-3xl"
                style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.02em', lineHeight: 1.35 }}>
                "{FEATURED.quote}"
              </p>
              <div className="mt-8 flex items-center gap-1">
                {Array.from({ length: FEATURED.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4" style={{ color: COLORS.amber, fill: COLORS.amber }} />
                ))}
              </div>
              <div className="mt-6">
                <div style={{ fontFamily: FONT_DISPLAY, fontSize: '1.05rem', fontWeight: 500 }}>
                  {FEATURED.name}
                </div>
                <div className="mt-1 text-sm" style={{ color: 'rgba(226,232,240,0.6)' }}>
                  {FEATURED.role}
                </div>
              </div>
            </div>
          </div>

          {/* Smaller quotes stack */}
          <div className="grid gap-6 lg:col-span-2">
            {OTHERS.map((t) => (
              <div key={t.name} className="rounded-3xl p-6 md:p-7"
                style={{ backgroundColor: COLORS.cream, border: '1px solid rgba(10,14,26,0.06)' }}>
                <Quote className="h-5 w-5" style={{ color: COLORS.amberDeep }} strokeWidth={1.5} />
                <p className="mt-3 text-[0.95rem]" style={{ lineHeight: 1.6, color: '#334155' }}>
                  "{t.quote}"
                </p>
                <div className="mt-4">
                  <div className="text-sm" style={{ fontWeight: 600 }}>{t.name}</div>
                  <div className="mt-0.5 text-xs" style={{ color: COLORS.amberDeep }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
