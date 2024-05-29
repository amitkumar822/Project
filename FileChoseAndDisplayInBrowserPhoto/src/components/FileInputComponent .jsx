// FileInputComponent.jsx
import React, { useState } from 'react';

const FileInputComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          className="max-w-full h-auto rounded shadow"
        />
      )}
    </div>
  );
};

export default FileInputComponent;
