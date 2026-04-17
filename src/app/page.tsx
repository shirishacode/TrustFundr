import Navbar from "@/components/Navbar";
import Link from "next/link";

const events = [
  {
    slug: "tree-plantation",
    title: "Tree Plantation",
  },
  {
    slug: "blood-donation-camp",
    title: "Blood Donation Camp",
  },
  {
    slug: "education-drive",
    title: "Education Drive",
  },
  {
    slug: "orphanage-visit",
    title: "Orphanage Visit",
  },
  {
    slug: "food-distribution",
    title: "Food Distribution",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="text-center py-20 bg-gradient-to-br from-green-100 to-white">
        <h1 className="text-5xl font-bold text-green-700 mb-6">
          Transparent Donations for a Better World 🌍
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          Support meaningful causes with secure and trackable contributions.
        </p>
        <Link
          href="#events"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700"
        >
          Explore Events
        </Link>
      </section>

      {/* EVENTS SECTION */}
      <section id="events" className="px-10 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Active Campaigns
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`}>
              <div className="p-6 border rounded-xl shadow hover:shadow-lg transition cursor-pointer bg-white">
                <h3 className="text-xl font-semibold text-green-700">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  Click to donate and support this cause.
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}