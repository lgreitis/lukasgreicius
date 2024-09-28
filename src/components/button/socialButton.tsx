import Link from "next/link";

interface Props {
  href: string;
  children?: React.ReactNode;
}

const SocialButton = (props: Props) => {
  return (
    <Link
      className="rounded-md p-1 transition-all hover:bg-neutral-700 active:bg-neutral-500"
      {...props}
    ></Link>
  );
};

export default SocialButton;
