"use client";

import { motion } from 'framer-motion';
import { PageHero } from '@/components/ui/PageHero';
import pageData from '@/data/contactPage/contactPage.json';
import footerData from '@/components/footer/footer.json';
import { Section } from '@/components/ui/Section';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const ContactPageClient = () => {
    return (
        <motion.div
            className="bg-slate-950 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <PageHero
                title={pageData.hero.title}
                subtitle={pageData.hero.subtitle}
                backgroundImage={pageData.hero.backgroundImage}
            />

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info Column */}
                    <div>
                        <SectionTitle className="text-left mb-8">Get in Touch</SectionTitle>
                        <p className="text-slate-300 mb-8 text-lg">
                            Have questions or want to collaborate? Reach out to us using the information below or drop us a message.
                        </p>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Visit Us</h3>
                                    <p className="text-slate-400">{footerData.address.line1}</p>
                                    <p className="text-slate-400">{footerData.address.line2}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Email Us</h3>
                                    <a href={`mailto:${footerData.contact.email}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        {footerData.contact.email}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-1">Call Us</h3>
                                    <a href={`tel:${footerData.contact.phone}`} className="text-slate-400 hover:text-cyan-400 transition-colors">
                                        {footerData.contact.phone}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Column */}
                    <div className="space-y-8">
                        <form className="space-y-4 p-6 rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Name" 
                                    className="w-full p-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full p-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                                />
                            </div>
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full p-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors" 
                            />
                            <textarea 
                                placeholder="Message" 
                                rows={4} 
                                className="w-full p-3 rounded-lg bg-slate-950 border border-white/10 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            ></textarea>
                            <Button variant="primary" className="w-full justify-center">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Map Section */}
                 <div className="mt-16 w-full h-[400px] rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                        src={footerData.googleMapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                </div>
            </Section>
        </motion.div>
    );
}