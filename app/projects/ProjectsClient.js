'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ServerRackGraphic from '@/components/ServerRackGraphic';
import ThreePageHero from '@/components/ThreePageHero';

const projectsData = [
  {
    id: "proj-002",
    title: "Agilent HPLC & Server Deployment Project",
    category: "Laboratory Systems",
    duration: "Feb 2026 – Mar 2026",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Successfully led the installation, configuration, and network integration of Agilent HPLC laboratory systems and the Agilent CSV infrastructure within a GMP-compliant pharmaceutical manufacturing environment.",
    longDescription: "The project involved server deployment, network architecture planning, IP configuration, connectivity validation, user access provisioning, system integration, and infrastructure support to ensure reliable communication between laboratory instruments and centralized data management systems.",
    achievements: [
      "Led end-to-end deployment and network integration of Agilent HPLC systems.",
      "Configured and integrated Agilent CSV server infrastructure.",
      "Established secure communication between laboratory instruments and server platforms.",
      "Supported validation and compliance activities within a regulated pharmaceutical environment.",
      "Enhanced laboratory system availability and operational reliability.",
      "Contributed to successful regulatory audits with zero major IT-related observations."
    ],
    tags: ["Agilent HPLC", "Server Administration", "CSV", "GMP", "Validation", "Network Integration"],
    status: "completed"
  },
  {
    id: "proj-001",
    title: "Enterprise Network Infrastructure Deployment",
    category: "Network",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Complete enterprise network architecture redesign including LAN, enterprise Wi-Fi, VPN connectivity, IP Telephony, managed switches, structured cabling, VLAN architecture, routing, and network segmentation for pharmaceutical manufacturing.",
    longDescription: "Designed and deployed a comprehensive enterprise network infrastructure supporting 200+ employees across manufacturing, laboratory, warehouse, and administrative departments.",
    achievements: [
      "Designed and deployed comprehensive enterprise network infrastructure.",
      "Implemented VLAN segmentation and managed switch configuration.",
      "Deployed wireless infrastructure with enterprise-grade security.",
      "Established VPN connectivity and network security best practices."
    ],
    tags: ["LAN", "VLAN", "Wi-Fi", "VPN", "Firewall", "Switching"],
    status: "completed"
  },
  {
    id: "proj-011",
    title: "NVPC Monitoring System – IT Infrastructure & Network Integration",
    category: "Monitoring",
    duration: "2025",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Led the IT infrastructure and network integration for the NVPC Monitoring System deployment within a GMP-compliant pharmaceutical manufacturing facility.",
    longDescription: "Partnered with the vendor team to deliver network readiness and server connectivity for their sensor configuration, calibration, and monitoring validation activities.",
    scope: [
      "Architected network integration for NVPC sensors and monitoring gateways into the enterprise LAN and manufacturing zone network.",
      "Configured IP addressing, VLAN segmentation, and firewall policies for secure, real-time data transmission from cleanroom devices.",
      "Provisioned server network connectivity, validated path stability, and ensured uptime for the NVPC application.",
      "Performed end-to-end device connectivity testing and network-layer troubleshooting.",
      "Coordinated with vendors to confirm network readiness prior to sensor commissioning and calibration.",
      "Validated network resilience and throughput to support continuous environmental monitoring."
    ],
    achievements: [
      "Integrated multi-zone NVPC monitoring endpoints with secure, validated connectivity for cleanroom environments.",
      "Engineered network paths enabling uninterrupted real-time particle count data flow.",
      "Delivered reliable network transport for NVPC sensors and alarm gateways across critical zones.",
      "Provided network readiness support during vendor deployment, eliminating connectivity-related delays.",
      "Ensured network-layer resilience for centralized environmental data collection and audit trails."
    ],
    tags: ["Environmental Monitoring", "GMP", "NVPC", "Network Integration", "Cleanroom"],
    status: "completed"
  },
  {
    id: "proj-003",
    title: "Enterprise Backup & Disaster Recovery Automation",
    category: "Storage & Backup",
    duration: "2024",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Designed and implemented a dual-domain enterprise backup and disaster recovery architecture using Veeam Backup & Replication to protect critical pharmaceutical infrastructure.",
    longDescription: "The project covered two independent environments — an isolated QC laboratory domain and the primary corporate domain. Protected over 70 critical systems including Domain Controllers, BMS, SCADA, HPLC, FTIR, TOC analyzers, and VMware virtual infrastructure.",
    achievements: [
      "Designed a dual-domain Veeam backup infrastructure for QC and corporate networks.",
      "Protected 70+ critical systems across pharmaceutical manufacturing and laboratory operations.",
      "Managed 250+ TB of backup storage and 13+ automated backup jobs.",
      "Secured HPLC, SCADA, BMS, FTIR, TOC, and Domain Controller environments.",
      "Supported GMP, EU-GMP, NMRA, and ISO compliance requirements."
    ],
    tags: ["Veeam", "Disaster Recovery", "Backup", "VMware", "Storage", "Veeam ONE"],
    status: "completed"
  },
  {
    id: "proj-005",
    title: "Winlog Temperature Alarm Monitoring System",
    category: "Industrial Systems",
    duration: "2025",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Led the IT infrastructure and network integration for the Winlog Temperature Alarm Monitoring System deployment across GMP-compliant pharmaceutical storage areas.",
    longDescription: "Partnered with the vendor team to deliver network readiness for their application installation, alarm configuration, and validation activities.",
    scope: [
      "Architected network integration for IF 400 temperature loggers and Modbus IP alarm systems into the enterprise LAN.",
      "Configured IP addressing, VLAN segmentation, and firewall policies for secure, real-time device-to-server communication.",
      "Provisioned server network connectivity and validated path stability for the WINLOG.WEB v3.11 application layer.",
      "Performed end-to-end device connectivity testing and network-layer troubleshooting.",
      "Validated network uptime and reliability to support continuous environmental monitoring."
    ],
    achievements: [
      "Integrated multi-site temperature monitoring endpoints with secure, validated connectivity.",
      "Engineered network paths enabling uninterrupted real-time telemetry from storage sensors.",
      "Delivered reliable network transport for Modbus IP alarm systems and IF 400 loggers.",
      "Provided network readiness support during vendor deployment, cutting integration time.",
      "Ensured network-layer resilience for automated reporting, event logging, and alarm pipelines."
    ],
    tags: ["Winlog", "Temperature Monitoring", "Modbus IP", "SCADA", "GMP"],
    status: "completed"
  },
  {
    id: "proj-004",
    title: "VMware Virtualization Environment",
    category: "Virtualization",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Deployed and managed VMware ESXi virtualization platform hosting production-critical virtual machines supporting pharmaceutical manufacturing operations.",
    longDescription: "Administered VMware ESXi virtualization platform with complete virtual machine deployment, configuration, storage allocation, snapshots, resource optimization, backup integration, and lifecycle management.",
    achievements: [
      "Deployed high-availability VMware ESXi virtualization platform.",
      "Managed production-critical virtual machines for pharmaceutical operations.",
      "Optimized virtual infrastructure performance while maintaining business continuity.",
      "Integrated backup solutions for complete VM protection."
    ],
    tags: ["VMware", "ESXi", "vSphere", "Virtualization"],
    status: "completed"
  },
  {
    id: "proj-006",
    title: "Enterprise CCTV Infrastructure Expansion",
    category: "Security",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Administered and expanded enterprise CCTV infrastructure utilizing HikCentral Professional platform across manufacturing and office facilities.",
    longDescription: "Managed enterprise-wide CCTV surveillance infrastructure using HikCentral Professional. Expanded camera coverage across manufacturing, laboratory, warehouse, and office areas.",
    achievements: [
      "Expanded CCTV camera coverage across all facility zones.",
      "Deployed HikCentral Professional for centralized surveillance management.",
      "Integrated access control systems and attendance systems.",
      "Ensured physical security monitoring for manufacturing areas."
    ],
    tags: ["CCTV", "HikCentral", "Hikvision", "Access Control", "Security"],
    status: "completed"
  },
  {
    id: "proj-007",
    title: "Enterprise NAS Storage Expansion (100+ TB)",
    category: "Storage & Backup",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Deployed and optimized enterprise storage infrastructure utilizing Synology RackStation and QSAN NAS solutions exceeding 100 TB of production storage capacity.",
    longDescription: "Configured RAID storage pools, storage replication, shared folders, permissions, quotas, Hyper Backup, and disaster recovery synchronization.",
    achievements: [
      "Deployed and maintained 100+ TB enterprise storage infrastructure.",
      "Configured Synology RackStation and QSAN NAS solutions.",
      "Implemented RAID storage pools and disaster recovery synchronization.",
      "Optimized storage performance and reliability."
    ],
    tags: ["Synology", "QSAN", "NAS", "RAID", "Storage"],
    status: "completed"
  },
  {
    id: "proj-008",
    title: "IT Ticketing & Tracking System",
    category: "Development",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Developed and implemented a custom IT ticketing and tracking system for streamlined IT operations management and incident tracking.",
    longDescription: "Designed and developed a comprehensive IT ticketing and tracking system to streamline IT operations, incident management, and service delivery.",
    achievements: [
      "Designed and developed custom IT ticketing system.",
      "Streamlined incident management and service delivery workflows.",
      "Implemented analytics and reporting capabilities.",
      "Improved IT operations efficiency and tracking."
    ],
    tags: ["Development", "Python", "IT Operations", "Ticketing"],
    status: "completed"
  },
  {
    id: "proj-009",
    title: "Active Directory Infrastructure Enhancement",
    category: "Windows Infrastructure",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Enhanced Active Directory infrastructure including forest management, GPO standardization, security policies, and organizational unit restructuring.",
    longDescription: "Comprehensive Active Directory infrastructure enhancement project covering forest and domain management, organizational unit restructuring, and GPO standardization for 200+ employees.",
    achievements: [
      "Restructured Active Directory forest and organizational units.",
      "Standardized Group Policy Objects across the organization.",
      "Implemented security policy enhancements.",
      "Optimized user/computer administration for 200+ employees."
    ],
    tags: ["Active Directory", "GPO", "Windows Server", "Security"],
    status: "completed"
  },
  {
    id: "proj-010",
    title: "Zabbix Infrastructure Monitoring Platform",
    category: "Monitoring",
    organization: "Kelun Lifesciences Pvt Ltd",
    role: "Engineer – IT",
    description: "Deployed Zabbix monitoring platform supervising 200+ network-connected devices with intelligent alerting and proactive issue detection.",
    longDescription: "Configured intelligent alerts enabling proactive issue detection and rapid incident response while maintaining infrastructure availability exceeding 99%.",
    achievements: [
      "Deployed Zabbix monitoring for 200+ network-connected devices.",
      "Configured intelligent alerting and proactive issue detection.",
      "Maintained infrastructure availability exceeding 99%.",
      "Monitored servers, switches, storage, UPS, and environmental equipment."
    ],
    tags: ["Zabbix", "Monitoring", "SNMP", "Alerting"],
    status: "completed"
  },
  {
    id: "proj-012",
    title: "Experimental Rocket Research & Development",
    category: "Development",
    duration: "2017",
    role: "Independent Researcher & Project Owner",
    description: "Independently researched, designed, and developed an experimental rocket project focusing on aerospace engineering principles, propulsion concepts, aerodynamics, and safety management.",
    longDescription: "The project was conducted with support and guidance from the Civil Aviation Authority of Sri Lanka and the Sri Lanka Air Force. Managed the complete project lifecycle independently, including technical research, design, planning, testing, documentation, risk assessment, and experimental validation.",
    achievements: [
      "Independently conceived, researched, and executed an experimental rocket project.",
      "Conducted studies on propulsion systems, aerodynamics, and flight stability.",
      "Managed project planning, testing, documentation, and technical validation activities.",
      "Worked within applicable safety and regulatory frameworks.",
      "Coordinated with aviation and defense-sector stakeholders during project activities.",
      "Developed practical experience in engineering research and risk management."
    ],
    tags: ["Aerospace", "Propulsion", "Research", "Engineering", "Project Management"],
    status: "completed"
  }
];

