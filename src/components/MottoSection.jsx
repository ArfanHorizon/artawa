import React from 'react';
import AnimatedSection from './AnimatedSection';

export default function MottoSection() {
    const mottos = [
        { title: "Keselamatan", id: "Safety First", en: "We protect ourselves", jp: "我々は自分自身を守る" },
        { title: "Kejujuran", id: "Honesty", en: "We protect our family", jp: "我々は自分の家族を守る" },
        { title: "Kerjasama", id: "Cooperation", en: "We protect our friends", jp: "我々は友人を守る" },
        { title: "Harmonis", id: "Harmony", en: "We protect our site", jp: "我々は現場を守る" },
        { title: "Berpikir", id: "Think", en: "We protect our jobs", jp: "我々は仕事を守る" },
        { title: "Keyakinan", id: "Confidence", en: "We protect our customers", jp: "我々は顧客を守る" },
    ];
    return (
        <section id="motto" className="py-28 bg-gray-50">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4">Filosofi Kami</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Motto Perusahaan</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mottos.map((motto, index) => (
                             <AnimatedSection key={motto.title} delay={index * 100}>
                                <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-red-500 h-full">
                                    <h4 className="font-bold text-2xl text-gray-800 mb-2">{motto.title} <span className="text-lg text-red-500">({motto.id})</span></h4>
                                    <p className="text-gray-600 mb-4">"{motto.slogan}"</p>
                                    <p className="text-gray-500 text-sm italic">"{motto.en}"</p>
                                    <p className="text-gray-500 text-sm mt-1">{motto.jp}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};
