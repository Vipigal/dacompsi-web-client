import { IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import logo_dacompsi from "../assets/dacompsi_logo_branca.png";

const RAZAO_LOGO = 0.565;
const LOGO_HEIGHT = 150;

export const Navbar = () => {
  return (
    <nav className="bg-red-dacompsi w-full flex items-center justify-between p-1 pb-1 pr-12 pl-6 h-full max-h-[70px]">
      <img
        src={logo_dacompsi}
        alt="logo dacompsi"
        width={RAZAO_LOGO * LOGO_HEIGHT}
        height={LOGO_HEIGHT}
        className="sm:ml-20"
      />
      <div className="flex gap-10 justify-center items-center h-full">
        <a
          href="/#da"
          className="h-full hover:border-b hover:border-b-white flex items-center justify-center"
        >
          <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
            Sobre o D.A.
          </span>
        </a>
        <a
          href="/#gestao"
          className="h-full hover:border-b hover:border-b-white flex items-center justify-center"
        >
          <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
            Gestão
          </span>
        </a>
        <a
          href="/#ajuda"
          className="h-full hover:border-b hover:border-b-white flex items-center justify-center"
        >
          <span className="text-black hover:text-white transition-all ease-in-out duration-300 hover:scale-105">
            Peça Ajuda
          </span>
        </a>
        <Link
          to={"/login"}
          className="h-full flex items-center justify-center hover:scale-105"
        >
          <IconUserCircle color="black" size={"32px"} />
        </Link>
      </div>
    </nav>
  );
};
