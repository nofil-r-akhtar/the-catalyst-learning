import { ArrowRight, Phone } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

export default function CtaDemo() {
  return (
    <section id="demo" className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.ink, color: '#F8FAFC', fontFamily: FONT_SANS }}>
      {/* Atmospheric blobs (mirror hero, simpler) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute rounded-full blur-3xl"
          style={{ width: 540, height: 540, top: '-30%', left: '15%',
            background: 'radial-gradient(circle, rgba(245,177,76,0.35) 0%, transparent 70%)' }} />
        <div className="absolute rounded-full blur-3xl"
          style={{ width: 600, height: 600, bottom: '-40%', right: '10%',
            background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-4xl md:text-5xl lg:text-6xl"
          style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
            lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
          Ready to see the{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amber }}>difference</em>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base md:text-lg"
          style={{ color: 'rgba(226,232,240,0.75)', lineHeight: 1.7 }}>
          Book a free 30-minute demo with the subject lead. We'll show you exactly how we'd help your child —
          before you commit to anything.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-transform hover:scale-[1.02]"
            style={{ background: `linear-gradient(180deg, ${COLORS.amberSoft} 0%, ${COLORS.amber} 100%)`,
              color: COLORS.ink,
              boxShadow: '0 14px 40px -12px rgba(245,177,76,0.6), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
            Request a free demo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
          </button>
          <a href="tel:+923212002625"
            className="inline-flex items-center gap-2 text-sm" style={{ color: 'rgba(226,232,240,0.8)' }}>
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            Or call <span style={{ color: '#F8FAFC', fontWeight: 600 }}>+92 321 2002625</span>
          </a>
        </div>
      </div>
    </section>
  );
}
