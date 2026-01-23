"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
//image
import Image from "next/image";
import aboutBlack from "../../../public/about-black.svg";
import aboutWhite from "../../../public/about-white.svg";
import contactBlack from "../../../public/contact-black.svg";
import contactWhite from "../../../public/contact-white.svg";
import homeIconDark from "../../../public/home-dark.svg";
import homeIconLight from "../../../public/home-light.svg";
import projectBlack from "../../../public/project-black.svg";
import projectWhite from "../../../public/project-white.svg";

export const Nav = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const navItems = [
    {
      href: ".",
      label: "Home",
      iconDark: homeIconLight,
      iconLight: homeIconDark,
      mobileOnly: true,
    },
    {
      href: "/about",
      label: "A propos",
      iconDark: aboutWhite,
      iconLight: aboutBlack,
    },
    {
      href: "/projets",
      label: "Projets",
      iconDark: projectWhite,
      iconLight: projectBlack,
    },
    {
      href: "/contact",
      label: "Contact",
      iconDark: contactWhite,
      iconLight: contactBlack,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute bottom-4 left-1/2 z-20 w-[90%] -translate-x-1/2 rounded-[25px] bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 shadow-lg py-2 md:relative md:bottom-0 md:left-0 md:w-auto md:translate-x-0 md:bg-white/50 dark:md:bg-slate-800/50 md:rounded-full"
    >
      <nav>
        <ul className="flex items-center justify-evenly px-4 md:justify-center md:gap-12 md:px-6">
          {navItems.map((item, index) => (
            <motion.li
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              className={item.mobileOnly ? "md:hidden" : ""}
            >
              <a
                className="group relative flex-col items-center justify-center text-base md:text-lg flex text-center"
                href={item.href}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-1 block md:mb-0 md:hidden"
                >
                  <Image
                    src={isDarkTheme ? item.iconDark : item.iconLight}
                    alt={item.label}
                    width={17}
                    height={17}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="hidden sm:block relative"
                >
                  {item.label}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 dark:bg-orange-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.div>
  );
};
