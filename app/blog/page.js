import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

const prisma = new PrismaClient();

export const dynamic = 'force-dynamic';

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
}

export default async function Blog() {
  const dbPosts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden', minHeight: '80vh' }}>
          <div className="reveal relative z-10">
            <div className="flex justify-between items-end mb-4">
              <h1 className="heading-xl">Articles</h1>
              <Link href="/blog/login" className="text-gray-600 hover:text-green-500 transition-colors" title="Admin Login">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </Link>
            </div>
            <p className="text-body mb-16 max-w-2xl">
              Insights, tutorials, and technical deep-dives from my experience managing enterprise IT infrastructure in regulated environments.
            </p>

            {dbPosts.length === 0 ? (
              <div className="glass-panel p-12 text-center reveal" style={{ background: 'linear-gradient(135deg, rgba(var(--accent-rgb), 0.05), transparent)' }}>
                <h2 className="heading-md mb-4">Blog Launching Soon</h2>
                <p className="text-body max-w-xl mx-auto">
                  I'm currently preparing in-depth technical articles covering enterprise infrastructure, cybersecurity, and IT operations in pharmaceutical environments. Stay tuned!
                </p>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
                {dbPosts.map((post, idx) => {
                  const excerpt = stripHtml(post.content).substring(0, 160) + '...';
                  return (
                    <Link href={`/blog/${post.id}`} key={post.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className={`glass-card reveal reveal-delay-${idx > 2 ? 0 : idx + 1}`} style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.3s ease, border-color 0.3s ease', height: '100%', display: 'flex', flexDirection: 'column' }}>

                        {/* Cover Image */}
                        {post.imagePath ? (
                          <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                            <img src={post.imagePath} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="blog-card-img" />
                          </div>
                        ) : (
                          <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, rgba(57, 255, 20, 0.08), rgba(0,0,0,0.4))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="rgba(57,255,20,0.3)" strokeWidth="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                          </div>
                        )}

                        {/* Content */}
                        <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                            <span style={{ fontSize: '0.65rem', padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Article</span>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem', lineHeight: 1.4 }}>{post.title}</h3>
                          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, flex: 1 }}>{excerpt}</p>
                          <div style={{ marginTop: '1.25rem', fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                            Read Article
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                          </div>
                        </div>

                      </div>
                    </Link>
                  );
                })}
              </div>
            )}

          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
