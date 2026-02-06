import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Uttam',
            role: 'Developer',
            credentials: 'Android App & Website Development',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
            linkedin: 'https://linkedin.com',
            email: 'uttam@company.com',
        },
        {
            name: 'Kyaw-Min-Hein',
            role: 'Developer',
            credentials: 'Frontend & Full Stack Development',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
            linkedin: 'https://linkedin.com',
            email: 'kyaw-min-hein@company.com',
        },
    ];

    return (
        <section className="py-24 md:py-32 bg-blue-gray">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                        Meet Our Team
                    </h2>
                    <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                        Experienced professionals dedicated to your success
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                                {/* Image */}
                                <div className="relative aspect-[4/5] overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Overlay with Social Links */}
                                    <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mid-blue hover:bg-mid-blue hover:text-white transition-colors transform hover:scale-110"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={`mailto:${member.email}`}
                                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-mid-blue hover:bg-mid-blue hover:text-white transition-colors transform hover:scale-110"
                                        >
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="p-6">
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-1 group-hover:text-mid-blue transition-colors">
                                        {member.name}
                                    </h3>
                                    <p className="font-body text-sm text-mid-blue font-semibold mb-2">
                                        {member.role}
                                    </p>
                                    <p className="font-body text-sm text-light-gray">
                                        {member.credentials}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="font-body text-base text-dark-slate mb-4">
                        Want to work with our team?
                    </p>
                    <a
                        href="#contact"
                        className="inline-block px-8 py-3 bg-mid-blue text-white rounded font-body font-medium hover:bg-mid-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                    >
                        Start a Project
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
