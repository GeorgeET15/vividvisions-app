// import React, { useState } from "react";

// function ChangeObjects() {
//   // State variables
//   const [detectedObjects, setDetectedObjects] = useState([]);
//   const [selectedPath, setSelectedPath] = useState("");
//   const [imagePreview, setImagePreview] = useState(""); // State for image preview
//   const [croppedImageURLs, setCroppedImageURLs] = useState([]); // State for cropped image URLs

//   // Function to process uploaded image
//   const processImage = () => {
//     const formData = new FormData();
//     formData.append("image", document.getElementById("image_input").files[0]);

//     fetch("http://127.0.0.1:5000/process_image", {
//       method: "POST",
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Received data from backend:", data); // Log received data
//         setCroppedImageURLs(data); // Update cropped image URLs
//       })
//       .catch((error) => {
//         console.error("Error processing image:", error);
//       });
//   };

//   // Function to handle selection of image and show preview
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     } else {
//       setImagePreview("");
//     }
//   };

//   // Function to handle selection of detected objects
//   const handleDetectedObjectsChange = (event) => {
//     const selectedPath = event.target.value;
//     setSelectedPath(selectedPath);
//   };

//   return (
//     <div className="output">
//       <h1>YOLO Object Detection</h1>
//       <hr />
//       <div className="change-container">
//         {/* Image Preview */}
//         {imagePreview && (
//           <div className="change-image-container">
//             <img
//               src={imagePreview}
//               alt="Selected Image"
//               className="change-preview-image"
//             />
//           </div>
//         )}

//         {/* Buttons */}
//         <div className="change-button-container">
//           <form id="upload_form" encType="multipart/form-data">
//             <input
//               type="file"
//               name="image"
//               id="image_input"
//               onChange={handleImageChange}
//               onClick={() =>
//                 alert(
//                   "The AI-generated image is automatically downloaded. Please upload the image here."
//                 )
//               }
//             />
//             <button
//               className="upload-button"
//               type="button"
//               onClick={processImage}
//             >
//               Process Image
//             </button>
//           </form>
//         </div>

//         {/* Dropdown for detected objects */}
//         <select id="detected_objects" onChange={handleDetectedObjectsChange}>
//           <option>Select</option>
//           {croppedImageURLs.map((url, index) => (
//             <option key={index} value={url}>
//               {url}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// }

// export default ChangeObjects;

import React from "react";

const ChangeObjects = () => {
  return (
    <div>
      <h1>Website Renderer</h1>
      <iframe
        src="http://127.0.0.1:5500/python/templates/object_detection_index.html"
        title="Website"
        style={{ width: "100%", height: "500px", border: "none" }}
      />
    </div>
  );
};

export default ChangeObjects;
