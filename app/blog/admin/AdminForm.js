'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/app/actions/blog';
import dynamic from 'next/dynamic';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), { ssr: false });

export default function AdminForm() {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    // Replace the plain text content with the rich HTML content
    formData.set('content', content);
    await createPost(formData);
    setTitle('');
    setContent('');
    e.target.reset();
    setLoading(false);
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5" style={{ padding: '2rem' }}>
      <div>
        <label className="label mb-2 block">Article Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          style={{ width: '100%' }}
          required
        />
      </div>
      <div>
        <label className="label mb-2 block">Cover Photo</label>
        <input type="file" name="image" accept="image/*" className="form-input" style={{ width: '100%', padding: '0.5rem' }} />
      </div>
      <div>
        <label className="label mb-2 block">Article Content</label>
        <RichTextEditor value={content} onChange={setContent} />
        {/* Hidden input to carry the content for the form */}
        <input type="hidden" name="content" value={content} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary mt-4 self-start">
        {loading ? 'Publishing...' : 'Publish Article'}
      </button>
    </form>
  );
}
