import React, { useState } from "react";
import ProblemsetForm from "./components/ProblemsetForm";
import ContestForm from "./components/ContestForm";

const App = () => {
  const [selection, setSelection] = useState("");
  const [customProblemsetData, setCustomProblemsetData] = useState({
    ratings: [{ rating: "", frequency: "" }],
    usernames: [""],
  });

  const [contestData, setContestData] = useState({
    users: [""],
    type: "",
  });
  const [problemsetLinks, setProblemsetLinks] = useState([]);


  const handleGenerateProblemset = async (requestData) => {
    try {
      const response = await fetch(
        "http://localhost:6500/api/v1/codeforces/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );
      console.log(requestData);
      
      // // Await response.json()
      const data = await response.json();
      console.log(data);
   
      setProblemsetLinks(data.problemset);

      console.log("Problemset Links:", (data.problemset));
      return data.problemset
    } catch (error) {
      console.log("in catch");
      console.error("Error generating problemset:", error);
    }
  };

  const handleGetContest = async () => {
    try {
      const response = await fetch(
        "http://localhost:6500/api/v1/codeforces/contests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contestData),
        }
      );
      console.log(contestData);
      const data = await response.json();
      console.log("Contest Info:", data);
      return data;
    } catch (error) {
      console.error("Error retrieving contest:", error);
    }
  };

  return (
    <div className="landing-container">
      <h1 className="header">Codeforces Helper</h1>

      {selection === "" && (
        <div className="button-container">
          <button
            className="action-button"
            onClick={() => setSelection("problemset")}
          >
            Generate Problemset
          </button>
          <button
            className="action-button"
            onClick={() => setSelection("contest")}
          >
            Get a Contest
          </button>
        </div>
      )}

      {selection === "problemset" && (
        <div className="form-container">
          <ProblemsetForm
            customProblemsetData={customProblemsetData}
            setCustomProblemsetData={setCustomProblemsetData}
            handleGenerateProblemset={handleGenerateProblemset}
          />
        </div>
      )}

      {selection === "contest" && (
        <div className="form-container">
          <ContestForm
            contestData={contestData}
            setContestData={setContestData}
            handleGetContest={handleGetContest}
          />
        </div>
      )}

      {selection !== "" && (
        <button className="go-back-btn" onClick={() => setSelection("")}>
          Go Back
        </button>
      )}
    </div>
  );
};

export default App;
