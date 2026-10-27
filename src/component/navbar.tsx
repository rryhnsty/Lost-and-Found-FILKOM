import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <div className="flex items-center cursor-pointer font-bold font-bebas text-xl tracking-wide select-none">
          <span className="text-blue-600 ">Lost</span>
          <span className="text-black mx-0.5">and</span>
          <span className="text-orange-500">Found</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium font-sans text-gray-700">
          <a href="#search" className="hover:text-black transition-colors">Cari</a>
          <a href="#report" className="hover:text-black transition-colors">Laporkan</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>

        <div>
          <button className="flex item-center justify-center px-6 py-2.5 bg-black text-white rounded-full text-sm font-medium font-sans hover:bg-gray-800 transition-all shadow-sm">
            Login
          </button>
        </div>

      </div>
    </header>
  );
}