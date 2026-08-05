"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-[var(--ches-blue)] text-white"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          aria-hidden="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="grid place-items-center gap-4 text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-[var(--ches-orange)] text-[#2d1b0d]">
              <Heart className="size-8 fill-current" />
            </span>
            <p className="font-heading text-2xl font-extrabold">CHES</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
