"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <div className="bg-neutral-100 py-6">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      className="relative mx-auto flex w-fit rounded-full border-2 border-gray-700 bg-gray-800 p-2 shadow-lg"
    >
      <Tab setPosition={setPosition} href="/Categorias/categoria1">
        Categoria 1
      </Tab>
      <Tab setPosition={setPosition} href="/Categorias/Categoria2">
        Categoria 2
      </Tab>
      <Tab setPosition={setPosition} href="/Categorias">
        Categoria
      </Tab>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition, href }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 cursor-pointer rounded-lg px-4 py-2 text-sm font-semibold text-gray-300 transition-all duration-200 hover:text-white md:px-6 md:py-3 md:text-base"
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-10 rounded-lg bg-blue-500 md:h-12"
    />
  );
};

export default Navbar;
