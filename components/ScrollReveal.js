'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    let observer;
    // Slight delay to ensure Next.js has painted the new DOM nodes
    const timeout = setTimeout(() => {
      const reveals = document.querySelectorAll('.reveal');
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      reveals.forEach((el) => observer.observe(el));
    }, 150);

    return () => {
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, [pathname]);

  return null;
}
