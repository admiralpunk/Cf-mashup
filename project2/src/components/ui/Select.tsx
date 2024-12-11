import React from 'react';
import Select, { Props as SelectProps } from 'react-select';
import { motion } from 'framer-motion';

interface CustomSelectProps extends SelectProps {
  label: string;
  error?: string;
}

export function CustomSelect({ label, error, ...props }: CustomSelectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-2"
    >
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <Select
        {...props}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          colors: {
            ...theme.colors,
            primary: '#2563eb',
            primary75: '#3b82f6',
            primary50: '#60a5fa',
            primary25: '#93c5fd',
          },
        })}
      />
      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-red-600 dark:text-red-400"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
}