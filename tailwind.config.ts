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