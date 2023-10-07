import { ReactElement } from "react";

interface IContainerProps {
  children: ReactElement[];
}

const Container: React.FC<IContainerProps> = ({ children }) => {
  return <div className="w-full flex flex-col gap-5">{children}</div>;
};

export default Container;
