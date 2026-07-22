import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });

  if (!post) {
    notFound();
  }

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <article className="section container" style={{ paddingTop: '10rem', minHeight: '80vh', margin: '0 auto' }}>
          <div>
            {/* Back link */}
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2rem', textDecoration: 'none', transition: 'opacity 0.2s' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
              Back to Articles
            </Link>

            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '0.7rem', padding: '0.25rem 0.75rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article</span>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>

            {/* Title */}
            <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '2rem', lineHeight: 1.2, color: '#fff' }}>
              {post.title}
            </h1>

            {/* Cover Image */}
            {post.imagePath && (
              <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)', marginBottom: '3rem' }}>
                <img src={post.imagePath} alt={post.title} style={{ width: '100%', height: 'auto', maxHeight: '500px', objectFit: 'cover', display: 'block' }} />
              </div>
            )}

            {/* Article Content */}
            <div
              className="blog-article-content"
              style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.9 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Footer divider */}
            <div style={{ borderTop: '1px solid var(--glass-border)', marginTop: '4rem', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                Back to all articles
              </Link>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Published {new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
