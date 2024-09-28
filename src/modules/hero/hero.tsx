import dynamic from "next/dynamic";
import Image from "next/image";
import { useIsMobile } from "~/hooks/useIsMobile";
import Socials from "~/modules/socials";

const DynamicHeroSymbol = dynamic(() => import("~/modules/hero/heroSymbol"), {
  loading: () => (
    <Image src="/hero_placeholder.png" alt="Logo" width={600} height={600} />
  ),
  ssr: false,
});

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center justify-center py-32">
      <div className="flex h-full w-full max-w-7xl flex-col-reverse items-center justify-end text-center xl:flex-row xl:justify-center xl:text-start">
        <div className="flex  max-w-3xl flex-col gap-3 tracking-tighter text-white lg:whitespace-nowrap">
          <h1 className="text-7xl">Lukas Greičius</h1>
          <h2 className="text-3xl text-neutral-600">
            Professional text file editor.
          </h2>
          <Socials clasName="lg:-ml-1" />
        </div>
        {!isMobile && (
          <div className="relative h-[300px] w-full grayscale md:h-[400px] lg:h-[600px] lg:w-[600px]">
            <div className="h-full before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:from-[#3172ff15] before:to-[#fc3bc215] before:blur-[100px] before:content-['']">
              <DynamicHeroSymbol />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
