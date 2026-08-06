"use client";

import Link from "next/link";
import { Activity, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Logo() {
  return (
    <Link href="/" className="group">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        {/* Logo Icon */}
        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-full bg-cyan-500 blur-xl opacity-60" />

          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-violet-600 shadow-2xl">
            <Activity className="h-6 w-6 text-white" />

            <Sparkles className="absolute -right-1 -top-1 h-4 w-4 text-cyan-200" />
          </div>
        </motion.div>

        {/* Text */}
        <div className="leading-tight">
          <motion.h1
            whileHover={{ x: 2 }}
            className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-2xl font-extrabold text-transparent"
          >
            MedSymphony
          </motion.h1>

          <p className="text-xs tracking-[0.35em] text-gray-500 dark:text-gray-400">
            AI HEALTH PLATFORM
          </p>
        </div>
      </motion.div>
    </Link>
  );
}