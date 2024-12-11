export const parseProblemUrl = (url: string): { contestId: string; problemId: string } => {
  const match = url.match(/problem\/(\d+)\/([A-Z\d]+)/i);
  if (!match) {
    throw new Error('Invalid problem URL format');
  }
  return {
    contestId: match[1],
    problemId: match[2],
  };
};