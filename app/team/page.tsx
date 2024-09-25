import Team from "@/components/team";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Team",
  description: "The team behind Mivro",
  canonical: "/team",
});

export default function Teams() {
  return (
    <>
      <Team />
    </>
  );
}
