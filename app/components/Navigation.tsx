import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link
            href="/"
            className="text-gray-100 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-gray-100 hover:text-white font-medium transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-500"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
