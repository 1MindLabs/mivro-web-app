import React, { useState } from "react";

export default function AppPreferences() {
  const [preferences, setPreferences] = useState({
    theme: "light",
    language: "English",
    defaultView: "dashboard",
  });

  const handleSelectChange = (preference: keyof typeof preferences, value: string) => {
    setPreferences({
      ...preferences,
      [preference]: value,
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">App Preferences</h2>
      <p className="text-gray-600 mb-6">
        Customize how the app looks and behaves for you.
      </p>

      <div className="space-y-6">
        <div className="flex items-start justify-between pb-4 mb-4">
          <div className="w-3/4">
            <span className="block text-lg font-medium mb-2">Theme</span>
            <p className="text-gray-500">Choose between light or dark mode.</p>
          </div>
            <select
              value={preferences.theme}
              onChange={(e) => handleSelectChange("theme", e.target.value)}
              className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
        </div>

        <div className="flex items-start justify-between pb-4 mb-4">
          <div className="w-2/3">
            <span className="block text-lg font-medium mb-2">Language</span>
            <p className="text-gray-500">Select your preferred language.</p>
          </div>
            <select
              value={preferences.language}
              onChange={(e) => handleSelectChange("language", e.target.value)}
              className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
        </div>

        <div className="flex items-start justify-between pb-4 mb-4">
          <div className="w-3/4">
            <span className="block text-lg font-medium mb-2">Default View</span>
            <p className="text-gray-500">Choose the page to open by default.</p>
          </div>
            <select
              value={preferences.defaultView}
              onChange={(e) => handleSelectChange("defaultView", e.target.value)}
              className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="dashboard">Dashboard</option>
              <option value="profile">Profile</option>
              <option value="settings">Settings</option>
            </select>
        </div>
      </div>
    </div>
  );
}
