'use client';
import { useRouter } from 'next/navigation';
import { deletePost, logout } from '@/app/actions/blog';

export default function AdminPostList({ posts }) {
  const router = useRouter();

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this article?')) {
      await deletePost(id);
      router.refresh();
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push('/blog');
  };

  return (
    <div className="flex flex-col gap-4">
      <button onClick={handleLogout} className="btn btn-outline mb-4 self-start" style={{ borderColor: '#ff3333', color: '#ff3333' }}>
        Log Out
      </button>
      
      {posts.length === 0 ? (
        <p className="text-gray-400">No articles published yet.</p>
      ) : (
        posts.map(post => (
          <div key={post.id} className="glass-card flex justify-between items-center" style={{ padding: '1rem 1.5rem' }}>
            <div>
              <h3 className="font-bold text-white">{post.title}</h3>
              <div className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</div>
            </div>
            <button onClick={() => handleDelete(post.id)} className="text-xs" style={{ color: '#ff3333', padding: '0.5rem' }}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
