import React from 'react';

export function Sidebar() {
  return (
    <div className="w-80 bg-white rounded-lg shadow-sm p-4 space-y-6">
      <div className="space-y-4">
        <div className="bg-[#40B5AD] text-white p-3 rounded">
          <h2 className="text-lg font-medium">Pesquisar</h2>
        </div>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Pesquisar por..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#40B5AD]"
          />
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
            Buscar
          </button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#40B5AD] text-white p-3 rounded">
          <h2 className="text-lg font-medium">Novidades</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a href="#" className="text-gray-700 hover:text-[#40B5AD]">Notícias</a>
          <a href="#" className="text-gray-700 hover:text-[#40B5AD]">Eventos</a>
          <a href="#" className="text-gray-700 hover:text-[#40B5AD]">Aniversariantes</a>
          <a href="#" className="text-gray-700 hover:text-[#40B5AD]">Galeria</a>
          <a href="#" className="text-gray-700 hover:text-[#40B5AD]">Treinamentos</a>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-[#40B5AD] text-white p-3 rounded">
          <h2 className="text-lg font-medium">Caixa de idéias</h2>
        </div>
        <div className="p-4">
          <p className="text-gray-600 mb-4">Dúvidas, críticas, elogios ou sugestões...</p>
          <button className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 w-full">
            Abrir formulário
          </button>
        </div>
      </div>
    </div>
  );
}