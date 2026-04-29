export default function TestePage() {
  return (
    <div className="bg-[#F9F7F2] min-h-screen flex flex-col items-center justify-center p-6">
      {/* Card de Teste */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-sm border border-slate-200">
        
        {/* Badge do Selo (Teste de Cor Primária) */}
        <div className="bg-[#2A5C5A] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
          ✓ Aprovado pelo Lucas
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Produto de Teste
          </h2>
          <p className="text-slate-600 mb-6">
            Se você está vendo o fundo bege, o título escuro e o botão laranja abaixo, sua stack está 100% operacional!
          </p>

          {/* Botão de Teste (Teste de Cor de Destaque) */}
          <button className="w-full bg-[#E67E22] hover:bg-[#d35400] text-white font-black py-4 rounded-xl transition-all shadow-lg">
            VER NA LOJA (R$ 99,00)
          </button>
        </div>
      </div>

      <p className="mt-8 text-sm text-[#2A5C5A] font-medium animate-pulse">
        Aguardando conexão com o Notion...
      </p>
    </div>
  );
}