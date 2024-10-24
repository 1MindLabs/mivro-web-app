import React, { useState } from "react";
import { FaHistory, FaSearch, FaComments, FaCreditCard } from "react-icons/fa"; // Using react-icons for better visuals

// Sample data for demonstration
const sampleData = {
  scanHistory: [
    { id: 1, item: "Item A", date: "2024-10-01" },
    { id: 2, item: "Item B", date: "2024-10-02" },
  ],
  searchHistory: [
    { id: 1, query: "Product X", date: "2024-10-03" },
    { id: 2, query: "Product Y", date: "2024-10-04" },
  ],
  chatHistory: [
    { id: 1, message: "Hello, how can I help you?", date: "2024-10-05" },
    { id: 2, message: "I need assistance with my order.", date: "2024-10-06" },
  ],
  paymentHistory: [
    { id: 1, amount: "$100", date: "2024-10-07" },
    { id: 2, amount: "$150", date: "2024-10-08" },
  ],
};

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function ActivityRecords() {
  const [showModal, setShowModal] = useState(false);
  const [currentRecord, setCurrentRecord] = useState<string | null>(null);

  const handleViewRecords = (record: string) => {
    setCurrentRecord(record);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentRecord(null);
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Activity & Records</h2>
      <p className="text-gray-600 mb-6">
        Control what activity and records are stored in your account.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.keys(sampleData).map((record) => (
          <div key={record} className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            {record === "scanHistory" && <FaHistory className="text-teal-500 text-4xl mb-2" />}
            {record === "searchHistory" && <FaSearch className="text-teal-500 text-4xl mb-2" />}
            {record === "chatHistory" && <FaComments className="text-teal-500 text-4xl mb-2" />}
            {record === "paymentHistory" && <FaCreditCard className="text-teal-500 text-4xl mb-2" />}
            <h3 className="text-lg font-semibold">{capitalizeFirstLetter(record)}</h3>
            <p className="text-gray-500 mb-4">
              {getRecordDescription(record as keyof typeof sampleData)}
            </p>
            <button
              onClick={() => handleViewRecords(record)}
              className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-200"
            >
              View Records
            </button>
          </div>
        ))}
      </div>

      {/* Modal for displaying records */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
        <div className="bg-gray-100 rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">{capitalizeFirstLetter(currentRecord!)}</h3>
          <ul className="space-y-2">
            {sampleData[currentRecord! as keyof typeof sampleData].map((item: any) => (
              <li key={item.id} className="border-b py-2 hover:bg-gray-200">
                <span className="text-gray-800">{currentRecord === "paymentHistory" ? `Amount: ${item.amount}` : `Item: ${item.item || item.query || item.message}`}</span>
                <span className="text-gray-500 text-sm ml-2">{item.date}</span>
              </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button className="bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-500 transition duration-200" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function getRecordDescription(record: keyof typeof sampleData) {
  const descriptions: { [key: string]: string } = {
    scanHistory: "View your history of scanned items.",
    searchHistory: "See your past searches in the app.",
    chatHistory: "Keep or delete your chat history.",
    paymentHistory: "View your payment history.",
  };
  return descriptions[record as string];
}
