import { notFound } from "next/navigation";

const events: Record<string, { title: string; date: string }> = {
  "tree-plantation": { title: "Tree Plantation", date: "August 5, 2025" },
  "blood-donation-camp": { title: "Blood Donation Camp", date: "August 10, 2025" },
  "education-drive": { title: "Education Drive", date: "August 15, 2025" },
  "orphanage-visit": { title: "Orphanage Visit", date: "August 20, 2025" },
  "food-distribution": { title: "Food Distribution", date: "August 25, 2025" },
};

export default function DonatePage({
  params,
}: {
  params: { cause: string };
}) {
  const causeInfo = causes[params.cause];

  if (!causeInfo) notFound();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Donate to {causeInfo.title}</h1>
      <p>Date: {causeInfo.date}</p>
      <p>
        Thank you for supporting our {causeInfo.title} initiative. Your
        contribution helps make a real impact.
      </p>

      <button style={{ marginTop: "20px", padding: "10px 20px" }}>
        Proceed to Pay
      </button>
    </div>
  );
}
