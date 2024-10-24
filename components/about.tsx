import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

type VideoData = {
  src: string;
  title: string;
  description: string;
};

type VideoCardProps = VideoData;

const videoData: VideoData[] = [
  {
    src: "https://youtube.com/embed/ToXUq-NSkUg",
    title: "Project Overview",
    description:
      "A brief overview of the project, its features, and how it can help you make healthier choices in your daily life.",
  },
  {
    src: "https://youtube.com/embed/leefLeLr3n0?si=AmH6SoDybqLhmA_S",
    title: "Project Presentation",
    description:
      "Our project presentation at DevHack, a hackathon held at DSU, where we showcased our solution, its development process, and its impact.",
  },
];

const AboutComponent: React.FC = () => {
  return (
    <section className={"mt-32"}>
      <div
        className={
          "m-4 flex flex-col items-center text-center lg:m-0 lg:justify-center"
        }
      >
        <h1 className="text-4xl font-bold">
          Project{" "}
          <span className="relative">
            <span className="relative z-10 text-primary-700">Description</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h1>
        <p className="mt-4 max-w-2xl text-center text-gray-500">
          The app supports barcode scanning for foods, drinks, cosmetics,
          medicines, and pet foods. It provides detailed ingredient information,
          categorizes nutrients into positive and negative (either generally or
          based on user-specific health data), identifies associated health
          risks, and suggests alternatives using an AI recommendation engine.
        </p>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center">
        <p className="text-s text-gray-500 font-bold">Key Features</p>

        <div className="m-4 mt-2 flex max-w-4xl flex-wrap items-center justify-center gap-4">
          <CardInfo
            title="Search Engine"
            info="Easily find products without barcode scanning, with upcoming support for image and live product recognition."
          />
          <CardInfo
            title="Meal Tracker"
            info="Monitor your daily nutritional intake by scanning product barcodes, allowing you to easily track and manage your meals."
          />
          <CardInfo
            title="Marketplace"
            info="Discover and purchase healthier alternatives from our trusted partners."
          />
          <CardInfo
            title="Browser Extension"
            info="Integrate app features seamlessly into your online shopping experience."
          />
        </div>
      </div>

      <div className="m-auto mt-10 flex flex-col items-center justify-center gap-4 p-4 pt-0 lg:flex-row lg:p-0">
        {videoData.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </section>
  );
};

const CardInfo: React.FC<{ title: string; info: string }> = ({
  title,
  info,
}) => {
  return (
    <div
      className="group relative w-full max-w-xs text-center"
      style={{ height: "75px", width: "300px" }}
    >
      {/* Main point (visible content) */}
      <div
        className="absolute inset-0 flex items-center justify-center rounded-3xl bg-primary-50 pb-3 pl-6 pr-6 pt-3 transition-opacity duration-300 group-hover:opacity-0"
        style={{
          border: "1px solid rgba(20, 189, 149, 0.35)",
          background: "rgba(20, 189, 149, 0.03)",
          color: "#0F745C",
        }}
      >
        <p>{title}</p>
      </div>

      {/* Hidden information (revealed on hover) */}
      <div
        className="absolute inset-0 flex items-center p-2 justify-center rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          border: "1px solid rgba(20, 189, 149, 0.35)",
          background: "rgba(20, 189, 149, 0.03)",
          color: "#0F745C",
        }}
      >
        <span className="text-sm text-gray-700">{info}</span>
      </div>
    </div>
  );
};

const VideoCard: React.FC<VideoCardProps> = ({ src, title, description }) => (
  <Card className="mb-8">
    <CardContent
      className="flex flex-col-reverse p-4 sm:flex-col"
      style={{
        width: "100%",
        maxWidth: "30rem",
        minHeight: "20rem",
      }}
    >
      <div
        className="relative mt-4 sm:mb-4 sm:mt-0"
        style={{
          paddingBottom: "16rem",
        }}
      >
        <iframe
          className="absolute left-0 top-0 h-full w-full rounded"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <CardDescription className="text-gray-500">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default AboutComponent;
