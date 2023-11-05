import { Navbar } from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-full flex flex-col gap-3 items-center justify-between">
      <Navbar />
      <div className="text-[120px] text-red-dacompsi flex flex-col items-center justify-center">
        <span className="text-[80px]">Erro</span> <span>404</span>
      </div>

      <span>Esta página pode estar quebrada ou ter sido movida.</span>
      <span>
        Um desenvolvedor (provavelmente) deverá consertá-la assim que suas
        provas acabarem.
      </span>
      <Button variant="default" onClick={() => navigate("/")}>
        Retornar à Página Inicial
      </Button>
      <Footer />
    </div>
  );
}
