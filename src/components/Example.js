import React from "react";
import before from "../images/Before.jpg";
import after from "../images/After.jpg";

const Example = () => {
  return (
    <>
      <div className="example" id="services-section">
        <h1 className="example-heading">Welcome to Our Design Gallery</h1>

        <div className="image-container">
          <div className="image-card">
            <img className="example-image" src={before} alt="before" />
            <h2>Before</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="image-card">
            <img className="example-image" src={after} alt="before" />
            <h2>After</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Example;
