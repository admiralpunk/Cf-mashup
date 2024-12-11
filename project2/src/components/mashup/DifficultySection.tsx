import React from 'react';
import { DifficultyInput } from './DifficultyInput';
import { DifficultyRequirement } from '../../types/mashup';

interface DifficultySectionProps {
  requirements: DifficultyRequirement[];
  onChange: (requirements: DifficultyRequirement[]) => void;
}

export function DifficultySection({ requirements, onChange }: DifficultySectionProps) {
  return (
    <div className="space-y-4">
      <DifficultyInput
        requirements={requirements}
        onChange={onChange}
      />
    </div>
  );
}