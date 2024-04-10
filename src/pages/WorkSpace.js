import React, { useState } from "react";
import Navbar from "../components/Navbar";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const WorkSpace = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedRoomStyle, setSelectedRoomStyle] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // State to hold the selected image file

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleRoomTypeChange = (event) => {
    setSelectedRoomType(event.target.value);
  };

  const handleRoomStyleChange = (event) => {
    setSelectedRoomStyle(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Read the selected image file and set it to state
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    // Implement your upload logic here
    console.log("Upload functionality will be implemented here");
  };

  // Options for room type dropdown
  const roomTypes = [
    "Living Room",
    "Dining Room",
    "Gaming Room",
    "Bedroom",
    "Bathroom",
  ];

  // Options for room style dropdown
  const roomStyles = [
    "Modern",
    "Neutral",
    "Monochromatic",
    "Complementary",
    "Cyberpunk",
    "Analogous",
    "Warm",
    "Cool",
    "Pastel",
    "Black and white",
    "Earthy",
    "Vintage",
    "Minimalist",
    "Scandinavian",
    "Bohemian",
    "High-Contrast",
    "Bright",
    "Ocean-inspired",
    "Rustic",
    "Tropical",
    "Bold",
    "Jewel-toned",
    "Art Deco",
    "Mediterranean",
    "Traditional",
    "Beachy",
    "Spanish",
    "Swedish",
    "Boho",
    "Victorian gothic",
    "Organic modern",
    "Dark academia",
    "Modern rustic",
    "Art deco modern",
    "Industrial chic",
    "Industrial rustic",
    "Rustic industrial",
    "Eclectic",
    "Victorian",
    "Luxury",
    "Gothic",
    "Moroccan",
    "French",
    "Mexican",
    "50s",
    "60s",
    "70s",
    "80s",
    "90s",
    "Moody",
    "Christmas",
    "Urban",
    "Contemporary",
    "Retro",
    "Whimsical",
    "Zen",
    "Industrial",
    "Biophilic",
    "Farmhouse",
    "Japanese Design",
    "Coastal",
    "Cottagecore",
    "French Country",
    "Maximalist",
    "Art Nouveau",
    "Baroque",
    "Vaporwave",
    "Ski Chalet",
    "Sketch",
    "Tribal",
    "Medieval",
    "Chinese New Year",
    "Halloween",
    "Kelly Wearstler",
    "Nate Berkus",
    "Joanna Gaines",
    "Martyn Lawrence Bullard",
    "Philippe Starck",
    "Emily Henderson",
    "Miles Redd",
    "Victoria Hagan",
    "Tom Dixon",
    "Timothy Corrigan",
    "Axel Vervoordt",
    "Kelly Hoppen",
    "Ilse Crawford",
    "India Mahdavi",
    "David Collins",
    "Thomas O'Brien",
    "Jacques Garcia",
    "Bunny Williams",
    "Kelly Behun",
    "Robert Couturier",
  ];

  return (
    <>
      <Navbar />
      <hr />
      <div className="workspace-heading">Work Space</div>
      <div className="workspace">
        {/* <img src={addImage} alt="img" className="addImg" /> */}
        <button className="workspace-button" onClick={handleModalOpen}>
          <CloudUploadIcon />
        </button>
        <p>Upload a photo of your room to get started</p>
      </div>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close-btn" onClick={handleModalClose}>
              ×
            </span>
            <h2>Upload Image</h2>
            <div className="modal-content">
              {/* Image upload section */}
              <input
                type="file"
                id="fileInput"
                accept="image/*"
                // style={{ display: "none" }}
              />
              {/* <label htmlFor="fileInput" className="file-input-label">
                {" "}
                
                Choose file
              </label> */}

              {/* Image preview section */}
              {selectedImage && (
                <img
                  className="img-preview"
                  src={selectedImage}
                  alt="Preview"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}
              <div class="dropdown-container">
                {/* Room type dropdown */}
                <select
                  value={selectedRoomType}
                  onChange={handleRoomTypeChange}
                  className="dropdown-select"
                >
                  <option value="">Choose your room type</option>
                  {roomTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div class="dropdown-container">
                {/* Room style dropdown */}
                <select
                  value={selectedRoomStyle}
                  onChange={handleRoomStyleChange}
                  className="dropdown-select"
                >
                  <option value="">Choose your room style</option>
                  {roomStyles.map((style, index) => (
                    <option key={index} value={style}>
                      {style}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-actions">
              <button onClick={handleUpload}>Upload</button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WorkSpace;
