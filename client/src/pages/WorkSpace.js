import React from "react";
import Navbar from "../components/Navbar";
import ImageUpload from "../components/ImageUpload";

const WorkSpace = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="workspace-heading">Work Space</div>
      <div className="workspace">
        <ImageUpload />
      </div>
    </>
  );
};

export default WorkSpace;
