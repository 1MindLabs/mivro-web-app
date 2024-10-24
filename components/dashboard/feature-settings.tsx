import React, { useState } from "react";

export default function FeatureSettings() {
  const [features, setFeatures] = useState({
    barcodeScanning: true,
    aiRecommendations: true,
    mealTracker: false,
    marketplaceIntegration: true,
    browserExtension: false,
  });

  const handleToggle = (feature: keyof typeof features) => {
    setFeatures({
      ...features,
      [feature]: !features[feature],
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Feature Settings</h2>
      <p className="text-gray-600 mb-6">
        Check out all the ways you can interact with the app features.
      </p>

      <div className="space-y-6">
        {Object.keys(features).map((feature) => (
          <div
            key={feature}
            className="flex items-start justify-between pb-4 mb-4"
          >
            {/* Left Section: Label and Description */}
            <div className="w-2/3">
              <span className="block text-lg font-medium mb-2">
                {capitalizeFirstLetter(feature)}
              </span>
              <p className="text-gray-500">
                {getFeatureDescription(feature as keyof typeof features, features)}
              </p>
            </div>

            {/* Right Section: Checkbox */}
            <div className="flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={features[feature as keyof typeof features]}
                  onChange={() => handleToggle(feature as keyof typeof features)}
                  className="form-checkbox h-6 w-6 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper function to capitalize first letter and add spaces between camelCase
function capitalizeFirstLetter(string: string) {
  return string
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

// Helper function for feature descriptions
function getFeatureDescription(feature: keyof typeof features, features: { [key: string]: boolean }) {
  const descriptions: { [key: string]: string } = {
    barcodeScanning:
      "Enable barcode scanning for foods, drinks, cosmetics, medicines, and pet foods.",
    aiRecommendations:
      "Get personalized suggestions based on scanned items and health data.",
    mealTracker: "Track your meals using our meal tracker feature.",
    marketplaceIntegration:
      "Discover healthier alternatives in our integrated marketplace.",
    browserExtension:
      "Enable the browser extension for product search and recommendations while shopping online.",
  };
  return descriptions[feature as string];
}
