export interface Problem {
  id: string;
  name: string;
  difficulty: number;
  tags: string[];
  url: string;
}

export interface Mashup {
  id: string;
  name: string;
  problems: Problem[];
  createdAt: Date;
  averageDifficulty: number;
  tags: string[];
}

export interface User {
  username: string;
  email: string;
  mashups: Mashup[];
}