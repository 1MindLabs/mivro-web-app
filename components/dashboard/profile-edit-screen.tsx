"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaUser } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { User } from "@supabase/supabase-js";
import { updateUserProfile } from "../../app/(auth)/actions";

type ProfileEditScreenProps = {
  user: User;
  onSaveChanges: () => void;
};

export default function ProfileEditScreen({
  user,
  onSaveChanges,
}: ProfileEditScreenProps) {
  const [name, setName] = useState(user?.user_metadata?.name || "");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setName(user?.user_metadata?.name || "");
  }, [user]);

  const saveChanges = async () => {
    const formData = new FormData();
    formData.append("name", name);

    try {
      const result = await updateUserProfile(formData); // Call your API function
      onSaveChanges();
      if (result.error) {
        setError(result.error); // Handle error if present
      } else {
        console.log("Profile updated successfully");
        // Redirect or handle success
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-auto bg-white p-6 shadow-lg rounded-lg max-w-md">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">
          My Profile
        </CardTitle>
        <p className="text-gray-600">Update your profile information below.</p>
      </CardHeader>
      <CardContent className="flex items-start pt-4 space-x-6">
        <Avatar className="h-20 w-20 border rounded-full shadow-md">
          <AvatarImage src={user?.user_metadata?.avatar_url} alt="User Avatar" />
          <AvatarFallback className="text-lg">
            {name?.[0] || user?.email?.[0] || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col space-y-3">
          <div>
            <label className="text-gray-700 font-medium">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b w-full text-base text-gray-900 py-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <Button
              variant="link"
              asChild
              className="px-0 text-primary-700 underline mt-2"
            >
              <Link href="/update-email">Change Email</Link>
            </Button>
          </div>
          {user?.app_metadata?.provider === "email" && (
            <div>
              <Button
                variant="link"
                asChild
                className="px-0 text-primary-700 underline"
              >
                <Link href="/update-password">Change Password</Link>
              </Button>
            </div>
          )}
        </div>
      </CardContent>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <CardFooter className="mt-4 pt-4">
        <Button
          className="ml-auto mr-4 bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600 transition duration-200"
          onClick={saveChanges}
        >
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
