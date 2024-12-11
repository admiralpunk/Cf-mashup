import React from "react";
import { ContestForm } from "../components/contest/ContestForm";
import { Toaster } from "react-hot-toast";

export function ContestPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Generate Contest
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
            Create a custom contest by selecting participants and contest type
          </p>
        </div>

        <ContestForm />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}
