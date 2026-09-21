'use server';

import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import { getPrisma } from '@/lib/prisma';
import { saveUpload } from '@/lib/uploads';
import { requireAdmin } from '@/lib/auth';

export async function login(formData) {
  const username = formData.get('username');
  const password = formData.get('password');

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const token = await new SignJWT({ auth: true })
      .setProtectedHeader({ alg: 'HS256' })
      .setExpirationTime('24h')
      .sign(secret);
    
    const cookieStore = await cookies();
    cookieStore.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/'
    });
    return { success: true };
  }
  return { success: false, error: 'Invalid credentials' };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
}

export async function createProject(formData) {
  await requireAdmin();

  const prisma = getPrisma();

  const title = formData.get('title');
  const category = formData.get('category');
  const duration = formData.get('duration') || null;
  const organization = formData.get('organization') || null;
  const role = formData.get('role') || null;
  const description = formData.get('description');
  const longDescription = formData.get('longDescription') || null;
  const status = formData.get('status') || 'completed';
  
  // JSON arrays
  const achievements = formData.get('achievements') ? JSON.stringify(formData.get('achievements').split('\n').filter(s => s.trim())) : null;
  const scope = formData.get('scope') ? JSON.stringify(formData.get('scope').split('\n').filter(s => s.trim())) : null;
  const tags = formData.get('tags') ? JSON.stringify(formData.get('tags').split(',').map(s => s.trim()).filter(s => s)) : '[]';

  const image = formData.get('image');
  const imagePath = await saveUpload(image);

  await prisma.project.create({
    data: {
      title,
      category,
      duration,
      organization,
      role,
      description,
      longDescription,
      achievements,
      scope,
      tags,
      status,
      imagePath
    }
  });

  return { success: true };
}

export async function deleteProject(id) {
  await requireAdmin();

  const prisma = getPrisma();

  await prisma.project.delete({
    where: { id }
  });
}
