import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { CustomSelect } from "../ui/Select";
import { Button } from "../ui/Button";
import { UsernameInput } from "../ui/UsernameInput";
import { DifficultyInput } from "./DifficultyInput";
import { ProblemsetDisplay } from "../problemset/ProblemsetDisplay";
import { MashupFormData, Tag } from "../../types/mashup";
import { ProblemsetResponse } from "../../types/problemset";

// ... (previous imports and SAMPLE_TAGS remain the same)

export function MashupForm() {
  const [formData, setFormData] = React.useState<MashupFormData>({
    users: [],
    difficultyRequirements: [{ difficulty: 1200, count: 1 }],
    wantedTags: [],
    unwantedTags: [],
  });
  const [loading, setLoading] = React.useState(false);
  const [problemset, setProblemset] = React.useState<ProblemsetResponse | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // ... (previous payload transformation code remains the same)

    try {
      const response = await fetch(
        "http://localhost:6500/api/v1/codeforces/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to generate mashup");
      }

      const result = await response.json();
      setProblemset(result);
      toast.success("Mashup generated successfully!");
    } catch (error) {
      toast.error("Failed to generate mashup");
      console.error(error);
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
        {/* ... (previous form fields remain the same) */}
      </motion.form>

      {problemset && <ProblemsetDisplay data={problemset} />}
    </div>
  );
}
