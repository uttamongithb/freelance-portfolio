import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle2 } from 'lucide-react';

const Hero = () => {
    const mockupScreens = [
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    ];

    const badges = [
        { icon: Shield, text: 'ISO Certified' },
        { icon: CheckCircle2, text: 'GDPR Compliant' },
        { icon: Award, text: 'Award Winning' },
    ];

    const [currentScreen, setCurrentScreen] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentScreen((prev) => (prev + 1) % mockupScreens.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-screen flex items-center bg-blue-gray pt-32 pb-16 md:pt-24 md:pb-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content */}
                    <div className="text-left space-y-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight text-navy font-bold"
                        >
                            We design websites & apps that grow revenue.
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.6 }}
                            className="font-body text-lg md:text-xl text-dark-slate leading-relaxed max-w-xl"
                        >
                            Classic design. Modern product thinking. Measurable results.
                        </motion.h2>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-mid-blue text-white rounded font-body font-medium hover:bg-mid-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                            >
                                Request a Quote
                            </a>
                            <a
                                href="#work"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-mid-blue text-mid-blue rounded font-body font-medium hover:bg-mid-blue hover:text-white transition-all duration-200"
                            >
                                See Case Studies
                            </a>
                        </motion.div>

                        {/* Built for micro copy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-sm text-light-gray font-body"
                        >
                            Built for: <span className="text-dark-slate font-medium">B2B SaaS • E-commerce • Enterprises</span>
                        </motion.p>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-300"
                        >
                            {badges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-2 text-dark-slate">
                                    <badge.icon className="w-5 h-5 text-mid-blue" />
                                    <span className="text-sm font-body">{badge.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Device Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative"
                    >
                        {/* Device Frame */}
                        <div className="relative bg-navy rounded-2xl shadow-2xl p-3 md:p-4">
                            {/* Browser Bar */}
                            <div className="bg-white/10 rounded-t-lg px-3 py-2 flex items-center gap-2 mb-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                </div>
                                <div className="flex-1 bg-white/5 rounded px-3 py-1 text-xs text-white/50">
                                    https://example.com
                                </div>
                            </div>
                            
                            {/* Screen Content */}
                            <div className="aspect-[16/10] bg-white rounded-lg overflow-hidden relative">
                                <motion.img
                                    key={currentScreen}
                                    src={mockupScreens[currentScreen]}
                                    alt="Project mockup"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Accent Line */}
                            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-amber rounded-full blur-2xl opacity-30"></div>
                        </div>

                        {/* Client Logos Strip */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="mt-6 flex items-center justify-center gap-4 text-xs text-light-gray"
                        >
                            <span className="font-body">Trusted by:</span>
                            <div className="flex gap-3">
                                {['Microsoft', 'Google', 'Amazon'].map((name) => (
                                    <div key={name} className="px-3 py-1.5 bg-white rounded shadow-sm text-dark-slate font-medium">
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
