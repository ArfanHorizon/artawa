import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center bg-cover bg-fixed" style={{backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/ffffff?text=PT+Artawa+Indonesia')"}}>
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
                <AnimatedSection>
                    <img src={process.env.PUBLIC_URL + '/logoartawa.png'} alt="Logo Artawa" className="h-24 mx-auto mb-6"/>gu
                    <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow-lg text-gray-300">PT. Artawa Indonesia, Mitra EPC terpercaya Anda sejak 1995, didukung oleh DENTETSU SHOJI CO.,LTD</p>
                    <a href="#layanan" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 shadow-xl transition-transform transform hover:scale-105">Jelajahi Layanan Kami</a>
                </AnimatedSection>
            </div>
        </section>
    );
};
