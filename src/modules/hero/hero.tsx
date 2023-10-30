import dynamic from "next/dynamic";
import Image from "next/image";
import { BrowserView } from "react-device-detect";
import Socials from "~/modules/socials";

const DynamicHeroSymbol = dynamic(() => import("~/modules/hero/heroSymbol"), {
  loading: () => (
    <Image src="/hero_placeholder.png" alt="Logo" width={600} height={600} />
  ),
  ssr: false,
});

const Hero = () => {
  return (
    <div className="flex items-center justify-center py-64">
      <div className="flex h-full w-full max-w-7xl flex-col-reverse items-center justify-end text-center lg:flex-row lg:justify-center lg:text-start">
        <div className="flex  max-w-3xl flex-col gap-3 tracking-tighter text-white lg:whitespace-nowrap">
          <h1 className="text-7xl">Lukas Greičius</h1>
          <h2 className="text-3xl text-neutral-600">
            Professional text file editor.
          </h2>
          <Socials clasName="lg:-ml-1" />
        </div>
        <BrowserView>
          <div className="relative h-[400px] w-full grayscale lg:h-[600px] lg:w-[600px]">
            <div className="h-full before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-full before:bg-gradient-to-br before:from-[#3172ff15] before:to-[#fc3bc215] before:blur-[100px] before:content-['']">
              <DynamicHeroSymbol />
            </div>
          </div>
        </BrowserView>
      </div>
    </div>
  );
};

export default Hero;
