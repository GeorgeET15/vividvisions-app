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

  const changeObjects = () => {
    console.log("Changing object functionality will be implemented.");
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
