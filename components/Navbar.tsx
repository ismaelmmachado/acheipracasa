export default function Navbar() {
  return (
    <nav className="bg-lucas-green text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-bold tracking-tight">ACHEI PRA CASA</span>
        <div className="space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-lucas-orange transition">Home</a>
          <a href="/sobre" className="hover:text-lucas-orange transition">Sobre o Lucas</a>
        </div>
      </div>
    </nav>
  );
}