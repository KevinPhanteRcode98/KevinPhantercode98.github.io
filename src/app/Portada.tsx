import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/portada.jpeg",
  "/portada2.jpg",
  "/portada3.jpg",
  "/portada4.jpg"
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0
  })
};

export default function Portada() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="relative w-full h-55 md:h-80 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={images[index]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={`Portada ${index + 1}`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
