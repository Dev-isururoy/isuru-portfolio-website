'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/services', label: 'Services' },
  { href: '/tools', label: 'Tools' },
  { href: '/resume', label: 'Resume' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Articles' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Don't render navbar on admin pages
  if (pathname?.startsWith('/admin')) return null;

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navbar">
        <Link href="/" className="navbar-brand">
          <div className="navbar-brand-icon" />
          <span>ISURU</span>
        </Link>

        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${pathname === link.href ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-actions">
          <Link href="/contact" className="btn btn-glass navbar-cta">
            Hire Me
            <span className="btn-dot" />
          </Link>
          <button
            className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            id="menu-toggle-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`} id="mobile-nav">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Hire Me
        </Link>
      </div>

      {/* Bottom Dock */}
      <nav className="bottom-dock" id="bottom-dock">
        {navLinks.slice(0, 5).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`bottom-dock-link ${pathname === link.href ? 'active' : ''}`}
          >
            <span className="dock-dot" />
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
