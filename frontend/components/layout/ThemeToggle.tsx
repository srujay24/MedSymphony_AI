"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.4 }}
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-xl border border-cyan-500/20 bg-white/10 p-2 backdrop-blur-lg"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-cyan-600" />
      )}
    </motion.button>
  );
}