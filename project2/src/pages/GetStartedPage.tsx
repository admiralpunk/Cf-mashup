import React from "react";
import { Link } from "react-router-dom";

export function GetStartedPage() {
  const options = [
    { label: "Create Contest", path: "/create-contest" },
    { label: "Generate Mashup", path: "/generate-mashup" },
    { label: "Stress Test", path: "/stress-test" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white px-4">
      {/* Page Heading */}
      <div className="max-w-2xl text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 tracking-tight leading-tight">
          What would you like to do?
        </h2>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {options.map((option) => (
          <Link
            key={option.path}
            to={option.path}
            className="block px-6 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-lg font-medium text-center rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
          >
            {option.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
