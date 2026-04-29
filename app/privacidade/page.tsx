import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Achei Pra Casa',
  robots: 'noindex, nofollow',
};

export default function PrivacidadePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6 text-slate-700">
      <h1 className="text-3xl font-black text-[#2A5C5A] mb-8 uppercase italic">Política de Privacidade</h1>
      
      <div className="prose prose-slate max-w-none space-y-6">
        <p>Sua privacidade é tratada com a mesma seriedade que trato um projeto de engenharia. Aqui explicamos como lidamos com seus dados.</p>

        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">1. Coleta de Dados</h2>
          <p>Não vendemos seus dados para terceiros. Coletamos apenas informações básicas de navegação (cookies) via Google Analytics para entender quais produtos vocês mais gostam e melhorar o conteúdo.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">2. Cookies e Links de Afiliados</h2>
          <p>Ao clicar em nossos links de afiliados, um cookie pode ser armazenado no seu navegador para identificar que a indicação veio do Achei Pra Casa. Isso não dá acesso aos seus dados pessoais ou financeiros.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-[#2A5C5A]">3. Newsletter e Contato</h2>
          <p>Se você nos enviar um e-mail, usaremos seu endereço apenas para responder sua dúvida. O spam é proibido neste território.</p>
        </section>

        <p className="text-xs text-slate-400 pt-10 uppercase tracking-widest">Em conformidade com a LGPD • Abril de 2026.</p>
      </div>
    </main>
  );
}