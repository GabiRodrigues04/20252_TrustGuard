import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `hover:text-gray-900 ${
      pathname === path ? "text-red-800 font-semibold" : "text-gray-600"
    }`;

  return (
    <header className="bg-gray-200 border-b border-gray-200  sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className="font-bold text-lg text-red-800 ma">TRUST GUARD</span>
        </div>

        <nav className="hidden md:flex gap-8 text-lg">
          <Link to="/" className={linkClass("/")}>Trust Guard</Link>
          <Link to="/questionario" className={linkClass("/questionario")}>Formulário de denúncias</Link>
          <Link to="/ia" className={linkClass("/ia")}>Fale com a IA</Link>
        </nav>
        
      </div>
    </header>
  );
}
