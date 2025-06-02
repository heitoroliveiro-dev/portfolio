import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// Esse arquivo é o ponto de entrada principal da aplicação React.
// Ele importa o React e o ReactDOM, além do arquivo de estilos `index.css` e o componente principal `App`.
// O `ReactDOM.createRoot` é usado para renderizar o componente `App` dentro do elemento com o ID `root` no HTML.
// O `React.StrictMode` é um componente que ativa verificações adicionais e avisos para ajudar a identificar problemas na aplicação.