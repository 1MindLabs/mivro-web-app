import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/constants";
import Link from "next/link";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "FAQ",
  description: "Frequently Asked Questions",
  canonical: "/faq",
});

const FAQ: React.FC = () => {
  return (
    <>
      <section className="mx-auto mt-10 flex w-full max-w-screen-lg flex-col gap-4 px-4 py-8 lg:px-8 lg:py-12">
        <div className="mb-4">
          <h2
            className="whitespace-pre-line text-2xl font-medium text-primary-700 lg:text-4xl"
            data-aos="fade-up"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="whitespace-pre-line text-base text-gray-600 lg:text-base"
            data-aos="fade-up"
          >
            Can&apos;t find the answer you&apos;re looking for? Ask us directly
            in our{" "}
            <Link
              className="underline"
              rel="noopener noreferrer"
              target="_blank"
              href="https://discord.gg/4CA58C7rkN"
            >
              Discord
            </Link>
            .
          </p>
        </div>
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={String(index + 1)}>
              <AccordionTrigger className="text-left font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-base text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </>
  );
};

export default FAQ;
