import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Layout, Smartphone, Code, Search, Wrench, X } from 'lucide-react';

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    const services = [
        {
            id: 1,
            icon: Lightbulb,
            title: 'Product Strategy',
            summary: 'Transform your vision into a clear roadmap with market research, user insights, and competitive analysis.',
            details: 'We help you define product-market fit, create user personas, map customer journeys, and build a strategic roadmap that aligns with your business goals. Deliverables include market analysis reports and product strategy documents.',
        },
        {
            id: 2,
            icon: Layout,
            title: 'Web Design',
            summary: 'Responsive, conversion-focused websites that combine visual excellence with business objectives.',
            details: 'Our design process focuses on user experience, conversion optimization, and brand consistency. We create high-fidelity mockups, interactive prototypes, and design systems that scale with your business.',
        },
        {
            id: 3,
            icon: Smartphone,
            title: 'Mobile Apps',
            summary: 'Native iOS and Android applications built for performance, usability, and user retention.',
            details: 'From concept to app store deployment, we handle the entire mobile development lifecycle. We specialize in React Native and Flutter for cross-platform solutions, ensuring consistent experiences across devices.',
        },
        {
            id: 4,
            icon: Code,
            title: 'Full-Stack Development',
            summary: 'Scalable web applications using modern frameworks like React, Node.js, and cloud infrastructure.',
            details: 'We build robust, secure, and performant applications with clean code architecture. Our stack includes React, Next.js, Node.js, Python, and cloud services like AWS and Azure.',
        },
        {
            id: 5,
            icon: Search,
            title: 'UI/UX Audit',
            summary: 'Comprehensive analysis of your digital product with actionable recommendations for improvement.',
            details: 'We evaluate your current product against industry standards, identify usability issues, and provide a prioritized list of improvements. Includes heuristic evaluation, accessibility audit, and competitive benchmarking.',
        },
        {
            id: 6,
            icon: Wrench,
            title: 'Support & Maintenance',
            summary: 'Ongoing technical support, updates, and optimization to keep your product running smoothly.',
            details: 'Post-launch support includes bug fixes, security updates, performance monitoring, feature enhancements, and technical consultations. We offer flexible SLA-based maintenance packages.',
        },
    ];

    return (
        <>
            <section id="services" className="py-24 md:py-32 bg-blue-gray">
                <div className="container mx-auto px-6 md:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                            Our Services
                        </h2>
                        <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-transparent hover:border-mid-blue"
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-mid-blue/10 flex items-center justify-center group-hover:bg-mid-blue group-hover:scale-110 transition-all duration-300">
                                        <service.icon className="w-6 h-6 text-mid-blue group-hover:text-white transition-colors" strokeWidth={2} />
                                    </div>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-3">
                                    {service.title}
                                </h3>
                                <p className="font-body text-sm md:text-base text-dark-slate leading-relaxed mb-4">
                                    {service.summary}
                                </p>
                                <button
                                    className="text-sm font-body font-medium text-mid-blue group-hover:text-mid-blue-700 flex items-center gap-1"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedService(service);
                                    }}
                                >
                                    Learn more
                                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Detail Modal */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setSelectedService(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl max-w-2xl w-full p-8 md:p-12 relative"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="absolute top-4 right-4 text-dark-slate hover:text-navy"
                                onClick={() => setSelectedService(null)}
                            >
                                <X className="w-6 h-6" />
                            </button>
                            
                            <div className="mb-6">
                                <div className="w-16 h-16 rounded-lg bg-mid-blue flex items-center justify-center mb-6">
                                    <selectedService.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                            </div>

                            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                                {selectedService.title}
                            </h3>
                            <p className="font-body text-base md:text-lg text-dark-slate leading-relaxed mb-6">
                                {selectedService.details}
                            </p>
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-mid-blue text-white rounded font-body font-medium hover:bg-mid-blue-700 transition-colors"
                                onClick={() => setSelectedService(null)}
                            >
                                Get Started
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Services;
