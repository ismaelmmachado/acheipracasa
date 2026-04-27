import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Coluna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-[#2A5C5A] font-black text-lg mb-4 italic">Achei Pra Casa</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Engenharia descomplicada, papo reto e dinheiro bem gasto. O seu guia técnico para um lar funcional.
            </p>
          </div>

          {/* Coluna 2: Navegação */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Sobre a Casa</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/sobre" className="hover:text-[#2A5C5A]">Sobre o Lucas</Link></li>
              <li><Link href="/contato" className="hover:text-[#2A5C5A]">Fale com o Lucas</Link></li>
              <li><Link href="/afiliados" className="hover:text-[#2A5C5A]">Aviso de Afiliados</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Jurídico */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Papo Jurídico</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/termos" className="hover:text-[#2A5C5A]">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-[#2A5C5A]">Privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 4: IA & Tech */}
          <div>
            <h4 className="font-bold text-slate-800 mb-4 uppercase text-xs tracking-widest">Para Máquinas</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/llms.txt" className="hover:text-[#2A5C5A] font-mono">llms.txt</Link></li>
              <li><span className="text-xs text-slate-400 italic">Agent-Ready v4.2</span></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer de Afiliados (CRÍTICO) */}
        <div className="border-t border-slate-100 pt-8 text-center">
          <p className="text-slate-500 text-xs italic max-w-3xl mx-auto leading-relaxed">
            "Como associado da Amazon, Magalu e outros parceiros, o Achei Pra Casa ganha comissões em compras qualificadas. 
            Isso nos ajuda a manter o rigor técnico sem cobrar nada de você, e nunca, em hipótese alguma, compra a nossa opinião sincera."
          </p>
          <p className="text-slate-400 text-[10px] mt-6 uppercase tracking-widest">
            © 2026 Achei Pra Casa • Feito com precisão de engenheiro.
          </p>
        </div>
      </div>
    </footer>
  );
}