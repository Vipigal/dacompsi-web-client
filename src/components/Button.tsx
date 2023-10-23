import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default";
  className?: string;
  children?: ReactNode;
}

export default function Button({
  variant,
  className,
  children,
  ...rest
}: IButtonProps) {
  const mergedClassName = variant
    ? twMerge(
        "rounded-md bg-red-dacompsi hover:bg-red-900 text-white py-2 self-center",
        className
      )
    : "";
  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
}
