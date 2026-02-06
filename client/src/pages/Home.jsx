import React from 'react';
import Hero from '../components/Hero';
import CredibilityStrip from '../components/CredibilityStrip';
import Services from '../components/Services';
import WorkGrid from '../components/WorkGrid';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <>
            <Hero />
            <CredibilityStrip />
            <Services />
            <WorkGrid />
            <Process />
            <Pricing />
            <Testimonials />
            <Team />
            <Blog />
            <Contact />
        </>
    );
};

export default Home;
