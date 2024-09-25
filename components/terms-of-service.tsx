import Link from "next/link";
import { CONTACT_EMAIL } from "@/utils/constants";

export default function TermsOfServiceComponent() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="relative pb-10 pt-32 md:pb-16 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-left text-gray-800 md:pb-16">
            <h1
              className="mb-28 text-6xl font-medium text-gray-900"
              data-aos="fade-up"
            >
              Terms of Service
            </h1>

            <div className="space-y-4">
              <div className="mb-8 text-gray-900">
                <p>
                  <strong>Last Updated 29th September 2024</strong>
                </p>
              </div>

              <p>
                As an open source hobby project, we don’t have Terms of Service
                at the moment. We’re too busy having fun creating—stay tuned!
                🎨🔍
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
