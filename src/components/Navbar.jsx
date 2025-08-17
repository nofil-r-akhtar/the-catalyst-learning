import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setHideNavbar(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      const timeout = setTimeout(() => {
        setHideNavbar(false);
      }, 250);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [scrollTimeout]);

  return (
    <nav className={`navbar ${hideNavbar ? 'navbar--hidden' : ''}`}>
      {/* Left Side - Logo */}
      <div className="navbar__logo">
        <img src="/header_logo.png" alt="Logo" />
      </div>

      {/* Right Side - Links */}
      <ul className="navbar__links">
        <li onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</li>
        <li onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About Us</li>
        <li onClick={() => document.getElementById('faculties').scrollIntoView({ behavior: 'smooth' })}>Faculties</li>
        <li onClick={() => document.getElementById('demo').scrollIntoView({ behavior: 'smooth' })}>Request a Demo</li>
        <li onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact Us</li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="navbar__hamburger" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isOpen ? 'open' : ''}`}></div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile-menu ${isOpen ? 'show' : ''}`}>
        <div className="navbar__close-icon" onClick={toggleMenu}>×</div>
        <ul>
          <li onClick={() => { toggleMenu(); document.getElementById('home').scrollIntoView({ behavior: 'smooth' }) }}>Home</li>
          <li onClick={() => { toggleMenu(); document.getElementById('about').scrollIntoView({ behavior: 'smooth' }) }}>About Us</li>
          <li onClick={() => { toggleMenu(); document.getElementById('faculties').scrollIntoView({ behavior: 'smooth' }) }}>Faculties</li>
          <li onClick={() => { toggleMenu(); document.getElementById('demo').scrollIntoView({ behavior: 'smooth' }) }}>Request a Demo</li>
          <li onClick={() => { toggleMenu(); document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }) }}>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
