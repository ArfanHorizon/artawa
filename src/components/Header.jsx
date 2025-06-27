import React, { useState, useEffect } from 'react';
import useScrollProgress from '../hooks/useScrollProgress';

export default function Header() {
const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home'); // State untuk bagian aktif
    const scrollProgress = useScrollProgress();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [ 
        { href: "#tentang", text: "Tentang" }, 
        { href: "#motto", text: "Filosofi" }, 
        { href: "#layanan", text: "Layanan" },
        { href: "#klien", text: "Klien" }, 
        { href: "#portofolio", text: "Portofolio" },
        { href: "#kontak", text: "Hubungi Kami", isButton: true } // Menandai ini sebagai tombol
    ];

    useEffect(() => {
        const observerOptions = {
            root: null, // viewport
            rootMargin: '-50% 0px -50% 0px', // Ketika tengah bagian ada di tampilan
            threshold: 0 // Hanya perlu tahu saat melewati tengah
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id); 
                }
            });
        }, observerOptions);

        // Amati semua bagian yang ada di navLinks dan bagian home
        const sectionsToObserve = ['home', ...navLinks.map(link => link.href.substring(1))];
        sectionsToObserve.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                sectionObserver.observe(section);
            }
        });

        return () => {
            sectionsToObserve.forEach(id => {
                const section = document.getElementById(id);
                if (section) {
                    sectionObserver.unobserve(section);
                }
            });
        };
    }, [navLinks]); // Efek ini hanya berjalan sekali saat komponen di-mount

    return (
        <header className="sticky top-0 z-50" style={{backgroundImage: "url('https://placehold.co/1920x1080/1a1a1a/ffffff?text=PT+Artawa+Indonesia')"}}>
            {/* Scroll Progress Bar */}
            <div className={`absolute top-0 left-0 h-1 bg-red-600 transition-all duration-150`} style={{ width: `${scrollProgress}%` }}></div>
            
            {/* Main Navbar Container */}
            <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/90 shadow-lg backdrop-blur-sm' : 'bg-gradient-to-b from-black/60 to-transparent pt-2'}`}>
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <a href="#home" className={`text-2xl font-bold flex items-center transition-colors duration-300 ${isScrolled ? 'text-red-700' : 'text-white'} drop-shadow-lg`}> {/* text-white di sini */}
                        <img src={process.env.PUBLIC_URL + '/logo_artawa.png'} alt="Logo Artawa" className={`h-8 mr-3 transition-transform duration-300 ${isScrolled ? 'scale-90' : 'scale-100'}`}/>
                        <span className="drop-shadow-lg">Artawa Indonesia</span>
                    </a>
                    <img  /> 
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map(link => (
                            link.isButton ? (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    className={`px-6 py-2.5 rounded-full font-semibold shadow-xl transition-transform transform hover:scale-105
                                        ${activeSection === link.href.substring(1) 
                                            ? 'bg-red-700 text-white' 
                                            : 'bg-red-600 text-white hover:bg-red-700'
                                        }
                                    `}
                                >
                                    {link.text}
                                </a>
                            ) : (
                                <a 
                                    key={link.href} 
                                    href={link.href} 
                                    className={`font-medium tracking-wider relative group transition-all duration-300 transform 
                                        ${isScrolled 
                                            ? 'text-gray-700 hover:text-red-600' 
                                            : 'text-gray-100 hover:text-red-400'} {/* text-gray-100 di sini */}
                                        ${activeSection === link.href.substring(1) 
                                            ? (isScrolled ? 'font-bold text-red-600' : 'font-bold text-red-400') 
                                            : ''
                                        }
                                        drop-shadow-lg
                                    `}
                                >
                                    {link.text}
                                    {/* Garis bawah akan selalu berwarna merah, baik saat di-scroll maupun tidak, memastikan visibilitas pada latar belakang gelap. */}
                                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 
                                        ${isScrolled ? 'bg-red-600' : 'bg-red-400'} 
                                        ${activeSection === link.href.substring(1) ? 'w-full' : 'group-hover:w-full w-0'} 
                                    `}></span>
                                </a>
                            )
                        ))}
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-gray-700' : 'text-white drop-shadow-lg'}`} aria-label="Toggle navigation menu">
                            {/* Font Awesome Icons */}
                            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} fa-lg`}></i>
                        </button>
                    </div>
                </nav>
            </div>
            
            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMenuOpen(false)}>
                <div className={`absolute top-0 right-0 h-full w-4/5 bg-white shadow-lg transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex flex-col p-8 pt-20">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="py-3 px-4 text-gray-700 rounded-md hover:bg-red-50 hover:text-red-600 font-medium text-lg transition-colors duration-200">{link.text}</a>
                        ))}
                        <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full bg-red-600 text-white text-center py-3 px-4 rounded-md font-semibold hover:bg-red-700 transition-all duration-200">Hubungi Kami</a>
                    </div>
                </div>
            </div>
        </header>
    );
};
