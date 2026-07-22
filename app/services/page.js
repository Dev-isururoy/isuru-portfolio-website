'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import TechNodesGraphic from '@/components/TechNodesGraphic';

export default function Services() {
  const services = [
    {
      id: "svc-001",
      title: "Network Infrastructure Design",
      icon: "🌐",
      description: "Complete enterprise network architecture design and deployment including LAN, WAN, VLAN, wireless, VPN, and network security implementation.",
      features: ["Network Architecture", "VLAN Segmentation", "Wireless Deployment", "VPN Setup", "Firewall Configuration"]
    },
    {
      id: "svc-002",
      title: "Server & Systems Administration",
      icon: "🖥️",
      description: "Windows Server deployment, Active Directory management, Group Policy, and enterprise systems administration for mission-critical environments.",
      features: ["Windows Server", "Active Directory", "Group Policy", "DNS/DHCP", "File Services"]
    },
    {
      id: "svc-003",
      title: "Virtualization Solutions",
      icon: "☁️",
      description: "VMware ESXi and vSphere virtualization platform design, deployment, and management for optimal resource utilization and business continuity.",
      features: ["VMware ESXi", "vSphere", "VM Management", "Resource Optimization", "High Availability"]
    },
    {
      id: "svc-004",
      title: "Backup & Disaster Recovery",
      icon: "🛡️",
      description: "Enterprise backup architecture using Veeam with comprehensive disaster recovery planning, testing, and validation procedures.",
      features: ["Veeam B&R", "Backup Strategy", "DR Planning", "Recovery Testing", "Data Protection"]
    },
    {
      id: "svc-005",
      title: "Cybersecurity & Monitoring",
      icon: "🔒",
      description: "Infrastructure security hardening, Zabbix monitoring deployment, CCTV systems, access control, and comprehensive security posture management.",
      features: ["Zabbix Monitoring", "CCTV Systems", "Access Control", "Security Hardening", "Endpoint Security"]
    },
    {
      id: "svc-006",
      title: "IT Automation & Scripting",
      icon: "⚡",
      description: "PowerShell automation, process optimization, and custom tooling development to streamline IT operations and reduce manual workload.",
      features: ["PowerShell Scripts", "Process Automation", "Task Scheduling", "Custom Tools", "Reporting"]
    }
  ];

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <TechNodesGraphic />
          <div className="reveal">
            <h1 className="heading-xl mb-4">Services & Expertise</h1>
            <p className="text-body mb-16 max-w-2xl">
              Delivering secure, scalable, and audit-ready IT infrastructure solutions tailored for enterprise and manufacturing environments.
            </p>
            
            <div className="grid-3">
              {services.map((svc, idx) => (
                <div key={svc.id} className={`glass-card service-card reveal reveal-delay-${(idx % 3) + 1}`}>
                  <div className="service-icon text-3xl">{svc.icon}</div>
                  <h3 className="heading-sm text-white">{svc.title}</h3>
                  <p className="text-sm text-gray-400 flex-grow">{svc.description}</p>
                  <div className="service-features mt-4">
                    {svc.features.map(f => (
                      <span key={f} className="badge-outline text-[10px] px-2 py-0.5">{f}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section container bg-secondary">
           <div className="reveal">
              <div className="label mb-4">[ METHODOLOGY ]</div>
              <h2 className="heading-lg mb-12">The Engineering Process</h2>
              <div className="grid-4">
                 <div className="glass-card p-6 reveal">
                    <div className="text-4xl font-black text-accent opacity-20 mb-4">01</div>
                    <h3 className="heading-sm mb-2">Assess</h3>
                    <p className="text-sm text-gray-400">Evaluate existing infrastructure, identify vulnerabilities, and define business requirements and compliance needs.</p>
                 </div>
                 <div className="glass-card p-6 reveal reveal-delay-1">
                    <div className="text-4xl font-black text-accent opacity-20 mb-4">02</div>
                    <h3 className="heading-sm mb-2">Design</h3>
                    <p className="text-sm text-gray-400">Architect scalable, secure solutions with comprehensive capacity planning and disaster recovery considerations.</p>
                 </div>
                 <div className="glass-card p-6 reveal reveal-delay-2">
                    <div className="text-4xl font-black text-accent opacity-20 mb-4">03</div>
                    <h3 className="heading-sm mb-2">Implement</h3>
                    <p className="text-sm text-gray-400">Deploy systems with minimal disruption, thorough testing, and complete documentation aligned with GMP standards.</p>
                 </div>
                 <div className="glass-card p-6 reveal reveal-delay-3">
                    <div className="text-4xl font-black text-accent opacity-20 mb-4">04</div>
                    <h3 className="heading-sm mb-2">Monitor</h3>
                    <p className="text-sm text-gray-400">Establish proactive monitoring, continuous maintenance, and automated alerting to ensure 99%+ uptime.</p>
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
