import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function ServicesSection() {
    const services = [
        { icon: "fa-cogs", title: "Mechanical Engineering", description: "Perancangan dan rekayasa mekanikal presisi untuk berbagai kebutuhan industri." },
        { icon: "fa-industry", title: "Fabrication & Erection", description: "Fabrikasi dan pemasangan struktur baja, tangki, dan perpipaan dengan standar tertinggi." },
        { icon: "fa-tools", title: "Maintenance", description: "Jasa perawatan preventif dan korektif untuk peralatan industri Anda." },
        { icon: "fa-recycle", title: "Tank Cleaning & Recondition", description: "Pembersihan dan rekondisi tangki secara profesional untuk memperpanjang masa pakai." },
    ];
    return (
        <section id="layanan" className="py-28 bg-white">
            <div className="container mx-auto px-6">
                 <AnimatedSection>
                    <div className="text-center mb-20">
                         <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4">Layanan Kami</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Solusi EPC Komprehensif</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <AnimatedSection key={service.title} delay={index * 100}>
                                 <div className="bg-white p-8 rounded-xl shadow-lg text-left h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-red-600">
                                    <i className={`fas ${service.icon} fa-2x text-red-600 mb-6`}></i>
                                    <h3 className="text-xl font-bold mb-3 text-gray-800">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                </div>
                             </AnimatedSection>
                        ))}
                    </div>
                 </AnimatedSection>
            </div>
        </section>
    );
};
