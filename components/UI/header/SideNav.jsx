import Link from "next/link";

const SideNav = () => {
  return (
    <div className={`bg-red-600 md:hidden w-full h-3/4 p-5 z-10`}>
      <div className="flex flex-col gap-4 w-full md:hidden">
        <nav>
          <ul className="flex flex-col gap-2 text-xl">
            <Link href="/" className="mb-8">
              Home
            </Link>
            <Link href="/movies" className="mb-8">
              Movies
            </Link>
            <Link href="/tvshows" className="mb-8">
              Tv Shows
            </Link>
            {/* <Link href="/">My List</Link> */}
          </ul>
        </nav>
        <button className="bg-white h-5 px-5 text-red-900 rounded hover:bg-red-900">
          <Link href="/api/auth/login">Sign In</Link>
        </button>
      </div>
    </div>
  );
};

export default SideNav;
