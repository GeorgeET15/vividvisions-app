// WorkSpace.js
import React from "react";
import Navbar from "../components/Navbar";
import ImageUpload from "../components/ImageUpload";
import { useLocation } from "react-router-dom";

const WorkSpace = () => {
  const location = useLocation();
  const model = location.state || "";

  return (
    <>
      <Navbar />
      <hr />
      <div className="workspace-heading">Workspace</div>
      <div className="workspace">
        <ImageUpload model={model} />
      </div>
    </>
  );
};

export default WorkSpace;
