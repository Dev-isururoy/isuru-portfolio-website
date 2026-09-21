import { getCloudflareEnv } from './cloudflare';

const columns = {
  Post: ['id', 'title', 'content', 'imagePath', 'createdAt', 'updatedAt'],
  Project: ['id', 'title', 'category', 'duration', 'organization', 'role', 'description', 'longDescription', 'achievements', 'scope', 'tags', 'status', 'imagePath', 'createdAt', 'updatedAt'],
};

function hydrate(row) {
  return row ? { ...row, createdAt: new Date(row.createdAt), updatedAt: new Date(row.updatedAt) } : null;
}

function model(db, table) {
  return {
    async findMany({ orderBy } = {}) {
      const order = orderBy?.createdAt === 'asc' ? 'ASC' : 'DESC';
      const { results } = await db.prepare(`SELECT * FROM "${table}" ORDER BY "createdAt" ${order}`).all();
      return results.map(hydrate);
    },
    async findUnique({ where: { id } }) {
      return hydrate(await db.prepare(`SELECT * FROM "${table}" WHERE id = ?`).bind(id).first());
    },
    async create({ data }) {
      const now = Date.now();
      const row = { ...(table === 'Project' ? { status: 'completed' } : {}), ...data, id: crypto.randomUUID(), createdAt: now, updatedAt: now };
      const keys = columns[table].filter(key => row[key] !== undefined);
      await db.prepare(`INSERT INTO "${table}" (${keys.map(key => `"${key}"`).join(', ')}) VALUES (${keys.map(() => '?').join(', ')})`)
        .bind(...keys.map(key => row[key])).run();
      return hydrate(row);
    },
    async delete({ where: { id } }) {
      const row = await this.findUnique({ where: { id } });
      if (!row) throw new Error('Record not found');
      await db.prepare(`DELETE FROM "${table}" WHERE id = ?`).bind(id).run();
      return row;
    },
  };
}

export function getPrisma() {
  const db = getCloudflareEnv()?.DB;
  if (!db) throw new Error('Cloudflare D1 database binding is missing');
  return { post: model(db, 'Post'), project: model(db, 'Project') };
}
