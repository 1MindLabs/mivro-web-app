import React, { useState } from "react";

export default function PrivacySecurity() {
  const [settings, setSettings] = useState({
    twoFactorAuth: "enabled",
    managePermissions: "default",
    downloadData: false,
    deleteAccount: false,
  });

  const handleSelectChange = (setting: keyof typeof settings, value: string) => {
    setSettings({
      ...settings,
      [setting]: value,
    });
  };

  const handleButtonClick = (action: keyof typeof settings) => {
    setSettings({
      ...settings,
      [action]: !settings[action],
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Privacy & Security</h2>
      <p className="text-gray-600 mb-6">
        Manage your privacy and security settings to keep your account safe.
      </p>

      <div className="space-y-6">
        <div className="flex items-start justify-between pb-4 mb-4">
          <div className="w-2/3">
            <span className="block text-lg font-medium mb-2">
              Two-Factor Authentication
            </span>
            <p className="text-gray-500">
              Enable two-factor authentication for enhanced security.
            </p>
          </div>
          <div className="flex items-center">
            <select
              value={settings.twoFactorAuth}
              onChange={(e) => handleSelectChange("twoFactorAuth", e.target.value)}
              className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="enabled">Enabled</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        </div>

        <div className="flex items-start justify-between pb-4 mb-4">
          <div className="w-2/3">
            <span className="block text-lg font-medium mb-2">
              Manage Permissions
            </span>
            <p className="text-gray-500">
              Control the permissions for connected apps and services.
            </p>
          </div>
          <div className="flex items-center">
            <select
              value={settings.managePermissions}
              onChange={(e) => handleSelectChange("managePermissions", e.target.value)}
              className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="default">Default</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-center">
            <button
              onClick={() => handleButtonClick("downloadData")}
              className="mr-4 bg-teal-500 text-white rounded px-4 py-2 hover:bg-teal-600 transition duration-200"
            >
              {settings.downloadData ? "Data Downloaded" : "Download Data"}
            </button>
            <button
              onClick={() => handleButtonClick("deleteAccount")}
              className="bg-rose-500 text-white rounded px-4 py-2 hover:bg-rose-600 transition duration-200"
            >
              {settings.deleteAccount ? "Account Deleted" : "Delete Account"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
