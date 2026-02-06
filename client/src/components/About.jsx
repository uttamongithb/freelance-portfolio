import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-1/2">
                        <h2 className="font-display text-4xl md:text-5xl mb-8">
                            We believe in <br />
                            <span className="italic">timeless</span> design.
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Founded in 2024, our agency was built on the principle that digital products should be as beautiful as they are functional. We strip away the noise to focus on what truly matters: your content and your user's experience.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Our team of developers and designers work in perfect harmony to deliver pixel-perfect code and stunning visuals, ensuring your brand stands out in a crowded digital landscape.
                        </p>
                    </div>

                    <div className="md:w-1/2">
                        <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
                            {/* Placeholder for About Image - could be office or abstract */}
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop&ixlib=rb-4.0.3"
                                alt="Our Office"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
