import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Calendar, Download } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        title: 'Enterprise SaaS Platform',
        client: 'TechCorp Solutions',
        category: 'B2B SaaS',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
        challenge: 'Legacy system causing 40% user churn',
        solution: 'Modern dashboard with AI-powered insights',
        metrics: [
            { icon: TrendingUp, label: 'Conversions', value: '+42%' },
            { icon: Users, label: 'User Retention', value: '2x' },
            { icon: Calendar, label: 'Launch Time', value: '8 weeks' },
        ],
        quote: 'Revenue increased by 65% in the first quarter after launch.',
        tech: ['React', 'Node.js', 'AWS'],
    },
    {
        id: 2,
        title: 'E-Commerce Transformation',
        client: 'LuxuryBrand Inc.',
        category: 'E-commerce',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop',
        challenge: 'Low mobile conversion rates and slow checkout',
        solution: 'Mobile-first design with one-click checkout',
        metrics: [
            { icon: TrendingUp, label: 'Mobile Sales', value: '+85%' },
            { icon: Users, label: 'Cart Abandon', value: '-35%' },
            { icon: Calendar, label: 'Delivery', value: '10 weeks' },
        ],
        quote: 'Mobile revenue now accounts for 70% of our total sales.',
        tech: ['Next.js', 'Shopify', 'Stripe'],
    },
    {
        id: 3,
        title: 'Healthcare Mobile App',
        client: 'HealthTrack Pro',
        category: 'Mobile App',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2670&auto=format&fit=crop',
        challenge: 'Poor user engagement and data tracking',
        solution: 'Gamified health tracking with real-time insights',
        metrics: [
            { icon: Users, label: 'Daily Users', value: '+120%' },
            { icon: TrendingUp, label: 'Engagement', value: '3x' },
            { icon: Calendar, label: 'Beta to Launch', value: '6 weeks' },
        ],
        quote: 'User engagement tripled, with 4.8★ App Store rating.',
        tech: ['React Native', 'Firebase', 'HealthKit'],
    },
    {
        id: 4,
        title: 'Financial Dashboard',
        client: 'FinanceHub',
        category: 'Fintech',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop',
        challenge: 'Complex data visualization needs',
        solution: 'Intuitive real-time analytics platform',
        metrics: [
            { icon: TrendingUp, label: 'User Satisfaction', value: '+55%' },
            { icon: Users, label: 'Active Users', value: '+90%' },
            { icon: Calendar, label: 'Time to Market', value: '7 weeks' },
        ],
        quote: 'Best investment platform interface in the industry.',
        tech: ['React', 'D3.js', 'Python'],
    },
];

const WorkGrid = () => {
    const [featuredCase] = React.useState(caseStudies[0]);
    const secondaryCases = caseStudies.slice(1);

    return (
        <section id="work" className="py-24 md:py-32 bg-white">
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
                        Case Studies
                    </h2>
                    <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                        Real results from real projects. See how we've helped businesses grow.
                    </p>
                </motion.div>

                {/* Featured Case Study */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 bg-blue-gray rounded-2xl overflow-hidden shadow-lg"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Image */}
                        <div className="relative aspect-[4/3] lg:aspect-auto">
                            <img
                                src={featuredCase.image}
                                alt={featuredCase.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 px-4 py-2 bg-amber text-navy text-sm font-body font-bold rounded">
                                Featured
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-center">
                            <div className="text-xs font-body font-semibold text-mid-blue uppercase tracking-widest mb-3">
                                {featuredCase.category}
                            </div>
                            <h3 className="font-display text-3xl md:text-4xl font-bold text-navy mb-4">
                                {featuredCase.title}
                            </h3>
                            <div className="space-y-3 mb-6">
                                <div>
                                    <span className="font-body font-semibold text-dark-slate">Challenge:</span>
                                    <p className="font-body text-dark-slate">{featuredCase.challenge}</p>
                                </div>
                                <div>
                                    <span className="font-body font-semibold text-dark-slate">Solution:</span>
                                    <p className="font-body text-dark-slate">{featuredCase.solution}</p>
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-300">
                                {featuredCase.metrics.map((metric, index) => (
                                    <div key={index} className="text-center">
                                        <div className="font-display text-2xl md:text-3xl font-bold text-mid-blue mb-1">
                                            {metric.value}
                                        </div>
                                        <div className="text-xs font-body text-light-gray">
                                            {metric.label}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quote */}
                            <blockquote className="font-body text-sm md:text-base italic text-dark-slate mb-4">
                                "{featuredCase.quote}"
                            </blockquote>
                            <div className="text-xs font-body text-light-gray mb-6">
                                — {featuredCase.client}
                            </div>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {featuredCase.tech.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-white text-dark-slate text-xs font-body rounded border border-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-mid-blue text-white rounded font-body font-medium hover:bg-mid-blue-700 transition-colors"
                                >
                                    Read Full Case Study
                                    <ArrowUpRight className="ml-2 w-4 h-4" />
                                </a>
                                <button className="inline-flex items-center justify-center px-6 py-3 border-2 border-mid-blue text-mid-blue rounded font-body font-medium hover:bg-mid-blue hover:text-white transition-colors">
                                    <Download className="mr-2 w-4 h-4" />
                                    Download PDF
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Secondary Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {secondaryCases.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="text-xs font-body font-semibold text-mid-blue uppercase tracking-widest mb-2">
                                    {project.category}
                                </div>
                                <h3 className="font-display text-xl font-bold text-navy mb-3 group-hover:text-mid-blue transition-colors">
                                    {project.title}
                                </h3>

                                {/* Mini Metrics */}
                                <div className="flex justify-between mb-4 pb-4 border-b border-gray-200">
                                    {project.metrics.slice(0, 2).map((metric, idx) => (
                                        <div key={idx} className="text-center">
                                            <div className="font-display text-lg font-bold text-mid-blue">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs font-body text-light-gray">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center text-sm font-body font-medium text-mid-blue group-hover:text-mid-blue-700 transition-colors"
                                >
                                    View Case Study
                                    <ArrowUpRight className="ml-1 w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkGrid;
