import { GraduationCap } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

/* Brand icons were removed in lucide-react v1, so we inline the SVG paths
   for Facebook, Instagram, LinkedIn, and Twitter/X. */
const SOCIAL = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z',
  },
  {
    label: 'Instagram',
    href: '#',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'X / Twitter',
    href: '#',
    path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.ink, color: '#94A3B8', fontFamily: FONT_SANS }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute rounded-full blur-3xl"
          style={{ width: 600, height: 300, top: -150, left: '30%',
            background: 'radial-gradient(ellipse, rgba(245,177,76,0.18) 0%, transparent 70%)' }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-xl"
                style={{ background: 'linear-gradient(135deg, #F5B14C 0%, #E89436 100%)' }}>
                <GraduationCap className="h-4 w-4" style={{ color: COLORS.ink }} strokeWidth={2.5} />
              </span>
              <span style={{ fontFamily: FONT_DISPLAY, fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
                Catalyst<em style={{ color: COLORS.amber, fontStyle: 'italic', fontWeight: 400 }}>.</em>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm" style={{ lineHeight: 1.65 }}>
              Personalized tuition for O-Levels and A-Levels. Small groups, expert mentors, and learning plans built
              around the student.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-white/10"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#CBD5E1" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <FooterCol title="Programs" items={['O-Levels', 'A-Levels', 'IGCSE', 'Subject Tutoring']} />
          <FooterCol title="Catalyst" items={['About', 'Faculty', 'Process', 'Careers']} />
          <FooterCol title="Contact"
            items={['+92 321 2002625', 'info@thecatalystlearning.com', 'Karachi, PK', 'Mon–Sat · 10am–8pm']} />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t pt-8 md:flex-row md:items-center"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(148,163,184,0.7)' }}>
            © {new Date().getFullYear()} The Catalyst Learning Centre. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(148,163,184,0.7)' }}>
            Crafted with care by{' '}
            <a href="#" className="transition-colors hover:text-white"
              style={{ color: COLORS.amber, fontWeight: 600, fontFamily: FONT_DISPLAY }}>
              Pixonize<em style={{ fontStyle: 'italic' }}>.</em>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* — Inline helper: only used by Footer — */
function FooterCol({ title, items }) {
  return (
    <div className="md:col-span-2">
      <div className="text-xs uppercase"
        style={{ color: COLORS.amber, letterSpacing: '0.2em', fontWeight: 600 }}>
        {title}
      </div>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#CBD5E1' }}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
