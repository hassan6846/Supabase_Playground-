import React, { useState } from "react";
import "./upload.css"; // Import the CSS file

const upload = () => {
  const [selectedImages, setSelectedImages] = useState<any>([]);

  // Handle file selection
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <h2>Upload & Preview</h2>

        {/* File Input */}
        <input type="file" multiple accept="image/*" onChange={handleFileChange} />

        {/* Show Image Names */}
        {selectedImages.length > 0 && (
          <div className="image-names">
            <h4>Selected Images:</h4>
            <ul>
              {selectedImages.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Preview Button */}
        {selectedImages.length > 0 && (
          <button className="preview-btn">Preview</button>
        )}

        {/* Image Previews */}
        <div className="image-preview">
          {selectedImages.map((file, index) => (
            <img key={index} src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
          ))}
        </div>

        {/* Upload Button (Disabled if no image selected) */}
        <button className="upload-btn" disabled={selectedImages.length === 0}>
          Upload
        </button>
      </div>
    </div>
  );
};

export default upload;
