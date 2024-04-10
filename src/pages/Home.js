import React from "react";
import Navbar from "../components/Navbar";
import Example from "../components/Example";
import Prompt from "../components/Prompt";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  const navigate = useNavigate();

  const getStarted = () => {
    navigate("/signup");
  };
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="content">
          <h1 className="website-name">AI for Interior Design</h1>
          <h2 className="tagline">
            Welcome to Vivid Visions, your premier destination for AI-powered
            interior design solutions.
          </h2>
          <button onClick={getStarted} className="getstarted-button">
            Get Started
          </button>
        </div>
      </div>
      <hr />
      <Example />
      <hr />
      <Prompt />
      <Footer />
    </>
  );
};

export default Home;
