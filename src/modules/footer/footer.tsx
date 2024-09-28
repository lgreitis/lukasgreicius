import Socials from "~/modules/socials";

const Footer = () => {
  return (
    <footer className="flex w-full justify-center px-6">
      <div className="flex w-full max-w-screen-xl items-center justify-between py-6 text-neutral-500">
        <div>&copy; 2024 Lukas Greičius.</div>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
