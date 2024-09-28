import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Drawer } from "vaul";
import SimpleCarousel from "~/components/simpleCarousel/simpleCarousel";
import CardHeaderItems from "~/modules/work/components/CardHeader";
import CardTech from "~/modules/work/components/CardTech";
import { type CardItem, workItems } from "~/modules/work/workItems";

const WorkMobile = () => {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  return (
    <React.Fragment>
      {workItems.map((item) => (
        <div
          key={item.id}
          onClick={() => setSelectedItem(item)}
          className="relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-black transition-colors hover:bg-neutral-900"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full rounded-t-3xl object-cover"
            src={item.image}
            alt={item.title}
          />
          <CardHeaderItems card={item} animate={false} />
          <CardTech card={item} animate={false} />
        </div>
      ))}
      {selectedItem && (
        <Drawer.Root
          open={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        >
          <Drawer.Portal>
            <Drawer.Content className="fixed bottom-0 left-0 right-0 mt-24 flex max-h-[96%] flex-col rounded-t-3xl bg-black outline-none">
              <div className="relative">
                <SimpleCarousel>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={selectedItem.title}
                    className="w-full rounded-t-3xl object-cover"
                    src={selectedItem.image}
                  />
                  {selectedItem.images?.map((image) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={image}
                      className="w-full rounded-t-3xl object-cover"
                      src={image}
                      alt={selectedItem.title}
                    />
                  ))}
                </SimpleCarousel>
                <div className="absolute left-0 top-0 h-full w-full"></div>
              </div>
              <div className="overflow-auto">
                <CardHeaderItems
                  card={selectedItem}
                  className="rounded-b-3xl bg-black"
                  animate={false}
                />
                <CardTech card={selectedItem} animate={false} />
                <div
                  className={twMerge(
                    "prose prose-invert max-w-none rounded-b-3xl bg-black px-6",
                    selectedItem.description && "pb-6",
                  )}
                >
                  {selectedItem.description}
                </div>
              </div>
            </Drawer.Content>
            <Drawer.Overlay />
          </Drawer.Portal>
        </Drawer.Root>
      )}
    </React.Fragment>
  );
};

export default WorkMobile;
