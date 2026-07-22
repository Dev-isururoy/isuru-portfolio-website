'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import MailRoutingGraphic from '@/components/MailRoutingGraphic';
import CTABanner from '@/components/CTABanner';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-transition">
      <Navbar />
      <main>
        <section className="section container" style={{ paddingTop: '10rem', position: 'relative', overflow: 'hidden' }}>
          <MailRoutingGraphic />
          <div className="reveal">
            <h1 className="heading-xl mb-4">Get In Touch</h1>
            <p className="text-body mb-16 max-w-2xl">
              Whether you have a question, require expert infrastructure advice, or want to discuss a potential opportunity, I'm just a message away.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
              {/* Form */}
              <div className="glass-panel p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-4 text-2xl">✓</div>
                    <h3 className="heading-sm mb-2 text-white">Message Sent!</h3>
                    <p className="text-sm text-gray-400">Thank you for reaching out. I'll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="mb-6 p-4 rounded-md border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                        {error}
                      </div>
                    )}
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Project Inquiry"
                        required
                        value={formData.subject}
                        onChange={e => setFormData({...formData, subject: e.target.value})}
                        disabled={loading}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea 
                        className="form-textarea" 
                        placeholder="How can I help you?"
                        required
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        disabled={loading}
                      ></textarea>
                    </div>
                    <button type="submit" disabled={loading} className="btn btn-primary w-full justify-center mt-4">
                      {loading ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col justify-center" style={{ paddingLeft: '1.5rem' }}>
                <div className="mb-12">
                  <div className="label mb-6">[ CONTACT DETAILS ]</div>
                  <div className="flex flex-col gap-6">
                    <a href="mailto:dev.isururoy@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">📧</div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email</div>
                        <div className="font-semibold">dev.isururoy@gmail.com</div>
                      </div>
                    </a>
                    <a href="tel:+94760579069" className="flex items-center gap-4 text-gray-300 hover:text-accent transition-colors">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">📞</div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Phone</div>
                        <div className="font-semibold">+94 760579069</div>
                      </div>
                    </a>
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl">📍</div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">Location</div>
                        <div className="font-semibold">Kandy, Sri Lanka</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="label mb-6">[ SOCIAL ]</div>
                  <div className="flex gap-4 flex-wrap">
                    <a href="https://linkedin.com/in/isuruthennakoon" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                      LinkedIn
                    </a>
                    <a href="https://github.com/Dev-isururoy" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                      GitHub
                    </a>
                    <a href="https://www.facebook.com/share/1Dzyz6MyLS/" target="_blank" rel="noopener noreferrer" className="btn btn-glass">
                      Facebook
                    </a>
                  </div>
                </div>
                
                <div className="mt-12 flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 w-max">
                   <div className="availability-dot"></div>
                   <div className="text-sm font-semibold">Available for new opportunities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="section container">
          <div className="reveal">
            <div className="label mb-4">[ PROCESS ]</div>
            <h2 className="heading-lg mb-12">What to Expect</h2>
            <div className="grid-3">
              <div className="glass-panel p-8 reveal reveal-delay-1">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl" style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>01</div>
                <h3 className="heading-sm mb-3 text-white">Initial Consultation</h3>
                <p className="text-sm text-gray-400">Share your requirements, challenges, or project vision. I'll listen carefully and ask the right questions to understand your infrastructure needs.</p>
              </div>
              <div className="glass-panel p-8 reveal reveal-delay-2">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl" style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>02</div>
                <h3 className="heading-sm mb-3 text-white">Assessment & Proposal</h3>
                <p className="text-sm text-gray-400">I'll evaluate the scope, identify the best approach, and provide a clear, detailed proposal with timelines, deliverables, and cost estimates.</p>
              </div>
              <div className="glass-panel p-8 reveal reveal-delay-3">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl" style={{ background: 'rgba(var(--accent-rgb), 0.1)', color: 'var(--accent)' }}>03</div>
                <h3 className="heading-sm mb-3 text-white">Execution & Delivery</h3>
                <p className="text-sm text-gray-400">From deployment to documentation — every project is delivered with enterprise-grade precision, GMP compliance, and thorough validation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section container">
          <div className="reveal">
            <div className="label mb-4">[ FAQ ]</div>
            <h2 className="heading-lg mb-12">Frequently Asked Questions</h2>
            <div className="grid-2 gap-8">
              <div className="glass-panel p-6 reveal reveal-delay-1">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>What industries do you specialize in?</h3>
                <p className="text-sm text-gray-400">I specialize in pharmaceutical manufacturing environments that require GMP, EU-GMP, and NMRA compliance. My expertise extends to any regulated industry needing mission-critical IT infrastructure.</p>
              </div>
              <div className="glass-panel p-6 reveal reveal-delay-2">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>What size of infrastructure can you manage?</h3>
                <p className="text-sm text-gray-400">I currently manage enterprise infrastructure supporting 200+ users, 70+ critical systems, 250+ TB backup repositories, and 100+ TB of production storage across multiple domains.</p>
              </div>
              <div className="glass-panel p-6 reveal reveal-delay-3">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>Do you offer remote consultation?</h3>
                <p className="text-sm text-gray-400">Yes, I offer both remote and on-site consultation. For infrastructure assessments, planning, and advisory services, remote sessions work perfectly. Complex deployments may require on-site presence.</p>
              </div>
              <div className="glass-panel p-6 reveal reveal-delay-4">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>What is your typical response time?</h3>
                <p className="text-sm text-gray-400">I aim to respond to all inquiries within 24 hours. For urgent infrastructure matters, I prioritize rapid communication and can be reached directly via phone.</p>
              </div>
              <div className="glass-panel p-6 reveal reveal-delay-1">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>Can you help with regulatory audit preparation?</h3>
                <p className="text-sm text-gray-400">Absolutely. I have extensive experience preparing IT infrastructure documentation, SOPs, and validation records for EU-GMP, NMRA, and ISO audits — with a track record of zero critical findings.</p>
              </div>
              <div className="glass-panel p-6 reveal reveal-delay-2">
                <h3 className="heading-sm mb-3 text-white" style={{ fontSize: '0.95rem' }}>What technologies do you work with?</h3>
                <p className="text-sm text-gray-400">Windows Server, VMware, Veeam, Active Directory, Zabbix, HikCentral, Synology, QSAN, Agilent HPLC, SCADA, BMS, Bitdefender GravityZone, Microsoft 365, and more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <CTABanner />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
