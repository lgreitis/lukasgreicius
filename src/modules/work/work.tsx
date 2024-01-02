import React from "react";
import { BrowserView, MobileOnlyView } from "react-device-detect";
import WorkDesktop from "~/modules/work/desktop/workDesktop";
import WorkMobile from "~/modules/work/mobile/workMobile";

const Work = () => {
  return (
    <React.Fragment>
      <div>
        <div className="flex justify-center px-6 pb-6">
          <div className="grid h-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <MobileOnlyView>
              <WorkMobile />
            </MobileOnlyView>
            <BrowserView className="contents">
              <WorkDesktop />
            </BrowserView>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Work;
