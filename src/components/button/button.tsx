import React, { useState } from "react";
import { cn } from "~/utils/cn";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const [click, setClick] = useState(false);

  return (
    <button
      onMouseDown={(e) => {
        e.button === 0 && setClick(true);
      }}
      onMouseLeave={(e) => {
        e.button === 0 && setClick(false);
      }}
      onMouseUp={() => setClick(false)}
      className={cn(
        click && "!bg-neutral-500",
        "rounded-md p-1 transition-all hover:bg-neutral-700",
        className,
      )}
      {...rest}
    ></button>
  );
};

export default Button;
