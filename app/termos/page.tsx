import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos de Uso | Achei Pra Casa',
  robots: 'noindex, nofollow', // Protege seu SEO
};

export default function TermosPage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-slate-700">
      <h1 className="text-3xl font-black text-[#2A5C5A] mb-8 uppercase italic">Termos de Uso</h1>
      
      <div className="prose prose-slate max-w-none space-y-6">
        <p>Bem-vindo ao <strong>Achei Pra Casa</strong>. Ao navegar neste site, você concorda com as regras abaixo, estabelecidas com o pragmatismo de quem valoriza o seu tempo e o seu dinheiro.</p>
        
        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">1. Uso do Conteúdo</h2>
          <p>Todo o conteúdo (textos, análises e fotos autorais) é propriedade do blog. Você pode compartilhar os links, mas a cópia integral dos textos sem autorização é proibida. O Lucas trabalha duro para testar esses produtos; respeite o trabalho técnico.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">2. Responsabilidade sobre Compras</h2>
          <p>O Achei Pra Casa indica produtos e lojas de confiança (como Amazon e Magalu), mas a transação comercial, entrega e garantia são de responsabilidade total da loja vendedora. Verifique sempre os detalhes no carrinho antes de fechar a compra.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">3. Precisão Técnica</h2>
          <p>Esforçamo-nos para manter as informações atualizadas, mas preços e especificações técnicas podem mudar nas lojas sem aviso prévio.</p>
        </section>

        <p className="text-xs text-slate-400 pt-10 uppercase tracking-widest">Atualizado em Abril de 2026.</p>
      </div>
    </main>
  );
}