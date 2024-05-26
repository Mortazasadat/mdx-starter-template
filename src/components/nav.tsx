import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Nav = () => {
  return (
    <header className="bg-white dark:shadow-md dark:border dark:border-gray-900 dark:bg-black shadow-md rounded-lg fixed w-full top-0 inset-x-0 z-10 mt-0 max-w-6xl mx-auto ">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt=""
            />
          </Link>
        </div>

        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            className="text-sm font-semibold dark:text-white leading-6 text-gray-900"
          >
            Blogs
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
