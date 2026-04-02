/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Globe, ChevronRight, Copy, Check, X, MessageCircle } from "lucide-react";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Team", href: "#team" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      id: "01",
      title: "Licensing & Registration",
      description: "SFC Types 1–10, VA licensing, Money Lender, HKEX",
      tag: "SFC · HKEX · VA",
    },
    {
      id: "02",
      title: "Ongoing Compliance Advisory",
      description: "AML/CFT, KYC, AI governance",
      tag: "Compliance Outsourcing",
    },
    {
      id: "03",
      title: "Regulatory Inspection Support",
      description: "On-site readiness, mock audits, gap analyses",
      tag: "SFC · HKEX Inspections",
    },
    {
      id: "04",
      title: "Specialized Advisory",
      description: "Training, policy drafting, M&A support",
      tag: "CPT · Policy · M&A",
    },
  ];

  const [selectedMember, setSelectedMember] = useState<typeof team[0] | null>(null);

  const team = [
    {
      initials: "TU",
      name: "Thomas Uruma",
      role: "Director",
      phone: "+852 9400 5935",
      image: "https://storage.googleapis.com/static.mira.ai/agent_attachments/1743242674317_image_1.png",
      bio: "Thomas has over 25 years of experience in both front-office and compliance roles. He began his career in sales and trading within private banking before moving to senior brokerage positions at OKASAN International, CITIC Securities, and HSBC.",
      details: [
        "Over 25 years of experience in front-office and compliance roles",
        "Senior positions at OKASAN International, CITIC Securities, and HSBC",
        "Former Regional Head of Client Services at a leading consultancy",
        "Managed a portfolio of over 140 clients, from global investment banks to specialist asset managers",
        "Master of Arts in Economics from Soka University",
        "Fluent in English, Japanese, Cantonese, and Putonghua"
      ]
    },
    {
      initials: "BL",
      name: "Ben Li",
      role: "Director",
      phone: "+852 9240 9588",
      image: "https://storage.googleapis.com/static.mira.ai/agent_attachments/1743242674317_image_0.png",
      bio: "Ben is a legal and compliance professional with over 12 years of experience across multiple jurisdictions, including Singapore, Hong Kong, China and Macao. His career has focused on designing and implementing compliance frameworks for asset managers, brokers, and innovative fintech platforms.",
      details: [
        "Over 12 years of experience across Singapore, Hong Kong, China, and Macao",
        "Former enforcement agent at HKEX, conducting on-site inspections of brokerage firms",
        "Former Manager-in-Charge of Compliance for the Micro Connect Group",
        "Built alternative fund compliance framework and AML/CFT architecture for Micro Connect (Macao) Financial Assets Exchange",
        "CFA charterholder and Master of Laws (Chinese Law) from HKU",
        "Fluent in English and Putonghua"
      ]
    },
  ];

  const TeamImage = ({ src, name, initials, size = "w-12 h-12", rounded = "rounded-full" }: { src?: string, name: string, initials: string, size?: string, rounded?: string }) => {
    const [error, setError] = useState(false);
    
    if (src && !error) {
      return (
        <div className={`${size} ${rounded} overflow-hidden border border-border-custom flex-shrink-0`}>
          <img 
            src={src} 
            alt={name} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={() => setError(true)}
          />
        </div>
      );
    }
    
    return (
      <div className={`${size} ${rounded} bg-navy flex items-center justify-center text-white font-bold flex-shrink-0`}>
        {initials}
      </div>
    );
  };

  return (
    <div className="min-h-screen selection:bg-gold-light selection:text-navy">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border-custom/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider">
            BROOKLET <span className="text-gold">ADVISORY</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="px-5 py-2 border border-navy rounded-full text-sm font-medium hover:bg-navy hover:text-white transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>
      </nav>

      {/* Contact Modal */}
      <AnimatePresence>
        {isContactModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsContactModalOpen(false)}
              className="absolute inset-0 bg-navy/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-[20px] shadow-2xl overflow-hidden"
            >
              <div className="p-8 border-b border-border-custom flex items-center justify-between">
                <h2 className="text-2xl font-medium">Direct Contact</h2>
                <button 
                  onClick={() => setIsContactModalOpen(false)}
                  className="p-2 hover:bg-surface rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="p-8 grid md:grid-cols-2 gap-8">
                {team.map((member) => (
                  <div key={member.name} className="space-y-6">
                    <div className="flex items-center gap-4">
                      <TeamImage 
                        src={member.image} 
                        name={member.name} 
                        initials={member.initials} 
                      />
                      <div>
                        <p className="font-bold">{member.name}</p>
                        <p className="text-xs text-gold uppercase font-bold tracking-wider">{member.role}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 bg-surface rounded-lg border border-border-custom/50 group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold text-muted uppercase tracking-widest">Phone / WhatsApp</span>
                          <div className="flex items-center gap-2">
                            <a 
                              href={`https://wa.me/${member.phone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-1.5 hover:bg-white rounded text-green-600 transition-colors"
                              title="WhatsApp"
                            >
                              <MessageCircle className="w-4 h-4" />
                            </a>
                            <button 
                              onClick={() => copyToClipboard(member.phone)}
                              className="p-1.5 hover:bg-white rounded text-muted hover:text-navy transition-colors"
                            >
                              {copiedText === member.phone ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                          </div>
                        </div>
                        <p className="font-medium">{member.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-8 pb-8">
                <div className="p-4 bg-surface rounded-lg border border-border-custom/50 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest block mb-1">General Inquiries</span>
                    <p className="font-medium">info@brookletadvisory.com</p>
                  </div>
                  <button 
                    onClick={() => copyToClipboard("info@brookletadvisory.com")}
                    className="p-2 hover:bg-white rounded text-muted hover:text-navy transition-colors"
                  >
                    {copiedText === "info@brookletadvisory.com" ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="p-6 bg-surface/50 text-center">
                <p className="text-xs text-muted italic">
                  Brooklet Advisory Limited is not a law firm or tax advisor.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 lg:py-32 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-6 block">
                Hong Kong · Regulatory & Compliance Advisory
              </span>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] font-bold tracking-[0.15em] text-muted uppercase mb-8">
                <span className="text-gold/60">General Inquiries:</span>
                <a href="mailto:info@brookletadvisory.com" className="hover:text-gold transition-colors">info@brookletadvisory.com</a>
              </div>

              <h1 className="text-5xl lg:text-7xl font-medium leading-[1.1] mb-8">
                Every ocean begins with a <br className="hidden lg:block" />
                <span className="italic text-gold">small brooklet.</span>
              </h1>
              <p className="text-muted text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                Brooklet Advisory provides specialist guidance on Hong Kong's regulatory landscape — from SFC licensing to ongoing compliance outsourcing, built on decades of in-house experience.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <button className="px-8 py-4 bg-navy text-white rounded-full font-medium hover:bg-navy/90 transition-all shadow-lg shadow-navy/10">
                  Our Services
                </button>
                <button className="text-gold font-medium border-b border-gold hover:border-b-2 transition-all flex items-center gap-2">
                  Meet the Team <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface p-8 rounded-[10px] border-[0.5px] border-border-custom">
                  <div className="text-3xl font-bold mb-2">25+</div>
                  <div className="text-sm text-muted leading-snug">Years combined experience</div>
                </div>
                <div className="bg-surface p-8 rounded-[10px] border-[0.5px] border-border-custom">
                  <div className="text-3xl font-bold mb-2">140+</div>
                  <div className="text-sm text-muted leading-snug">Clients served</div>
                </div>
              </div>
              <div className="bg-surface p-8 rounded-[10px] border-[0.5px] border-border-custom">
                <div className="text-2xl font-bold mb-2">SFC · HKEX · VA · AML</div>
                <div className="text-sm text-muted leading-snug">Full-spectrum Hong Kong regulatory coverage</div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute top-0 right-0 -z-10 opacity-10 pointer-events-none">
            <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z" fill="url(#paint0_radial)"/>
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(300 300) rotate(90) scale(300)">
                  <stop stopColor="#1b2e4b"/>
                  <stop offset="1" stopColor="white" stopOpacity="0"/>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-4 block">
                What we do
              </span>
              <h2 className="text-4xl font-medium">Our Services</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[10px] border-[0.5px] border-border-custom hover:border-gold/30 transition-all group"
                >
                  <div className="text-xs font-bold text-gold/40 mb-6">{service.id}</div>
                  <h3 className="text-2xl font-medium mb-4 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-surface text-[10px] font-bold text-gold uppercase tracking-wider rounded">
                    {service.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Story Section */}
        <section id="about" className="py-32 px-6 bg-navy text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-medium mb-12">
              Every ocean begins with a <span className="italic text-gold">small brooklet.</span>
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-12 text-sm font-bold tracking-[0.3em] text-gold-light">
              <span>DETAILED</span>
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>PROFESSIONAL</span>
              <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
              <span>ACCURATE</span>
            </div>
            <p className="text-gold-light/80 text-lg leading-relaxed max-w-2xl mx-auto">
              The name Brooklet reflects our belief that everything begins from details — and that small, careful streams will one day flow into something vast. We may be a specialist boutique today, but our ambition runs deep.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase mb-4 block">
                Who we are
              </span>
              <h2 className="text-4xl font-medium">Our Team</h2>
            </div>

                <div className="grid md:grid-cols-2 gap-12">
                  {team.map((member, idx) => (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-[10px] border-[0.5px] border-border-custom bg-surface/30 group"
                    >
                      <TeamImage 
                        src={member.image} 
                        name={member.name} 
                        initials={member.initials} 
                        size="w-24 h-24"
                      />
                      <div>
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="text-2xl font-medium mb-1 hover:text-gold transition-colors text-left"
                    >
                      {member.name}
                    </button>
                    <div className="text-gold font-bold text-sm uppercase tracking-wider mb-4">
                      {member.role}
                    </div>
                    <p className="text-muted leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    <button 
                      onClick={() => setSelectedMember(member)}
                      className="text-xs font-bold text-navy hover:text-gold uppercase tracking-widest flex items-center gap-2 transition-colors"
                    >
                      View Full Profile <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Member Modal */}
        <AnimatePresence>
          {selectedMember && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-navy/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                className="relative w-full max-w-4xl bg-white rounded-[20px] shadow-2xl overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5 h-64 md:h-auto relative">
                  <TeamImage 
                    src={selectedMember.image} 
                    name={selectedMember.name} 
                    initials={selectedMember.initials} 
                    size="w-full h-full"
                    rounded="rounded-none"
                  />
                  <div className="absolute inset-0 bg-navy/10"></div>
                </div>
                
                <div className="md:w-3/5 p-10 md:p-14 relative">
                  <button 
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-6 right-6 p-2 hover:bg-surface rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="mb-8">
                    <h2 className="text-4xl font-medium mb-2">{selectedMember.name}</h2>
                    <p className="text-gold font-bold uppercase tracking-[0.2em] text-sm">{selectedMember.role}</p>
                  </div>
                  
                  <div className="space-y-6 mb-10">
                    <p className="text-muted leading-relaxed italic border-l-2 border-gold/30 pl-6">
                      {selectedMember.bio}
                    </p>
                    <ul className="space-y-3">
                      {selectedMember.details?.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-navy/80">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-8 border-t border-border-custom">
                    <a 
                      href={`tel:${selectedMember.phone}`}
                      className="flex items-center gap-2 text-sm font-bold text-navy hover:text-gold transition-colors"
                    >
                      <Phone className="w-4 h-4" /> {selectedMember.phone}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-surface/50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl font-medium mb-12">Get in Touch</h2>
              <div className="space-y-10">
                <div>
                  <div className="text-xl font-bold tracking-wider mb-6">
                    BROOKLET <span className="text-gold">ADVISORY</span>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="mt-1"><Phone className="w-5 h-5 text-gold" /></div>
                      <div>
                        <p className="font-bold mb-1">Thomas Uruma</p>
                        <p className="text-muted">+852 9400 5935</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="mt-1"><Phone className="w-5 h-5 text-gold" /></div>
                      <div>
                        <p className="font-bold mb-1">Ben Li</p>
                        <p className="text-muted">+852 9240 9588</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 pt-4 border-t border-border-custom/30">
                      <div className="mt-1"><Mail className="w-5 h-5 text-gold" /></div>
                      <div>
                        <p className="font-bold mb-1">General Inquiries</p>
                        <a href="mailto:info@brookletadvisory.com" className="text-muted hover:text-gold transition-colors">info@brookletadvisory.com</a>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted italic max-w-sm">
                  Brooklet Advisory Limited is not a law firm or tax advisor.
                </p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[10px] border-[0.5px] border-border-custom shadow-sm">
              <div className="mb-8 p-4 bg-surface rounded-lg border border-border-custom/50">
                <p className="text-[10px] font-bold text-gold uppercase tracking-widest mb-2">Send message to:</p>
                <p className="text-xs font-medium text-navy/70">info@brookletadvisory.com</p>
              </div>
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-medium">Message Sent</h3>
                    <p className="text-muted">Thank you for your inquiry. Thomas and Ben will get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Your name</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-md border border-border-custom focus:border-gold outline-none transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-muted">Company</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-md border border-border-custom focus:border-gold outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted">Email address</label>
                      <input required type="email" className="w-full px-4 py-3 rounded-md border border-border-custom focus:border-gold outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted">Message</label>
                      <textarea required rows={4} className="w-full px-4 py-3 rounded-md border border-border-custom focus:border-gold outline-none transition-colors resize-none"></textarea>
                    </div>
                    <button type="submit" className="w-full py-4 bg-navy text-white rounded-md font-medium hover:bg-navy/90 transition-all">
                      Send Message
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border-custom">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-lg font-bold tracking-wider">
            BROOKLET <span className="text-gold">ADVISORY</span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm font-medium">
            <button className="text-gold border-b border-gold">EN</button>
            <button className="text-muted hover:text-navy">繁</button>
            <button className="text-muted hover:text-navy">简</button>
            <button className="text-muted hover:text-navy">日</button>
          </div>

          <div className="text-xs text-gold font-medium">
            © 2025 Brooklet Advisory Limited
          </div>
        </div>
      </footer>
    </div>
  );
}
