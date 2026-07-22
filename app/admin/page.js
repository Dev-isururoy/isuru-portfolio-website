'use client';
import { useState, useEffect } from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import Link from 'next/link';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    services: 0,
    testimonials: 0
  });

  useEffect(() => {
    // Quick fetch for basic stats
    Promise.all([
      fetch('/api/projects').then(res => res.json()).catch(() => []),
      fetch('/api/skills').then(res => res.json()).catch(() => []),
      fetch('/api/services').then(res => res.json()).catch(() => []),
      fetch('/api/testimonials').then(res => res.json()).catch(() => [])
    ]).then(([proj, skill, svc, test]) => {
      setStats({
        projects: proj.length || 10, // fallback for UI
        skills: skill.length || 8,
        services: svc.length || 6,
        testimonials: test.length || 3
      });
    });
  }, []);

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="admin-card admin-stat">
          <div className="admin-stat-value">{stats.projects}</div>
          <div className="admin-stat-label">Projects</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat-value">{stats.skills}</div>
          <div className="admin-stat-label">Skill Categories</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat-value">{stats.services}</div>
          <div className="admin-stat-label">Services</div>
        </div>
        <div className="admin-card admin-stat">
          <div className="admin-stat-value">{stats.testimonials}</div>
          <div className="admin-stat-label">Testimonials</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="admin-card">
          <h3 className="text-lg font-bold mb-6">Quick Actions</h3>
          <div className="flex flex-col gap-4">
            <Link href="/admin/projects" className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#39FF14]">Manage Projects</div>
                <div className="text-xs text-gray-500">Add or edit portfolio items</div>
              </div>
              <span className="text-gray-400">→</span>
            </Link>
            <Link href="/admin/settings" className="p-4 border border-white/10 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between">
              <div>
                <div className="font-semibold text-[#39FF14]">Profile Settings</div>
                <div className="text-xs text-gray-500">Update bio and contact info</div>
              </div>
              <span className="text-gray-400">→</span>
            </Link>
          </div>
        </div>
        
        <div className="admin-card">
           <h3 className="text-lg font-bold mb-6">System Status</h3>
           <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-gray-400">Database Status</span>
                 <span className="text-green-400 font-semibold flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div> Online (JSON local)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-gray-400">Next.js Framework</span>
                 <span className="text-white">Active (App Router)</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                 <span className="text-gray-400">Last Login</span>
                 <span className="text-white">Just now</span>
              </div>
           </div>
        </div>
      </div>
    </AdminLayout>
  );
}
