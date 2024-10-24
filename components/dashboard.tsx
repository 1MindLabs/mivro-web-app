"use client";
import { useState } from "react";
import ProfileCard from "@/components/dashboard/profile-card";
import NotificationSettings from "@/components/dashboard/notifications";
import PrivacySecurity from "@/components/dashboard/privacy-security"; 
import ActivityRecords from "@/components/dashboard/activity-records"; 
import AppPreferences from "@/components/dashboard/app-preferences"; 
import SupportFeedback from "@/components/dashboard/support-feedback"; 
import { User } from "@supabase/supabase-js";
import { FaUser, FaBell, FaShieldAlt, FaHistory, FaSlidersH, FaLifeRing} from "react-icons/fa";

type DashboardPageProps = {
  openAppQueryParams: string;
  user: User;
};

export default function DashboardPage({
  openAppQueryParams,
  user,
}: DashboardPageProps) {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="relative min-h-screen mt-8">
      <div className="flex mx-auto max-w-full p-4 sm:p-8 lg:px-32">
        <div className="w-64 bg-gray-100 p-6 rounded-lg shadow-m h-full sticky top-0 mt-8">
          <ul className="space-y-4">
            <SidebarItem
              icon={<FaUser className="mr-2" />}
              label="Account Settings"
              active={activeTab === "profile"}
              onClick={() => setActiveTab("profile")}
            />
            <SidebarItem
              icon={<FaShieldAlt className="mr-2" />}
              label="Privacy & Security"
              active={activeTab === "privacySecurity"}
              onClick={() => setActiveTab("privacySecurity")}
            />
            <SidebarItem
              icon={<FaHistory className="mr-2" />}
              label="Activity & Records"
              active={activeTab === "activityRecords"}
              onClick={() => setActiveTab("activityRecords")}
            />
                        <SidebarItem
              icon={<FaBell className="mr-2" />}
              label="Notifications"
              active={activeTab === "notifications"}
              onClick={() => setActiveTab("notifications")}
            />
            <SidebarItem
              icon={<FaSlidersH className="mr-2" />}
              label="App Preferences"
              active={activeTab === "appPreferences"}
              onClick={() => setActiveTab("appPreferences")}
            />
            <SidebarItem
              icon={<FaLifeRing className="mr-2" />}
              label="Support & Feedback"
              active={activeTab === "supportFeedback"}
              onClick={() => setActiveTab("supportFeedback")}
            />
          </ul>
        </div>

        <div className="w-full bg-background p-6 ml-4 text-foreground sm:p-8">
          {activeTab === "profile" && <ProfileCard user={user} />}
          {activeTab === "notifications" && <NotificationSettings />}
          {activeTab === "privacySecurity" && <PrivacySecurity />}
          {activeTab === "activityRecords" && <ActivityRecords />}
          {activeTab === "appPreferences" && <AppPreferences />}
          {activeTab === "supportFeedback" && <SupportFeedback />}
        </div>
      </div>
    </section>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <li
      className={`flex items-center cursor-pointer p-3 rounded-lg font-medium transition-colors duration-200 ${
        active ? "bg-teal-500 text-white" : "hover:bg-teal-600 text-gray-800"
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </li>
  );
}
