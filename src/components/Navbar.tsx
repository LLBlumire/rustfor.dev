import { Home, GraduationCap, Search } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-4 px-8 sm:py-8 sm:px-16">
      <ul className="flex flex-wrap gap-8 max-w-screen-2xl mx-auto">
        <li className="flex-grow">
          <Link href="/" className="hover:underline flex gap-2 items-center">
            <Home />
            <span className="hidden sm:block">Home</span>
          </Link>
        </li>
        <li>
          <Link
            href="/lessons"
            className="hover:underline flex gap-2 items-center"
          >
            <GraduationCap />
            <span className="hidden sm:block">Lessons</span>
          </Link>
        </li>
        <li>
          <Link
            href="/reference"
            className="hover:underline flex gap-2 items-center"
          >
            <Search />
            <span className="hidden sm:block">Reference</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
