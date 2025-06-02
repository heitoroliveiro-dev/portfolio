import React from 'react'; // Import your CSS file for styles'

function BlogSection() {
    return (
        <section id="blog" className="bg-white dark:bg-gray-900 py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Blog</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
                    Aqui você encontrará meus últimos artigos e pensamentos sobre diversos assuntos.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Exemplo de post do blog */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Título do Post</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                            Um breve resumo do conteúdo do post. Clique para ler mais.
                        </p>
                        <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Leia mais</a>
                    </div>
                    {/* Adicione mais posts conforme necessário */}
                </div>
            </div>
        </section>
    );
}
export default BlogSection;