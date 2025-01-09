export interface ProblemsetResponse {
  status: string;
  problemset: string[];
}

export interface Problem {
  url: string;
  contestId: string;
  problemId: string;
  name?: string;
}