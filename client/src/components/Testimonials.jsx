import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            id: 1,
            quote: "Working with this team transformed our entire digital presence. Revenue increased by 65% in the first quarter after launch. Their attention to detail and strategic thinking is unmatched.",
            author: "Sarah Johnson",
            role: "CEO",
            company: "TechCorp Solutions",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
            metrics: "+65% Revenue Growth",
        },
        {
            id: 2,
            quote: "The mobile app they built for us exceeded all expectations. User engagement tripled within the first month, and we received a 4.8-star rating on the App Store. Absolutely phenomenal work.",
            author: "Michael Chen",
            role: "Product Director",
            company: "HealthTrack Pro",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
            metrics: "3x User Engagement",
        },
        {
            id: 3,
            quote: "Professional, reliable, and incredibly talented. They delivered our e-commerce platform on time and within budget. Mobile sales now account for 70% of our total revenue.",
            author: "Emily Rodriguez",
            role: "Marketing VP",
            company: "LuxuryBrand Inc.",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
            metrics: "+85% Mobile Sales",
        },
        {
            id: 4,
            quote: "The strategic consulting and technical execution were both top-tier. They didn't just build our platform—they helped us define our entire product vision. A true partner in our success.",
            author: "David Park",
            role: "Founder & CTO",
            company: "FinanceHub",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
            metrics: "+90% Active Users",
        },
        {
            id: 5,
            quote: "Outstanding quality and communication throughout the entire project. The team was responsive, professional, and truly invested in our success. Highly recommended for any serious business.",
            author: "Lisa Thompson",
            role: "Operations Director",
            company: "Enterprise Solutions Ltd",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
            metrics: "5-Star Experience",
        },
    ];

    const clientLogos = [
        'Microsoft', 'Google', 'Amazon', 'Apple', 'Meta', 
        'Netflix', 'Salesforce', 'Adobe'
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-24 md:py-32 bg-white">
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
                        Client Testimonials
                    </h2>
                    <p className="font-body text-lg text-light-gray max-w-2xl mx-auto">
                        Don't just take our word for it—hear from businesses we've helped grow
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="max-w-5xl mx-auto mb-20">
                    <div className="relative bg-blue-gray rounded-2xl p-8 md:p-16 shadow-lg">
                        {/* Quote Icon */}
                        <div className="absolute top-8 left-8 opacity-10">
                            <Quote className="w-16 h-16 md:w-24 md:h-24 text-mid-blue" fill="currentColor" />
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="relative z-10"
                            >
                                {/* Testimonial Content */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
                                    {/* Author Image */}
                                    <div className="flex justify-center md:justify-start">
                                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].author}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className="md:col-span-2">
                                        <p className="font-body text-lg md:text-xl text-dark-slate leading-relaxed mb-6 italic">
                                            "{testimonials[currentIndex].quote}"
                                        </p>

                                        {/* Author Info */}
                                        <div className="space-y-1">
                                            <h4 className="font-display text-xl font-bold text-navy">
                                                {testimonials[currentIndex].author}
                                            </h4>
                                            <p className="font-body text-sm text-light-gray">
                                                {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                                            </p>
                                        </div>

                                        {/* Metric Badge */}
                                        <div className="mt-4 inline-block px-4 py-2 bg-amber/20 border border-amber rounded-full">
                                            <span className="font-body text-sm font-semibold text-navy">
                                                {testimonials[currentIndex].metrics}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Buttons */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button
                                onClick={prevTestimonial}
                                className="w-12 h-12 rounded-full bg-white border-2 border-mid-blue text-mid-blue flex items-center justify-center hover:bg-mid-blue hover:text-white transition-all duration-200 shadow-sm"
                                aria-label="Previous testimonial"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="flex gap-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                            index === currentIndex
                                                ? 'bg-mid-blue w-8'
                                                : 'bg-mid-blue/30'
                                        }`}
                                        aria-label={`Go to testimonial ${index + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={nextTestimonial}
                                className="w-12 h-12 rounded-full bg-white border-2 border-mid-blue text-mid-blue flex items-center justify-center hover:bg-mid-blue hover:text-white transition-all duration-200 shadow-sm"
                                aria-label="Next testimonial"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Client Logos Strip */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-t border-gray-200 pt-12"
                >
                    <p className="text-center font-body text-sm text-light-gray uppercase tracking-widest mb-8">
                        Trusted by Industry Leaders
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                        {clientLogos.map((logo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="px-6 py-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:border-mid-blue transition-colors"
                            >
                                <span className="font-body text-base font-semibold text-dark-slate">
                                    {logo}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
