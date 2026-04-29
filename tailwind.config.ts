<<<<<<< HEAD
// Localização: C:\projeto\acheipracasa\tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lucas: {
          green: '#2A5C5A',    // Verde Petróleo
          offwhite: '#F9F7F2', // Fundo
          orange: '#E67E22',   // Botões
        },
      },
    },
  },
  plugins: [],
};
export default config;
=======
theme: {
  extend: {
    colors: {
      lucas: {
        green: '#2A5C5A',    // Verde Petróleo (Autoridade)
        offwhite: '#F9F7F2', // Fundo (Conforto)
        orange: '#E67E22',   // Botões (Conversão)
      }
    },
  },
},
>>>>>>> 9e69ba40411345f99aa019628f9244bfbe582bb3
