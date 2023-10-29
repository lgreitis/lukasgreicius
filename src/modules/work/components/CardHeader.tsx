import { motion } from "framer-motion";
import { CardItem } from "~/modules/work/workItems";
import { cn } from "~/utils/cn";

interface CardHeaderProps {
  className?: string;
  card: CardItem;
  animate?: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({
  className,
  card,
  animate,
}) => {
  return (
    <motion.div
      animate={animate}
      layoutId={animate ? `card-header-${card.id}` : undefined}
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

export default CardHeader;
