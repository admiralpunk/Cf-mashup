import React from 'react';
import { ProblemList } from './ProblemList';
import { ProblemsetResponse } from '../../types/problemset';

interface ProblemsetDisplayProps {
  data: ProblemsetResponse;
}

export function ProblemsetDisplay({ data }: ProblemsetDisplayProps) {
  if (data.status !== 'Success' || !data.problemset.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600 dark:text-gray-400">
          No problems found in the problemset.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Generated Problemset
      </h2>
      <ProblemList data={data} />
    </div>
  );
}