"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold text-green-600">TrustFundr</h1>

      <div className="space-x-6 text-gray-700 font-medium">
        <Link href="/">Home</Link>
        <Link href="/events/tree-plantation">Events</Link>
        <Link href="/transactions">Transactions</Link>
      </div>
    </nav>
  );
}