import { useState, useEffect, useRef } from 'react';
import { ArrowRight, GraduationCap, Menu, X } from 'lucide-react';
import { COLORS, FONT_DISPLAY } from '../../lib/theme';

const LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'Programs', id: 'programs' },
  { label: 'Faculty', id: 'faculty' },
  { label: 'Process', id: 'process' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 80);
      if (y > lastY.current && y > 140) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        backgroundColor: solid ? 'rgba(10, 14, 26, 0.85)' : 'transparent',
        backdropFilter: solid ? 'blur(16px) saturate(150%)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(16px) saturate(150%)' : 'none',
        borderBottom: solid ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo — swap the inner <span> for an <img src="/header_logo.png" /> if you prefer image logo */}
        <button onClick={() => go('home')} className="flex items-center gap-2.5 text-white">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #F5B14C 0%, #E89436 100%)',
              boxShadow: '0 6px 20px -8px rgba(245,177,76,0.6)',
            }}
          >
            <GraduationCap className="h-4 w-4" style={{ color: COLORS.ink }} strokeWidth={2.5} />
          </span>
          <span style={{ fontFamily: FONT_DISPLAY, fontSize: '1.25rem', fontWeight: 500, letterSpacing: '-0.02em' }}>
            Catalyst<em style={{ color: COLORS.amber, fontStyle: 'italic', fontWeight: 400 }}>.</em>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="text-sm text-white/80 transition-colors hover:text-white"
                style={{ fontWeight: 500 }}
              >
                {l.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go('demo')}
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{
                background: `linear-gradient(180deg, ${COLORS.amberSoft} 0%, ${COLORS.amber} 100%)`,
                color: COLORS.ink,
                boxShadow: '0 8px 20px -8px rgba(245,177,76,0.5)',
              }}
            >
              Free demo <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="text-white md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className="overflow-hidden transition-all duration-300 md:hidden"
        style={{
          maxHeight: open ? '500px' : '0',
          backgroundColor: 'rgba(10, 14, 26, 0.96)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="block w-full rounded-lg px-3 py-3 text-left text-base text-white/85 transition-colors hover:bg-white/5"
              >
                {l.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <button
              onClick={() => go('demo')}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              style={{ background: COLORS.amber, color: COLORS.ink }}
            >
              Request a free demo <ArrowRight className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
