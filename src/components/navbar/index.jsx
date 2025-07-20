"use client";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#022150] fixed top-0 w-full z-50 backdrop-blur-md py-4 lg:py-6 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between w-full">
        {/* Logo */}
        <Link className="flex items-center gap-[5px] flex-shrink-0" href={"/"}>
          <Image
            src="/logo-white.svg"
            alt="logo"
            width={100}
            height={28}
            className="w-[90px] sm:w-[100px] lg:w-[110px] h-auto"
            priority
          />
        </Link>
  
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-1 justify-end">
          <div className="flex items-center">
            <NavLinks />
          </div>
          <div className="flex items-center gap-2 xl:gap-2.5 ml-4">
            <Link
              href={"#cta"}
              className="text-white/75 font-semibold text-sm -tracking-[0.01em] hover:text-white transition-colors duration-150 py-2 px-2 xl:px-2.5 whitespace-nowrap"
            >
              Faq
            </Link>
  
            <Link
              href={"/"}
              className="p-px relative rounded-[15px] text-sm xl:text-base -tracking-[0.02em] group overflow-hidden flex-shrink-0"
            >
              <div className="inset-[-595px_-759px_-583px_-727px] overflow-visible absolute -z-[1] bg-[conic-gradient(from_0deg_at_50%_50%,#000000_151.2deg,#00FFB2_176.4deg,#000000_331deg)] pointer-events-none animate-[spin_5s_linear_infinite]" />
              <div className="px-4 xl:px-6 py-2.5 xl:py-3 flex gap-2 xl:gap-2.5 items-center bg-black text-white z-10 rounded-[15px] whitespace-nowrap">
                Get Account
                <ArrowUpRight
                  size={14}
                  stroke="white"
                  className="group-hover:rotate-45 duration-150 ease-in xl:w-4 xl:h-4"
                />
              </div>
            </Link>
          </div>
        </div>

        {/* Medium Screen Nav (Tablet) */}
        <div className="hidden md:flex lg:hidden items-center">
          <button
            className="text-white"
            onClick={() => setMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
  
        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>
  
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
  
            {/* Sidebar Panel */}
            <motion.div
              className="fixed top-0 right-0 z-50 w-3/4 max-w-xs h-screen bg-black p-6 flex flex-col gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Close Icon */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white"
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>
  
              {/* Sidebar Content */}
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <Image
                  src="/logo-white.svg"
                  alt="logo"
                  width={110}
                  height={32}
                  priority
                />
              </Link>
  
              <div className="flex flex-col gap-4">
                <NavLinks onClick={() => setMenuOpen(false)} />
                <Link
                  href="#cta"
                  onClick={() => setMenuOpen(false)}
                  className="text-white/75 font-semibold text-sm hover:text-white transition"
                >
                  Faq
                </Link>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="p-px relative rounded-[15px] text-base -tracking-[0.02em] group overflow-hidden"
                >
                  <div className="inset-[-595px_-759px_-583px_-727px] overflow-visible absolute -z-[1] bg-[conic-gradient(from_0deg_at_50%_50%,#000000_151.2deg,#00FFB2_176.4deg,#000000_331deg)] pointer-events-none animate-[spin_5s_linear_infinite]" />
                  <div className="px-6 py-3 flex gap-2.5 items-center bg-black text-white  z-10 rounded-[15px]">
                    Get Account
                    <ArrowUpRight
                      size={16}
                      stroke="white"
                      className="group-hover:rotate-45 duration-150 ease-in"
                    />
                  </div>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
  
};

const NavLinks = ({ onClick }) => {
  const links = [
    { name: "Why Us", href: "#hero" }, // ⬅️ use ID selector
    { name: "Our Solutions", href: "#features" },
    { name: "Fun Fact", href: "#what" },
    { name: "Challenges", href: "#why" },
    { name: "Client Area", href: "#testimonials" },
  ];
  

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-1 xl:gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          onClick={onClick}
          className="text-white/75 font-semibold text-sm -tracking-[0.01em] hover:text-white transition-colors duration-150 py-2 px-2 xl:px-2.5 whitespace-nowrap"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;