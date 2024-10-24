import DashboardPage from "@/components/dashboard";
import { getUser } from "@/lib/data-fetching";
import { redirect } from "next/navigation";
import { constructMetadata } from "@/lib/utils";
import { Metadata } from "next/types";

export const metadata: Metadata = constructMetadata({
  title: "Dashboard",
  description: "Manage your account, billing, and team preferences.",
  canonical: "/dashboard",
});

export default async function Dashboard() {
  const {
    user,
    redirect: redirectTo,
    openAppQueryParams,
  } = await getUser();

  if (redirectTo || !user) {
    return redirect(redirectTo ?? "/signin");
  }

  return (
    <DashboardPage
      openAppQueryParams={openAppQueryParams}
      user={user}
    />
  );
}