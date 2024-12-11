import React from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Button } from '../ui/Button';
import { UsernameInput } from '../ui/UsernameInput';
import { TagsSection } from './TagsSection';
import { DifficultySection } from './DifficultySection';
import { ProblemsetDisplay } from '../problemset/ProblemsetDisplay';
import { MashupFormData } from '../../types/mashup';
import { ProblemsetResponse } from '../../types/problemset';
import { generateMashup } from '../../services/mashupService';


 
export function MashupForm() {
  const [formData, setFormData] = React.useState<MashupFormData>({
    users: [],
    difficultyRequirements: [{ difficulty: 1200, count: 1 }],
    wantedTags: [],
    unwantedTags: [],
  });
  const [loading, setLoading] = React.useState(false);
  const [problemset, setProblemset] = React.useState<ProblemsetResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await generateMashup(formData);
      setProblemset(result);
      toast.success('Mashup generated successfully!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to generate mashup');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <UsernameInput
          users={formData.users}
          onChange={(users) => setFormData({ ...formData, users })}
        />

        <DifficultySection
          requirements={formData.difficultyRequirements}
          onChange={(requirements) => setFormData({ ...formData, difficultyRequirements: requirements })}
        />

        <TagsSection
          wantedTags={formData.wantedTags}
          unwantedTags={formData.unwantedTags}
          onWantedTagsChange={(tags) => setFormData({ ...formData, wantedTags: tags })}
          onUnwantedTagsChange={(tags) => setFormData({ ...formData, unwantedTags: tags })}
        />

        <Button
          type="submit"
          loading={loading}
          className="w-full"
        >
          Generate Mashup
        </Button>
      </motion.form>

      {problemset && <ProblemsetDisplay data={problemset} />}
    </div>
  );
}