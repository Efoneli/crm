import React from "react";

const ProgressBar = () => {
  const totalTarget = 45;
  const achievedPercentage = 68;
  const progressData = [
    { label: "Won", value: 10, color: "bg-green-500" },
    { label: "Committed", value: 8, color: "bg-blue-500" },
    { label: "Best case", value: 7, color: "bg-purple-500" },
    { label: "Qualified", value: 3, color: "bg-yellow-500" },
    { label: "Leads", value: 17, color: "bg-gray-300" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 px-4">
      {/* Top Information */}
      <div className="flex justify-between items-center mb-2 text-sm text-gray-600">
        <div className="flex items-center">
          <span className="text-gray-800">1 month until Q4 ends</span>
        </div>
        <div>
          <span className="font-medium text-gray-800">Target: ${totalTarget} million</span>
          <span className="ml-4 text-gray-600">{achievedPercentage}% of target achieved</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 flex overflow-hidden rounded-full border border-gray-200">
        {progressData.map((item, index) => (
          <div
            key={index}
            className={`h-full ${item.color}`}
            style={{ flex: item.value }}
          ></div>
        ))}
      </div>

      {/* Legends */}
      <div className="flex justify-between items-center mt-2 text-xs text-gray-600">
        {progressData.map((item, index) => (
          <div key={index} className="flex items-center space-x-1">
            <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
            <span>
              {item.label} ${item.value}m
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
