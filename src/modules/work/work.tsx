import React from "react";
import { useIsMobile } from "~/hooks/useIsMobile";
import WorkDesktop from "~/modules/work/desktop/workDesktop";
import WorkMobile from "~/modules/work/mobile/workMobile";

const Work = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex justify-center px-6 pb-6">
      <div className="grid h-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {isMobile ? <WorkMobile /> : <WorkDesktop />}
      </div>
    </div>
  );
};

export default Work;
