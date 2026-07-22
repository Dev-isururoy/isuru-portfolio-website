'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import TimelineGraphic from '@/components/TimelineGraphic';

export default function Resume() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <TimelineGraphic />
          <div className="reveal flex justify-between items-end flex-wrap gap-6 mb-16">
            <div>
              <div className="label mb-4">[ CURRICULUM VITAE ]</div>
              <h1 className="heading-xl mb-2">Resume & Career</h1>
            </div>
            <a href="#" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem', alignSelf: 'center' }} onClick={(e) => { e.preventDefault(); alert('PDF download would start here'); }}>
              Download PDF CV
            </a>
          </div>

          <div className="grid-2 reveal">
            {/* Left Column: Summary & Experience */}
            <div>
              <div className="glass-panel p-8 mb-12">
                <h2 className="heading-sm mb-4 text-accent">Professional Summary</h2>
                <p className="text-sm text-gray-300">
                  Highly accomplished Executive Engineer – IT with over 3 years of progressive experience designing, implementing, securing, and maintaining enterprise IT infrastructure within a highly regulated pharmaceutical manufacturing environment. Successfully planned, engineered, deployed, and maintained numerous enterprise infrastructure projects including complete network architecture redesigns, enterprise NAS storage environments, disaster recovery solutions, and virtualization platforms.
                </p>
              </div>

              <h2 className="heading-md mb-8">Work Experience</h2>
              <div className="timeline">
                <div className="timeline-item current">
                  <div className="timeline-period">2025 – Present</div>
                  <h3 className="timeline-title">Executive Engineer – IT & Head of IT Department</h3>
                  <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd</div>
                  <div className="timeline-highlights">
                    <div className="timeline-highlight">Administer enterprise-wide IT infrastructure supporting 200+ employees.</div>
                    <div className="timeline-highlight">Manage complete enterprise network infrastructure (LAN, Wi-Fi, VPN, switches).</div>
                    <div className="timeline-highlight">Administer Windows Server infrastructure, AD, and Group Policy.</div>
                    <div className="timeline-highlight">Maintain 100+ TB enterprise storage and 250+ TB Veeam backup repositories.</div>
                    <div className="timeline-highlight">Lead deployment of SCADA, HPLC, and environmental monitoring systems.</div>
                    
                    <div className="mt-6 mb-2">
                      <strong className="text-white text-sm tracking-widest uppercase">[ Detailed Responsibilities ]</strong>
                    </div>
                    
                    <div className="mb-2 text-accent text-xs tracking-widest uppercase">Systems & Infrastructure</div>
                    <ul className="list-disc list-outside ml-4 space-y-1 mb-4 text-xs text-gray-300">
                      <li>Administer and maintain all computerized systems within the organization.</li>
                      <li>Ensure the stability, performance, and security of the company's network and IT infrastructure.</li>
                      <li>Implement and maintain the BMS for controlling and monitoring HVAC, lighting, and security systems.</li>
                      <li>Perform regular audits and inspections to ensure optimal operation related to BMS and troubleshoot faults, coordinating with internal teams.</li>
                    </ul>

                    <div className="mb-2 text-accent text-xs tracking-widest uppercase">Security & Compliance</div>
                    <ul className="list-disc list-outside ml-4 space-y-1 mb-4 text-xs text-gray-300">
                      <li>Review Computerized System Validation documents in compliance with regulatory standards.</li>
                      <li>Implement and monitor security protocols to protect company data.</li>
                      <li>Prepare all required documentation to ensure compliance meets EU and NMRA regulatory requirements before scheduled audits.</li>
                      <li>Manage and oversee Bitdefender GravityZone Anti-Malware and Control Centre operations.</li>
                    </ul>

                    <div className="mb-2 text-accent text-xs tracking-widest uppercase">Access & User Management</div>
                    <ul className="list-disc list-outside ml-4 space-y-1 mb-4 text-xs text-gray-300">
                      <li>Manage user accounts, including creation, modification, and deactivation based on department approvals.</li>
                      <li>Enforce access control measures and ensure adherence to company password policies.</li>
                      <li>Oversee system policies and manage desktop and end-user devices.</li>
                      <li>Maintain secure e-signature systems and ensure access control records are accurate.</li>
                      <li>Manage and maintain factory access control and HRM systems.</li>
                    </ul>

                    <div className="mb-2 text-accent text-xs tracking-widest uppercase">Data & Disaster Recovery</div>
                    <ul className="list-disc list-outside ml-4 space-y-1 mb-4 text-xs text-gray-300">
                      <li>Collect, store, analyse, and manage company data to support operations and meet regulatory requirements.</li>
                      <li>Proceed data backup, restoration, and archival procedures consistently.</li>
                      <li>Perform data recovery during system failures or data loss, minimizing operational disruption.</li>
                      <li>Develop, maintain, and test the IT Disaster Recovery Plan and Business Continuity procedures.</li>
                    </ul>

                    <div className="mb-2 text-accent text-xs tracking-widest uppercase">Operations & Maintenance</div>
                    <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-gray-300">
                      <li>Verify and rectify time synchronization across digital clocks, Wi-Fi clocks, and ensure alignment with SLST.</li>
                      <li>Maintain active Windows time services during system startup and NTP synchronization.</li>
                      <li>Oversee technical management of CCTV systems, including configuration, time synchronization, maintenance, and data storage.</li>
                      <li>Review and update SOPs to align with company policies, industry standards, and applicable regulations.</li>
                      <li>Undertake any other duties assigned by the supervisor in support of IT and system operations.</li>
                    </ul>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-period">2025</div>
                  <h3 className="timeline-title">IT Engineer</h3>
                  <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd</div>
                  <div className="timeline-highlights">
                    <div className="timeline-highlight">Independent management of enterprise server infrastructure and Active Directory.</div>
                    <div className="timeline-highlight">Virtualization environment management and vendor coordination.</div>
                    <div className="timeline-highlight">Compliance documentation and audit support.</div>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-period">2024</div>
                  <h3 className="timeline-title">Trainee IT Engineer</h3>
                  <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd</div>
                  <div className="timeline-highlights">
                    <div className="timeline-highlight">Network administration and end-user support for 200+ users.</div>
                    <div className="timeline-highlight">Infrastructure maintenance, monitoring, and regulatory compliance exposure.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Skills */}
            <div>
              <h2 className="heading-md mb-8">Technical Proficiency</h2>
              
              {loading ? (
                <div className="spinner mx-auto"></div>
              ) : (
                <div className="glass-panel p-8">
                  {skills.map((category) => (
                    <div key={category.id} className="skill-category">
                      <h3 className="skill-category-title">{category.category}</h3>
                      {category.skills.map(skill => (
                        <div key={skill.name} className="skill-bar-container">
                          <div className="skill-bar-header">
                            <span className="skill-bar-name">{skill.name}</span>
                            <span className="skill-bar-level">{skill.level}%</span>
                          </div>
                          <div className="skill-bar-track">
                            <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Key Impact Metrics */}
        <section className="section container">
          <div className="reveal">
            <div className="label mb-4">[ IMPACT ]</div>
            <h2 className="heading-lg mb-12">By the Numbers</h2>
            <div className="grid-3">
              <div className="glass-panel p-8 text-center reveal reveal-delay-1">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>200+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Users Supported</div>
              </div>
              <div className="glass-panel p-8 text-center reveal reveal-delay-2">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>250+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TB Backup Capacity</div>
              </div>
              <div className="glass-panel p-8 text-center reveal reveal-delay-3">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>70+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Critical Systems Protected</div>
              </div>
              <div className="glass-panel p-8 text-center reveal reveal-delay-1">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>100+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>TB Production Storage</div>
              </div>
              <div className="glass-panel p-8 text-center reveal reveal-delay-2">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>99%+</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Infrastructure Uptime</div>
              </div>
              <div className="glass-panel p-8 text-center reveal reveal-delay-3">
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>0</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Critical Audit Findings</div>
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="section container">
          <div className="reveal">
            <div className="label mb-4">[ EDUCATION ]</div>
            <h2 className="heading-lg mb-12">Education & Qualifications</h2>
            <div className="grid-2" style={{ gap: '2rem' }}>
              <div className="glass-panel p-8 reveal reveal-delay-1">
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>Professional Development</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Continuously expanding expertise through vendor certifications, hands-on training, and self-directed learning in enterprise infrastructure, cybersecurity, and cloud technologies.
                </p>
              </div>
              <div className="glass-panel p-8 reveal reveal-delay-2">
                <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>Regulatory Knowledge</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Deep expertise in GMP, EU-GMP, NMRA, and ISO standards. Experienced in audit preparation, SOP development, CSV documentation, and maintaining compliance-ready IT environments.
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
