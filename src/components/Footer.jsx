import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto py-6 px-6 text-center">
                <p className="text-gray-500">&copy; {new Date().getFullYear()} PT. Artawa Indonesia. Semua Hak Cipta Dilindungi.</p>
            </div>
        </footer>
    );
};
