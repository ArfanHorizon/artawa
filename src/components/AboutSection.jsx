import React from 'react';
import AnimatedSection from './AnimatedSection';
import { EyeIcon, TargetIcon, CheckCircleIcon } from './Icons';

export default function AboutSection() {
    return (
        <section id="tentang" className="py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <AnimatedSection>
                        <div className="relative">
                            <img src="https://placehold.co/600x700/1f2937/ffffff?text=Company+Profile" alt="Profil Perusahaan" className="rounded-xl shadow-2xl w-full object-cover relative z-10" />
                            <div className="absolute -top-8 -left-8 w-32 h-32 bg-red-100 rounded-full z-0 transform rotate-45"></div>
                            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-gray-100 rounded-lg z-0"></div>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={200}>
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4">Profil Perusahaan</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">Mitra EPC Terdepan Sejak 1995</h3>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            PT Artawa Indonesia didirikan pada 17 Februari 1995. Sejak 2008, kami menjadi bagian dari <b>DENTETSU SHOJI CO.,LTD</b>, memperkuat posisi kami sebagai perusahaan <b>EPC (Engineering, Procurement, and Construction)</b> yang siap menangani proyek berskala domestik dan Asia.
                        </p>
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500 flex items-start space-x-4">
                                <EyeIcon />
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800">Visi Kami</h4>
                                    <p className="text-sm text-gray-600 mt-1">Menjadi perusahaan fabrikasi dan kontraktor mekanikal terbaik dan menjadi pilihan pelanggan dengan mengutamakan kesehatan dan keselamatan kerja.</p>
                                </div>
                            </div>
                             <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500 flex items-start space-x-4">
                                <TargetIcon />
                                <div>
                                    <h4 className="font-bold text-xl text-gray-800">Misi Kami</h4>
                                    <ul className="space-y-2 mt-2">
                                        <li className="flex items-start text-sm text-gray-600"><CheckCircleIcon /><span>Memenuhi kebutuhan pekerjaan mekanikal untuk proyek domestik dan Asia.</span></li>
                                        <li className="flex items-start text-sm text-gray-600"><CheckCircleIcon /><span>Membina hubungan yang baik dengan pelanggan dan pemasok.</span></li>
                                        <li className="flex items-start text-sm text-gray-600"><CheckCircleIcon /><span>Mencegah terjadinya kecelakaan dan penyakit akibat kerja.</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};
