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

export async function createPost(formData) {
  await requireAdmin();

  const prisma = getPrisma();

  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');
  
  const imagePath = await saveUpload(image);

  await prisma.post.create({
    data: {
      title,
      content,
      imagePath
    }
  });

  return { success: true };
}

export async function deletePost(id) {
  await requireAdmin();

  const prisma = getPrisma();

  await prisma.post.delete({
    where: { id }
  });
}
