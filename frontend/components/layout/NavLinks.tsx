"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-8">
      {NAV_LINKS.map((item) => {
        const active = pathname === item.href;

        return (
          <Link
            key={item.title}
            href={item.href}
            className="relative group"
          >
            <motion.span
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`text-sm font-medium transition-colors ${
                active
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
            >
              {item.title}
            </motion.span>

            <motion.span
              initial={false}
              animate={{
                width: active ? "100%" : "0%",
              }}
              transition={{
                duration: 0.3,
              }}
              className="absolute left-0 -bottom-1 h-[2px] bg-cyan-400"
            />

            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
          </Link>
        );
      })}
    </nav>
  );
}