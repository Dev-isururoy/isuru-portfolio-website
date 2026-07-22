'use client';
import { useEffect, useRef } from 'react';

export default function NeonLightBar() {
  const barRef = useRef(null);
  const currentX = useRef(500);
  const targetX = useRef(500);
  const rafRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const root = document.documentElement;

    const onMouseMove = (e) => {
      // Keep bar on the far right edge
      targetX.current = window.innerWidth - 40;
    };

    const animate = () => {
      const ease = 0.08;
      currentX.current += (targetX.current - currentX.current) * ease;

      if (bar) {
        bar.style.transform = `translateX(${currentX.current}px) translateX(-50%)`;
      }
      root.style.setProperty('--neon-x', `${currentX.current}px`);
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);

    // Activate after a brief delay for smooth entrance
    setTimeout(() => {
      if (bar) bar.classList.add('active');
    }, 500);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <div ref={barRef} className="neon-bar" id="neon-light-bar" />;
}
