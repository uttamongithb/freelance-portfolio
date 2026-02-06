import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const categories = ['All', 'Design', 'Engineering', 'Product'];

    const articles = [
        {
            id: 1,
            title: 'How to Build Trust in B2B SaaS Design',
            excerpt: 'Visual design quality directly impacts user trust. Learn the principles that convert skeptical prospects into paying customers.',
            category: 'Design',
            author: 'Marcus Johnson',
            date: 'Jan 28, 2026',
            readTime: '5 min read',
            image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
        },
        {
            id: 2,
            title: 'Modern Architecture Patterns for Scalable Web Apps',
            excerpt: 'Explore microservices, serverless, and monolithic architecture patterns to choose the right foundation for your application.',
            category: 'Engineering',
            author: 'Sarah Chen',
            date: 'Jan 25, 2026',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
        },
        {
            id: 3,
            title: 'Product Strategy: From Vision to Launch',
            excerpt: 'A framework for defining product-market fit, creating roadmaps, and measuring success metrics that matter.',
            category: 'Product',
            author: 'Emily Rodriguez',
            date: 'Jan 22, 2026',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        },
    ];

    const filteredArticles = activeFilter === 'All' 
        ? articles 
        : articles.filter(article => article.category === activeFilter);

    return (
        <section id="blog" className="py-24 md:py-32 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
                >
                    <div className="mb-6 md:mb-0">
                        <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
                            Insights & Resources
                        </h2>
                        <p className="font-body text-lg text-light-gray max-w-xl">
                            Expert perspectives on design, engineering, and product strategy
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveFilter(category)}
                                className={`px-4 py-2 rounded font-body text-sm font-medium transition-all duration-200 ${
                                    activeFilter === category
                                        ? 'bg-mid-blue text-white shadow-md'
                                        : 'bg-blue-gray text-dark-slate hover:bg-mid-blue/10'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, index) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-mid-blue hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/10 transition-colors duration-300"></div>
                                
                                {/* Category Badge */}
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-amber text-navy text-xs font-body font-bold uppercase tracking-wide rounded-full">
                                    {article.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Meta Info */}
                                <div className="flex items-center gap-4 mb-3 text-xs font-body text-light-gray">
                                    <div className="flex items-center gap-1">
                                        <User className="w-3.5 h-3.5" />
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <span>{article.date}</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-display text-xl md:text-2xl font-bold text-navy mb-3 group-hover:text-mid-blue transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="font-body text-sm text-dark-slate leading-relaxed mb-4 line-clamp-3">
                                    {article.excerpt}
                                </p>

                                {/* Read Time & Link */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                    <span className="font-body text-xs text-light-gray">
                                        {article.readTime}
                                    </span>
                                    <a
                                        href="#blog"
                                        className="inline-flex items-center gap-1 text-sm font-body font-medium text-mid-blue group-hover:text-mid-blue-700 transition-colors"
                                    >
                                        Read more
                                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* View All CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <a
                        href="#blog"
                        className="inline-flex items-center gap-2 px-8 py-3 border-2 border-mid-blue text-mid-blue rounded font-body font-medium hover:bg-mid-blue hover:text-white transition-all duration-200"
                    >
                        View All Articles
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Blog;
