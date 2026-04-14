"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const { resolvedTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsDarkTheme(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const navItems = [
    {
      href: "/",
      label: "Home",
      iconDark: homeIconLight,
      iconLight: homeIconDark,
      mobileOnly: true,
    },
    {
      href: "/about",
      label: "À propos",
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

  const isRouteActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 lg:relative lg:bottom-auto lg:left-auto lg:w-auto lg:max-w-none lg:translate-x-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative rounded-[28px] bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-white/40 dark:border-slate-700/60 shadow-lg shadow-orange-500/10 dark:shadow-orange-500/5 py-2 lg:rounded-full lg:p-1.5"
      >
        {/* Subtle gradient overlay for depth */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] lg:rounded-full bg-gradient-to-r from-orange-500/5 via-transparent to-blue-500/5" />

        <nav className="relative" aria-label="Navigation principale">
          <ul className="flex items-center justify-evenly lg:justify-center lg:gap-1">
            {navItems.map((item, index) => {
              const isActive = isRouteActive(item.href);
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`relative ${item.mobileOnly ? "lg:hidden" : ""}`}
                >
                  <Link
                    href={item.href}
                    className="group relative flex flex-col items-center justify-center px-3 py-1 lg:flex-row lg:px-5 lg:py-2 lg:rounded-full"
                  >
                    {/* Active indicator — desktop pill */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-desktop"
                        className="absolute inset-0 hidden lg:block rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Active indicator — mobile bar under icon */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-mobile"
                        className="pointer-events-none absolute -top-1 inset-x-0 mx-auto h-1 w-8 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-md shadow-orange-500/40 lg:hidden"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Mobile icon */}
                    <motion.div
                      whileTap={{ scale: 0.9 }}
                      className={`relative z-10 mb-0.5 lg:hidden transition-opacity ${
                        isActive ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      <Image
                        src={isDarkTheme ? item.iconDark : item.iconLight}
                        alt=""
                        aria-hidden="true"
                        width={22}
                        height={22}
                      />
                    </motion.div>

                    {/* Mobile label */}
                    <span
                      className={`relative z-10 text-[10px] leading-none lg:hidden transition-colors ${
                        isActive
                          ? "font-semibold text-orange-600 dark:text-orange-400"
                          : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item.label}
                    </span>

                    {/* Desktop label */}
                    <span
                      className={`relative z-10 hidden lg:block text-base font-medium transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </div>
  );
};
