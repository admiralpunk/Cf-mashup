export interface User {
  id: string;
  username: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface DifficultyRequirement {
  difficulty: number;
  count: number;
}

export interface Problem {
  id: string;
  name: string;
  difficulty: number;
  tags: Tag[];
  url: string;
}

export interface MashupFormData {
  users: User[];
  difficultyRequirements: DifficultyRequirement[];
  wantedTags: Tag[];
  unwantedTags: Tag[];
}

export interface ContestFormData {
  users: User[];
  contestType: 'div1_2' | 'div2' | 'div3';
}