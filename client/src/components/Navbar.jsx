import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Work', href: '#work' },
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'About', href: '#about' },
        { name: 'Blog', href: '#blog' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled 
                        ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
                        : 'bg-white/90 backdrop-blur-md py-4'
                }`}
            >
                <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                    <a href="#" className="text-xl md:text-2xl font-bold font-display tracking-tight text-navy">
                        Heritage<span className="text-mid-blue">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-body font-medium text-dark-slate hover:text-mid-blue transition-colors duration-200"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-mid-blue text-white px-6 py-2.5 rounded text-sm font-body font-medium hover:bg-mid-blue-700 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                        >
                            Request a Quote
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden z-50 text-navy"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-navy z-40 flex flex-col justify-center items-center pt-20"
                    >
                        <div className="flex flex-col space-y-6 text-center">
                            {navLinks.map((link, index) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-display text-white hover:text-amber transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navLinks.length * 0.05 }}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-mid-blue text-white px-8 py-3 rounded text-sm font-body font-medium mt-4"
                            >
                                Request a Quote
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
