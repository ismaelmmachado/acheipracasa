export default function SobrePage() {
  return (
    <main className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-black text-[#2A5C5A] mb-4 italic">
        Engenharia descomplicada, papo reto e dinheiro bem gasto.
      </h1>
      <div className="prose prose-slate lg:prose-xl text-slate-700 space-y-6">
        <p className="text-xl font-bold text-[#2A5C5A]">Oi, tudo bem? Eu sou o Lucas.</p>
        <p>
          Sou engenheiro de formação e ex-comprador técnico. O <strong>Achei Pra Casa</strong> nasceu da minha frustração 
          com reviews genéricos. Cansei de ler textos escritos por quem nunca pegou o produto na mão.
        </p>
        <h2 className="text-2xl font-bold text-[#2A5C5A] mt-8">O Meu Método: Investigação Profunda</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Raio-X de Engenharia:</strong> Analiso o consumo real (kWh) e ruído (dB).</li>
          <li><strong>Fator Anti-IA:</strong> Busco o que o robô não vê, como a durabilidade após 6 meses.</li>
          <li><strong>Papo Reto:</strong> Se o produto é uma cilada, eu aviso. Minha opinião não está à venda.</li>
        </ul>
      </div>
    </main>
  );
}