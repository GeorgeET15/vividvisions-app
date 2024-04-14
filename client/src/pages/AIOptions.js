// AIOptions.js
import React from "react";
import { useNavigate } from "react-router-dom";

const AIOptions = () => {
  const navigate = useNavigate();

  const clickModal1 = () => {
    const model1 =
      "catio-apps/interioraidesigns-generate:9e0b15ac47a5a6502175cfab3853d88413f4fd4bee8da0509deb0895db96d0a7";
    navigate("/workspace", { state: model1 });
  };

  const clickModal2 = () => {
    const model2 =
      "kjw488/sdxl-demo-ai-interior:8859e91ed00a9fc819f53b36b917b5a23506173c8a96f9a7c7b604ad514b91fc";
    navigate("/workspace", { state: model2 });
  };

  return (
    <div className="aioption-container" id="services-section">
      <h1 className="aioption-heading">Choose an AI model</h1>

      <div className="aioption-image-container">
        <div className="aioption-image-card">
          <div className="aioption-card-content">
            <h2>Redesign your room</h2>
            <p>
              Redesign your existing room into another theme that suites your
              preference.{" "}
            </p>
            <button className="getstarted-button" onClick={clickModal1}>
              Use this AI model ✨
            </button>
          </div>
        </div>
        <div className="aioption-image-card">
          <div className="aioption-card-content">
            <h2>Design your empty room</h2>
            <p>Transform an empty room into a room that you have dreamed of.</p>
            <button className="getstarted-button" onClick={clickModal2}>
              Use this AI model ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIOptions;
