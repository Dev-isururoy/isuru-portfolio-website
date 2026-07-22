'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/app/actions/projects';

export default function AdminProjectForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    await createProject(formData);
    e.target.reset();
    setLoading(false);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5" style={{ padding: '2rem' }}>
      <div>
        <label className="label mb-2 block">Project Title</label>
        <input type="text" name="title" className="form-input" style={{ width: '100%' }} required />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label className="label mb-2 block">Category</label>
          <select name="category" className="form-input" style={{ width: '100%' }} required>
            <option value="Network">Network</option>
            <option value="Laboratory Systems">Laboratory Systems</option>
            <option value="Storage & Backup">Storage & Backup</option>
            <option value="Virtualization">Virtualization</option>
            <option value="Security">Security</option>
            <option value="Monitoring">Monitoring</option>
            <option value="Development">Development</option>
            <option value="Windows Infrastructure">Windows Infrastructure</option>
            <option value="Industrial Systems">Industrial Systems</option>
          </select>
        </div>
        <div>
          <label className="label mb-2 block">Status</label>
          <select name="status" className="form-input" style={{ width: '100%' }} required>
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
        <div>
          <label className="label mb-2 block">Duration</label>
          <input type="text" name="duration" placeholder="e.g. Feb 2026 - Mar 2026" className="form-input" style={{ width: '100%' }} />
        </div>
        <div>
          <label className="label mb-2 block">Organization</label>
          <input type="text" name="organization" className="form-input" style={{ width: '100%' }} />
        </div>
        <div>
          <label className="label mb-2 block">Role</label>
          <input type="text" name="role" className="form-input" style={{ width: '100%' }} />
        </div>
      </div>
      <div>
        <label className="label mb-2 block">Tags (comma separated)</label>
        <input type="text" name="tags" placeholder="e.g. VMware, Storage, Network" className="form-input" style={{ width: '100%' }} />
      </div>
      <div>
        <label className="label mb-2 block">Short Description</label>
        <textarea name="description" className="form-input" style={{ width: '100%', minHeight: '80px' }} required></textarea>
      </div>
      <div>
        <label className="label mb-2 block">Long Description (Optional)</label>
        <textarea name="longDescription" className="form-input" style={{ width: '100%', minHeight: '120px' }}></textarea>
      </div>
      <div>
        <label className="label mb-2 block">Scope (one item per line)</label>
        <textarea name="scope" className="form-input" style={{ width: '100%', minHeight: '100px' }}></textarea>
      </div>
      <div>
        <label className="label mb-2 block">Achievements (one item per line)</label>
        <textarea name="achievements" className="form-input" style={{ width: '100%', minHeight: '100px' }}></textarea>
      </div>
      <div>
        <label className="label mb-2 block">Project Image (Optional)</label>
        <input type="file" name="image" accept="image/*" className="form-input" style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary mt-4 self-start">
        {loading ? 'Publishing...' : 'Publish Project'}
      </button>
    </form>
  );
}
