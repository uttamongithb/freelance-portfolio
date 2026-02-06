import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Clock, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { CalendlyButton } from '../utils/calendlyIntegration';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
    });
    const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    // Validation rules
    const validateField = (name, value) => {
        switch (name) {
            case 'name':
                if (!value.trim()) return 'Name is required';
                if (value.trim().length < 2) return 'Name must be at least 2 characters';
                return '';
            case 'email':
                if (!value.trim()) return 'Email is required';
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
                return '';
            case 'message':
                if (!value.trim()) return 'Project details are required';
                if (value.trim().length < 10) return 'Please provide more details (at least 10 characters)';
                return '';
            case 'projectType':
                if (!value) return 'Project type is required';
                return '';
            case 'budget':
                if (!value) return 'Budget range is required';
                return '';
            case 'timeline':
                if (!value) return 'Timeline is required';
                return '';
            default:
                return '';
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        
        // Validate on change if field has been touched
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors({ ...errors, [name]: error });
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched({ ...touched, [name]: true });
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const validateForm = () => {
        const newErrors = {};
        const requiredFields = ['name', 'email', 'message', 'projectType', 'budget', 'timeline'];
        
        requiredFields.forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) newErrors[field] = error;
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setStatus('loading');

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    projectType: '',
                    budget: '',
                    timeline: '',
                    message: ''
                });
                setTouched({});
                setErrors({});

                // Auto-hide success message after 5 seconds
                setTimeout(() => setStatus(null), 5000);
            } else {
                setStatus('error');
                console.error('Server error:', result.message);
            }
        } catch (err) {
            console.error('Network error:', err);
            setStatus('error');
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            label: 'Phone',
            value: '+1 (555) 123-4567',
            link: 'tel:+15551234567',
        },
        {
            icon: Mail,
            label: 'Email',
            value: 'hello@heritage.com',
            link: 'mailto:hello@heritage.com',
        },
        {
            icon: MapPin,
            label: 'Office',
            value: '123 Business St, San Francisco, CA 94102',
            link: 'https://maps.google.com',
        },
    ];

    return (
        <section id="contact" className="py-24 md:py-32 bg-white">
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
                        Let's Build Something Great
                    </h2>
                    <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                        Share your project details and we'll get back to you within 24 hours
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
                    {/* Left Column - Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name & Company */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Your Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border-2 rounded transition-colors font-body ${
                                            errors.name && touched.name
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 focus:border-mid-blue'
                                        } focus:outline-none`}
                                        placeholder="John Doe"
                                        aria-label="Your Name"
                                        aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                                    />
                                    {errors.name && touched.name && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-mid-blue transition-colors font-body"
                                        placeholder="Your Company"
                                    />
                                </div>
                            </div>

                            {/* Email & Phone */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border-2 rounded transition-colors font-body ${
                                            errors.email && touched.email
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 focus:border-mid-blue'
                                        } focus:outline-none`}
                                        placeholder="john@company.com"
                                        aria-label="Email"
                                        aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                                    />
                                    {errors.email && touched.email && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.email}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-300 rounded focus:outline-none focus:border-mid-blue transition-colors font-body"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            {/* Project Type */}
                            <div>
                                <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                    Project Type <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`w-full px-4 py-3 border-2 rounded transition-colors font-body bg-white ${
                                        errors.projectType && touched.projectType
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-300 focus:border-mid-blue'
                                    } focus:outline-none`}
                                >
                                    <option value="">Select a project type</option>
                                    <option value="web-design">Web Design</option>
                                    <option value="web-app">Web Application</option>
                                    <option value="mobile-app">Mobile App</option>
                                    <option value="ecommerce">E-commerce</option>
                                    <option value="ui-ux">UI/UX Design</option>
                                    <option value="consulting">Consulting</option>
                                    <option value="other">Other</option>
                                </select>
                                {errors.projectType && touched.projectType && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {errors.projectType}
                                    </p>
                                )}
                            </div>

                            {/* Budget & Timeline */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Budget Range <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border-2 rounded transition-colors font-body bg-white ${
                                            errors.budget && touched.budget
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 focus:border-mid-blue'
                                        } focus:outline-none`}
                                    >
                                        <option value="">Select budget range</option>
                                        <option value="10k-25k">$10k - $25k</option>
                                        <option value="25k-50k">$25k - $50k</option>
                                        <option value="50k-100k">$50k - $100k</option>
                                        <option value="100k+">$100k+</option>
                                    </select>
                                    {errors.budget && touched.budget && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.budget}
                                        </p>
                                    )}
                                </div>
                                <div>
                                    <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                        Timeline <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-4 py-3 border-2 rounded transition-colors font-body bg-white ${
                                            errors.timeline && touched.timeline
                                                ? 'border-red-500 bg-red-50'
                                                : 'border-gray-300 focus:border-mid-blue'
                                        } focus:outline-none`}
                                    >
                                        <option value="">Select timeline</option>
                                        <option value="asap">ASAP</option>
                                        <option value="1-2-months">1-2 months</option>
                                        <option value="3-6-months">3-6 months</option>
                                        <option value="6+-months">6+ months</option>
                                    </select>
                                    {errors.timeline && touched.timeline && (
                                        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                            <AlertCircle className="w-3 h-3" /> {errors.timeline}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block font-body text-sm font-semibold text-dark-slate mb-2">
                                    Project Details <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    rows="5"
                                    className={`w-full px-4 py-3 border-2 rounded transition-colors font-body resize-none ${
                                        errors.message && touched.message
                                            ? 'border-red-500 bg-red-50'
                                            : 'border-gray-300 focus:border-mid-blue'
                                    } focus:outline-none`}
                                    placeholder="Tell us about your project goals, challenges, and requirements..."
                                    aria-label="Project Details"
                                    aria-invalid={errors.message && touched.message ? 'true' : 'false'}
                                ></textarea>
                                {errors.message && touched.message && (
                                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                                        <AlertCircle className="w-3 h-3" /> {errors.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full px-8 py-4 bg-mid-blue text-white rounded font-body font-medium hover:bg-mid-blue-700 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                                >
                                    {status === 'loading' && <Loader className="w-4 h-4 animate-spin" />}
                                    {status === 'loading' ? 'Sending...' : 'Get a Free Project Estimate'}
                                </button>
                                <p className="text-xs font-body text-light-gray text-center mt-3">
                                    <Clock className="inline w-3.5 h-3.5 mr-1" />
                                    Typical reply within 24 hours
                                </p>
                            </div>

                            {/* Status Messages */}
                            {status === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 bg-green-50 border-2 border-green-200 rounded flex items-start gap-3"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-green-800 font-body font-semibold text-sm">
                                            Message sent successfully!
                                        </p>
                                        <p className="text-green-700 font-body text-sm">
                                            We'll be in touch within 24 hours.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                            {status === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-4 bg-red-50 border-2 border-red-200 rounded flex items-start gap-3"
                                >
                                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-red-800 font-body font-semibold text-sm">
                                            Something went wrong
                                        </p>
                                        <p className="text-red-700 font-body text-sm">
                                            Please try again or email us at hello@heritage.com
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </form>
                    </motion.div>

                    {/* Right Column - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Contact Info Cards */}
                        <div className="bg-blue-gray rounded-2xl p-8 space-y-6">
                            <h3 className="font-display text-2xl font-bold text-navy mb-6">
                                Contact Information
                            </h3>
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-mid-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <info.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-body text-sm text-light-gray mb-1">
                                            {info.label}
                                        </p>
                                        <p className="font-body text-base text-dark-slate group-hover:text-mid-blue transition-colors">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Schedule Call CTA */}
                        <div className="bg-navy rounded-2xl p-8 text-white">
                            <Calendar className="w-12 h-12 mb-4 text-amber" />
                            <h3 className="font-display text-2xl font-bold mb-3">
                                Schedule a Call
                            </h3>
                            <p className="font-body text-blue-gray-300 mb-6">
                                Prefer to talk? Book a 30-minute consultation to discuss your project in detail.
                            </p>
                            <a
                                href="https://calendly.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full text-center px-6 py-3 bg-amber text-navy rounded font-body font-bold hover:bg-amber-400 transition-colors"
                            >
                                Book a Meeting
                            </a>
                        </div>

                        {/* Business Hours */}
                        <div className="bg-blue-gray rounded-2xl p-8">
                            <Clock className="w-12 h-12 mb-4 text-mid-blue" />
                            <h3 className="font-display text-xl font-bold text-navy mb-4">
                                Business Hours
                            </h3>
                            <div className="space-y-2 font-body text-sm text-dark-slate">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold">9:00 AM - 6:00 PM PST</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Weekend</span>
                                    <span className="font-semibold">Closed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
