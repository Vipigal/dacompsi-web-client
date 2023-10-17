import { Avatar, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

interface IAvatarBoxProps {
  name: string;
}

const AvatarBox = ({ name }: IAvatarBoxProps) => {
  const mobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <div className="flex flex-col justify-center items-center border gap-1 border-gray-dacompsi relative w-[100px] md:w-[200px] pt-1 rounded-lg bg-gray-400 ">
      <Avatar
        size={mobile ? 80 : 150}
        variant="filled"
        color="orange"
        className="mx-9"
      />

      <div className="bg-gray-dacompsi w-full rounded-md h-10 flex items-center justify-center">
        {name}
      </div>
    </div>
  );
};

export default AvatarBox;
