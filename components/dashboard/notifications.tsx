import React, { useState } from "react";

const notificationSettings = {
  "Email Notifications": "enabled",
  "SMS Notifications": "enabled",
};

export default function NotificationSettings() {
  const [notifications, setNotifications] = useState(notificationSettings);

  const handleSelectChange = (notification: keyof typeof notifications, value: string) => {
    setNotifications({
      ...notifications,
      [notification]: value,
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
      <p className="text-gray-600 mb-6">
        Select which notifications you would like to receive.
      </p>

      <div className="space-y-6">
        {Object.keys(notifications).map((notification) => (
          <div key={notification} className="flex items-start justify-between pb-4 mb-4">
            <div className="w-2/3">
              <span className="block text-lg font-medium mb-2">
                {(notification)}
              </span>
              <p className="text-gray-500">
                {getNotificationDescription(notification as keyof typeof notifications)}
              </p>
            </div>
            <div>
              <select
                value={notifications[notification as keyof typeof notifications]}
                onChange={(e) => handleSelectChange(notification as keyof typeof notifications, e.target.value)}
                className="form-select h-10 w-40 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="enabled">Enabled</option>
                <option value="disabled">Disabled</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function getNotificationDescription(notification: keyof typeof notificationSettings) {
  const descriptions: { [key: string]: string } = {
    "Email Notifications": "Receive notifications via email.",
    "SMS Notifications": "Receive notifications via SMS.",
  };
  return descriptions[notification as string];
}
