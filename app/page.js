'use client';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import NeonLightBar from '@/components/NeonLightBar';
import CyberBackground from '@/components/CyberBackground';
import ScrollReveal from '@/components/ScrollReveal';
import TechTicker from '@/components/TechTicker';

export default function Home() {
  return (
    <div className="page-transition">
      <Navbar />
      
      <main>
        {/* HERO SECTION */}
        <section className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <CyberBackground />
          <NeonLightBar />
          
          {/* Main Clean Layer */}
          <div className="absolute inset-0 flex flex-col justify-center px-[var(--container-padding)] z-10 pointer-events-none">
            <div className="max-w-[var(--container-max)] mx-auto w-full">
              <p className="label mb-4 tracking-widest text-xs">
                [ EXECUTIVE ENGINEER — IT ]
              </p>
              <h1 className="hero-title font-bold tracking-tighter leading-[0.9] mb-4 text-white" style={{ textShadow: 'none' }}>
                ISURU<br />
                <span className="text-transparent bg-clip-text text-gradient">THENNAKOON</span>
              </h1>
              <p className="text-body max-w-xl text-gray-300">
                I design, build, and secure enterprise IT infrastructure for pharmaceutical manufacturing.
              </p>
              
              <div className="hero-bottom pointer-events-auto mt-12">
                <div className="flex flex-wrap gap-4">
                  <Link href="/projects" className="btn btn-primary">
                    Explore My Work
                  </Link>
                  <Link href="/resume" className="btn btn-outline">
                    Download CV
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="hero-scroll-indicator text-gray-500">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              Scroll to explore
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section className="container" style={{ marginTop: '-2rem', position: 'relative', zIndex: 30 }}>
          <div className="stats-bar reveal reveal-delay-1">
            <div className="stat-item">
              <div className="stat-value">200+</div>
              <div className="stat-label">Users Supported</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">400+</div>
              <div className="stat-label">Assets Managed</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100+</div>
              <div className="stat-label">TB Storage</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">250+</div>
              <div className="stat-label">TB Backup</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">99%+</div>
              <div className="stat-label">Uptime</div>
            </div>
          </div>
        </section>

        {/* TECH TICKER */}
        <section className="reveal" style={{ marginTop: '2rem' }}>
          <TechTicker />
        </section>

        {/* ABOUT PREVIEW */}
        <section className="section container">
          <div className="reveal">
            <div className="label mb-4">[ ABOUT ME ]</div>
            <h2 className="heading-lg mb-6 max-w-3xl">Know my assets, behavior, and expertise. All in one place.</h2>
            <div className="grid-2">
              <div>
                <p className="text-body mb-4">
                  Highly accomplished Executive Engineer – IT with over 3 years of progressive experience designing, implementing, securing, and maintaining enterprise IT infrastructure within a highly regulated pharmaceutical manufacturing environment.
                </p>
                <p className="text-body mb-6">
                  Demonstrated record of rapid career advancement through three promotions within two years based on technical excellence, leadership, and project delivery. Experienced in managing mission-critical infrastructure supporting over 200+ users.
                </p>
                <Link href="/about" className="btn btn-glass">
                  Learn More
                  <span className="btn-dot" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                 <div className="relative" style={{ width: '100%', maxWidth: '350px', aspectRatio: '4/5', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glow-sm)' }}>
                    <img src="/profile.jpg" alt="Isuru Thennakoon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section className="section container">
          <div className="reveal">
            <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
              <div>
                <div className="label mb-4">[ FEATURED PROJECTS ]</div>
                <h2 className="heading-md max-w-2xl">Tailored infrastructure solutions</h2>
              </div>
              <Link href="/projects" className="btn btn-outline">
                View All Projects
              </Link>
            </div>

            <div className="grid-3">
              <div className="glass-card project-card">
                <div className="project-card-image" style={{ background: 'linear-gradient(45deg, #111, #222)' }} />
                <div className="project-card-overlay">
                  <div className="project-card-tags">
                    <span className="project-card-tag">Network</span>
                  </div>
                  <h3 className="heading-sm mb-2 text-white">Enterprise Network Infrastructure</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">Complete enterprise network architecture redesign including LAN, enterprise Wi-Fi, VPN connectivity, IP Telephony...</p>
                </div>
              </div>
              
              <div className="glass-card project-card reveal-delay-1">
                <div className="project-card-image" style={{ background: 'linear-gradient(45deg, #111, #222)' }} />
                <div className="project-card-overlay">
                  <div className="project-card-tags">
                    <span className="project-card-tag">Laboratory Systems</span>
                  </div>
                  <h3 className="heading-sm mb-2 text-white">HPLC Server Deployment</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">Mission-critical HPLC laboratory server deployment for pharmaceutical quality control and manufacturing operations...</p>
                </div>
              </div>

              <div className="glass-card project-card reveal-delay-2">
                <div className="project-card-image" style={{ background: 'linear-gradient(45deg, #111, #222)' }} />
                <div className="project-card-overlay">
                  <div className="project-card-tags">
                    <span className="project-card-tag">Storage & Backup</span>
                  </div>
                  <h3 className="heading-sm mb-2 text-white">Backup & Disaster Recovery</h3>
                  <p className="text-xs text-gray-300 line-clamp-2">Designed and implemented enterprise backup infrastructure using Veeam Backup & Replication with 250+ TB backup repository capacity...</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section className="section overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-track">
              {['PowerShell', 'VMware', 'Active Directory', 'Veeam', 'Zabbix', 'Windows Server', 'Synology', 'QSAN', 'HikCentral', 'Microsoft 365', 'GMP', 'SCADA', 'HPLC', 'Network Security', 'VLAN', 'VPN', 'Firewall', 'RAID',
                'PowerShell', 'VMware', 'Active Directory', 'Veeam', 'Zabbix', 'Windows Server', 'Synology', 'QSAN', 'HikCentral', 'Microsoft 365', 'GMP', 'SCADA', 'HPLC', 'Network Security', 'VLAN', 'VPN', 'Firewall', 'RAID'].map((skill, index) => (
                <div key={index} className="marquee-item">{skill}</div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT METRICS */}
        <section className="section container">
          <div className="reveal text-center mb-12">
            <h2 className="heading-md">Proven Impact</h2>
            <p className="text-body mt-4 max-w-2xl mx-auto">Delivering measurable results across critical enterprise IT infrastructure.</p>
          </div>
          <div className="grid-4">
            <div className="glass-card text-center reveal" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem', fontFamily: 'monospace', textShadow: '0 0 15px rgba(57, 255, 20, 0.4)' }}>99.9<span style={{ fontSize: '2rem'}}>%</span></div>
              <div className="text-sm font-bold mb-2 text-white tracking-wider uppercase">System Uptime</div>
              <div className="text-xs text-gray-400">Maintained across all critical manufacturing systems.</div>
            </div>
            
            <div className="glass-card text-center reveal reveal-delay-1" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem', fontFamily: 'monospace', textShadow: '0 0 15px rgba(57, 255, 20, 0.4)' }}>250<span style={{ fontSize: '2rem'}}>+</span></div>
              <div className="text-sm font-bold mb-2 text-white tracking-wider uppercase">TB Data Managed</div>
              <div className="text-xs text-gray-400">Secure enterprise backup and storage architecture.</div>
            </div>

            <div className="glass-card text-center reveal reveal-delay-2" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem', fontFamily: 'monospace', textShadow: '0 0 15px rgba(57, 255, 20, 0.4)' }}>0</div>
              <div className="text-sm font-bold mb-2 text-white tracking-wider uppercase">Security Breaches</div>
              <div className="text-xs text-gray-400">Zero incidents during compliance and regulatory audits.</div>
            </div>

            <div className="glass-card text-center reveal reveal-delay-3" style={{ padding: '2.5rem 1.5rem' }}>
              <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem', fontFamily: 'monospace', textShadow: '0 0 15px rgba(57, 255, 20, 0.4)' }}>24/7</div>
              <div className="text-sm font-bold mb-2 text-white tracking-wider uppercase">Infrastructure Support</div>
              <div className="text-xs text-gray-400">Continuous monitoring and rapid incident response.</div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section-full relative overflow-hidden flex-col text-center z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none" style={{ background: 'rgba(var(--accent-rgb), 0.15)', transform: 'translate(-50%, -50%)' }} />
          
          <div className="reveal relative z-10">
            <h2 className="heading-xl mb-4">
              Let's Build<br />Something Great
            </h2>
            <p className="text-body max-w-md mx-auto mb-8">
              Available for infrastructure engineering roles and consulting.
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg glow-box">
              Get In Touch
              <span className="btn-dot" style={{ background: '#000' }} />
            </Link>
          </div>
        </section>

      </main>

      <Footer />
      <ScrollReveal />
    </div>
  );
}
