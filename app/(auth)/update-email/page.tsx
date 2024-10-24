import UpdateEmailForm from "@/components/auth/update-email-form"; // Import the email form component
import { constructMetadata } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = constructMetadata({
  title: "Update Email",
  description: "Update your account email",
  canonical: "/update-email",
});

export default async function UpdateEmailPage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/signin");
  }
  // Redirect to the home page if the user is not using email provider
  if (data.user.app_metadata.provider !== "email") {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-md pt-44 md:pt-32">
      <h1 className="text-center text-3xl font-semibold md:text-5xl md:font-normal">
        Update Email
      </h1>
      <UpdateEmailForm /> {/* Render the email form component */}
    </div>
  );
}
