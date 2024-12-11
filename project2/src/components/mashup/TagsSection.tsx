import React from 'react';
import { CustomSelect } from '../ui/Select';
import { Tag } from '../../types/mashup';

const SAMPLE_TAGS = [
  { id: '1', name: 'dp' },
  { id: '2', name: 'graphs' },
  { id: '3', name: 'implementation' },
  { id: '4', name: 'math' },
  { id: '5', name: 'greedy' },
];

interface TagsSectionProps {
  wantedTags: Tag[];
  unwantedTags: Tag[];
  onWantedTagsChange: (tags: Tag[]) => void;
  onUnwantedTagsChange: (tags: Tag[]) => void;
}

export function TagsSection({
  wantedTags,
  unwantedTags,
  onWantedTagsChange,
  onUnwantedTagsChange,
}: TagsSectionProps) {
  return (
    <div className="space-y-4">
      <CustomSelect
        label="Wanted Tags"
        isMulti
        options={SAMPLE_TAGS.map(tag => ({
          value: tag.id,
          label: tag.name,
        }))}
        onChange={(selected) => {
          onWantedTagsChange(
            selected.map(option => ({
              id: option.value,
              name: option.label,
            }))
          );
        }}
      />

      <CustomSelect
        label="Unwanted Tags"
        isMulti
        options={SAMPLE_TAGS.map(tag => ({
          value: tag.id,
          label: tag.name,
        }))}
        onChange={(selected) => {
          onUnwantedTagsChange(
            selected.map(option => ({
              id: option.value,
              name: option.label,
            }))
          );
        }}
      />
    </div>
  );
}