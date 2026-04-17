"use client";

import { SignedIn, SignedOut, useClerk, useUser } from "@clerk/nextjs";
import { User, Plus, Search } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { signOut } = useClerk();
  const { user } = useUser();
  const router = useRouter();

  return (
    <>
      <SignedIn>
        <main className="min-h-screen bg-gray-900 text-white">
          {/* Header */}
          <header className="flex justify-between items-center px-6 py-4 bg-gray-950 bg-opacity-80 shadow-md">
            <h1 className="text-white text-2xl font-bold">TrustFundr</h1>
            <div className="flex items-center gap-4 relative">
              <button
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
                onClick={() => router.push("/events/create")}
              >
                <Plus className="text-white w-5 h-5" />
              </button>
              <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                <Search className="text-white w-5 h-5" />
              </button>
              <div className="relative group">
                <button className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition">
                  <User className="text-white w-5 h-5" />
                </button>
                <ul className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block z-50">
                  <li
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Help</li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Track</li>
                  <li
                    className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                    onClick={() => signOut()}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </header>

          {/* Navigation */}
          <section className="py-4 bg-gray-800 shadow-md">
            <div className="flex justify-center gap-8">
              <button className="text-white hover:text-teal-400 transition">About</button>
              <div className="group relative">
                <button className="text-white hover:text-teal-400 transition">Events</button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg mt-1">
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Upcoming</a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Past</a>
                </div>
              </div>
              <div className="group relative">
                <button className="text-white hover:text-teal-400 transition">Projects</button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg mt-1">
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Ongoing</a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Completed</a>
                </div>
              </div>
              <div className="group relative">
                <button className="text-white hover:text-teal-400 transition">Languages</button>
                <div className="absolute top-full left-0 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg mt-1">
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">English</a>
                  <a className="block px-4 py-2 hover:bg-gray-200 cursor-pointer">Hindi</a>
                </div>
              </div>
            </div>
          </section>

          {/* Content */}
          <div className="flex">
            {/* Sidebar */}
            <aside className="w-1/5 bg-gray-800 p-4 min-h-[calc(100vh-144px)]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-400"
              />
              <div>
                <h3 className="text-white font-semibold mb-2">Categories</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="hover:text-white cursor-pointer">Hospitals</li>
                  <li className="hover:text-white cursor-pointer">Schools</li>
                  <li className="hover:text-white cursor-pointer">Orphanages</li>
                  <li className="hover:text-white cursor-pointer">Old Age Homes</li>
                  <li className="hover:text-white cursor-pointer">Environmental</li>
                </ul>
              </div>
            </aside>

            {/* Main Content */}
            <section className="w-4/5 p-6">
              <h2 className="text-2xl font-bold mb-4 text-teal-400">Upcoming Events</h2>
              <div className="grid grid-cols-2 gap-6">
                {/* Static cards */}
                {[
                  { title: "Tree Plantation", date: "August 5, 2025", img: "/plant.jpeg" },
                  { title: "Blood Donation Camp", date: "August 10, 2025", img: "/blood.jpeg" },
                  { title: "Education Drive", date: "August 15, 2025", img: "/Stat.jpeg" },
                  { title: "Orphanage Visit", date: "August 20, 2025", img: "/orph.jpeg" },
                  { title: "Food Distribution", date: "August 25, 2025", img: "/food.jpeg" },
                ].map((event, i) => (
                  <div
                    key={i}
                    onClick={() => router.push(`/events/${event.title.toLowerCase().replace(/ /g, "-")}`)}
                    className="cursor-pointer bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 transition"
                  >
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                    <p className="text-sm text-gray-400">{event.date}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center text-white bg-black">
          <p>Redirecting to login...</p>
        </div>
      </SignedOut>
    </>
  );
}
