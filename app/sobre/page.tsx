export default function SobrePage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-lucas-green mb-8 italic">Engenharia descomplicada, papo reto e dinheiro bem gasto.</h1>
      <div className="prose prose-slate lg:prose-xl">
        <p className="font-semibold text-lg text-lucas-green">Oi, tudo bem? Eu sou o Lucas.</p>
        <p>Sou engenheiro de formação e ex-comprador técnico. Cansei de reviews genéricos feitos por quem nunca pegou o produto na mão. O Achei Pra Casa nasceu dessa frustração.</p>
        <h2 className="text-2xl font-bold text-lucas-green mt-8">O Meu Método: Investigação Profunda</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Raio-X de Engenharia:</strong> Leio as letras miúdas dos manuais.</li>
          <li><strong>Fator Anti-IA:</strong> Busco o que o robô não vê (durabilidade após 6 meses).</li>
          <li><strong>Papo Reto:</strong> Se é tranqueira, eu aviso.</li>
        </ul>
      </div>
    </main>
  );
}