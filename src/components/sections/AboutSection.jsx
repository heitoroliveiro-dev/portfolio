import React from 'react';


function AboutSection() {
    return (
        <section id="about" className="bg-gray-100 dark:bg-gray-800 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sobre Mim</h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
                        Sou um desenvolvedor apaixonado por criar experiências digitais incríveis. 
                        Com anos de experiência em desenvolvimento web, estou sempre em busca de novos desafios e oportunidades para aprender.
                    </p>
                    <a href="#portfolio" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                        Veja meu portfólio
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;