import React from 'react';
import Image from 'next/image';
import { CheckBadgeIcon } from '@heroicons/react/24/solid';

interface AuthorProps {
  name: string;
  image: string;
  bio: string;
  specialty?: string;
}

export default function AuthorBox({ name, image, bio, specialty }: AuthorProps) {
  return (
    <div className="relative my-10 p-6 bg-lucas-offwhite rounded-2xl border border-lucas-green/10 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-sm">
      
      {/* Selo do Lucas - Posicionamento Estratégico de Autoridade */}
      <div className="absolute -top-6 -left-4 z-10 drop-shadow-md transform -rotate-12 hidden md:block">
        <Image 
          src="/selo-do-lucas.png" 
          alt="Selo de Qualidade Técnica" 
          width={70} 
          height={70} 
          className="object-contain"
        />
      </div>

      {/* Foto do Autor */}
      <div className="relative w-24 h-24 shrink-0">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
          <Image
            src={image || '/default-avatar.png'}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        {/* Ícone de Verificado Blue Badge */}
        <div className="absolute -bottom-1 -right-1 bg-white rounded-full">
          <CheckBadgeIcon className="h-6 w-6 text-blue-500" />
        </div>
      </div>

      {/* Info do Autor */}
      <div className="flex-1 text-center md:text-left">
        <div className="mb-2">
          <p className="text-lucas-green font-bold text-xl flex items-center justify-center md:justify-start gap-2">
            {name}
          </p>
          {specialty && (
            <span className="inline-block text-xs font-semibold bg-lucas-green/10 text-lucas-green px-2 py-1 rounded uppercase tracking-wider">
              {specialty}
            </span>
          )}
        </div>
        <p className="text-gray-600 text-sm leading-relaxed italic">
          "{bio}"
        </p>
        
        {/* Badges de Confiança (Trust Signals) */}
        <div className="mt-4 flex items-center justify-center md:justify-start gap-4 text-[10px] text-gray-400 font-bold uppercase tracking-tight">
          <div className="flex items-center gap-1">
            <span className="text-green-600 font-black">✓</span> FACT CHECKED
          </div>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <div className="flex items-center gap-1">
            <span className="text-green-600 font-black">✓</span> EXPERT REVIEWED
          </div>
        </div>
      </div>

      {/* Versão mobile do selo (centralizada no rodapé do card) */}
      <div className="md:hidden mt-2">
        <Image 
          src="/selo-do-lucas.png" 
          alt="Selo de Qualidade" 
          width={50} 
          height={50} 
        />
      </div>
    </div>
  );
}