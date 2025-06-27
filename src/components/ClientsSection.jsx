import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function ClientsSection() {
    const clients = [
        'PT. JGC Indonesia', 'PT. Chandra Asri', 'PT. Pertamina', 'PT. Adhi Karya', 'Kajima', 'Mitsubishi Heavy Industry', 'PT. Smelting',
    ];
    const extendedClients = [...clients, ...clients];

    return (
        <section id="klien" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <h3 className="text-center text-xl font-semibold text-gray-500 mb-10">Dipercaya oleh Perusahaan Terkemuka</h3>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex animate-infinite-scroll">
                            {extendedClients.map((client, index) => (
                                <div key={index} className="flex-shrink-0 mx-8 text-2xl font-bold text-gray-400 grayscale hover:grayscale-0 transition-all">
                                    {client}
                                </div>
                            ))}
                        </div>
                        <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-gray-50 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
