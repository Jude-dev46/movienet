import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = ({ toggleNav, open, onHide }) => {
  const { user, error } = useUser();
  const [hover, setHover] = useState(false);

  const handleMouse = () => {
    setHover(true);
  };

  const handleRevMouse = () => {
    setHover(false);
  };

  return (
    <div className="container flex justify-between items-center text-white mx-auto pt-4 pb-4 border-b">
      <Link
        href="/"
        className="font-mono text-2xl md:text-5xl text-red-600 hover:text-red-900 pl-3"
      >
        MovieNet
      </Link>
      <div className="hidden md:flex align-middle h-5">
        <nav>
          <ul className="flex gap-4 text-xl mr-4">
            <Link href="/">Home</Link>
            <Link href="/movies">Movies</Link>
            <Link href="/tvshows">Tv Shows</Link>
            {/* <Link href="/mylist">My List</Link> */}
          </ul>
        </nav>
        {!user ? (
          <Link href="/api/auth/login">
            <button className="bg-red-600 h-5 px-5 md:mr-4 text-center rounded hover:bg-red-900">
              Sign In
            </button>
          </Link>
        ) : (
          <div className="flex gap-2 items-center">
            <div className="relative">
              <Image
                src={user.picture}
                width={40}
                height={20}
                alt={user.name}
                className="rounded-full cursor-pointer"
                onMouseEnter={handleMouse}
                onMouseLeave={handleRevMouse}
              />
              {hover && (
                <div className="user font-mono">
                  <p>{user.nickname}</p>
                </div>
              )}
            </div>
            <Link href="/api/auth/logout">
              <button className="bg-red-600 h-5 px-5 md:mr-4 text-center rounded hover:bg-red-900">
                Logout
              </button>
            </Link>
          </div>
        )}
      </div>
      {user && (
        <Image
          src={user.picture}
          width={40}
          height={20}
          alt={user.name}
          className="rounded-full cursor-pointer md:hidden"
          onMouseEnter={handleMouse}
          onMouseLeave={handleRevMouse}
        />
      )}
      {!open && (
        <button
          className="flex flex-col gap-1 -ml-12 pr-4 md:hidden"
          onClick={toggleNav}
        >
          <span className="block h-1 w-5 bg-white"></span>
          <span className="block h-1 w-5 bg-white"></span>
          <span className="block h-1 w-5 bg-white"></span>
        </button>
      )}
      {open && (
        <button className="-ml-12 md:hidden">
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={onHide}
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Nav;
