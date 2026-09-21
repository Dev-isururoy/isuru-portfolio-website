import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';

export async function requireAdmin() {
  const token = (await cookies()).get('admin_token')?.value;
  if (!token || !process.env.JWT_SECRET) throw new Error('Unauthorized');
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET), { algorithms: ['HS256'] });
    if (payload.auth !== true) throw new Error('Unauthorized');
  } catch {
    throw new Error('Unauthorized');
  }
}
