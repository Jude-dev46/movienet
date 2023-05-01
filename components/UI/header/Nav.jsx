import Link from "next/link";
import { useState } from "react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showNav = () => {
    setIsOpen(true);
  };

  return (
    <div className="container flex justify-between items-center text-white mx-auto pt-4 pb-4 border-b">
      <Link
        href="/"
        className="font-mono text-5xl text-red-600 hover:text-red-900 pl-3"
      >
        MovieNet
      </Link>
      <div className="hidden md:flex align-middle h-5">
        <nav>
          <ul className="flex gap-4 text-xl">
            <Link href="/">Home</Link>
            <Link href="/">Movies</Link>
            <Link href="/">Tv Shows</Link>
            <Link href="/">My List</Link>
            <Link href="/"></Link>
          </ul>
        </nav>
        <button className="bg-red-600 h-5 px-5 text-center rounded hover:bg-red-900">
          Sign Up
        </button>
      </div>
      <button className="flex flex-col gap-1 pr-4 md:hidden" onClick={showNav}>
        <span className="block h-1 w-6 bg-white"></span>
        <span className="block h-1 w-6 bg-white"></span>
        <span className="block h-1 w-6 bg-white"></span>
      </button>
      {isOpen && (
        <button>
          <svg
            className="h-8 w-8 text-gray-600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
      {isOpen && (
        <div className="flex w-full md:hidden">
          <nav>
            <ul className="flex flex-col gap-4 text-xl">
              <Link href="/">Home</Link>
              <Link href="/">Movies</Link>
              <Link href="/">Tv Shows</Link>
              <Link href="/">My List</Link>
              <Link href="/"></Link>
            </ul>
          </nav>
          <button className="bg-red-600 h-5 px-5 text-center rounded hover:bg-red-900">
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
