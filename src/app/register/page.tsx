"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterForm() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Save to DB or API call here
    router.back(); // Redirects to the previous page
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Register for Tree Plantation</h2>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 mb-4"
          name="message"
          placeholder="Why do you want to participate?"
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
