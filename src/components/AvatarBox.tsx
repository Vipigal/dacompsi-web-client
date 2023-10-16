import { Avatar } from "@mantine/core";

interface IAvatarBoxProps {
  name: string;
}

const AvatarBox = ({ name }: IAvatarBoxProps) => {
  return (
    <div className="flex flex-col justify-center items-center border gap-1 border-gray-dacompsi relative w-[200px] pt-1 rounded-lg bg-gray-400 ">
      <Avatar size={150} variant="filled" color="orange" className="mx-9" />

      <div className="bg-gray-dacompsi w-full rounded-md h-10 flex items-center justify-center">
        {name}
      </div>
    </div>
  );
};

export default AvatarBox;
