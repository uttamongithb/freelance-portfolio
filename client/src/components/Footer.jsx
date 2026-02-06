import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Shield, Award } from 'lucide-react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter submission
        console.log('Newsletter signup:', email);
        setEmail('');
    };

    const footerLinks = {
        services: [
            { name: 'Product Strategy', href: '#services' },
            { name: 'Web Design', href: '#services' },
            { name: 'Mobile Apps', href: '#services' },
            { name: 'Full-Stack Development', href: '#services' },
            { name: 'UI/UX Audit', href: '#services' },
            { name: 'Support & Maintenance', href: '#services' },
        ],
        company: [
            { name: 'About Us', href: '#about' },
            { name: 'Our Team', href: '#team' },
            { name: 'Case Studies', href: '#work' },
            { name: 'Pricing', href: '#pricing' },
            { name: 'Process', href: '#process' },
            { name: 'Blog', href: '#blog' },
        ],
        resources: [
            { name: 'Blog', href: '#blog' },
            { name: 'Design Resources', href: '#blog' },
            { name: 'Engineering Insights', href: '#blog' },
            { name: 'Product Strategy', href: '#blog' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#contact' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
            { name: 'Accessibility', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
        { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    ];

    const badges = [
        { icon: Shield, text: 'ISO Certified' },
        { icon: Award, text: 'Award Winning' },
    ];

    return (
        <footer style={{backgroundColor: '#0B2340'}} className="text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 md:px-12 py-16 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="#" className="text-2xl md:text-3xl font-bold font-display tracking-tight mb-6 block">
                            Heritage<span className="text-amber">.</span>
                        </a>
                        <p className="font-body text-gray-300 mb-6 max-w-md leading-relaxed">
                            We design and build digital products that help businesses grow. 
                            Classic design principles meet modern technology.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-300 hover:text-amber transition-colors">
                                <Phone className="w-4 h-4" />
                                <span className="font-body text-sm">+1 (555) 123-4567</span>
                            </a>
                            <a href="mailto:hello@heritage.com" className="flex items-center gap-3 text-gray-300 hover:text-amber transition-colors">
                                <Mail className="w-4 h-4" />
                                <span className="font-body text-sm">hello@heritage.com</span>
                            </a>
                            <div className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                                <span className="font-body text-sm">123 Business St<br />San Francisco, CA 94102</span>
                            </div>
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-4">
                            {badges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded text-xs font-body">
                                    <badge.icon className="w-4 h-4 text-amber" />
                                    <span>{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-4 text-white">
                            Services
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-body text-sm text-gray-300 hover:text-amber transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-4 text-white">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-body text-sm text-gray-300 hover:text-amber transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h3 className="font-display text-lg font-bold mb-4 text-white">
                            Resources
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="font-body text-sm text-gray-300 hover:text-amber transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Section */}
                <div className="border-t border-white/10 pt-12 mb-12">
                    <div className="max-w-2xl">
                        <h3 className="font-display text-2xl font-bold mb-3 text-white">
                            Subscribe to our Newsletter
                        </h3>
                        <p className="font-body text-sm text-gray-300 mb-6">
                            Get the latest insights on design, engineering, and product strategy delivered to your inbox.
                        </p>
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                required
                                className="flex-1 px-4 py-3 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-amber transition-colors font-body"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-amber text-navy rounded font-body font-bold hover:bg-amber-400 transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright & Legal */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-sm font-body text-gray-300">
                            <p>&copy; {new Date().getFullYear()} Heritage. All rights reserved.</p>
                            <div className="flex items-center gap-4">
                                {footerLinks.legal.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.href}
                                        className="hover:text-amber transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber hover:text-navy transition-all duration-200"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
