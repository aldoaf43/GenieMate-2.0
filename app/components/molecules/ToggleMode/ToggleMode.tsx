"use client";
import React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/app/components";

export const ToggleMode = () => {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark";

  return (
    <Button
      variant={"default"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      className={`flex items-center justify-center transition-colors duration-300 ${
        dark ? "hover:bg-gray-300/20" : "hover:bg-gray-800/20"
      } p-2 rounded-full`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {dark ? (
          <motion.div
            key="sun"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <SunIcon className="size-5 text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <MoonIcon className="size-5 text-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
};