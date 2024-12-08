'use client';

import Link from 'next/link';

export default function Header() {
    const username = JSON.parse(localStorage.getItem("user") || "{}").name || "Guest";

  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-lg">
        <Link href="/">Suraksha</Link>
      </div>
      <nav className="space-x-4">
        <Link href="/team" className="hover:underline">
          Meet the Team
        </Link>
        <Link href="/report" className="hover:underline">
          Report
        </Link>
        <Link href="/counsel" className="hover:underline">
          Counsel
        </Link>
        <Link href="/actions-taken" className="hover:underline">
          Actions Taken
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
        {username === "Guest" ? (
          <Link href="/login" className="hover:underline">
            Login
          </Link>
        ) : (
          <span className="hover:underline">{username}</span>
        )}
      </nav>
    </header>
  );
}
