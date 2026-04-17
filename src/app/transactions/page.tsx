"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

export default function TransactionsPage() {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("transactions") || "[]");
    setTransactions(data);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6 text-green-700">
          Transaction History
        </h1>

        {transactions.length === 0 ? (
          <p className="text-gray-600">No transactions yet.</p>
        ) : (
          <div className="space-y-4">
            {transactions.map((tx, index) => (
              <div
                key={index}
                className="p-4 bg-white shadow rounded-lg border"
              >
                <p><strong>Event:</strong> {tx.event}</p>
                <p><strong>Amount:</strong> ₹{tx.amount}</p>
                <p className="break-all">
                  <strong>Hash:</strong> {tx.hash}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}