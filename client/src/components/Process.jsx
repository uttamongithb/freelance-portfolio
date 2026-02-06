import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Palette, Code2, Rocket } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            number: '01',
            icon: Search,
            title: 'Discover',
            subtitle: 'Workshop & Research',
            description: 'We start with understanding your business goals, target audience, and competitive landscape.',
            deliverables: ['Requirements document', 'User personas'],
        },
        {
            number: '02',
            icon: Map,
            title: 'Strategy & Roadmap',
            subtitle: 'Planning & Architecture',
            description: 'Define the product vision, create user flows, and establish technical architecture.',
            deliverables: ['Product roadmap', 'Technical specs'],
        },
        {
            number: '03',
            icon: Palette,
            title: 'Design Sprints',
            subtitle: 'Prototyping & Testing',
            description: 'Rapid prototyping with user testing to validate concepts before development.',
            deliverables: ['Interactive prototypes', 'Design system'],
        },
        {
            number: '04',
            icon: Code2,
            title: 'Build & QA',
            subtitle: 'Development & Testing',
            description: 'Agile development with continuous testing, code reviews, and quality assurance.',
            deliverables: ['Staged releases', 'QA reports'],
        },
        {
            number: '05',
            icon: Rocket,
            title: 'Launch & Iterate',
            subtitle: 'Deployment & Support',
            description: 'Smooth deployment with monitoring, analytics setup, and post-launch optimization.',
            deliverables: ['Production release', 'Analytics dashboard'],
        },
    ];

    return (
        <section id="process" className="py-24 md:py-32 bg-white">
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
                        Our Process
                    </h2>
                    <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                        A proven methodology that delivers results, on time and within budget
                    </p>
                </motion.div>

                {/* Timeline - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connection Line */}
                    <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-mid-blue via-amber to-mid-blue"></div>

                    <div className="grid grid-cols-5 gap-6">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15, duration: 0.6 }}
                                className="relative"
                            >
                                {/* Icon Circle */}
                                <div className="relative z-10 mx-auto w-20 h-20 bg-mid-blue rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                                    <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                                </div>

                                {/* Content Card */}
                                <div className="bg-blue-gray rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <div className="font-display text-6xl font-bold text-mid-blue/20 mb-2">
                                        {step.number}
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-navy mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs font-body text-mid-blue font-semibold uppercase tracking-wide mb-3">
                                        {step.subtitle}
                                    </p>
                                    <p className="font-body text-sm text-dark-slate leading-relaxed mb-4">
                                        {step.description}
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-xs font-body font-semibold text-light-gray uppercase">
                                            Deliverables:
                                        </p>
                                        {step.deliverables.map((deliverable, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                                                <span className="text-xs font-body text-dark-slate">
                                                    {deliverable}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Vertical Timeline - Mobile/Tablet */}
                <div className="lg:hidden space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="flex gap-6"
                        >
                            {/* Icon & Line */}
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-mid-blue rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                    <step.icon className="w-8 h-8 text-white" strokeWidth={2} />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-1 flex-grow bg-gradient-to-b from-mid-blue to-amber mt-4"></div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex-1 pb-8">
                                <div className="bg-blue-gray rounded-lg p-6">
                                    <div className="font-display text-4xl font-bold text-mid-blue/20 mb-2">
                                        {step.number}
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-navy mb-1">
                                        {step.title}
                                    </h3>
                                    <p className="text-xs font-body text-mid-blue font-semibold uppercase tracking-wide mb-3">
                                        {step.subtitle}
                                    </p>
                                    <p className="font-body text-sm text-dark-slate leading-relaxed mb-4">
                                        {step.description}
                                    </p>
                                    <div className="space-y-1">
                                        <p className="text-xs font-body font-semibold text-light-gray uppercase">
                                            Deliverables:
                                        </p>
                                        {step.deliverables.map((deliverable, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-amber"></div>
                                                <span className="text-xs font-body text-dark-slate">
                                                    {deliverable}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
