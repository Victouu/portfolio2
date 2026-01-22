"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
//composants
import { ThemeSwitch } from "./ThemeSwitch";
import { Nav } from "./nav";
import { Reseaux } from "./reseaux";
//import photo
import logodark from "../../../public/LOGO_dark.png";
import logolight from "../../../public/LOGO_light.png";
import { Cv } from "./cv";

export default function Head() {
  const { theme, resolvedTheme } = useTheme();
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
        <motion.a
          href="."
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={isDarkTheme ? logolight : logodark}
            alt="logo Victor Roué"
            title="logo Victor Roué"
            width={100}
            height={100}
          />
        </motion.a>
        <Nav />
        <ThemeSwitch />
      </motion.div>
    </div>
  );
}
