import React from 'react';
import skills from '../../data/about';

function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto">
            <div className="mb-3 text-center">
                <h2 className="text-4xl font-bold text-gray-800">Sobre</h2>
                <p className="mt-2 text-lg text-gray-600">Um pouco sobre minha jornada e paixões.</p>
            </div>
            <hr className="border-t-2 border-emerald-400 w-24 mx-auto mb-12" />
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                <div className="w-73 mx-auto relative group">
                    <div className="absolute inset-[-4px] bg-gradient-to-r from-sky-500 to-emerald-500 rounded-lg blur-sm opacity-60 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://placehold.co/500x500/E2E8F0/4A5568?text=Sua+Foto+Aqui"
                        alt="Sua Foto"
                        className="rounded-lg shadow-xl w-full relative"
                        onError={(e) => e.target.src='https://placehold.co/500x500/CCCCCC/FFFFFF?text=Imagem+Indisponível'}
                    />
                </div>
                <div className="text-gray-700 space-y-6">
                    <p className="text-xl leading-relaxed">
                    Olá! Sou Heitor, um apaixonado por desenvolvimento web e design de interfaces. Minha missão é criar soluções digitais que não apenas funcionem bem, mas que também ofereçam uma experiência de usuário memorável e agradável.
                    </p>
                    <p className="leading-relaxed">
                    Com uma base sólida tanto em desenvolvimento front-end quanto em princípios de design, busco sempre o equilíbrio entre estética e funcionalidade. Acredito que a "dualidade designer/desenvolvedor" me permite ter uma visão holística dos projetos, desde a concepção até a implementação final.
                    </p>
                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-800">Minhas Habilidades</h3>
                        <div className="space-y-4">
                            {skills.map(skill => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium text-gray-700">{skill.name}</span>
                                    <span className="text-sm font-medium text-gray-700">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                    <div className={`${skill.color} h-2.5 rounded-full`} style={{ width: `${skill.level}%` }}></div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default AboutSection;