import { MashupFormData } from '../types/mashup';
import { ProblemsetResponse } from '../types/problemset';

const API_BASE_URL = "https://keepitsafe-9ijq.onrender.com/api/v1";

export const generateMashup = async (formData: MashupFormData): Promise<ProblemsetResponse> => {
  const response = await fetch(`${API_BASE_URL}/codeforces/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      users: formData.users.map((user) => user.username),
      requirements: formData.difficultyRequirements.reduce(
        (acc: Record<number, number>, { difficulty, count }) => {
          acc[difficulty] = (acc[difficulty] || 0) + count; // Aggregating count for the same difficulty
          return acc;
        },
        {}
      ),
      wantedTags: formData.wantedTags.map((tag) => tag.name),
      unwantedTags: formData.unwantedTags.map((tag) => tag.name),
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to generate mashup');
  }

  return response.json();
};