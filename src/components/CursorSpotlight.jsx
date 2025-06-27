import React, { useState, useEffect } from 'react'; // Impor useState dan useEffect

// Hook untuk posisi mouse (dipindahkan ke dalam komponen CursorSpotlight)
const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });
    useEffect(() => {
        const updateMousePosition = (ev) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);
    return mousePosition;
};

const CursorSpotlight = () => {
    const { x, y } = useMousePosition();
    return (
        <div
            // Menghapus 'lg:absolute' agar efek tetap 'fixed' dan mencakup seluruh halaman saat discroll
            className="pointer-events-none fixed inset-0 z-30 transition duration-300"
            style={{
                background: `radial-gradient(600px at ${x}px ${y}px, rgba(220, 38, 38, 0.1), transparent 80%)`
            }}
        ></div>
    );
};

export default CursorSpotlight;
