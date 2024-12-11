import axios from "axios";
import { ContestFormatterInput, ContestResponse } from "../types/contest";
import { formatContestRequest } from "../utils/contestFormatters";

const API_BASE_URL = "http://localhost:6500/api/v1";

export const generateContest = async (
  formData: ContestFormatterInput
): Promise<ContestResponse> => {
  const response = await axios.post(
    `${API_BASE_URL}/codeforces/contests`,
    formatContestRequest(formData)
  );
  return response.data;
};
