'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/app/actions/projects';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProjectLoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await login(formData);
    
    if (result.success) {
      router.push('/projects/admin');
      router.refresh();
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="page-transition">
      <Navbar />
      <main className="section container flex items-center justify-center min-h-[80vh]" style={{ paddingTop: '10rem' }}>
        <div className="glass-card" style={{ maxWidth: '400px', width: '100%', padding: '2.5rem 2rem' }}>
          <h1 className="heading-sm mb-6 text-center">Projects System Access</h1>
          {error && <p className="text-[#ff3333] mb-4 text-center text-sm" style={{ textShadow: '0 0 5px rgba(255,51,51,0.5)' }}>{error}</p>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="label mb-2 block">Username</label>
              <input type="text" name="username" className="form-input w-full" style={{ width: '100%' }} required />
            </div>
            <div>
              <label className="label mb-2 block">Password</label>
              <input type="password" name="password" className="form-input w-full" style={{ width: '100%' }} required />
            </div>
            <button type="submit" className="btn btn-primary mt-2 w-full justify-center text-center">Authenticate</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
