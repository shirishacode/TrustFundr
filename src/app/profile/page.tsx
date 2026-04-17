"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface Event {
  id: number;
  name: string;
  date: string;
  place: string;
}

export default function ProfilePage() {
  const { user } = useUser();
  const [registeredEvents, setRegisteredEvents] = useState<Event[]>([]);
  const [createdEvents, setCreatedEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Mock fetch for demo - replace with real DB/API call
    setRegisteredEvents([
      { id: 1, name: "Tree Plantation", date: "2025-08-05", place: "Delhi" },
    ]);
    setCreatedEvents([
      { id: 2, name: "Clothes Donation", date: "2025-08-12", place: "Mumbai" },
    ]);
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold text-teal-400 mb-6">
        Welcome, {user?.firstName || "User"}!
      </h1>

      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">📌 Events You've Registered</h2>
        {registeredEvents.length === 0 ? (
          <p className="text-gray-400">No registered events yet.</p>
        ) : (
          <ul className="list-disc ml-5 text-gray-200">
            {registeredEvents.map((event) => (
              <li key={event.id}>
                {event.name} — {event.date} @ {event.place}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🛠️ Events You've Created</h2>
        {createdEvents.length === 0 ? (
          <p className="text-gray-400">No created events yet.</p>
        ) : (
          <ul className="list-disc ml-5 text-gray-200">
            {createdEvents.map((event) => (
              <li key={event.id}>
                {event.name} — {event.date} @ {event.place}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
