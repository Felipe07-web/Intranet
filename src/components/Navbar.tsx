import React, { useState, useEffect } from 'react';
import { Building2, Bell, Search, User } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-[#40B5AD]" />
            <div className="text-[#40B5AD] text-2xl font-semibold tracking-tight">
              VILA<span className="text-gray-600">nova</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors duration-200">Videos</a>
              <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors duration-200">Gente & Gestão</a>
              <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors duration-200">Sistemas</a>
              <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors duration-200">Suporte</a>
              <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors duration-200">Sites</a>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 relative">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}