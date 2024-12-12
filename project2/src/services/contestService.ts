import axios from "axios";
import { ContestFormatterInput, ContestResponse } from "../types/contest";
import { formatContestRequest } from "../utils/contestFormatters";

const API_BASE_URL = "https://keepitsafe-9ijq.onrender.com/api/v1";

export const generateContest = async (
  formData: ContestFormatterInput
): Promise<ContestResponse> => {
  const response = await axios.post(
    `${API_BASE_URL}/codeforces/contests`,
    formatContestRequest(formData)
  );
  return response.data;
};
