import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Problem } from "../../types/problemset";

interface ProblemCardProps {
  problem: Problem;
}

export function ProblemCard({ problem }: ProblemCardProps) {
  return (
    <motion.a
      href={problem.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {problem.contestId}
              {problem.problemId}
            </span>
            {problem.name && (
              <span className="text-gray-600 dark:text-gray-400">
                - {problem.name}
              </span>
            )}
          </div>
          <ExternalLink className="w-5 h-5 text-blue-500" />
        </div>
      </div>
    </motion.a>
  );
}
