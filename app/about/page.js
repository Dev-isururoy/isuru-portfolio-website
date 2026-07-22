'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ThreePageHero from '@/components/ThreePageHero';

export default function About() {
  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <ThreePageHero shape="matrix" />
          <div className="reveal">
            <div className="label mb-4">[ ABOUT ME ]</div>
            
            <div className="grid-2 mb-16 items-center">
              <div>
                <h1 className="heading-xl mb-2">Isuru Thennakoon</h1>
                <div className="heading-sm text-accent mb-8">Executive Engineer – IT & Head of IT Department</div>
                
                <div className="glass-panel p-8">
                  <p className="text-body mb-4 text-lg">
                    Highly accomplished Executive Engineer – IT & Head of IT Department with over 3 years of progressive experience designing, implementing, securing, and maintaining enterprise IT infrastructure within a highly regulated pharmaceutical manufacturing environment.
                  </p>
                  <p className="text-body mb-4">
                    Demonstrated record of rapid career advancement through three promotions within two years based on technical excellence, leadership, and project delivery. Possess extensive hands-on expertise in enterprise network administration, Windows Server infrastructure, VMware virtualization, Active Directory administration, Microsoft 365, enterprise storage management, backup and disaster recovery, cybersecurity, CCTV surveillance systems, industrial manufacturing systems, laboratory infrastructure, and GMP-compliant IT operations.
                  </p>
                  <p className="text-body">
                    Recognized for consistently delivering highly available, secure, scalable, and audit-ready IT environments while maintaining zero critical audit findings across multiple regulatory inspections and quality management audits.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center relative">
                 <div className="relative" style={{ width: '100%', maxWidth: '400px', aspectRatio: '4/5', borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glow-md)' }}>
                    <img src="/profile.jpg" alt="Isuru Thennakoon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container bg-secondary">
          <div className="reveal">
            <h2 className="heading-lg mb-12">Experience Timeline</h2>
            
            <div className="timeline">
              <div className="timeline-item current">
                <div className="timeline-period">2025 – Present</div>
                <h3 className="timeline-title">Executive Engineer – IT & Head of IT Department</h3>
                <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd | Kandy, Sri Lanka</div>
                <div className="timeline-highlights">
                  <div className="timeline-highlight">Administer enterprise-wide IT infrastructure supporting more than 200 employees operating across manufacturing, laboratory, warehouse, and administrative departments.</div>
                  <div className="timeline-highlight">Manage complete enterprise network infrastructure including LAN, enterprise Wi-Fi, VPN connectivity, IP Telephony, managed switches, structured cabling, VLAN architecture, routing, and network segmentation.</div>
                  <div className="timeline-highlight">Administer Windows Server infrastructure supporting authentication, centralized management, file services, DNS, DHCP, and Active Directory.</div>
                  <div className="timeline-highlight">Maintain enterprise storage infrastructure utilizing Synology RackStation and QSAN NAS solutions exceeding 100 TB of production storage capacity.</div>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-period">2025</div>
                <h3 className="timeline-title">IT Engineer</h3>
                <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd</div>
                <div className="timeline-highlights">
                  <div className="timeline-highlight">Promoted to independently manage enterprise servers, infrastructure administration, compliance documentation, Active Directory administration, virtualization environments, enterprise backup solutions, user access management, vendor coordination, and critical infrastructure projects supporting pharmaceutical manufacturing operations.</div>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-period">2024</div>
                <h3 className="timeline-title">Trainee IT Engineer</h3>
                <div className="timeline-company">Kelun Lifesciences (Pvt) Ltd</div>
                <div className="timeline-highlights">
                  <div className="timeline-highlight">Started career supporting enterprise IT operations while gaining practical experience in network administration, Windows Server management, Active Directory, virtualization, end-user support, infrastructure maintenance, enterprise storage, laboratory systems, regulatory compliance, and pharmaceutical IT operations.</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section container">
          <div className="reveal">
             <h2 className="heading-lg mb-12">Core Competencies</h2>
             <div className="grid-4">
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Enterprise Infrastructure</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• IT Operations Management</li>
                      <li>• Systems Administration</li>
                      <li>• High Availability Infrastructure</li>
                      <li>• Disaster Recovery Planning</li>
                      <li>• Change Management</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Network Administration</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• Enterprise LAN/WAN</li>
                      <li>• VLAN Configuration</li>
                      <li>• VPN & Network Segmentation</li>
                      <li>• DNS & DHCP</li>
                      <li>• Firewall Administration</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Windows Infrastructure</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• Windows Server 2016/2019</li>
                      <li>• Active Directory</li>
                      <li>• Group Policy Management</li>
                      <li>• File & Print Services</li>
                      <li>• Security Policies</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Virtualization & Storage</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• VMware ESXi / vSphere</li>
                      <li>• Synology & QSAN NAS</li>
                      <li>• Enterprise Storage Management</li>
                      <li>• Veeam Backup & Replication</li>
                      <li>• RAID Configuration</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Microsoft 365</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• Microsoft 365 Administration</li>
                      <li>• Microsoft Entra ID</li>
                      <li>• MFA Implementation</li>
                      <li>• Teams & OneDrive</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Security</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• HikCentral Professional</li>
                      <li>• Enterprise CCTV Systems</li>
                      <li>• Access Control Systems</li>
                      <li>• Endpoint Security</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Monitoring & Automation</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• Zabbix Monitoring</li>
                      <li>• PowerShell Scripting</li>
                      <li>• Windows Automation</li>
                      <li>• Infrastructure Monitoring</li>
                   </ul>
                </div>
                <div className="glass-card p-6">
                   <h3 className="heading-sm mb-4 text-accent">Compliance</h3>
                   <ul className="text-sm flex flex-col gap-2 text-gray-300">
                      <li>• GMP / EU-GMP</li>
                      <li>• ISO Standards</li>
                      <li>• NMRA / SLAB Compliance</li>
                      <li>• CSV Documentation</li>
                   </ul>
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
