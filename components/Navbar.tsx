import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-[#2A5C5A] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo - Agora com o arquivo SVG */}
          <div className="shrink-0 flex items-center">
            <Link href="/" className="transition hover:opacity-90">
              <Image 
                src="/Logo Acheipracasa.svg" 
                alt="Achei Pra Casa" 
                width={200} // Ajuste conforme necessário
                height={50} 
                priority // Carrega o logo imediatamente (importante para LCP)
                className="h-10 w-auto" // Mantém a proporção via CSS
              />
            </Link>
          </div>

          {/* Categorias - O que o Lucas Garimpa */}
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-wider">
            <Link href="/categoria/cozinha" className="hover:text-[#E67E22] transition">Cozinha</Link>
            <Link href="/categoria/casa-inteligente" className="hover:text-[#E67E22] transition">Casa Inteligente</Link>
            <Link href="/categoria/faxina" className="hover:text-[#E67E22] transition">Faxina</Link>
            <Link href="/categoria/achadinhos" className="hover:text-[#E67E22] transition">Achadinhos</Link>
          </div>

          {/* Link de Autoridade */}
          <div className="flex items-center">
            <Link 
              href="/sobre" 
              className="bg-white text-[#2A5C5A] px-4 py-2 rounded-full text-xs font-black hover:bg-[#E67E22] hover:text-white transition"
            >
              SOBRE O LUCAS
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}