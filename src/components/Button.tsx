import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "light";
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
    ? variant === "default"
      ? twMerge(
          "rounded-md bg-red-dacompsi hover:bg-red-900 text-white py-2 self-center hover:border-red-dacompsi",
          className
        )
      : twMerge(
          "rounded-md bg-transparent border border-red-dacompsi hover:bg-gray-200 text-red-dacompsi py-2 self-center hover:border-red-dacompsi",
          className
        )
    : "";
  return (
    <button className={mergedClassName} {...rest}>
      {children}
    </button>
  );
}
