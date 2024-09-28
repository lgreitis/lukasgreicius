import React from "react";
import { twMerge } from "tailwind-merge";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props,
) => {
  const { className, ...rest } = props;

  return (
    <button
      className={twMerge(
        "rounded-md p-1 transition-all hover:bg-neutral-700 active:bg-neutral-500",
        className,
      )}
      {...rest}
    ></button>
  );
};

export default Button;
