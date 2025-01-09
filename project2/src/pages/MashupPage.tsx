import React from 'react';
import { MashupForm } from '../components/mashup/MashupForm';
import { Toaster } from 'react-hot-toast';

export function MashupPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Generate Custom Mashup
          </h1>
          <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
            Create your perfect problem set by customizing difficulty levels and tags
          </p>
        </div>
        
        <MashupForm />
      </div>
      <Toaster position="top-right" />
    </div>
  );
}