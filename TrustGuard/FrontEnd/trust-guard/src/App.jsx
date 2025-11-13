import { Routes, Route } from "react-router-dom";
import Header from "./components/ui/header";
import Informativo from "./pages/mainpage";
import IA from "./pages/asktoia";
import Questionario from "./pages/questions";
import Footer from "./components/ui/footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1">

        <Routes>
          <Route path="/" element={<Informativo />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/questionario" element={<Questionario />} />
        </Routes>

      </main>
      
      <Footer />
    </div>
  );
}
