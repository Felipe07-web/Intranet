import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export function CallToAction() {
  return (
    <div className="bg-[#40B5AD] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-gray-900">
              <h2 className="text-3xl font-bold text-white mb-6">
                Contato Corporativo
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#40B5AD]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Email</p>
                    <p className="text-white">contato@vilanova.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#40B5AD]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Telefone</p>
                    <p className="text-white">+55 (11) 1234-5678</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-[#40B5AD]" />
                  </div>
                  <div>
                    <p className="text-gray-400">Endereço</p>
                    <p className="text-white">Av. Paulista, 1000 - São Paulo</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Precisa de ajuda?
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Nossa equipe está pronta para atender suas necessidades
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-[#40B5AD] hover:bg-[#369993] transition-colors duration-300"
                >
                  Abrir Chamado
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}