import React, { useState } from 'react';
import AnimatedSection from '../AnimatedSection';
import LoadingSpinner from './LoadingSpinner';

const ProjectIdeaSection = () => {
    const [prompt, setPrompt] = useState('');
    const [generatedIdea, setGeneratedIdea] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleGenerateIdea = async () => {
        setIsLoading(true);
        setError(null);
        setGeneratedIdea('');

        try {
            const chatHistory = [];
            chatHistory.push({ role: "user", parts: [{ text: `Generate a detailed project idea for an EPC (Engineering, Procurement, and Construction) company based on the following concept/industry. Focus on the scope, potential benefits, and key components. Make it sound professional and comprehensive. Concept: "${prompt}"` }] });
            const payload = { contents: chatHistory };
            const apiKey = ""; // Canvas will provide this at runtime
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            const result = await response.json();

            if (result.candidates && result.candidates.length > 0 &&
                result.candidates[0].content && result.candidates[0].content.parts &&
                result.candidates[0].content.parts.length > 0) {
                const text = result.candidates[0].content.parts[0].text;
                setGeneratedIdea(text);
            } else {
                setError("Gagal menghasilkan ide proyek. Coba lagi.");
            }
        } catch (err) {
            console.error("Error calling Gemini API:", err);
            setError("Terjadi kesalahan saat berkomunikasi dengan AI. Silakan coba lagi nanti.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="project-idea" className="py-28 bg-gray-50 font-inter scroll-mt-24">
            <div className="container mx-auto px-6">
                <AnimatedSection>
                    <div className="text-center mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-600 mb-4">Inovasi Proyek</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">Jelajahi Ide Proyek Baru ✨</h3>
                        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">Masukkan deskripsi singkat tentang industri atau jenis proyek, dan AI kami akan membantu Anda memvisualisasikan kemungkinan proyek EPC.</p>
                    </div>
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                        <div className="mb-6">
                            <label htmlFor="project-prompt" className="block text-gray-700 text-lg font-semibold mb-3">Deskripsikan konsep proyek atau industri:</label>
                            <textarea
                                id="project-prompt"
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 h-32 resize-y text-gray-800"
                                placeholder="Contoh: 'Pembangkit listrik tenaga surya di daerah terpencil' atau 'Pabrik pengolahan limbah ramah lingkungan'"
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                            ></textarea>
                        </div>
                        <button
                            onClick={handleGenerateIdea}
                            disabled={isLoading || prompt.trim() === ''}
                            className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                        >
                            {isLoading ? (
                                <LoadingSpinner />
                            ) : (
                                "Hasilkan Ide Proyek ✨"
                            )}
                        </button>

                        {error && (
                            <div className="mt-6 p-4 bg-red-100 text-red-700 border border-red-400 rounded-lg">
                                {error}
                            </div>
                        )}

                        {generatedIdea && !isLoading && (
                            <div className="mt-6 p-6 bg-gray-100 border border-gray-300 rounded-lg shadow-inner">
                                <h4 className="text-xl font-bold text-gray-800 mb-4">Ide Proyek Anda:</h4>
                                <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                    {generatedIdea}
                                </div>
                                <p className="text-sm text-gray-500 italic mt-4">
                                    *Ide ini dihasilkan oleh AI dan bertujuan sebagai inspirasi awal. Konsultasikan dengan tim ahli kami untuk studi kelayakan dan perencanaan lebih lanjut.
                                </p>
                            </div>
                        )}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default ProjectIdeaSection;
