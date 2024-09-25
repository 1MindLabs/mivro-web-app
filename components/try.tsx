import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryMivro() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 pt-40 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-semibold" data-aos="fade-up">
            Interested in contributing to Mivro?
          </h1>
          <p
            className="mb-4 text-sm text-gray-500 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Mivro is built by a large community of developers. If you have
            questions, or would like to discuss, you can join our{" "}
            <Link
              href="https://discord.gg/4CA58C7rkN"
              className="font-medium text-primary-700 hover:text-primary-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>{" "}
            and talk to us directly! 💬
          </p>
          <p
            className="mb-8 text-sm text-gray-500 sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Support our project by giving{" "}
            <Link
              href="https://github.com/1MindLabs/mivro-web-app"
              className="font-medium text-primary-700 hover:text-primary-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              the repo
            </Link>{" "}
            a star! 🤩
          </p>
          <div className="mx-auto max-w-xs items-center justify-center sm:flex sm:max-w-none sm:space-x-2.5">
            <div data-aos="fade-up" data-aos-delay="400">
              <Button asChild size="lg">
                <Link href="https://github.com/1MindLabs">
                  GitHub Repository
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5 inline"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
