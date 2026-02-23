"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Timeline = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          className="relative pl-6 sm:pl-8 pb-6 sm:pb-8 border-l-2 border-red-500/30 last:border-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
        >
          <div className="absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-red-500 border-2 border-background" />
          <div className="space-y-1 sm:space-y-2">
            {item.icon && <div className="text-red-500 text-lg sm:text-xl mb-1 sm:mb-2">{item.icon}</div>}
            <h3 className="text-base sm:text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
