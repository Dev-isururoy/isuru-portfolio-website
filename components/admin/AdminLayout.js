'use client';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import '@/app/globals.css';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const token = sessionStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  if (!mounted) return null;

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', href: '/admin', icon: '📊' },
    { label: 'Projects', href: '/admin/projects', icon: '📁' },
    { label: 'Blog', href: '/admin/blog', icon: '📝' },
    { label: 'Gallery', href: '/admin/gallery', icon: '🖼️' },
    { label: 'Skills', href: '/admin/skills', icon: '⚡' },
    { label: 'Testimonials', href: '/admin/testimonials', icon: '💬' },
    { label: 'Services', href: '/admin/services', icon: '🛠️' },
    { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="admin-layout text-white font-sans" style={{ background: '#030303' }}>
      {/* Mobile toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-[60] bg-white/10 p-2 rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '✕' : '☰'}
      </button>

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="px-6 py-4 mb-8">
          <div className="text-xl font-bold tracking-widest text-[#39FF14]">DOTDNA ADMIN</div>
          <div className="text-xs text-gray-500 mt-1">Content Management</div>
        </div>
        
        <nav className="flex flex-col gap-1">
          {navItems.map(item => (
            <Link 
              key={item.href} 
              href={item.href}
              className={`admin-sidebar-link ${pathname === item.href ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <span className="w-6 text-center">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="flex justify-between items-center mb-8 bg-white/5 border border-white/10 p-4 rounded-xl">
          <div className="text-sm font-semibold text-gray-400 capitalize">
            {pathname.split('/').pop() || 'Dashboard'}
          </div>
          <div className="flex gap-4">
             <Link href="/" target="_blank" className="text-sm text-gray-400 hover:text-white transition-colors">
                View Site ↗
             </Link>
             <button onClick={handleLogout} className="text-sm text-red-400 hover:text-red-300 font-semibold">
                Logout
             </button>
          </div>
        </header>
        
        <div className="admin-content">
          {children}
        </div>
      </main>
    </div>
  );
}
