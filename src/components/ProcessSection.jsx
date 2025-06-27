import React from 'react';
import AnimatedSection from './AnimatedSection';
import { CommentsIcon, RulerPencilIcon, IndustryIcon, WrenchScrewdriverIcon } from './Icons';

export default function ProcessSection() {
    const steps = [
        { icon: <CommentsIcon />, title: 'Konsultasi', description: 'Memahami kebutuhan dan tujuan proyek Anda.' },
        { icon: <RulerPencilIcon />, title: 'Desain & Teknik', description: 'Merancang solusi presisi dengan tim ahli kami.' },
        { icon: <IndustryIcon />, title: 'Fabrikasi', description: 'Memproduksi komponen dengan standar kualitas tertinggi.' },
        { icon: <WrenchScrewdriverIcon />, title: 'Instalasi', description: 'Pemasangan di lapangan oleh tim profesional.' }
    ];
    return (
        <section className="py-28 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-4">Proses Kami</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold">Empat Langkah Menuju Kesuksesan</h3>
                    </div>
                    <div className="relative">
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-700"></div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {steps.map((step) => (
                                <div key={step.title} className="text-center relative bg-gray-900 px-4">
                                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-red-600 text-white mx-auto mb-6 border-4 border-gray-900 shadow-lg">
                                        {step.icon}
                                    </div>
                                    <h4 className="font-bold text-xl mb-2">{step.title}</h4>
                                    <p className="text-gray-400 text-sm">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
