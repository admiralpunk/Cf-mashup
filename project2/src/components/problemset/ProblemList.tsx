import React from 'react';
import { motion } from 'framer-motion';
import { ProblemCard } from './ProblemCard';
import { Problem, ProblemsetResponse } from '../../types/problemset';
import { parseProblemUrl } from '../../utils/problemUtils';

interface ProblemListProps {
  data: ProblemsetResponse;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProblemList({ data }: ProblemListProps) {
  const problems: Problem[] = data.problemset.map(url => ({
    url,
    ...parseProblemUrl(url)
  }));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {problems.map((problem) => (
        <motion.div key={`${problem.contestId}${problem.problemId}`} variants={item}>
          <ProblemCard problem={problem} />
        </motion.div>
      ))}
    </motion.div>
  );
}