import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Prompt = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Take this empty room and furnish it as a bedroom with a modern, minimalist aesthetic.",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 100,
  });

  return (
    <div className="prompt-container">
      <h1 className="prompt">
        Prompt:
        <span className="prompt-text"> {typeEffect}</span>
        <span className="prompt-cursor">_</span>
      </h1>
    </div>
  );
};

export default Prompt;
