import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
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

  return (
    <>
      <div>
        <h1 className="py-4 text-center text-5xl font-bold lg:py-7">
          Stuff I have worked on
        </h1>
        <div className="flex min-h-screen justify-center px-6 pb-6">
          <div className="grid h-full max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {workItems.map((item) => (
              <motion.div
                className="relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-200 transition-colors hover:bg-neutral-100"
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

        {/* If some genius is looking at this code, please explain why I need to set the key here, because if I don't the second time that the card is closed
              the close animation starts to break. If this is fixed and the key is no longer needed the animation would be even better.  */}
        <AnimatePresence key={selectedItem?.id ?? "none"}>
          <Dialog
            as="div"
            open={selectedItem !== null}
            onClose={() => setSelectedItem(null)}
            className="relative z-20"
          >
            {/* TODO: figure out why Transition doesnt work */}
            <div className="fixed inset-0 bg-black bg-opacity-25" />

            <div className="fixed inset-0 w-full overflow-y-auto overflow-x-hidden">
              <div className="flex min-h-full items-center justify-center">
                {selectedItem && (
                  <Dialog.Panel
                    as={motion.div}
                    className="relative max-h-screen w-full rounded-3xl bg-white md:w-11/12 lg:w-9/12 xl:w-7/12"
                    layoutId={`card-container-${selectedItem.id}`}
                  >
                    <motion.img
                      layoutId={`card-image-${selectedItem.id}`}
                      className="w-full rounded-t-3xl object-cover"
                      src={selectedItem.image}
                    />
                    <CardHeader
                      card={selectedItem}
                      className="rounded-b-3xl bg-white"
                    />
                    <CardTech card={selectedItem} />
                    <motion.button
                      className="absolute right-5 top-5 rounded-full bg-black bg-opacity-40 p-1 text-white"
                      onClick={() => setSelectedItem(null)}
                    >
                      <XMarkIcon className="w-5" />
                    </motion.button>
                    <motion.div
                      className={cn(
                        "prose max-w-none rounded-b-3xl bg-white px-6",
                        selectedItem.description && "pb-6",
                      )}
                    >
                      {selectedItem.description}
                    </motion.div>
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
      className={cn("p-6", className)}
    >
      <span className="font-bold">{card.year}</span>
      <span className="px-2 font-light text-neutral-600">/</span>
      <span className="font-light">{card.for}</span>
      <h1 className="py-2 text-3xl font-semibold">{card.title}</h1>
      <h2 className="font-light text-neutral-600">{card.shortDescription}</h2>
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
