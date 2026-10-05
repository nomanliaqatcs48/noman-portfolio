import { useEffect, useState } from 'react';
import { Icon } from './Icons.jsx';
import { RESUME_URL, RESUME_FILENAME } from '../data/site.js';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <a href="#home" className="logo"><span className="logo-mark">NL</span>Noman Liaqat</a>
        <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen((o) => !o)}>
          <Icon name="menu" />
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
          ))}
          <a href={RESUME_URL} download={RESUME_FILENAME} className="btn btn-ghost btn-sm" onClick={close}>Download CV</a>
        </div>
      </nav>
    </header>
  );
}
