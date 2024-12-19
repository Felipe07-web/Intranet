import React from 'react';
import { Building2, Bell, Search, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Building2 className="h-8 w-8 text-[#40B5AD]" />
            <div className="text-[#40B5AD] text-xl font-bold">
              VILANOVA <span className="text-gray-600">GRUPO</span>
            </div>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors">
              Início
            </a>
            <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors">
              Celebrações
            </a>
            <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors">
              Desenvolvimento
            </a>
            <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors">
              Gamificação
            </a>
            <a href="#" className="text-gray-700 hover:text-[#40B5AD] font-medium transition-colors">
              Desempenho
            </a>
          </div>

          {/* Ícones */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition relative">
              <Bell className="h-5 w-5 text-gray-600" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <User className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
