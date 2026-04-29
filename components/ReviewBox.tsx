import React from 'react';
import { StarIcon } from '@heroicons/react/20/solid';

interface ReviewBoxProps {
  title: string;
  rating: number;
  affiliateLink: string;
  ctaText: string;
  pros: string[];
  cons: string[];
}

export default function ReviewBox({ 
  title, 
  rating, 
  affiliateLink, 
  ctaText, 
  pros, 
  cons 
}: ReviewBoxProps) {
  return (
    <div className="my-8 border-2 border-lucas-green/20 rounded-2xl overflow-hidden bg-white shadow-sm">
      {/* Cabeçalho com Nota */}
      <div className="bg-lucas-green p-4 flex justify-between items-center">
        <h3 className="text-white font-bold text-lg">{title} - Score</h3>
        <div className="flex items-center bg-white/20 px-3 py-1 rounded-full">
          <span className="text-white font-bold mr-1">{rating}</span>
          <StarIcon className="h-5 w-5 text-yellow-400" />
        </div>
      </div>

      <div className="p-6">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Coluna de Prós */}
          <div className="space-y-2">
            <p className="font-bold text-green-700 uppercase text-xs tracking-wider">Advantages</p>
            <ul className="space-y-1">
              {pros?.map((pro, i) => (
                <li key={i} className="flex items-start text-gray-700 text-sm">
                  <span className="text-green-500 mr-2">✓</span> {pro}
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna de Contras */}
          <div className="space-y-2">
            <p className="font-bold text-red-700 uppercase text-xs tracking-wider">Considerations</p>
            <ul className="space-y-1">
              {cons?.map((con, i) => (
                <li key={i} className="flex items-start text-gray-700 text-sm">
                  <span className="text-red-400 mr-2">✕</span> {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Botão de Chamada para Ação (CTA) */}
        <a
          href={affiliateLink}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block w-full py-4 text-center bg-lucas-orange hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          {ctaText || 'Check Official Price'}
        </a>
        <p className="text-center text-[10px] text-gray-400 mt-3 italic">
          * Clicking redirects to the official manufacturer page.
        </p>
      </div>
    </div>
  );
}
