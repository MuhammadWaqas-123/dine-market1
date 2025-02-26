"use client";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="bg-white text-black p-6 relative z-50">
            <div className="container mx-auto flex justify-between items-center">
              
                <div className="text-2xl font-bold">
                    <Link href="/"><img src="/logo.webp" className="w-[170px]" alt="Logo" /></Link>
                </div>

               
                <ul className="hidden md:flex space-x-[1.1cm] text-lg">
                    <li><Link href="/" className="hover:text-gray-400">Female</Link></li>
                    <li><Link href="/shop" className="hover:text-gray-400">Male</Link></li>
                    <li><Link href="/about" className="hover:text-gray-400">Kids</Link></li>
                    <li><Link href="/products" className="hover:text-gray-400">All Products</Link></li>
                </ul>

               
                <div className="flex items-center space-x-4">
                    <IoCartOutline className="text-4xl text-black" />

                  
                    <button onClick={toggleMenu} className="md:hidden text-3xl focus:outline-none">
                        {menuOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

           
            <div className={`fixed top-0 right-0 h-full w-64 bg-white p-5 transform transition-transform duration-300 ease-in-out shadow-lg z-50 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                
                
                <button onClick={closeMenu} className="text-3xl absolute top-4 right-4">
                    ✖
                </button>

                <ul className="mt-12 space-y-4 text-lg">
                    <li><Link href="/" onClick={closeMenu} className="block hover:text-gray-400">Female</Link></li>
                    <li><Link href="/shop" onClick={closeMenu} className="block hover:text-gray-400">Male</Link></li>
                    <li><Link href="/about" onClick={closeMenu} className="block hover:text-gray-400">Kids</Link></li>
                    <li><Link href="/contact" onClick={closeMenu} className="block hover:text-gray-400">All Products</Link></li>
                </ul>
            </div>

           
            {menuOpen && (
                <div className="fixed inset-0 bg-opacity-50 z-40" onClick={closeMenu}></div>
            )}
        </nav>
    );
}
