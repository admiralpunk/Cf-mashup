import React from "react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-white px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-400">
            CF Mashup Generator
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
          Start creating contests and generating mashups effortlessly. Unlock
          the potential of your coding skills with ease.
        </p>
        <button
          className="px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-full shadow-lg transform transition hover:scale-105 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-700"
          onClick={() => navigate("/get-started")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
