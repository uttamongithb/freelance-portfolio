import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Clock } from 'lucide-react';

const CredibilityStrip = () => {
    const stats = [
        {
            icon: Clock,
            number: '8+',
            label: 'Years in Business',
        },
        {
            icon: Award,
            number: '150+',
            label: 'Projects Delivered',
        },
        {
            icon: TrendingUp,
            number: '65%',
            label: 'Avg. Revenue Uplift',
        },
        {
            icon: Users,
            number: '< 24h',
            label: 'Response Time',
        },
    ];

    return (
        <section className="py-16 md:py-20 bg-white border-y border-gray-200">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="text-center space-y-3"
                        >
                            <div className="flex justify-center mb-2">
                                <stat.icon className="w-8 h-8 text-amber" strokeWidth={1.5} />
                            </div>
                            <div className="font-display text-4xl md:text-5xl font-bold text-navy">
                                {stat.number}
                            </div>
                            <div className="font-body text-sm md:text-base text-light-gray">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center mt-8"
                >
                    <a
                        href="#about"
                        className="text-sm font-body text-mid-blue hover:text-mid-blue-700 underline underline-offset-4 transition-colors"
                    >
                        View full credentials
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CredibilityStrip;
