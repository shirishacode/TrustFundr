"use client";

import { Button } from "@/components/ui/button";

export default function EventDetails({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{title}</h1>

      <p className="text-muted-foreground mt-2">
        <strong>Date:</strong> {date}
      </p>

      <p className="mt-6 leading-relaxed">{description}</p>

      <Button className="mt-8">
        Proceed to Pay
      </Button>
    </div>
  );
}
