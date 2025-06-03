import React from 'react';
import blogPosts from '../../data/blogPosts';

function BlogSection() {
    return (
        <section id="blog" className="bg-white py-20">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">Blog</h2>
                <p className="text-lg text-gray-700 text-center mb-3">
                    Meus pensamentos sobre design, desenvolvimento e tecnologia.
                </p>
                <hr className="border-t-2 border-amber-400 w-24 mx-auto mb-12" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-slate-100 p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                            <p className="text-sm text-amber-600 mb-1">{post.date}</p>
                            <h3 className="text-xl font-semibold text-gray-200 mb-4">
                                <a href="#" className="font-semibold text-gray-700 hover:text-amber-600 scale-110">{post.title}</a>
                            </h3>
                            
                            <p className="text-gray-700 mb-4">{post.summary}</p>
                            <a href="#" className="text-gray-600 hover:underline hover:text-amber-600">Leia mais</a>
                        </div>
                    ))}
                </div>
                <div className="w-full flex justify-center text-center mt-12">
                    <button href="#blog" className="border-none bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg shadow-md transform hover:scale-105 transition-all duration-300">
                    Ver Todos os Posts (Em breve)
                    </button>
                </div>
            </div>
        </section>
    );
}
export default BlogSection;