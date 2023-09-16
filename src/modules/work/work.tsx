import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Button from "~/components/button/button";
import { usePrevious } from "~/hooks/usePrevious";
import { CardItem, TechIcons, workItems } from "~/modules/work/workItems";
import { cn } from "~/utils/cn";

const getTechIconKey = (icon: string) => {
  const indexOfS = Object.values(TechIcons).indexOf(
    icon as unknown as TechIcons,
  );
  const key = Object.keys(TechIcons)[indexOfS];
  if (!key) return "";
  return key?.charAt(0).toUpperCase() + key?.slice(1);
};

const Work = () => {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);
  // Fixing z indexes when card is being closed with usePrevious
  const prevSelectedId = usePrevious(selectedItem?.id);
  const [cardExpanded, setCardExpanded] = useState(false);

  const closeModal = () => {
    setSelectedItem(null);
    setCardExpanded(false);
  };

  return (
    <>
      <div>
        <h1 className="pb-6 pt-4 text-center text-5xl font-bold lg:pb-8 lg:pt-8">
          Stuff I have worked on
        </h1>
        <div className="flex min-h-screen justify-center px-6 pb-6">
          <div className="grid h-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                <CardHeader card={item} />
                <CardTech card={item} />
              </motion.div>
            ))}
          </div>
        </div>

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
                    <motion.img
                      layoutId={`card-image-${selectedItem.id}`}
                      className="w-full rounded-t-3xl object-cover"
                      src={selectedItem.image}
                    />
                    <CardHeader
                      card={selectedItem}
                      className="rounded-b-3xl bg-black"
                    />
                    <CardTech card={selectedItem} />
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
      </div>
    </>
  );
};

interface CardHeaderProps {
  className?: string;
  card: CardItem;
}

const CardHeader: React.FC<CardHeaderProps> = ({ className, card }) => {
  return (
    <motion.div
      layoutId={`card-header-${card.id}`}
      className={cn("px-6 pb-2 pt-6", className)}
    >
      <span className="font-bold">{card.year}</span>
      <span className="px-2 font-light text-neutral-600">/</span>
      <span className="font-light">{card.for}</span>
      <h1 className="py-2 text-3xl font-semibold">{card.title}</h1>
      <h2 className="font-light text-neutral-400">{card.shortDescription}</h2>
    </motion.div>
  );
};

const CardTech: React.FC<CardHeaderProps> = ({ className, card }) => {
  return (
    <div className={cn("flex h-full items-end gap-2 px-6 pb-6", className)}>
      {card.techIcons.map((icon) => (
        <motion.div key={icon} layoutId={`card-tech-${card.id}-${icon}`}>
          <Image
            alt=""
            title={getTechIconKey(icon)}
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
            src={icon}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Work;
