import { PrismaClient } from '@prisma/client';
import ProjectsClient from './ProjectsClient';

const prisma = new PrismaClient();

export default async function ProjectsPage() {
  const dbProjects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return <ProjectsClient dbProjects={dbProjects} />;
}
