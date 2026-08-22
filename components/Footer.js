'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  services: [
    { label: 'Network Infrastructure', href: '/services' },
    { label: 'Server Administration', href: '/services' },
    { label: 'Virtualization', href: '/services' },
    { label: 'Backup & DR', href: '/services' },
    { label: 'Cybersecurity', href: '/services' },
    { label: 'IT Automation', href: '/services' },
  ],
  explore: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tools & Lab', href: '/tools' },
    { label: 'Resume', href: '/resume' },
    { label: 'Articles', href: '/blog' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/admin')) return null;

  return (
    <footer className="footer" id="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">
            ISURU <span style={{ color: 'var(--accent)' }}>—</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 300, lineHeight: 1.6 }}>
            Executive Engineer – IT<br />
            Infrastructure <span style={{ color: 'var(--accent)', fontSize: '0.875rem' }}>⚡</span> Engineer
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
            <a
              href="mailto:dev.isururoy@gmail.com"
              className="footer-link"
              style={{ fontSize: '0.8125rem' }}
            >
              dev.isururoy@gmail.com
            </a>
          </div>
          <div style={{ marginTop: '0.5rem' }}>
            <a
              href="tel:+94760579069"
              className="footer-link"
              style={{ fontSize: '0.8125rem' }}
            >
              +94 760579069
            </a>
          </div>
        </div>

        <div>
          <div className="footer-category">[ SERVICES ]</div>
          <div className="footer-links">
            {footerLinks.services.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-category">[ EXPLORE ]</div>
          <div className="footer-links">
            {footerLinks.explore.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="footer-category">[ CONNECT ]</div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/isuruthennakoon/" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="https://github.com/Dev-isururoy" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <a href="https://www.facebook.com/share/1Dzyz6MyLS/" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
            <a href="mailto:dev.isururoy@gmail.com" className="footer-link">
              Email
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © {new Date().getFullYear()} Isuru Thennakoon. All rights reserved.
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <span className="availability-dot" />
          <span style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>Available for hire</span>
        </div>
      </div>
    </footer>
  );
}
