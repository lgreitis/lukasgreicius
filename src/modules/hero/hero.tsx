import SocialButton from "~/components/button/socialButton";
import IconGithub from "~/components/icons/iconGithub";
import IconLinkedin from "~/components/icons/iconLinkedin";
import HeroSymbol from "~/modules/hero/heroSymbol";

const Hero = () => {
  return (
    <div className="flex items-center justify-center pb-64 lg:h-screen lg:pb-0">
      <div className="flex h-full w-full max-w-7xl flex-col-reverse items-center justify-end text-center lg:flex-row lg:justify-center lg:text-start">
        <div className="flex max-w-3xl flex-col gap-3 text-white lg:whitespace-nowrap">
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
        <div className="relative h-[400px] w-full grayscale lg:mb-20 lg:h-[600px] lg:w-[600px]">
          <div className="h-full before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:from-[#3172ff15] before:to-[#fc3bc215] before:blur-[100px] before:content-['']">
            <HeroSymbol />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
