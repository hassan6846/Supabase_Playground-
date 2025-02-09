import React from "react";
import "./Alluploads.css"; // Import the CSS file

const images = [
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
  "https://i1.sndcdn.com/artworks-000464511288-31uztv-t500x500.jpg",
];

const Alluploads = () => {
  return (
    <div className="uploads-container">
      {/* Page Heading */}
      <h1 className="uploads-heading">My Uploads</h1>

      {/* Masonry Grid */}
      <div className="uploads-grid">
        {images.map((src, index) => (
          <div key={index} className="grid-item">
            <img src={src} alt={`Upload ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alluploads;
