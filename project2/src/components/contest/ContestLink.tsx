import React from "react";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

interface ContestLinkProps {
  url: string;
}

export function ContestLink({ url }: ContestLinkProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/50 rounded-lg border border-blue-200 dark:border-blue-800"
    >
      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
        <Link className="w-5 h-5" />
        <span className="font-medium">Contest Link:</span>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 block text-blue-600 dark:text-blue-400 hover:underline break-all"
      >
        {url}
      </a>
    </motion.div>
  );
}
