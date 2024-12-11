import React from 'react';
import { Tags, Sliders, Share2, BarChart } from 'lucide-react';

const features = [
  {
    name: 'Search Problems by Tags',
    description: 'Filter problems based on algorithms, data structures, and techniques.',
    icon: Tags,
  },
  {
    name: 'Customize Difficulty Levels',
    description: 'Set your preferred difficulty range to match your skill level.',
    icon: Sliders,
  },
  {
    name: 'Save and Share Mashups',
    description: 'Create and share custom problem sets with your friends.',
    icon: Share2,
  },
  {
    name: 'Get Performance Analytics',
    description: 'Track your progress and identify areas for improvement.',
    icon: BarChart,
  },
];

export function Features() {
  return (
    <div className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Everything you need to excel
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 dark:bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}