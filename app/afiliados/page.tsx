export default function AfiliadosPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-3xl font-black text-[#2A5C5A] mb-8 uppercase tracking-tighter">
        Aviso de Afiliados: Transparência Total
      </h1>
      
      <div className="bg-white border-l-4 border-[#E67E22] p-6 mb-10 shadow-sm">
        <p className="text-lg font-bold text-slate-800 italic">
          "Esta página sela o pacto de confiança entre eu e você. No Achei Pra Casa, a transparência não é apenas uma regra, é o que nos diferencia."
        </p>
      </div>

      <div className="prose prose-slate max-w-none text-slate-700 space-y-6">
        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">Como o blog funciona?</h2>
          <p>
            Para que você tenha acesso a todo este conteúdo de forma gratuita, eu participo de programas de afiliados de grandes lojas que eu confio, como <strong>Amazon, Magazine Luiza (Magalu) e Mercado Livre</strong>. Isso significa que, quando você clica em um link aqui do blog e faz uma compra, eu recebo uma pequena comissão da loja.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
          <div>
            <h3 className="font-bold text-[#2A5C5A] mb-2">O preço não muda</h3>
            <p className="text-sm">Você não paga nem um centavo a mais. Na verdade, às vezes consigo cupons que deixam o produto mais barato.</p>
          </div>
          <div>
            <h3 className="font-bold text-[#2A5C5A] mb-2">Independência acima de tudo</h3>
            <p className="text-sm">Eu escolho os produtos pela qualidade e utilidade real, e não pelo valor da comissão. Se um produto é ruim, eu vou falar.</p>
          </div>
        </section>

        <p className="text-sm text-slate-500 mt-10">
          Última atualização: Dezembro de 2025.
        </p>
      </div>
    </main>
  );
}