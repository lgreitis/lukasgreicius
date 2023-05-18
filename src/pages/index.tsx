import { type NextPage } from "next";
import SocialButton from "~/components/button/socialButton";
import IconGithub from "~/components/icons/iconGithub";
import IconLinkedin from "~/components/icons/iconLinkedin";

const Home: NextPage = () => {
  return (
    <main className="wave flex min-h-screen flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-5 px-4 py-16 ">
        <h1 className="bg-clip-text text-5xl font-semibold tracking-tight text-white sm:text-[5rem]">
          Lukas Greičius
        </h1>
        <div className="flex gap-2">
          <SocialButton href="#">
            <IconLinkedin className="h-8 w-8 fill-white" />
          </SocialButton>
          <SocialButton href="#">
            <IconGithub className="h-8 w-8 bg-transparent stroke-white" />
          </SocialButton>
        </div>
      </div>
    </main>
  );
};

export default Home;
