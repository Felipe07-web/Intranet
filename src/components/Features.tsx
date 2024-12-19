import React from 'react';
import { Building2, Users2, BarChart3, Rocket } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "Gestão Corporativa",
    description: "Soluções integradas para maximizar resultados",
    stat: "98%",
    statLabel: "Eficiência"
  },
  {
    icon: Users2,
    title: "Capital Humano",
    description: "Desenvolvimento e valorização de talentos",
    stat: "2.5K+",
    statLabel: "Colaboradores"
  },
  {
    icon: BarChart3,
    title: "Performance",
    description: "Métricas e indicadores de excelência",
    stat: "35%",
    statLabel: "Crescimento"
  },
  {
    icon: Rocket,
    title: "Inovação",
    description: "Tecnologia de ponta para seu negócio",
    stat: "24/7",
    statLabel: "Suporte"
  }
];

export function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Excelência em cada detalhe
          </h2>
          <div className="w-24 h-1 bg-[#40B5AD] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-[#40B5AD]/10 text-[#40B5AD] mx-auto mb-6 group-hover:bg-[#40B5AD] group-hover:text-white transition-all duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                {feature.description}
              </p>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-[#40B5AD] mb-1">
                  {feature.stat}
                </div>
                <div className="text-sm text-gray-500">
                  {feature.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}