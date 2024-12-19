import React from 'react';
import { Building2 } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-12">
          <Building2 className="h-10 w-10 text-[#40B5AD]" />
          <div className="text-[#40B5AD] text-3xl font-semibold ml-2">
            VILA<span className="text-white">nova</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-white text-lg font-semibold mb-4">Sobre nós</h3>
            <p className="text-gray-400">
              Excelência em gestão e inovação desde 2009, transformando desafios em oportunidades de crescimento.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Portal RH</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Documentos</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Políticas</a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors duration-200">Suporte</a>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-white text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-2">
              <p className="text-gray-400">contato@vilanova.com.br</p>
              <p className="text-gray-400">+55 (11) 1234-5678</p>
              <p className="text-gray-400">Av. Paulista, 1000 - São Paulo</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            © Vila Nova | Todos os direitos reservados - VNS 2009-24
          </p>
        </div>
      </div>
    </footer>
  );
}