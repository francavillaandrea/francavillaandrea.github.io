"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useState } from "react";
import Link from "next/link";

export const CardHoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    icon?: ReactNode;
    href?: string;
  }[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4", className)}>
      {items.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </div>
  );
};

export const Card = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    icon?: ReactNode;
    href?: string;
  };
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative group block p-2 h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="card-hover-backdrop absolute inset-0 h-full w-full block rounded-3xl"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>
      <CardContent item={item} />
    </div>
  );
};

export const CardContent = ({
  item,
}: {
  item: {
    title: string;
    description: string;
    icon?: ReactNode;
    href?: string;
  };
}) => {
  const content = (
    <div className="card-hover-enhanced rounded-2xl h-full w-full p-3 sm:p-4 overflow-hidden relative z-20">
      <div className="relative z-50">
        <div className="p-2 sm:p-4 d-flex flex-column h-full">
          {item.icon && (
            <motion.div
              className="mb-3 sm:mb-4 text-3xl sm:text-4xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
          )}
          <h3 className="card-hover-title font-bold text-lg sm:text-xl transition-colors duration-300">
            {item.title}
          </h3>
          <p className="card-hover-description mt-2 text-sm sm:text-base transition-colors duration-300">
            {item.description}
          </p>
          {item.href ? (
            <span className="card-link-indicator mt-3">
              Scopri di piu
              <i className="bi bi-arrow-right-short" aria-hidden="true"></i>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className="block h-full w-full no-underline" style={{ textDecoration: "none" }}>
        {content}
      </Link>
    );
  }

  return content;
};
