import React, { useMemo } from "react";
import Button from "~/components/button/button";
import { IconChevronLeft, IconChevronRight } from "~/components/icons";

interface SimpleCarouselProps {
  children: React.ReactNode[];
}

const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ children }) => {
  const [current, setCurrent] = React.useState(0);

  const childrenFlat = useMemo(() => {
    return children.flat().filter(Boolean);
  }, [children]);

  const length = childrenFlat.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + length) % length);
  };

  return (
    <React.Fragment>
      <div className="relative">
        {length > 1 && (
          <React.Fragment>
            <Button
              className="absolute left-5 top-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 bg-opacity-60"
              onClick={prev}
            >
              <IconChevronLeft />
            </Button>
            <Button
              className="absolute right-5 top-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 bg-opacity-60"
              onClick={next}
            >
              <IconChevronRight />
            </Button>
          </React.Fragment>
        )}
        {childrenFlat[current]}
      </div>
    </React.Fragment>
  );
};

export default SimpleCarousel;
