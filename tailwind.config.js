/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// Este arquivo configura o Tailwind CSS para o projeto definindo
// quais arquivos devem ser verificados para classes do tailwind.
// A propriedade `content` especifica os caminhos dos arquivos onde o Tailwind
// deve procurar por classes CSS. Neste caso, ele verifica todos os arquivos
// dentro do diretório `src` com as extensões `.js`, `.jsx`, `.ts` e `.tsx`.

// A propriedade `theme` permite estender a configuração padrão do Tailwind,
// mas neste exemplo não há extensões adicionais definidas.

// A propriedade `plugins` é um array onde você pode adicionar plugins do Tailwind,
// mas neste exemplo não há plugins sendo utilizados.
// Para usar este arquivo, certifique-se de que o Tailwind CSS esteja instalado
// e configurado corretamente no seu projeto React.
