"use client";

import React from "react";
import Image from "next/image";
import TeamPhoto1 from "@/public/images/team1.jpg";
import TeamPhoto2 from "@/public/images/team2.jpg";

const Team: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-8">
      <header className="mb-8 mt-16 text-center">
        <h1 className="text-4xl font-bold">
          Meet{" "}
          <span className="relative">
            <span className="relative z-10 text-primary-700">Our Team</span>
            <span
              className="absolute bottom-0 left-0 w-full"
              style={{
                height: "1.4375rem",
                background: "rgba(20, 189, 149, 0.20)",
              }}
            ></span>
          </span>
        </h1>
      </header>
      <div className="w-full max-w-4xl rounded-lg border border-gray-300 p-4">
        <div className="flex justify-between gap-4">
          <div className="flex-1 text-center">
            <Image
              src={TeamPhoto1}
              alt="Team 1"
              className="mb-4 h-auto w-full rounded-lg"
            />
          </div>
          <div className="flex-1 text-center">
            <Image
              src={TeamPhoto2}
              alt="Team 2"
              className="mb-4 h-auto w-full rounded-lg"
            />
          </div>
        </div>
        <p className="mt-4 text-justify text-gray-700">
          We’re a group of computer science undergraduate students united by a
          shared passion for open source and all things tech. Our story started
          with a simple YouTube video on a “Top API Every Developer Should Know
          About,” which sparked an idea: Why not create something that could
          truly benefit the community? This idea quickly grew into a project
          fueled by our enthusiasm for experimenting, building, and solving
          real-world problems.
        </p>
        <p className="mt-2 text-justify text-gray-700">
          We decided to make our project open-source because we believe in the
          power of collaboration and giving back to the developer community. Our
          goal is to create something meaningful that has a positive impact on a
          large scale. As we continue to develop and refine our work, we’re
          excited about the possibilities ahead. We’re just getting started, and
          we can’t wait to see how far we can go, pushing boundaries and
          innovating every step of the way :)
        </p>
        <p className="mt-2 text-center text-gray-700">
          - Areeb, Shivansh, Shashwat, Rishi, Ravikant, Anish
        </p>
      </div>
    </section>
  );
};

export default Team;
