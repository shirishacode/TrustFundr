"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateEventPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    organizer: "",
    organisation: "",
    date: "",
    place: "",
    purpose: "",
    aboutOrg: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    // After form submission logic (API/database)
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-teal-400">Create New Event</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-lg shadow-md space-y-4 max-w-2xl"
      >
        <div>
          <label className="block mb-1">Event Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Organizer</label>
          <input
            type="text"
            name="organizer"
            required
            value={formData.organizer}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Organisation</label>
          <input
            type="text"
            name="organisation"
            required
            value={formData.organisation}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Date</label>
          <input
            type="date"
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Place</label>
          <input
            type="text"
            name="place"
            required
            value={formData.place}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Purpose</label>
          <textarea
            name="purpose"
            required
            rows={3}
            value={formData.purpose}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">About the Organisation</label>
          <textarea
            name="aboutOrg"
            required
            rows={4}
            value={formData.aboutOrg}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white"
          />
        </div>

        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded transition"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
