import { ContestFormatterInput, ContestFormatterOutput } from '../types/contest';

export const formatContestRequest = (input: ContestFormatterInput): ContestFormatterOutput => {
  return {
    users: input.users.map((user) => user.username),
    type: input.contestType,
  };
};