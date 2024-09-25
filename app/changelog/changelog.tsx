import React from "react";

type ChangelogEntry = {
  date: string;
  title: string;
  description: React.ReactNode;
  version: string;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

const updates: ChangelogEntry[] = [
  {
    date: "29 September 2024",
    title: "🚀 Official Launch",
    version: "v1.0.0",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>
          Launched barcode and text search capabilities for food and drink
          products, with upcoming support for cosmetics, medicines, and pet
          foods.
        </li>
        <li>
          Introduced Gemini-powered chatbot Savora for personalized recipe
          recommendations.
        </li>
        <li>
          Meal Tracker and Marketplace features are coming soon for a more
          integrated health management experience.
        </li>
      </ul>
    ),
    screenshot: {
      src: "/images/v1.0.0.png",
      alt: "Screenshot of official launch features",
      width: 300,
      height: 300,
    },
  },
  {
    date: "5 May 2024",
    title: "🛠️ Developer Preview",
    version: "v0.0.1",
    description: (
      <ul className="text-gray-60 list-disc space-y-1 ps-6 text-sm">
        <li>
          Connected to Open Food Facts API for initial product data retrieval.
        </li>
        <li>
          Established Firebase database connections for efficient product data
          storage.
        </li>
      </ul>
    ),
    screenshot: {
      src: "/images/v0.0.1.png",
      alt: "Screenshot of developer preview features",
      width: 300,
      height: 300,
    },
  },
];

export default updates;
