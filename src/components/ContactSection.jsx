import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection'; // Ekstensi .js dihapus

const ContactSection = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        e.target.reset();
        setTimeout(() => setFormSubmitted(false), 5000);
    };

    return (
        <section id="kontak" className="py-28 bg-gray-900 text-white font-inter scroll-mt-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-4">Kontak</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold">Siap Memulai Proyek Anda?</h3>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Hubungi kami untuk konsultasi dan penawaran. Tim ahli kami siap membantu mewujudkan visi Anda.</p>
                    </div>
                    <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row max-w-6xl mx-auto border border-gray-700">
                        <div className="lg:w-2/5 p-8 md:p-12">
                            <h3 className="text-3xl font-bold mb-6">Informasi Kontak</h3>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <i className="fas fa-map-marker-alt text-2xl text-red-400 mr-4 mt-1"></i>
                                    <div>
                                        <h4 className="font-semibold">Kantor Pusat</h4>
                                        <p className="text-gray-300">Jl. Tanjung Duren Raya S-2 No. 527B, Jakarta Barat 11470</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-phone text-2xl text-red-400 mr-4 mt-1"></i>
                                    <div>
                                        <h4 className="font-semibold">Telepon</h4>
                                        <p className="text-gray-300">(021) 2256 4696</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <i className="fas fa-envelope text-2xl text-red-400 mr-4 mt-1"></i>
                                    <div>
                                        <h4 className="font-semibold">Email</h4>
                                        <p className="text-gray-300">ptartawaindo@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-3/5 p-8 md:p-12 bg-gray-800/50">
                            <h3 className="text-3xl font-bold mb-6">Kirim Pertanyaan</h3>
                            <form onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                    <input type="text" placeholder="Nama Anda" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                    <input type="email" placeholder="Email Anda" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div className="mb-6">
                                    <input type="text" placeholder="Subjek Proyek" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required />
                                </div>
                                <div className="mb-6">
                                    <textarea placeholder="Deskripsikan kebutuhan proyek Anda..." rows="5" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required></textarea>
                                </div>
                                <button type="submit" className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 shadow-lg transition-transform transform hover:scale-105">Kirim Pesan</button>
                            </form>
                            {formSubmitted && (
                                <div className="mt-4 p-4 bg-green-900/50 text-green-300 border border-green-700 rounded-lg">
                                    Terima kasih! Pesan Anda telah berhasil dikirim.
                                </div>
                            )}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ContactSection;
