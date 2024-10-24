import { createClient } from "@/utils/supabase/server";
import { User } from "@supabase/auth-js";

type GetUserResult = {
  user: User | null;
  openAppQueryParams: string;
  redirect: string | null;
};

export async function getUser(): Promise<GetUserResult> {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData?.user) {
    return {
      user: null,
      openAppQueryParams: "",
      redirect: "/signin",
    };
  }
  const { data: sessionData } = await supabase.auth.getSession();
  const openAppQueryParams = `accessToken=${sessionData?.session?.access_token}&refreshToken=${sessionData?.session?.refresh_token}`;

  return {
    user: userData.user,
    openAppQueryParams,
    redirect: null,
  };
}
