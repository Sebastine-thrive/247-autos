"use client";
import React, {ReactNode} from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps = {
    children: ReactNode;
}

const PageAnimationWrapper:  React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageAnimationWrapper;
