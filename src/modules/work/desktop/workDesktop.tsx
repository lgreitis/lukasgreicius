import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Button from "~/components/button/button";
import SimpleCarousel from "~/components/simpleCarousel/simpleCarousel";
import { usePrevious } from "~/hooks/usePrevious";
import CardHeader from "~/modules/work/components/CardHeader";
import CardTech from "~/modules/work/components/CardTech";
import { CardItem, workItems } from "~/modules/work/workItems";
import { cn } from "~/utils/cn";

const WorkDesktop = () => {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  // Fixing z indexes when card is being closed with usePrevious
  const prevSelectedId = usePrevious(selectedItem?.id);
  const [cardExpanded, setCardExpanded] = useState(false);

  const closeModal = () => {
    setSelectedItem(null);
    setCardExpanded(false);
  };

  return (
    <React.Fragment>
      {workItems.map((item) => (
        <motion.div
          className={cn(
            "relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-black transition-colors hover:bg-neutral-900",
            prevSelectedId === item.id && "z-10",
          )}
          key={item.id}
          onClick={() => setSelectedItem(item)}
          layoutId={`card-container-${item.id}`}
        >
          <motion.img
            layoutId={`card-image-${item.id}`}
            className="w-full object-cover"
            src={item.image}
          />
          <CardHeader card={item} animate />
          <CardTech card={item} animate />
        </motion.div>
      ))}

      <AnimatePresence>
        <Dialog
          as="div"
          open={selectedItem !== null}
          onClose={closeModal}
          className="relative z-20"
        >
          {/* TODO: figure out why Transition doesnt work */}
          <div className="fixed inset-0 bg-black bg-opacity-50" />

          <div className="fixed inset-0 w-full overflow-y-auto overflow-x-hidden">
            <div className="flex min-h-full items-center justify-center">
              {selectedItem && (
                <Dialog.Panel
                  as={motion.div}
                  className="relative max-h-screen w-full rounded-3xl bg-black md:w-11/12 lg:w-9/12 xl:w-7/12"
                  layoutId={`card-container-${selectedItem.id}`}
                >
                  <SimpleCarousel>
                    <motion.img
                      layoutId={`card-image-${selectedItem.id}`}
                      className="w-full rounded-t-3xl object-cover"
                      src={selectedItem.image}
                    />
                    {selectedItem.images?.map((image) => (
                      <img
                        className="w-full rounded-t-3xl object-cover"
                        src={image}
                      />
                    ))}
                  </SimpleCarousel>
                  <CardHeader
                    card={selectedItem}
                    className="rounded-b-3xl bg-black"
                    animate
                  />
                  <CardTech card={selectedItem} animate />
                  <motion.button
                    className="absolute right-5 top-5 rounded-full bg-black bg-opacity-40 p-1 text-white"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-5" />
                  </motion.button>
                  {!cardExpanded && selectedItem.description && (
                    <div className="flex items-center pb-4">
                      <Button
                        type="button"
                        onClick={() => setCardExpanded(true)}
                        className="mx-auto"
                      >
                        Read more
                      </Button>
                    </div>
                  )}
                  {cardExpanded && (
                    <motion.div
                      className={cn(
                        "prose prose-invert max-w-none rounded-b-3xl bg-black px-6",
                        selectedItem.description && "pb-6",
                      )}
                    >
                      {selectedItem.description}
                    </motion.div>
                  )}
                </Dialog.Panel>
              )}
            </div>
          </div>
        </Dialog>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default WorkDesktop;
