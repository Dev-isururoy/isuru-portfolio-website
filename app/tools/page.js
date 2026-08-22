'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ServerRackGraphic from '@/components/ServerRackGraphic';
import toolsData from '@/data/tools.json';

export default function ToolsLab() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...toolsData.map(c => c.category)];
  const filteredData = activeCategory === 'All' 
    ? toolsData 
    : toolsData.filter(c => c.category === activeCategory);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <ServerRackGraphic />
          <div className="reveal">
            <div className="label mb-4">[ TOOLS & LAB SETUP ]</div>
            <h1 className="heading-xl mb-4">My Arsenal</h1>
            <p className="text-body mb-16 max-w-2xl">
              The hardware, software, and platforms I use daily to build, manage, and secure enterprise IT infrastructure — plus my personal home lab environment.
            </p>

            {/* Category Filter */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '3rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.5rem 1.25rem',
                    borderRadius: '9999px',
                    border: activeCategory === cat ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
                    background: activeCategory === cat ? 'rgba(57, 255, 20, 0.1)' : 'transparent',
                    color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                    transition: 'all 0.3s var(--ease-out)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Tool Categories */}
            {filteredData.map((category, catIdx) => (
              <div key={category.category} className={`reveal reveal-delay-${(catIdx % 3) + 1}`} style={{ marginBottom: '4rem' }}>
                {/* Category Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <h2 className="heading-md" style={{ fontSize: '1.3rem' }}>{category.category}</h2>
                  <div style={{ flex: 1, height: '1px', background: 'var(--glass-border)' }} />
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {category.items.length} tools
                  </span>
                </div>

                {/* Tool Cards Grid */}
                <div className="grid-2" style={{ gap: '1.25rem' }}>
                  {category.items.map((tool, idx) => (
                    <div
                      key={tool.name}
                      className="glass-card"
                      style={{
                        padding: '1.75rem',
                        display: 'flex',
                        gap: '1.25rem',
                        alignItems: 'flex-start',
                        transition: 'all 0.4s var(--ease-out)',
                      }}
                    >
                      {/* Icon */}
                      <div style={{
                        fontSize: '2rem',
                        width: '52px',
                        height: '52px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '12px',
                        background: 'rgba(57, 255, 20, 0.05)',
                        border: '1px solid var(--glass-border)',
                        flexShrink: 0,
                      }}>
                        {tool.icon}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                          <h3 className="heading-sm text-white" style={{ fontSize: '1rem', margin: 0 }}>{tool.name}</h3>
                          <span style={{
                            fontSize: '0.65rem',
                            color: 'var(--accent)',
                            fontWeight: 700,
                            fontFamily: 'var(--font-mono)',
                          }}>
                            {tool.proficiency}%
                          </span>
                        </div>

                        <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                          {tool.description}
                        </p>

                        {/* Proficiency Bar */}
                        <div style={{
                          width: '100%',
                          height: '3px',
                          background: 'var(--glass-border)',
                          borderRadius: '2px',
                          overflow: 'hidden',
                        }}>
                          <div style={{
                            width: `${tool.proficiency}%`,
                            height: '100%',
                            background: `linear-gradient(90deg, var(--accent-dark), var(--accent))`,
                            borderRadius: '2px',
                            transition: 'width 1.5s var(--ease-out)',
                          }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lab Setup Section */}
        <section className="section container bg-secondary">
          <div className="reveal">
            <div className="label mb-4">[ HOME LAB ]</div>
            <h2 className="heading-lg mb-12">Lab Environment</h2>
            <div className="grid-3" style={{ gap: '1.5rem' }}>
              {/* Lab Card 1 */}
              <div className="glass-card reveal" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗄️</div>
                <h3 className="heading-sm text-white" style={{ marginBottom: '0.75rem' }}>12U Server Rack</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Dell PowerEdge R720 & R630 servers, Cisco 2960 switch, APC Smart-UPS, and structured cabling for a full production-grade testing environment.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                  {['Dell R720', 'Dell R630', 'Cisco 2960', 'APC UPS'].map(t => (
                    <span key={t} className="badge-outline" style={{ fontSize: '0.6rem', padding: '0.2rem 0.6rem' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Lab Card 2 */}
              <div className="glass-card reveal reveal-delay-1" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖥️</div>
                <h3 className="heading-sm text-white" style={{ marginBottom: '0.75rem' }}>Virtualization Cluster</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  VMware ESXi cluster with shared storage, running Active Directory, DNS, DHCP, file servers, and monitoring VMs for realistic enterprise simulation.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                  {['ESXi 8.0', 'vCenter', 'AD DS', 'Veeam'].map(t => (
                    <span key={t} className="badge-outline" style={{ fontSize: '0.6rem', padding: '0.2rem 0.6rem' }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Lab Card 3 */}
              <div className="glass-card reveal reveal-delay-2" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌐</div>
                <h3 className="heading-sm text-white" style={{ marginBottom: '0.75rem' }}>Network Sandbox</h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Isolated VLAN segments with pfSense firewall, MikroTik router, and Ubiquiti APs for testing network configurations before production deployment.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.4rem', justifyContent: 'center' }}>
                  {['pfSense', 'MikroTik', 'UniFi', 'VLANs'].map(t => (
                    <span key={t} className="badge-outline" style={{ fontSize: '0.6rem', padding: '0.2rem 0.6rem' }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Lab Stats */}
            <div className="grid-4 reveal" style={{ marginTop: '3rem', gap: '1rem' }}>
              {[
                { label: 'Physical Servers', value: '4' },
                { label: 'Virtual Machines', value: '15+' },
                { label: 'Network Devices', value: '8' },
                { label: 'Storage Capacity', value: '12TB' },
              ].map(stat => (
                <div key={stat.label} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
