'use client';
import { useEffect, useRef } from 'react';

export default function CTABanner() {
  const bannerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!bannerRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      bannerRef.current.style.setProperty('--mouse-x', `${x}px`);
      bannerRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    const banner = bannerRef.current;
    if (banner) {
      banner.addEventListener('mousemove', handleMouseMove);
      return () => banner.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section className="section container">
      <div className="cta-unique-wrapper reveal" ref={bannerRef}>
        <div className="cta-unique-content">
          <div className="cta-glow-bg"></div>
          <div className="cta-grid-bg"></div>
          
          <div className="cta-text-content relative z-10">
            <div className="cta-badge mb-8 inline-flex items-center gap-2">
              <span className="pulse-dot"></span>
              AVAILABLE FOR HIRE
            </div>
            <h2 className="cta-heading mb-6">
              Ready to Build <span className="text-gradient">Something Robust?</span>
            </h2>
            <p className="cta-desc mb-16 max-w-2xl mx-auto">
              From enterprise network deployments to disaster recovery architectures — let's engineer an infrastructure that never sleeps.
            </p>
            
            <div className="flex gap-6 justify-center flex-wrap" style={{ marginTop: '1rem' }}>
              <a href="mailto:dev.isururoy@gmail.com" className="cta-btn-primary">
                <span className="btn-content" style={{ color: '#000' }}>Email Me Directly</span>
                <span className="btn-glare"></span>
              </a>
              <a href="https://linkedin.com/in/isuruthennakoon" target="_blank" rel="noopener noreferrer" className="cta-btn-secondary" style={{ textDecoration: 'none' }}>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
