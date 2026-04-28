import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { COLORS, FONT_DISPLAY, FONT_SANS } from '../../lib/theme';

const INPUT_BASE = {
  width: '100%',
  padding: '0.875rem 1rem',
  borderRadius: '0.75rem',
  border: '1px solid rgba(10,14,26,0.12)',
  backgroundColor: '#FFFFFF',
  fontSize: '0.95rem',
  fontFamily: FONT_SANS,
  color: COLORS.ink,
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', interest: 'O-Levels', message: '',
  });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("Thanks — we'll be in touch within one working day.");
        setForm({ name: '', email: '', phone: '', interest: 'O-Levels', message: '' });
      } else {
        setStatus('Something went wrong. Please try again or call us.');
      }
    } catch {
      setStatus('Something went wrong. Please try again or call us.');
    }
  };

  const focus = (e) => (e.target.style.borderColor = COLORS.amber);
  const blur = (e) => (e.target.style.borderColor = 'rgba(10,14,26,0.12)');

  return (
    <section id="contact" className="relative overflow-hidden"
      style={{ backgroundColor: COLORS.cream, color: COLORS.ink, fontFamily: FONT_SANS }}>
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — info */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase"
              style={{ color: COLORS.amberDeep, letterSpacing: '0.22em', fontWeight: 600 }}>
              · Contact
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl"
              style={{ fontFamily: FONT_DISPLAY, fontWeight: 400, letterSpacing: '-0.03em',
                lineHeight: 1.05, fontVariationSettings: "'opsz' 144" }}>
              Let's start a{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 500, color: COLORS.amberDeep }}>conversation</em>.
            </h2>
            <p className="mt-6 text-base md:text-lg" style={{ color: '#475569', lineHeight: 1.7 }}>
              Send us a note about your child's year group, board, and what they're working on. We'll get back within one
              working day to set up a free demo.
            </p>

            <div className="mt-10 space-y-4">
              <ContactInfoCard icon={Mail}   label="Email"   value="info@thecatalystlearning.com" />
              <ContactInfoCard icon={Phone}  label="Phone"   value="+92 321 2002625" />
              <ContactInfoCard icon={MapPin} label="Address" value="Karachi, Pakistan" />
              <ContactInfoCard icon={Clock}  label="Hours"   value="Mon – Sat · 10am – 8pm" />
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={onSubmit} className="lg:col-span-7">
            <div className="rounded-3xl p-8 md:p-10"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10,14,26,0.06)',
                boxShadow: '0 30px 60px -30px rgba(10,14,26,0.15)' }}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name">
                  <input type="text" name="name" value={form.name} onChange={onChange} required
                    style={INPUT_BASE} placeholder="Full name" onFocus={focus} onBlur={blur} />
                </Field>
                <Field label="Email">
                  <input type="email" name="email" value={form.email} onChange={onChange} required
                    style={INPUT_BASE} placeholder="you@example.com" onFocus={focus} onBlur={blur} />
                </Field>
                <Field label="Phone">
                  <input type="tel" name="phone" value={form.phone} onChange={onChange}
                    style={INPUT_BASE} placeholder="+92 ___ _______" onFocus={focus} onBlur={blur} />
                </Field>
                <Field label="Interested in">
                  <select name="interest" value={form.interest} onChange={onChange}
                    style={INPUT_BASE} onFocus={focus} onBlur={blur}>
                    <option>O-Levels</option>
                    <option>A-Levels</option>
                    <option>IGCSE</option>
                    <option>Subject Tutoring</option>
                    <option>Not sure yet</option>
                  </select>
                </Field>
              </div>
              <div className="mt-5">
                <Field label="Message">
                  <textarea name="message" value={form.message} onChange={onChange} required rows={5}
                    placeholder="Tell us about your child's year group, current grade, and what you're hoping to improve."
                    style={{ ...INPUT_BASE, resize: 'vertical' }} onFocus={focus} onBlur={blur} />
                </Field>
              </div>
              <button type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.01] sm:w-auto"
                style={{ background: `linear-gradient(180deg, ${COLORS.amberSoft} 0%, ${COLORS.amber} 100%)`,
                  color: COLORS.ink,
                  boxShadow: '0 10px 30px -10px rgba(245,177,76,0.5), inset 0 1px 0 rgba(255,255,255,0.3)' }}>
                <Send className="h-4 w-4" strokeWidth={2.25} />
                Send message
              </button>
              {status && (
                <p className="mt-4 text-sm"
                  style={{ color: status.startsWith('Thanks') ? '#059669' : COLORS.amberDeep }}>
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

/* — Inline helpers: only used by Contact — */

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase"
        style={{ color: '#475569', letterSpacing: '0.15em', fontWeight: 600 }}>
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactInfoCard({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl p-4"
      style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(10,14,26,0.06)' }}>
      <span className="grid h-11 w-11 place-items-center rounded-xl"
        style={{ backgroundColor: 'rgba(245,177,76,0.12)', border: '1px solid rgba(245,177,76,0.2)' }}>
        <Icon className="h-4 w-4" style={{ color: COLORS.amberDeep }} strokeWidth={1.75} />
      </span>
      <div>
        <div className="text-xs uppercase"
          style={{ color: COLORS.amberDeep, letterSpacing: '0.18em', fontWeight: 600 }}>
          {label}
        </div>
        <div className="mt-0.5 text-sm" style={{ color: COLORS.ink, fontWeight: 500 }}>
          {value}
        </div>
      </div>
    </div>
  );
}
