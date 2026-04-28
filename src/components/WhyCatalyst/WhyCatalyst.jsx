import { Users, Compass, Sparkles } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const PILLARS = [
  {
    n: '01',
    icon: Users,
    title: 'Small, focused groups.',
    body: 'No more than six students per session. Your child gets airtime, not a back-row seat. Real conversations replace one-way lectures.',
  },
  {
    n: '02',
    icon: Compass,
    title: 'Mentors who walked the path.',
    body: 'Our faculty earned A* and 1st-class results on the same Cambridge and Edexcel boards your child is preparing for. They know the exam, not just the subject.',
  },
  {
    n: '03',
    icon: Sparkles,
    title: 'A plan, not a package.',
    body: 'Every student starts with a diagnostic. From there we build a study roadmap around what they actually need — not a pre-cut curriculum.',
  },
];

export default function WhyCatalyst() {
  return (
    <section id="about" className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.cream, color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        {/* Asymmetric header */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="text-xs uppercase"
              style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
              · Why Catalyst
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
                lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
              A learning experience built around the{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>student</em>,
              not the syllabus.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-10">
            <p className="text-base md:text-lg" style={{ lineHeight: 1.75, color: '#475569' }}>
              We started Catalyst because we kept seeing bright kids stuck in classrooms that moved too fast or
              tutors that moved too slow. The fix wasn't more hours — it was a smarter way to spend them. Three things
              shape every session here:
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl md:grid-cols-3"
          style={{ backgroundColor: 'rgba(10,14,26,0.08)', border: '1px solid rgba(10,14,26,0.08)' }}>
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.n} className="group relative p-8 md:p-10 transition-colors"
                style={{ backgroundColor: COLORS.cream }}>
                <div className="flex items-start justify-between">
                  <span className="text-sm"
                    style={{ fontFamily: FONT_DISPLAY, color: COLORS.amber,
                      fontVariationSettings: "'opsz' 14", fontWeight: 500, letterSpacing: '0.05em' }}>
                    {p.n}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl transition-all group-hover:rotate-[-6deg] group-hover:scale-105"
                    style={{ backgroundColor: 'rgba(245,177,76,0.12)', border: '1px solid rgba(245,177,76,0.2)' }}>
                    <Icon className="h-5 w-5" style={{ color: COLORS.amberDeep }} strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-12 text-2xl md:text-[1.65rem]"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {p.title}
                </h3>
                <p className="mt-4 text-[0.95rem]" style={{ color: '#52525b', lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
