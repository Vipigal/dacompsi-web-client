import { IconBrandInstagram, IconMenu2, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import logo_dacompsi from "../assets/dacompsi_logo_branca.png";

const RAZAO_LOGO = 0.565;
const LOGO_HEIGHT = 150;

export const Navbar = () => {
  return (
    <nav className="bg-red-dacompsi w-full flex items-center justify-between p-1 pb-2 px-12 ">
      <div className="hover:cursor-pointer">
        <IconMenu2 color="black" size={"32px"} />
      </div>
      <img
        src={logo_dacompsi}
        alt="logo dacompsi"
        width={RAZAO_LOGO * LOGO_HEIGHT}
        height={LOGO_HEIGHT}
        className="sm:ml-20"
      />
      <div className="flex gap-5">
        <Link to={"/sobre"} className="text-white hover:text-black">
          <IconBrandInstagram color="black" size={"32px"} />
        </Link>
        <Link to={"/sobre"} className="text-white hover:text-black">
          <IconUser color="black" size={"32px"} />
        </Link>
      </div>
    </nav>
  );
};
