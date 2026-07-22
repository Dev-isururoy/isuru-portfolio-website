'use server';

import { cookies } from 'next/headers';
import { SignJWT } from 'jose';
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

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
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) throw new Error('Unauthorized');

  const title = formData.get('title');
  const content = formData.get('content');
  const image = formData.get('image');
  
  let imagePath = null;

  if (image && image.size > 0) {
    const buffer = Buffer.from(await image.arrayBuffer());
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    const fileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.]/g, '')}`;
    const filePath = path.join(uploadDir, fileName);
    fs.writeFileSync(filePath, buffer);
    imagePath = `/uploads/${fileName}`;
  }

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
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) throw new Error('Unauthorized');

  await prisma.post.delete({
    where: { id }
  });
}
