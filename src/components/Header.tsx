"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

import { cn } from "../lib/utils";
import { appUrls, navItems } from "../lib/constants";
import { useTheme } from "next-themes";
import IconButton from "./IconButton";
import SocialMediaSection from "./SocialMediaSection";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-background">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-10">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* Mobile menu */}

          <IconButton
            className="display md:hidden"
            onClick={() => setMenuIsOpen(true)}
            aria-label="Open menu"
            icon={<Menu size={20} />}
          />

          {/* Logo */}
          <Link href="/" className="font-display text-lg font-bold tracking-tight text-foreground md:text-xl">
            Apex Exotics
          </Link>
        </div>
        {/* CENTER DESKTOP NAV */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-sm font-medium text-muted transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Dark-Light Theme */}
        {mounted && (
          <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={`relative flex h-10 w-17 items-center rounded-full px-1 transition-colors duration-300 ${
              isDark ? "bg-slate-700" : "bg-slate-300"
            }`}
          >
            <div
              className={`absolute flex size-8 items-center justify-center rounded-full bg-[#06254b] text-white shadow-md transition-all duration-300 ${
                isDark ? "translate-x-7" : "translate-x-0"
              }`}
            >
              {isDark ? <Moon size={15} /> : <Sun size={15} />}
            </div>
          </button>
        )}
      </div>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-xl transition md:hidden",
          menuIsOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex h-20 items-center justify-between px-5">
          <Link
            href="/"
            onClick={() => setMenuIsOpen(false)}
            className="font-display text-lg font-bold text-foreground"
          >
            Apex Exotics
          </Link>
          <IconButton onClick={() => setMenuIsOpen(false)} aria-label="Close menu" icon={<X size={20} />} />
        </div>

        <nav className="flex flex-col gap-6 px-5 pt-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuIsOpen(false)}
              className="font-body text-3xl font-semibold text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto flex justify-center p-10">
          <SocialMediaSection />
        </div>
      </div>
    </header>
  );
};

export default Header;
