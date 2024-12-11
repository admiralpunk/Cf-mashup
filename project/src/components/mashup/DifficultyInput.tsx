import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Button } from '../ui/Button';
import { DifficultyRequirement } from '../../types/mashup';

interface DifficultyInputProps {
  requirements: DifficultyRequirement[];
  onChange: (requirements: DifficultyRequirement[]) => void;
}

export function DifficultyInput({ requirements, onChange }: DifficultyInputProps) {
  const addRequirement = () => {
    onChange([...requirements, { difficulty: 1200, count: 1 }]);
  };

  const removeRequirement = (index: number) => {
    onChange(requirements.filter((_, i) => i !== index));
  };

  const updateRequirement = (index: number, field: keyof DifficultyRequirement, value: number) => {
    const newRequirements = [...requirements];
    newRequirements[index] = { ...newRequirements[index], [field]: value };
    onChange(newRequirements);
  };

  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Difficulty Requirements
      </label>
      
      {requirements.map((req, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="flex items-center space-x-4"
        >
          <input
            type="number"
            min="800"
            max="3500"
            step="100"
            value={req.difficulty}
            onChange={(e) => updateRequirement(index, 'difficulty', parseInt(e.target.value))}
            className="w-32 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Difficulty"
          />
          <input
            type="number"
            min="1"
            max="10"
            value={req.count}
            onChange={(e) => updateRequirement(index, 'count', parseInt(e.target.value))}
            className="w-24 px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Count"
          />
          <Button
            variant="secondary"
            onClick={() => removeRequirement(index)}
            className="p-2"
          >
            <Minus className="w-4 h-4" />
          </Button>
        </motion.div>
      ))}
      
      <Button
        variant="outline"
        onClick={addRequirement}
        className="flex items-center space-x-2"
      >
        <Plus className="w-4 h-4" />
        <span>Add Requirement</span>
      </Button>
    </div>
  );
}