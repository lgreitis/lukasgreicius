import SocialButton from "~/components/button/socialButton";
import IconGithub from "~/components/icons/iconGithub";
import IconLinkedin from "~/components/icons/iconLinkedin";
import HeroSymbol from "~/modules/hero/heroSymbol";

const Hero = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-black">
      <div className="flex h-full w-full max-w-7xl flex-col-reverse items-center justify-center text-center lg:flex-row lg:text-start">
        <div className="flex w-full max-w-3xl flex-col gap-3 text-white">
          <h1 className="text-7xl">Lukas Greičius</h1>
          <h2 className="text-3xl text-neutral-600">
            Professional text file editor.
          </h2>
          <div className="flex justify-center gap-2 lg:-ml-1 lg:justify-normal">
            <SocialButton href="https://www.linkedin.com/in/lukas-grei%C4%8Dius-609955217/">
              <IconLinkedin className="h-8 w-8 fill-white" />
            </SocialButton>
            <SocialButton href="https://github.com/lgreitis/">
              <IconGithub className="h-8 w-8" />
            </SocialButton>
          </div>
        </div>
        <div className="relative h-[200px] w-full lg:h-[600px] lg:w-[600px]">
          <div className="h-full before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:from-[#3172ff09] before:to-[#fc3bc210] before:blur-[100px] before:content-['']">
            <HeroSymbol />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
