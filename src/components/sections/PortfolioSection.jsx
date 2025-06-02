import React from 'react';

function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-white dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meu Portfólio</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Aqui estão alguns dos meus projetos mais recentes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Exemplo de projeto */}
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Projeto 1</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Descrição do projeto 1.</p>
                        <a href="#" className="text-blue-600 hover:underline">Ver mais</a>
                    </div>
                    {/* Adicione mais projetos conforme necessário */}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;