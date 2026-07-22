'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import DigitalApertureGraphic from '@/components/DigitalApertureGraphic';

export default function Gallery() {
  const galleryItems = [
    {
      title: "Enterprise Network Infrastructure",
      category: "Infrastructure",
      description: "Complete enterprise network architecture deployment for 200+ users.",
    },
    {
      title: "HPLC Server Rack Setup",
      category: "Laboratory Systems",
      description: "Server rack configuration for Agilent HPLC laboratory systems.",
    },
    {
      title: "Veeam Backup Dashboard",
      category: "Backup & DR",
      description: "250+ TB backup repository management dashboard monitoring.",
    },
    {
      title: "VMware vSphere Console",
      category: "Virtualization",
      description: "VMware ESXi virtualization platform managing production VMs.",
    },
    {
      title: "Zabbix Monitoring Overview",
      category: "Monitoring",
      description: "Real-time monitoring of 200+ network-connected devices.",
    },
    {
      title: "HikCentral CCTV Management",
      category: "Security",
      description: "Enterprise CCTV surveillance infrastructure across facilities.",
    },
    {
      title: "Winlog Temperature Monitoring",
      category: "Industrial Systems",
      description: "Real-time temperature alarm monitoring across pharmaceutical storage areas.",
    },
    {
      title: "NVPC Monitoring System",
      category: "Environmental",
      description: "Non-Viable Particle Count monitoring in cleanroom environments.",
    },
    {
      title: "Active Directory Console",
      category: "Windows Infrastructure",
      description: "Active Directory forest management and GPO administration.",
    },
  ];

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <DigitalApertureGraphic />
          <div className="reveal">
            <h1 className="heading-xl mb-4">Gallery</h1>
            <p className="text-body mb-16 max-w-2xl">
              Visual documentation of enterprise infrastructure projects, deployments, and system configurations from my professional portfolio.
            </p>

            <div className="grid-3">
              {galleryItems.map((item, idx) => (
                <div key={idx} className={`glass-card reveal reveal-delay-${(idx % 4) + 1}`} style={{ overflow: 'hidden' }}>
                  <div style={{
                    height: '200px',
                    background: `linear-gradient(135deg, hsl(${140 + idx * 25}, 30%, 8%), hsl(${160 + idx * 25}, 40%, 14%))`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '1px solid var(--glass-border)'
                  }}>
                    <div style={{ fontSize: '2.5rem', opacity: 0.3 }}>📸</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <span style={{ fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', fontWeight: 600 }}>{item.category}</span>
                    <h3 className="heading-sm text-white" style={{ margin: '0.5rem 0', fontSize: '0.95rem' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: '4rem' }}>
              <div className="glass-panel p-12 text-center">
                <h2 className="heading-md mb-4">More Visuals Coming Soon</h2>
                <p className="text-body max-w-xl mx-auto">
                  Additional project documentation, infrastructure screenshots, and deployment visuals will be added as projects are completed and documented.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
