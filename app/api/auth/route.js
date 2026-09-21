import { NextResponse } from 'next/server';
import { login } from '@/app/actions/blog';

export async function POST(request) {
  try {
    const { password } = await request.json();
    const formData = new FormData();
    formData.set('username', process.env.ADMIN_USERNAME || '');
    formData.set('password', password || '');
    const result = await login(formData);
    if (result.success) {
      return NextResponse.json({ success: true, token: 'authenticated' });
    }
    
    return NextResponse.json({ success: false, message: 'Invalid password' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
