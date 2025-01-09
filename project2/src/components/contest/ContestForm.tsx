import React from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { CustomSelect } from "../ui/Select";
import { Button } from "../ui/Button";
import { UsernameInput } from "../ui/UsernameInput";
import { ContestLink } from "./ContestLink";
import { generateContest } from "../../services/contestService";
import { ContestFormData, ContestResponse } from "../../types/contest";

const CONTEST_TYPES = [
  { value: "Div. 1 + Div. 2", label: "Div. 1 + Div. 2" },
  { value: "Div. 2", label: "Div. 2" },
  { value: "Div. 3", label: "Div. 3" },
];

export function ContestForm() {
  const [formData, setFormData] = React.useState<ContestFormData>({
    users: [],
    contestType: "Div. 2",
  });
  const [loading, setLoading] = React.useState(false);
  const [contestData, setContestData] = React.useState<ContestResponse | null>(
    null
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await generateContest(formData);
      setContestData(response);
      toast.success("Contest generated successfully!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to generate contest");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
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

        <CustomSelect
          label="Contest Type"
          options={CONTEST_TYPES}
          onChange={(selected) => {
            setFormData({
              ...formData,
              contestType: selected?.value as ContestFormData["contestType"],
            });
          }}
        />

        <Button type="submit" loading={loading} className="w-full">
          Generate Contest
        </Button>
      </motion.form>

      {contestData && <ContestLink url={contestData.contest} />}
    </div>
  );
}
