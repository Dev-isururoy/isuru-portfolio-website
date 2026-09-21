import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPrisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';
import AdminProjectForm from './AdminProjectForm';
import AdminProjectList from './AdminProjectList';

export default async function AdminDashboard() {
  const prisma = getPrisma();
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="page-transition">
      <Navbar />
      <main className="section container" style={{ paddingTop: '10rem', minHeight: '80vh' }}>
        <div className="flex justify-between items-center mb-8">
           <h1 className="heading-xl">Projects Dashboard</h1>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ '@media(minWidth: 1024px)': { gridColumn: 'span 2' }}}>
            <h2 className="heading-sm mb-4">Create New Project</h2>
            <AdminProjectForm />
          </div>
          
          <div>
            <h2 className="heading-sm mb-4">Manage Projects</h2>
            <AdminProjectList projects={projects} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
