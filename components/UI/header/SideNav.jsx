import Link from "next/link";

const SideNav = ({ onHide }) => {
  return (
    <div className="bg-red-600 md:hidden w-8/12 h-3/4 p-5">
      <button className="ml-16">
        <svg
          className="h-8 w-8 text-gray-600"
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