export default function ProjectsClient({ dbProjects = [] }) {
  const [filter, setFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);

  const categories = ['All', 'Network', 'Laboratory Systems', 'Storage & Backup', 'Virtualization', 'Security', 'Monitoring', 'Development', 'Windows Infrastructure', 'Industrial Systems'];

  // Parse JSON fields from DB projects and merge with hardcoded projects
  const parsedDbProjects = dbProjects.map(p => ({
    ...p,
    achievements: p.achievements ? JSON.parse(p.achievements) : null,
    scope: p.scope ? JSON.parse(p.scope) : null,
    tags: p.tags ? JSON.parse(p.tags) : []
  }));

  const allProjects = [...parsedDbProjects, ...projectsData];

  const filteredProjects = filter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === filter);

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <ServerRackGraphic />
          <div className="reveal">
            <div className="flex justify-between items-end mb-4 relative z-10">
              <h1 className="heading-xl m-0">Projects & Deployments</h1>
              <Link href="/projects/login" className="text-gray-600 hover:text-green-500 transition-colors" title="Admin Login">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </Link>
            </div>
            <p className="text-body mb-12 max-w-2xl">
              A selection of enterprise-grade IT infrastructure projects, deployments, and security implementations in highly regulated environments.
            </p>
            
            <div className="filter-tabs">
              {categories.map(cat => (
                <button 
                  key={cat} 
                  className={`filter-tab ${filter === cat ? 'active' : ''}`}
                  onClick={() => setFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {filteredProjects.map((project, idx) => (
                <div 
                  key={project.id} 
                  className={`glass-panel reveal reveal-delay-${(idx % 4) + 1}`}
                  style={{ padding: '2rem', cursor: 'pointer', transition: 'all 0.3s ease', border: expandedId === project.id ? '1px solid var(--accent)' : undefined }}
                  onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span className="project-card-tag">{project.category}</span>
                        {project.status === 'completed' && <span className="project-card-tag" style={{ background: 'rgba(57, 255, 20, 0.1)', color: '#39FF14' }}>Completed</span>}
                        {project.duration && <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{project.duration}</span>}
                      </div>
                      <h3 className="heading-sm text-white" style={{ marginBottom: '0.5rem', fontSize: '1.15rem' }}>{project.title}</h3>
                      {project.organization && (
                        <div style={{ fontSize: '0.8rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{project.organization} {project.role && `· ${project.role}`}</div>
                      )}
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{project.description}</p>
                    </div>
                    <div style={{ fontSize: '1.5rem', color: 'var(--text-muted)', transform: expandedId === project.id ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', flexShrink: 0 }}>
                      ▾
                    </div>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '0.65rem', padding: '0.25rem 0.6rem', borderRadius: '9999px', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{tag}</span>
                    ))}
                  </div>

                  {/* Expanded Details */}
                  {expandedId === project.id && (
                    <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', animation: 'fadeIn 0.3s ease' }}>
                      {project.imagePath && (
                        <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflow: 'hidden' }}>
                          <img src={project.imagePath} alt={project.title} style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
                        </div>
                      )}
                      {project.longDescription && (
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{project.longDescription}</p>
                      )}

                      {project.scope && project.scope.length > 0 && (
                        <div style={{ marginBottom: '1.5rem' }}>
                          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>Scope & Responsibilities</h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {project.scope.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {project.achievements && project.achievements.length > 0 && (
                        <div>
                          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--accent)', marginBottom: '0.75rem', fontWeight: 600 }}>Key Achievements</h4>
                          <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                            {project.achievements.map((item, i) => (
                              <li key={i} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
               <div className="text-center py-20 text-gray-500">
                  No projects found for this category.
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
