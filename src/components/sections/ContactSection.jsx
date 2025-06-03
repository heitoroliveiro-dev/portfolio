import React, { useState } from 'react';

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
    <section id="contact" className="py-12 px-4 max-w-xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6">Contato</h2>
      {submitted ? (
        <div className="text-green-600">Mensagem enviada com sucesso!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">Nome</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">Email</label>
            <input
              className="w-full border rounded px-3 py-2"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">Mensagem</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Enviar
          </button>
        </form>
      )}
    </section>
  );
}

export default ContactSection;