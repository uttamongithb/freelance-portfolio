import React from 'react';
import { motion } from 'framer-motion';

const TrustStrip = () => {
    const clients = [
        { name: 'Microsoft', logo: 'M' },
        { name: 'Google', logo: 'G' },
        { name: 'Amazon', logo: 'A' },
    ];

    return (
        <div className="bg-navy text-white py-2 text-xs">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-center gap-8">
                    <span className="text-blue-gray-300 uppercase tracking-widest">
                        Trusted by 40+ companies
                    </span>
                    <div className="flex items-center gap-6">
                        {clients.map((client, index) => (
                            <motion.div
                                key={client.name}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-2 text-blue-gray-300/80 hover:text-blue-gray-100 transition-colors"
                            >
                                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">
                                    {client.logo}
                                </div>
                                <span className="hidden md:inline">{client.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustStrip;
