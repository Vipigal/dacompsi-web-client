import { IconBrandInstagram, IconMenu2, IconUser } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-red-dacompsi w-full flex items-center justify-between p-4 px-12 ">
      <div className="hover:cursor-pointer">
        <IconMenu2 color="black" size={"32px"} />
      </div>
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
