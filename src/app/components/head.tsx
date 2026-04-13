"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//composants
import { ThemeSwitch } from "./ThemeSwitch";
import { Nav } from "./nav";
import { Reseaux } from "./reseaux";
//import photo
import logodark from "../../../public/LOGO_dark.png";
import logolight from "../../../public/LOGO_light.png";
import githubBlack from "../../../public/github-black.svg";
import githubWhite from "../../../public/github-white.svg";
import linkedinBlack from "../../../public/linkedin-black.svg";
import linkedinWhite from "../../../public/linkedin-white.svg";
import { Cv } from "./cv";

const MotionLink = motion(Link);

export default function Head() {
  const { resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  return (
    <div>
      <Reseaux />
      <Cv />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mt-10 flex w-full items-center justify-between md:mt-20 z-20"
      >
        <MotionLink
          href="/"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="w-[70px] md:w-[100px]"
        >
          <Image
            src={isDarkTheme ? logolight : logodark}
            alt="logo Victor Roué"
            title="logo Victor Roué"
            width={100}
            height={100}
          />
        </MotionLink>

        {/* Mobile: raccourcis réseaux + CV */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.a
            href="https://github.com/Victouu"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-white/30 dark:border-slate-700/50 shadow-sm"
            aria-label="GitHub"
          >
            <Image
              src={isDarkTheme ? githubWhite : githubBlack}
              alt="GitHub"
              width={18}
              height={18}
            />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/victor-roue-0081222a6/"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg border border-white/30 dark:border-slate-700/50 shadow-sm"
            aria-label="LinkedIn"
          >
            <Image
              src={isDarkTheme ? linkedinWhite : linkedinBlack}
              alt="LinkedIn"
              width={18}
              height={18}
            />
          </motion.a>
          <motion.a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className="flex h-9 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-3 text-xs font-semibold text-white shadow-md shadow-orange-500/30"
          >
            CV
          </motion.a>
        </div>

        <Nav />
        <div className="flex justify-end md:w-[100px]">
          <ThemeSwitch />
        </div>
      </motion.div>
    </div>
  );
}
