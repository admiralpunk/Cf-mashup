import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function Button({
  children,
  loading,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-all duration-200 flex items-center justify-center";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-400",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:bg-gray-100",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 disabled:border-blue-400 disabled:text-blue-400"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={clsx(baseStyles, variants[variant], className)}
      disabled={loading}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </motion.button>
  );
}