import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

const OutputDisplay = () => {
  const location = useLocation();
  const imgUrl = location.state || "";
  const navigate = useNavigate();

  const backtoWorkspace = () => {
    navigate("/workspace");
  };

  const changeObjects = async () => {
    navigate("/change");
    navigate("/change", { state: imgUrl });

    // Create an image element
    const img = new Image();
    img.crossOrigin = "anonymous"; // Allow downloading images from other origins
    img.src = imgUrl;

    // Wait for the image to load
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });

    // Create a canvas element to draw the image
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);

    // Convert the canvas content to a data URL
    const dataUrl = canvas.toDataURL("image/png");

    // Create a temporary anchor element to trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href = dataUrl;
    downloadLink.download = "generated_image.png";

    // Append the download link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click event on the anchor element to prompt download
    downloadLink.click();

    // Remove the download link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="output">
      <div className="output-header">Output</div>
      <hr />
      <div>
        {imgUrl ? (
          <img
            src={imgUrl}
            alt="Generated Image"
            className="output-image"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              display: "block",
              margin: "auto",
            }}
          />
        ) : (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </div>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        style={{ marginTop: "20px" }}
      >
        <Grid item>
          <button onClick={backtoWorkspace} className="output-button1">
            Redesign
          </button>
        </Grid>
        <Grid item>
          <button onClick={changeObjects} className="output-button2">
            Change Objects
          </button>
        </Grid>
      </Grid>
    </div>
  );
};

export default OutputDisplay;
