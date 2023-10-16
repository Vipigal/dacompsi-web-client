import { ReactElement } from "react";
import { twMerge } from "tailwind-merge";

interface IContainerProps {
  children: ReactElement[];
  className?: string;
}

const Container: React.FC<IContainerProps> = ({ children, className }) => {
  const customClassName = twMerge("w-full flex flex-col gap-5", className);
  return <div className={customClassName}>{children}</div>;
};

export default Container;
