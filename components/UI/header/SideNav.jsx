import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

const SideNav = ({ open }) => {
  const { user, error } = useUser();

  return (
    <div
      className={`bg-red-600 md:hidden w-8/12 h-3/4 p-5 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      } fixed top-0 left-0 transition-all ease-in-out duration-500`}
    >
      <div className="flex flex-col gap-4 w-full mt-4 md:hidden">
        <nav>
          <ul className="flex flex-col gap-2 text-xl">
            <Link href="/" className="mb-6">
              Home
            </Link>
            <Link href="/movies" className="mb-6">
              Movies
            </Link>
            <Link href="/tvshows" className="mb-6">
              Tv Shows
            </Link>
            {/* <Link href="/">My List</Link> */}
          </ul>
        </nav>
        <button className="bg-white h-5 px-5 mb-4 text-red-900 rounded hover:bg-red-900 hover:text-white">
          <Link href="/api/auth/login">Sign In</Link>
        </button>
        <div className="flex gap-4 justify-center">
          <a href="https://www.linkedin.com/in/jude-olajumoke-002426246/">
            <i className="fa fa-linkedin-square circle-icon"></i>
          </a>
          <a href="https://www.twitter.com/judeoscar4">
            <i className="fa fa-twitter-square circle-icon"></i>
          </a>
          <a href="https://www.facebook.com/jude.olajumoke">
            <i className="fa fa-facebook-square circle-icon"></i>
          </a>
          <a href="https://www.vcarrd.me/judeolajumoke">
            <i className="fa fa-address-card circle-icon"></i>
          </a>
        </div>
        {user && (
          <p className="text-center pt-1 border-t-2 border-t-white">
            {user.email}
          </p>
        )}
      </div>
    </div>
  );
};

export default SideNav;
