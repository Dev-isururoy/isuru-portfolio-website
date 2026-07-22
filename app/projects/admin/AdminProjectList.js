'use client';
import { useRouter } from 'next/navigation';
import { deleteProject, logout } from '@/app/actions/projects';

export default function AdminProjectList({ projects }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      await deleteProject(id);
      router.refresh();
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/projects');
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={handleLogout} className="btn btn-outline mb-4 self-start" style={{ borderColor: '#ff3333', color: '#ff3333' }}>
        Log Out
      </button>
      {projects.length === 0 ? (
        <p className="text-gray-400">No projects added yet.</p>
      ) : (
        projects.map(project => (
          <div key={project.id} className="glass-card flex justify-between items-center" style={{ padding: '1rem 1.5rem' }}>
            <div>
              <h3 className="font-bold text-white">{project.title}</h3>
              <div className="text-xs text-gray-500">{project.category} • {new Date(project.createdAt).toLocaleDateString()}</div>
            </div>
            <button onClick={() => handleDelete(project.id)} className="text-xs" style={{ color: '#ff3333', padding: '0.5rem' }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
