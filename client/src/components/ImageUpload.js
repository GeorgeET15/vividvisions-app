import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Modal from "react-modal";
import { storage, firestore } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import CircularProgress from "@mui/material/CircularProgress";
import AIOutput from "./AIOutput";

Modal.setAppElement("#root");

const ImageUpload = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState("");
  const [selectedRoomStyle, setSelectedRoomStyle] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setFile(null);
    setImagePreview(null);
    setLoading(false);
  };

  const handleRoomTypeChange = (event) => {
    setSelectedRoomType(event.target.value);
  };

  const handleRoomStyleChange = (event) => {
    setSelectedRoomStyle(event.target.value);
  };

  const handlePromptChange = (event) => {
    setUserPrompt(event.target.value);
  };

  const handleImageUpload = async (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFile(file);

      const storageRef = ref(storage, `before/${file.name}`);

      try {
        setLoading(true);
        await uploadBytes(storageRef, file);

        const downloadURL = await getDownloadURL(storageRef);

        setImagePreview(downloadURL);
      } catch (error) {
        console.error("Error uploading photo:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image to upload.");
      return;
    }

    if (!selectedRoomType || !selectedRoomStyle) {
      alert("Please select room type and room style.");
      return;
    }

    setLoading(true);

    const folderName = "before";
    const storageRef = ref(storage, `${folderName}/${file.name}`);

    try {
      await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(storageRef);
      console.log("img_url: ", downloadURL);

      const docRef = await addDoc(collection(firestore, "images"), {
        downloadURL,
        roomType: selectedRoomType,
        roomStyle: selectedRoomStyle,
        userPrompt: userPrompt,
      });

      console.log("Document written with ID: ", docRef.id);

      setPrompt(selectedRoomStyle + " " + selectedRoomType + ", " + userPrompt);

      setImageURL(downloadURL);

      setLoading(false);
      closeModal();
    } catch (error) {
      console.error("Error uploading photo:", error);
      setLoading(false);
    }
  };

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
      <button className="workspace-button" onClick={handleModalOpen}>
        <CloudUploadIcon />
      </button>
      <p>Upload a photo of your room to get started</p>

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
                onChange={handleImageUpload}
              />

              {/* Image preview section */}
              {imagePreview && (
                <img
                  className="img-preview"
                  src={imagePreview}
                  alt="Preview"
                  style={{ maxWidth: "100%", marginTop: "10px" }}
                />
              )}

              {/* Prompt input section */}
              <input
                type="text"
                placeholder="Enter a prompt"
                value={userPrompt}
                onChange={handlePromptChange}
                className="prompt-input" // Apply CSS class for styling
              />

              {/* Room type dropdown */}
              <div className="dropdown-container">
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

              {/* Room style dropdown */}
              <div className="dropdown-container">
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
              <button onClick={handleUpload}>
                {loading ? (
                  <CircularProgress size={24} /> // Show loading indicator
                ) : (
                  "Upload"
                )}
              </button>
              <button onClick={handleModalClose}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <AIOutput imgUrl={imageURL} prompt={prompt} />
    </>
  );
};

export default ImageUpload;
