import { useState } from "react";

const Tab = () => {
  const [activeTab, setActiveTab] = useState("Tab1");

  const tabs = [
    { name: "Tab1", content: "email id" },
    { name: "Tab2", content: "Password" },
    { name: "Tab3", content: "contact information" },
  ];

  return (
    <div className="w-full max-w-md mx-auto mt-10 border p-5 rounded-2xl">
      {/* Tab Buttons */}
      <div className="flex p-5 inline-block mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-4 py-2 font-medium ${
              activeTab === tab.name
                ? " border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 border rounded">
        {tabs.find((tab) => tab.name === activeTab)?.content}
      </div>
    </div>
  );
};

export default Tab;
