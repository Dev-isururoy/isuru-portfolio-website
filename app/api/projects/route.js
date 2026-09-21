import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import initialProjects from '@/data/projects.json';
import { getCloudflareEnv } from '@/lib/cloudflare';
import { requireAdmin } from '@/lib/auth';

const DATA_FILE = path.join(process.cwd(), 'data', 'projects.json');

async function readData() {
  const env = getCloudflareEnv();
  if (env) return (await env.CONTENT.get('content/projects', 'json')) ?? initialProjects;
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeData(data) {
  const env = getCloudflareEnv();
  if (env) {
    await env.CONTENT.put('content/projects', JSON.stringify(data));
    return;
  }
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    await requireAdmin();
  } catch {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }
  try {
    const newData = await request.json();
    const data = await readData();
    
    const newItem = {
      ...newData,
      id: `proj-${Date.now()}`
    };
    
    data.push(newItem);
    await writeData(data);
    
    return NextResponse.json({ success: true, item: newItem });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
