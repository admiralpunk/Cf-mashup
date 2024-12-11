import React, { useState } from "react";
import "./ProblemsetForm.css"; // Import the CSS file

const ProblemsetForm = ({
  customProblemsetData,
  setCustomProblemsetData,
  handleGenerateProblemset,
}) => {
  const [problemsetLinks, setProblemsetLinks] = useState([]);

  const {
    ratings,
    usernames,
    wantedTags = [],
    unwantedTags = [],
  } = customProblemsetData;

  const generateProblemsetData = () => {
    const requirements = {};
    ratings.forEach((entry) => {
      if (entry.rating && entry.frequency) {
        requirements[entry.rating] = parseInt(entry.frequency, 10);
      }
    });

    const requestData = {
      users: usernames,
      requirements,
      wantedTags,
      unwantedTags,
    };

    handleGenerateProblemset(requestData).then((response) => {
      const links = response || [];
      setProblemsetLinks(links);
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
    <div className="container">
      <h2 className="heading">Generate Custom Problemset</h2>

      {/* Rating Inputs */}
      <div className="section">
        <h3>Ratings & Frequency</h3>
        {ratings.map((entry, index) => (
          <div key={index} className="inputGroup">
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
              className="input"
            />
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
              className="input"
            />
            <button
              onClick={() => {
                const updatedRatings = ratings.filter((_, i) => i !== index);
                setCustomProblemsetData({
                  ...customProblemsetData,
                  ratings: updatedRatings,
                });
              }}
              className="removeButton"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            setCustomProblemsetData({
              ...customProblemsetData,
              ratings: [...ratings, { rating: "", frequency: "" }],
            });
          }}
          className="addButton"
        >
          + Add Rating
        </button>
      </div>

      {/* Usernames Section */}
      <div className="section">
        <h3>Codeforces Usernames</h3>
        {usernames.map((username, index) => (
          <div key={index} className="inputGroup">
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
              className="input"
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
              className="removeButton"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={() => {
            setCustomProblemsetData({
              ...customProblemsetData,
              usernames: [...usernames, ""],
            });
          }}
          className="addButton"
        >
          + Add Username
        </button>
      </div>

      {/* Wanted Tags Section */}
      <div className="section">
        <h3>Wanted Tags</h3>
        {Array.isArray(wantedTags) &&
          wantedTags.map((tag, index) => (
            <div key={index} className="inputGroup">
              <input
                type="text"
                value={tag}
                onChange={(e) =>
                  handleUpdateTag("wantedTags", index, e.target.value)
                }
                className="input"
              />
              <button
                onClick={() => handleRemoveTag("wantedTags", index)}
                className="removeButton"
              >
                Remove
              </button>
            </div>
          ))}
        <button
          onClick={() => handleAddTag("wantedTags")}
          className="addButton"
        >
          + Add Wanted Tag
        </button>
      </div>

      {/* Unwanted Tags Section */}
      <div className="section">
        <h3>Unwanted Tags</h3>
        {Array.isArray(unwantedTags) &&
          unwantedTags.map((tag, index) => (
            <div key={index} className="inputGroup">
              <input
                type="text"
                value={tag}
                onChange={(e) =>
                  handleUpdateTag("unwantedTags", index, e.target.value)
                }
                className="input"
              />
              <button
                onClick={() => handleRemoveTag("unwantedTags", index)}
                className="removeButton"
              >
                Remove
              </button>
            </div>
          ))}
        <button
          onClick={() => handleAddTag("unwantedTags")}
          className="addButton"
        >
          + Add Unwanted Tag
        </button>
      </div>

      {/* Generate Problemset Button */}
      <button onClick={generateProblemsetData} className="generateButton">
        Fetch Custom Problemset
      </button>

      {/* Display Problemset Links */}
      {problemsetLinks.length > 0 && (
        <div className="linksContainer">
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
