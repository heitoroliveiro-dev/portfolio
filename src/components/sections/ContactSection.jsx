import React, { useState } from 'react';
// Importe seus ícones conforme sua biblioteca, exemplo:
import { Linkedin, GitHub, Twitter } from 'react-feather'; // ou outro pacote de ícones

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar o formulário (ex: API)
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto max-w-3xl">
        {/* Troque SectionTitle por h2/p se não usar o componente */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-2">Contato</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-3">Vamos conversar sobre seu próximo projeto!</p>
        <hr className="border-t-2 border-violet-500 w-24 mx-auto mb-8 p-5" />
        <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center">
            Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato através do formulário abaixo ou pelas minhas redes sociais.
          </p>
          {submitted ? (
            <div className="text-green-600">Mensagem enviada com sucesso!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome Completo</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="Seu Nome"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mensagem</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm text-gray-900 dark:text-white"
                  placeholder="Sua mensagem..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                >
                  Enviar Mensagem
                </button>
                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">Este formulário é apenas demonstrativo.</p>
              </div>
            </form>
          )}
          <div className="mt-10 text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-2">Ou me encontre em:</p>
            <div className="flex justify-center space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors"><Linkedin size={28}/></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors"><GitHub size={28}/></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-violet-500 transition-colors"><Twitter size={28}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;