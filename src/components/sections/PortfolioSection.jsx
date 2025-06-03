import React from 'react';
import projects from '../../data/projects';

function PortfolioSection() {
    return (
        <section id="portfolio" className="bg-white dark:bg-gray-900 py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Meu Portfólio</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Aqui estão alguns dos meus projetos mais recentes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project) => (
                       <div key={project.id} className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-lg transform transition-transform duration-300 delay-100 hover:scale-105">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">{project.title}</h3>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <a
                                    href={project.projectUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`mt-auto inline-block ${project.textColor} border-2 ${project.textColor === 'text-white' || project.textColor.includes('100') || project.textColor.includes('200') ? 'border-white' : 'border-current'} hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 text-center text-lg`}
                                >
                                    Ver Projeto
                                </a>
                            </div>
                        </div> 
                            ))}
                </div>
            </div>
        </section>
    );
}

export default PortfolioSection;