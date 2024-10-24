import React from "react";
import { FaComments, FaBug, FaQuestionCircle } from "react-icons/fa";

export default function SupportFeedback() {
  const handleSendFeedback = () => {
  };

  const handleBugReport = () => {
  };

  const handleHelpCenter = () => {
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Support & Feedback</h2>
      <p className="text-gray-600 mb-6">
        Manage how you provide feedback and access support.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaComments className="text-sky-300 text-4xl mb-2" />
          <h3 className="text-lg font-semibold">Send Feedback</h3>
          <p className="text-gray-500 mb-4">Submit your feedback on app features.</p>
          <button
            onClick={handleSendFeedback}
            className="px-4 py-2 bg-sky-300 text-white rounded-lg hover:bg-sky-400 transition duration-200"
          >
            Submit Feedback
          </button>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaBug className="text-rose-500 text-4xl mb-2" />
          <h3 className="text-lg font-semibold">Bug Report</h3>
          <p className="text-gray-500 mb-4">Report bugs or issues with the app.</p>
          <button
            onClick={handleBugReport}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition duration-200"
          >
            Report Bug
          </button>
        </div>

        <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaQuestionCircle className="text-lime-500 text-4xl mb-2" />
          <h3 className="text-lg font-semibold">Help Center</h3>
          <p className="text-gray-500 mb-4">Access help articles and guides.</p>
          <button
            onClick={handleHelpCenter}
            className="px-4 py-2 bg-lime-500 text-white rounded-lg hover:bg-lime-600 transition duration-200"
          >
            Visit Help Center
          </button>
        </div>
      </div>
    </div>
  );
}
