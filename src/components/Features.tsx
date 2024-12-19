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
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header da seção */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Excelência em cada detalhe
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Nossos pilares de atuação garantem inovação, performance e resultados para a sua empresa.
          </p>
          <div className="w-20 h-1 bg-[#40B5AD] mx-auto mt-6"></div>
        </div>

        {/* Cards de destaques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white rounded-lg shadow-md p-8 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            >
              {/* Ícone com destaque interativo */}
              <div className="flex items-center justify-center h-16 w-16 mx-auto mb-6 rounded-full bg-[#40B5AD]/10 text-[#40B5AD] group-hover:bg-[#40B5AD] group-hover:text-white transition duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              
              {/* Título */}
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {feature.title}
              </h3>
              
              {/* Descrição */}
              <p className="text-gray-600 text-center mb-6">
                {feature.description}
              </p>
              
              {/* Estatísticas */}
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#40B5AD] mb-1">
                  {feature.stat}
                </div>
                <p className="text-gray-500 text-sm">
                  {feature.statLabel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
