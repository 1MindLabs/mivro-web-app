import { useState } from "react";
import { User } from "@supabase/supabase-js";
import { FaUser, FaLink, FaCalendarAlt } from "react-icons/fa";
import ProfileEditScreen from "@/components/dashboard/profile-edit-screen";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type ProfileCardProps = {
  user: User;
};

export default function ProfileCard({ user }: ProfileCardProps) {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  if (isEditing) {
    return <ProfileEditScreen user={user} onSaveChanges={handleSaveChanges} />;
  }

  return (
    <div className="space-y-6 flex flex-col">
      <Card className="flex h-full flex-col overflow-auto bg-white p-6 shadow-md rounded-lg max-w-md">
      <h2 className="text-2xl font-semibold mb-4 flex items-center justify-start">
          <FaUser className="text-teal-500 mr-2" />
          My Profile
        </h2>
        <CardContent className="pt-4">
          <p className="text-lg">Hello, {user?.user_metadata.name || "User"}!</p>
          <p className="text-gray-600">{user?.email}</p>
        </CardContent>
        <CardFooter className="mt-auto pt-4">
          <Button
            onClick={handleEditClick}
            className="ml-auto mr-4 bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600 transition duration-200"
          >
            Update Profile
          </Button>
        </CardFooter>
      </Card>


      <Card className="bg-white p-6 shadow-md rounded-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-start">
          <FaLink className="text-teal-500 mr-2" />
          Connected Accounts
        </h2>
        <div className="space-y-3">
          <p className="text-gray-500">No connected accounts.</p>
        </div>
      </Card>

      <Card className="bg-white p-6 shadow-md rounded-lg max-w-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-start">
          <FaCalendarAlt className="text-teal-500 mr-2" />
          Member Since
        </h2>
        <p className="text-gray-600">
          {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "N/A"}
        </p>
      </Card>
    </div>
  );
}
