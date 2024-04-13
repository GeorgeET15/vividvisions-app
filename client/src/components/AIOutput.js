import React, { useState } from "react";
import axios from "axios";

const AIOutput = ({ imgUrl, prompt }) => {
  const [generatedImageUrl, setGeneratedImageUrl] = useState("");

  const handleGenerateAI = async () => {
    console.log(imgUrl);
    console.log(prompt);
    try {
      const response = await axios.post(
        "http://localhost:8000/generateAIContent",
        {
          imgUrl,
          prompt,
        }
      );

      const { imageUrl } = response.data;
      setGeneratedImageUrl(imageUrl);
      console.log("AI content generated successfully!");
    } catch (error) {
      console.error("Error generating AI content:", error);
    }
  };

  return (
    <div>
      <button onClick={handleGenerateAI}>Generate AI Content</button>
      {generatedImageUrl && (
        <img src={generatedImageUrl} alt="Generated Image" />
      )}
    </div>
  );
};

export default AIOutput;
