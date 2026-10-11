"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const tabs = [
  {
    id: "organise",
    label: "Organise Applications",
    image: "/hero1.png",
    alt: "Organise your job applications",
  },
  {
    id: "getHired",
    label: "Get Hired",
    image: "/hero2.png",
    alt: "Track progress toward getting hired",
  },
  {
    id: "manageBoard",
    label: "Manage Board",
    image: "/hero3.png",
    alt: "Manage your job board",
  },
] as const;

export default function ImageTabs() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]["id"]>("organise");
  const current = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="border-t border-border bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex justify-center gap-2">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              variant={activeTab === tab.id ? "default" : "secondary"}
              className="rounded-lg px-6 py-3 text-sm font-medium transition-colors"
            >
              {tab.label}
            </Button>
          ))}
        </div>

        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-border bg-card shadow-lg">
          <Image
            src={current.image}
            alt={current.alt}
            width={1200}
            height={800}
            className="mx-auto mt-8 rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
