import { useEffect, useState } from "react";

export const useIsMobile = (): boolean | undefined => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    updateWidth();
    window.addEventListener("resize", updateWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return width ? width < 768 : undefined;
};
