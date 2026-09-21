import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPrisma } from '@/lib/prisma';
import AdminForm from './AdminForm';
import AdminPostList from './AdminPostList';

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
  const prisma = getPrisma();
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="page-transition">
      <Navbar />
      <main className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="flex justify-between items-center mb-8">
           <h1 className="heading-xl">CMS Dashboard</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ '@media(minWidth: 1024px)': { gridColumn: 'span 2' }}}>
            <h2 className="heading-sm mb-4">Create New Post</h2>
            <AdminForm />
          </div>
          
          <div>
            <h2 className="heading-sm mb-4">Manage Posts</h2>
            <AdminPostList posts={posts} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
