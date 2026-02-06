import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
    const packages = [
        {
            name: 'Starter',
            tagline: 'For small businesses & startups',
            price: '$500',
            features: [
                '5-page responsive website',
                'Custom design & branding',
                'Mobile optimization',
                'SEO foundation',
                'Contact form integration',
                '3 rounds of revisions',
                '30 days support',
            ],
            cta: 'Start a Conversation',
            highlight: false,
        },
        {
            name: 'Growth',
            tagline: 'For growing businesses',
            price: '$2,000',
            features: [
                'Full web application',
                'Advanced UI/UX design',
                'Custom functionality',
                'CMS integration',
                'Analytics & tracking',
                'API integrations',
                'Performance optimization',
                '90 days support',
                'Training session',
            ],
            cta: 'Start a Conversation',
            highlight: true,
        },
        {
            name: 'Enterprise',
            tagline: 'For established organizations',
            price: 'Custom Pricing',
            features: [
                'Complex web/mobile platform',
                'Dedicated project team',
                'Strategic consulting',
                'Multi-platform development',
                'Third-party integrations',
                'Security audit',
                'Scalable architecture',
                'Priority support',
                'Ongoing maintenance',
            ],
            cta: 'Contact for Pricing',
            highlight: false,
        },
    ];

    return (
        <section id="pricing" className="py-24 md:py-32 bg-blue-gray">
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
                        Engagement Models
                    </h2>
                    <p className="font-body text-lg text-dark-slate max-w-2xl mx-auto">
                        Transparent pricing designed to fit your needs and budget
                    </p>
                </motion.div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className={`relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 ${
                                pkg.highlight 
                                    ? 'border-2 border-mid-blue md:-mt-4 md:mb-4 md:scale-105' 
                                    : 'border border-gray-200'
                            }`}
                        >
                            {pkg.highlight && (
                                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 px-6 py-2 bg-amber text-navy text-xs font-body font-bold uppercase tracking-wide rounded-full shadow-md whitespace-nowrap">
                                    Most Popular
                                </div>
                            )}

                            {/* Package Name */}
                            <div className="mb-6">
                                <h3 className="font-display text-2xl md:text-3xl font-bold text-navy mb-2">
                                    {pkg.name}
                                </h3>
                                <p className="font-body text-sm text-dark-slate">
                                    {pkg.tagline}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-8 pb-8 border-b border-gray-200">
                                <div className="font-display text-3xl md:text-4xl font-bold text-navy">
                                    {pkg.price}
                                </div>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-mid-blue/10 flex items-center justify-center mt-0.5">
                                            <Check className="w-3 h-3 text-mid-blue" strokeWidth={3} />
                                        </div>
                                        <span className="font-body text-sm text-dark-slate">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <a
                                href="#contact"
                                className="block w-full text-center px-6 py-4 rounded font-body font-bold text-black text-base transition-all duration-200 bg-mid-blue shadow-md hover:bg-navy hover:shadow-lg hover:-translate-y-1"
                            >
                                {pkg.cta}
                                <ArrowRight className="inline-block ml-2 w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="font-body text-sm text-dark-slate mb-2">
                        All packages include project management, quality assurance, and deployment
                    </p>
                    <p className="font-body text-sm text-dark-slate">
                        Need a custom solution? <a href="#contact" className="text-mid-blue hover:text-mid-blue-700 underline underline-offset-4">Let's talk</a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Pricing;
