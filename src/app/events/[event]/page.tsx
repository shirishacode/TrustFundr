"use client";

import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { generateTransactionHash, saveTransaction } from "@/lib/blockchain";
import { useState } from "react";

const events = {
  "tree-plantation": {
    title: "Tree Plantation",
    date: "August 5, 2025",
    description:
      "This initiative focuses on planting trees to promote environmental sustainability.",
  },
  "blood-donation-camp": {
    title: "Blood Donation Camp",
    date: "August 10, 2025",
    description: "A blood donation drive aimed at saving lives.",
  },
  "education-drive": {
    title: "Education Drive",
    date: "August 15, 2025",
    description:
      "Supporting education for underprivileged students.",
  },
  "orphanage-visit": {
    title: "Orphanage Visit",
    date: "August 20, 2025",
    description:
      "Helping and spending time with orphaned children.",
  },
  "food-distribution": {
    title: "Food Distribution",
    date: "August 25, 2025",
    description: "Providing food to the needy.",
  },
};

export default function EventPage({
  params,
}: {
  params: { event: string };
}) {
  const eventInfo = events[params.event];
  const [txHash, setTxHash] = useState("");

  if (!eventInfo) notFound();

  const handlePayment = () => {
    const hash = generateTransactionHash();

    const transaction = {
      event: eventInfo.title,
      amount: 100, // dummy amount
      hash,
      timestamp: new Date().toISOString(),
    };

    saveTransaction(transaction);
    setTxHash(hash);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-50 flex items-center justify-center px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full text-center border border-gray-100">
        
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          {eventInfo.title}
        </h1>

        <p className="text-gray-600 text-lg mb-2">
          <span className="font-semibold">📅 Date:</span> {eventInfo.date}
        </p>

        <div className="w-16 h-1 bg-green-500 mx-auto my-4 rounded"></div>

        <p className="text-gray-700 text-base leading-relaxed mb-6">
          {eventInfo.description}
        </p>

        <Button
          onClick={handlePayment}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow-md"
        >
          Donate ₹100
        </Button>

        {txHash && (
          <div className="mt-6 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 font-semibold">
              ✅ Transaction Successful!
            </p>
            <p className="text-xs break-all mt-2 text-gray-700">
              Hash: {txHash}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}