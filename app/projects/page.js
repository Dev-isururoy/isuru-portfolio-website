import { getPrisma } from '@/lib/prisma';
import ProjectsClient from './ProjectsClient';

export const dynamic = 'force-dynamic';

export default async function ProjectsPage() {
  const prisma = getPrisma();
  const dbProjects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <ProjectsClient dbProjects={dbProjects} />;
}
