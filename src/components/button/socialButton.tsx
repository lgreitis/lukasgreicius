import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface Props {
  href: string;
  children?: React.ReactNode;
}

const SocialButton = (props: Props) => {
  const [click, setClick] = useState(false);

  return (
    <Link
      onMouseDown={(e) => {
        e.button === 0 && setClick(true);
      }}
      onMouseLeave={(e) => {
        e.button === 0 && setClick(false);
      }}
      onMouseUp={() => setClick(false)}
      className={clsx(
        click && "!bg-neutral-500",
        "rounded-md p-1 transition-all hover:bg-neutral-700"
      )}
      {...props}
    ></Link>
  );
};

export default SocialButton;
