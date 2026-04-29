export default function ContatoPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-[#2A5C5A] mb-4 uppercase italic">
          Fale com o Lucas
        </h1>
        <p className="text-xl text-slate-600">Vamos trocar uma ideia sobre a sua casa?</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <p className="text-lg text-slate-700 leading-relaxed">
            Espero que os achadinhos aqui do blog estejam ajudando você. Mas eu sei que, às vezes, surge aquela dúvida específica: 
            <span className="block mt-4 font-bold text-[#2A5C5A] italic">"Lucas, essa batedeira aguenta massa de pão?"</span>
          </p>
          
          <div className="bg-[#2A5C5A] text-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">E-mail Direto:</h3>
            <p className="text-2xl font-mono break-all text-[#E67E22]">
              contato@acheipracasa.com.br
            </p>
            <p className="mt-4 text-sm opacity-80">
              Prometo te dar uma resposta sincera em até 48 horas.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 uppercase tracking-widest text-sm">O que você pode me mandar:</h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <span className="text-[#E67E22] font-bold">→</span>
              <span className="text-slate-600 text-sm"><strong>Dúvidas sobre produtos:</strong> Tá na dúvida entre dois modelos? Me pergunta!</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E67E22] font-bold">→</span>
              <span className="text-slate-600 text-sm"><strong>Sugestões:</strong> Viu um item genial e quer que eu analise? Manda o link!</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#E67E22] font-bold">→</span>
              <span className="text-slate-600 text-sm"><strong>Feedback:</strong> Críticas construtivas para ajudar o blog a melhorar.</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}