import React, { useState } from "react";

const ProblemsetForm = ({
  customProblemsetData,
  setCustomProblemsetData,
  handleGenerateProblemset,
}) => {
  const [problemsetLinks, setProblemsetLinks] = useState([]);

  // Destructure with default values to ensure tags are always arrays
  const {
    ratings,
    usernames,
    wantedTags = [],
    unwantedTags = [],
  } = customProblemsetData;

  const generateProblemsetData = () => {
    // Convert ratings array to the required format
    const requirements = {};
    ratings.forEach((entry) => {
      if (entry.rating && entry.frequency) {
        requirements[entry.rating] = parseInt(entry.frequency, 10);
      }
    });

    // Construct the data to be sent
    const requestData = {
      users: usernames,
      requirements,
      wantedTags,
      unwantedTags,
    };

    // Simulate the API call to generate the problemset
    // Here, you'll replace this with your actual `handleGenerateProblemset` function
    handleGenerateProblemset(requestData).then((response) => {
      // Assume the response is an array of problemset links
      // response = response.json();
      // console.log(response.problemset);
      const links = response || [];
      setProblemsetLinks(links); // Update state with fetched links
    });
  };

  const handleAddTag = (type) => {
    if (!Array.isArray(customProblemsetData[type])) {
      setCustomProblemsetData({
        ...customProblemsetData,
        [type]: [""],
      });
    } else {
      setCustomProblemsetData({
        ...customProblemsetData,
        [type]: [...customProblemsetData[type], ""],
      });
    }
  };

  const handleRemoveTag = (type, index) => {
    if (Array.isArray(customProblemsetData[type])) {
      setCustomProblemsetData({
        ...customProblemsetData,
        [type]: customProblemsetData[type].filter((_, i) => i !== index),
      });
    }
  };

  const handleUpdateTag = (type, index, value) => {
    if (Array.isArray(customProblemsetData[type])) {
      const updatedTags = [...customProblemsetData[type]];
      updatedTags[index] = value;
      setCustomProblemsetData({ ...customProblemsetData, [type]: updatedTags });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Generate Custom Problemset</h2>

      {/* Labels for Rating and Frequency */}
      <div style={{ display: "flex", marginBottom: "5px" }}>
        <div style={{ marginRight: "10px", flex: 1 }}>
          <label>Rating:</label>
        </div>
        <div style={{ marginRight: "10px", flex: 1 }}>
          <label>Frequency:</label>
        </div>
      </div>

      {/* Rating Inputs */}
      <div
        style={{ maxHeight: "300px", overflowY: "auto", marginBottom: "20px" }}
      >
        {ratings.map((entry, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <div style={{ marginRight: "10px", flex: 1 }}>
              <input
                type="number"
                value={entry.rating}
                onChange={(e) => {
                  const updatedRatings = [...ratings];
                  updatedRatings[index].rating = e.target.value;
                  setCustomProblemsetData({
                    ...customProblemsetData,
                    ratings: updatedRatings,
                  });
                }}
                style={{ width: "100%" }}
              />
            </div>
            <div style={{ marginRight: "10px", flex: 1 }}>
              <input
                type="text"
                value={entry.frequency}
                onChange={(e) => {
                  const updatedRatings = [...ratings];
                  updatedRatings[index].frequency = e.target.value;
                  setCustomProblemsetData({
                    ...customProblemsetData,
                    ratings: updatedRatings,
                  });
                }}
                style={{ width: "100%" }}
              />
            </div>
            <button
              onClick={() => {
                const updatedRatings = ratings.filter((_, i) => i !== index);
                setCustomProblemsetData({
                  ...customProblemsetData,
                  ratings: updatedRatings,
                });
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setCustomProblemsetData({
            ...customProblemsetData,
            ratings: [...ratings, { rating: "", frequency: "" }],
          });
        }}
      >
        + Add Rating
      </button>

      {/* Usernames Section */}
      <h3>Codeforces Usernames</h3>
      <div style={{ maxHeight: "200px", overflowY: "auto" }}>
        {usernames.map((username, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              value={username}
              onChange={(e) => {
                const updatedUsernames = [...usernames];
                updatedUsernames[index] = e.target.value;
                setCustomProblemsetData({
                  ...customProblemsetData,
                  usernames: updatedUsernames,
                });
              }}
            />
            <button
              onClick={() => {
                const updatedUsernames = usernames.filter(
                  (_, i) => i !== index
                );
                setCustomProblemsetData({
                  ...customProblemsetData,
                  usernames: updatedUsernames,
                });
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setCustomProblemsetData({
            ...customProblemsetData,
            usernames: [...usernames, ""],
          });
        }}
      >
        + Add Username
      </button>

      {/* Wanted Tags Section */}
      <h3>Wanted Tags</h3>
      <div>
        {Array.isArray(wantedTags) &&
          wantedTags.map((tag, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={tag}
                onChange={(e) =>
                  handleUpdateTag("wantedTags", index, e.target.value)
                }
              />
              <button onClick={() => handleRemoveTag("wantedTags", index)}>
                Remove
              </button>
            </div>
          ))}
      </div>
      <button onClick={() => handleAddTag("wantedTags")}>
        + Add Wanted Tag
      </button>

      {/* Unwanted Tags Section */}
      <h3>Unwanted Tags</h3>
      <div>
        {Array.isArray(unwantedTags) &&
          unwantedTags.map((tag, index) => (
            <div key={index} style={{ marginBottom: "10px" }}>
              <input
                type="text"
                value={tag}
                onChange={(e) =>
                  handleUpdateTag("unwantedTags", index, e.target.value)
                }
              />
              <button onClick={() => handleRemoveTag("unwantedTags", index)}>
                Remove
              </button>
            </div>
          ))}
      </div>
      <button onClick={() => handleAddTag("unwantedTags")}>
        + Add Unwanted Tag
      </button>

      {/* Fetch Problemset Button */}
      <button onClick={generateProblemsetData}>Fetch Custom Problemset</button>

      {/* Display Problemset Links */}
      {problemsetLinks.length > 0 && (
        <div>
          <h3>Generated Problemset Links:</h3>
          <ul>
            {problemsetLinks.map((link, index) => (
              <li key={index}>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProblemsetForm;
