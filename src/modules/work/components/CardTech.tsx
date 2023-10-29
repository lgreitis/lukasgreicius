import { motion } from "framer-motion";
import Image from "next/image";
import { CardItem, TechIcons } from "~/modules/work/workItems";
import { cn } from "~/utils/cn";

const getTechIconKey = (icon: string) => {
  const indexOfS = Object.values(TechIcons).indexOf(
    icon as unknown as TechIcons,
  );
  const key = Object.keys(TechIcons)[indexOfS];
  if (!key) return "";
  return key?.charAt(0).toUpperCase() + key?.slice(1);
};

interface CardTechProps {
  className?: string;
  card: CardItem;
  animate?: boolean;
}

const CardTech: React.FC<CardTechProps> = ({ className, card, animate }) => {
  return (
    <div className={cn("flex h-full items-end gap-2 px-6 pb-6", className)}>
      {card.techIcons.map((icon) => (
        <motion.div
          animate={animate}
          key={icon}
          layoutId={animate ? `card-tech-${card.id}-${icon}` : undefined}
        >
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

export default CardTech;
