import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AIOutput = ({ imgUrl, prompt }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGenerateAI = async () => {
    setLoading(true);
    navigate("/output");
    try {
      const response = await axios.post(
        "http://localhost:8000/generateAIContent",
        {
          imgUrl,
          prompt,
        }
      );

      const { imageUrl } = response.data;
      navigate("/output", { state: imageUrl }); // Pass imageUrl using state
      console.log("AI content generated successfully!");
    } catch (error) {
      console.error("Error generating AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="ai-output">
      <button
        onClick={handleGenerateAI}
        disabled={loading}
        className="getstarted-button"
        style={{ marginTop: "15px" }}
      >
        Generate AI Content ✨
      </button>
    </div>
  );
};

export default AIOutput;
