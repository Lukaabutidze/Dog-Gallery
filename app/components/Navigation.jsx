"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute">
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 z-50 relative">
        {/* Hamburger Icon */}
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
          <span className="block w-8 h-0.5 bg-black dark:bg-white"></span>
        </div>
      </button>
      <div
        className={`${
          isOpen ? "translate-x-0 shadow-xl" : "-translate-x-full"
        }  mt-5 fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-800 p-10 transition-transform z-40`}
      >
        {/* Navigation Links */}
        <Link
          href="/"
          className="block p-4 text-black dark:text-white hover:opacity-50"
        >
          Home
        </Link>
        <Link
          href="/all-dogs"
          className="block p-4 text-black dark:text-white hover:opacity-50"
        >
          See all dogs
        </Link>
      </div>
    </div>
  );
}
