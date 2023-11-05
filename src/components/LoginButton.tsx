import { IconUserCircle } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <Link
      to={"/login"}
      className="flex gap-2 items-center justify-center hover:bg-[#820100] border border-white px-3 py-1 rounded-lg"
    >
      <IconUserCircle color="white" size={"32px"} />
      <span className="text-white">LOGIN</span>
    </Link>
  );
}
