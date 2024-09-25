import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
};

const defaultMetadata = {
  title: "Mivro: Scan It. Know It.",
  description:
    "Cross-platform app and web extension for personalized product profiling in food, drink, cosmetic, medicine, and pet food categories.",
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://mivro.org"),
    title: title ? `${title} - Mivro` : defaultMetadata.title,
    description,
    keywords: ["mivro", "ai barcode scanner", "product analyser"],
    alternates: {
      canonical,
    },
    authors: [
      {
        name: "Areeb Ahmed",
        url: "https://github.com/areebahmeddd",
      },
      {
        name: "Shivansh Karan",
        url: "https://github.com/SpaceTesla",
      },
      {
        name: "Shashwat Kumar",
        url: "https://github.com/shashwat6204",
      },
      {
        name: "Rishi Chirchi",
        url: "https://github.com/rishichirchi",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
    },
  };
};

export const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel
    "http://localhost:3000";

  // Include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`;
  // Remove trailing slash if present
  url = url.endsWith("/") ? url.slice(0, -1) : url;
  return url;
};

export function capitalizeInital(input: unknown): string | undefined {
  if (typeof input !== "string") {
    return "";
  }
  if (input.length === 0) {
    return "";
  } else if (input.length === 1) {
    return input.toUpperCase();
  }
  return input.charAt(0).toUpperCase() + input.slice(1);
}
