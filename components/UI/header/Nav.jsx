import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = ({ toggleNav }) => {
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
        className="font-mono text-5xl text-red-600 hover:text-red-900 pl-3"
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
      <button
        className="flex flex-col gap-1 pr-4 md:hidden"
        onClick={toggleNav}
      >
        <span className="block h-1 w-6 bg-white"></span>
        <span className="block h-1 w-6 bg-white"></span>
        <span className="block h-1 w-6 bg-white"></span>
      </button>
    </div>
  );
};

export default Nav;
