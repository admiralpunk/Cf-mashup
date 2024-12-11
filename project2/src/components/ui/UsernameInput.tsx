import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from './Button';
import { User } from '../../types/mashup';

interface UsernameInputProps {
  users: User[];
  onChange: (users: User[]) => void;
  label?: string;
}

export function UsernameInput({ users, onChange, label = "Usernames" }: UsernameInputProps) {
  const [currentUsername, setCurrentUsername] = React.useState('');

  const handleAddUsername = () => {
    if (currentUsername.trim() && !users.some(u => u.username === currentUsername.trim())) {
      onChange([...users, { id: Date.now().toString(), username: currentUsername.trim() }]);
      setCurrentUsername('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddUsername();
    }
  };

  const handleRemoveUsername = (username: string) => {
    onChange(users.filter(u => u.username !== username));
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      <div className="flex gap-2">
        <input
          type="text"
          value={currentUsername}
          onChange={(e) => setCurrentUsername(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          placeholder="Enter username"
        />
        <Button 
          type="button" 
          onClick={handleAddUsername} 
          disabled={!currentUsername.trim()}
        >
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <AnimatePresence>
          {users.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex items-center gap-1 px-2 py-1 bg-blue-100 dark:bg-blue-900 rounded-md"
            >
              <span className="text-sm text-blue-800 dark:text-blue-200">
                {user.username}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveUsername(user.username)}
                className="p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full"
              >
                <X className="w-3 h-3 text-blue-600 dark:text-blue-400" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}