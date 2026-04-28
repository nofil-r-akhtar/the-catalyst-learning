import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

// Replace `accent` with photos: add `photo: '/path/to/img.jpg'` and swap the
// gradient avatar block for an <img> tag.
const FACULTY = [
  { name: 'Dr. Ayesha Khan',      role: 'Lead, Computer Science', qual: 'PhD, NUST',                  subject: 'Computer Sci.', accent: '#2563EB' },
  { name: 'Prof. Imran Siddiqui', role: 'Lead, Mathematics',      qual: 'M.Phil, Karachi University', subject: 'Mathematics',   accent: '#F5B14C' },
  { name: 'Dr. Sarah Ali',        role: 'Lead, Physics',          qual: 'PhD, LUMS',                  subject: 'Physics',       accent: '#10B981' },
  { name: 'Mr. Ahmed Raza',       role: 'Lead, English Lit.',     qual: 'MA, Aga Khan University',    subject: 'English Lit.',  accent: '#8B5CF6' },
];

export default function Faculty() {
  return (
    <section id="faculty" className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.cream, color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <span className="text-xs uppercase"
              style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
              · Faculty
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
                lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
              Taught by people who{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>love</em>{' '}
              their subject.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-8">
            <p className="text-base md:text-lg" style={{ lineHeight: 1.7, color: '#475569' }}>
              Every faculty lead is a top-of-class graduate from the same boards and universities they now help students reach.
              Hand-picked, classroom-tested, and obsessive about the craft.
            </p>
          </div>
        </div>

        {/* Faculty grid — alternating offset for editorial feel */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACULTY.map((f, i) => (
            <div key={f.name}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10,14,26,0.06)',
                marginTop: i % 2 === 1 ? '2.5rem' : '0' }}>
              {/* Avatar — replace this block with <img src={f.photo} className="aspect-square w-full object-cover rounded-2xl" /> */}
              <div className="aspect-square w-full overflow-hidden rounded-2xl"
                style={{ background: `linear-gradient(135deg, ${f.accent} 0%, ${f.accent}AA 100%)` }}>
                <div className="grid h-full w-full place-items-center"
                  style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.25), transparent 60%)' }}>
                  <span style={{ fontFamily: FONT_DISPLAY, fontSize: '4rem', color: 'white',
                    fontWeight: 500, fontVariationSettings: "'opsz' 144", letterSpacing: '-0.04em' }}>
                    {f.name.split(' ').slice(-2).map(s => s[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <div className="text-[0.65rem] uppercase"
                  style={{ color: COLORS.amberDeep, letterSpacing: '0.2em', fontWeight: 600 }}>
                  {f.subject}
                </div>
                <h3 className="mt-2 text-xl"
                  style={{ fontFamily: FONT_DISPLAY, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                  {f.name}
                </h3>
                <p className="mt-1 text-sm" style={{ color: '#64748b' }}>{f.role}</p>
                <p className="mt-3 text-xs" style={{ color: '#94a3b8', fontWeight: 500 }}>{f.qual}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
