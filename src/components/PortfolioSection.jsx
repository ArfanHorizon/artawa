import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

const PortfolioItem = ({ img, title, category }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg h-96">
        <img src={img} alt={title} className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
            <p className="text-sm text-red-400 font-semibold uppercase tracking-wider">{category}</p>
            <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        </div>
    </div>
);

export default function PortfolioSection() {
     const portfolioRef = useRef(null);

    useEffect(() => {
        const portfolioEl = portfolioRef.current;
        if (!portfolioEl) return;

        const handleWheel = (e) => {
            if (e.deltaY === 0) return;
            e.preventDefault();
            portfolioEl.scrollBy({
                left: e.deltaY < 0 ? -300 : 300,
                behavior: 'smooth'
            });
        };
        
        portfolioEl.addEventListener('wheel', handleWheel);
        return () => portfolioEl.removeEventListener('wheel', handleWheel);
    }, []);

    const portfolioItems = [
        { img:  process.env.PUBLIC_URL + '/images/MRT.png', title: "Instalasi Tunnel Boring Machine Jakarta MRT", category: "Proyek Strategis" },
        { img:  process.env.PUBLIC_URL + '/images/fabjpg.png', title: "Fabrikasi untuk Ekspor (Jepang)", category: "Mekanikal" },
        { img:  process.env.PUBLIC_URL + '/images/port1.png', title: "Intake Tower PLTU Tarahan", category: "Sipil" },
        { img:  process.env.PUBLIC_URL + '/images/mt.png', title: "Daily Maintenance Smelter", category: "Maintenance" }
    ];

    return (
        <section id="portofolio" className="py-28 bg-gray-900 text-white overflow-hidden">
            <div className="container mx-auto px-6 mb-10">
                 <AnimatedSection>
                     <div className="mb-20">
                        <h2 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-4">Portofolio</h2>
                        <h3 className="text-4xl lg:text-5xl font-bold">Proyek Unggulan Kami</h3>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl">Geser untuk melihat rekam jejak kami dalam berbagai proyek berskala besar.</p>
                    </div>
                 </AnimatedSection>
            </div>
            <div ref={portfolioRef} className="flex space-x-8 pb-10 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                <div className="flex-shrink-0 w-8 md:w-24"></div> {/* Spacer */}
                {portfolioItems.map((item, index) => (
                    <AnimatedSection key={index} className="flex-shrink-0 w-[80vw] md:w-[40vw]">
                        <PortfolioItem {...item} />
                    </AnimatedSection>
                ))}
                 <div className="flex-shrink-0 w-8 md:w-24"></div>
            </div>
        </section>
    );
};
