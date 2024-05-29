import React, { useState, useCallback } from 'react';
import imageCompression from 'browser-image-compression';
import Cropper from 'react-easy-crop';
import getCroppedImg from './CropImage';

const FileInputComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState(null);
  const [aspect, setAspect] = useState(4 / 3); // Default aspect ratio

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Compress the image
      const compressedFile = await imageCompression(file, { maxSizeMB: 1, maxWidthOrHeight: 1024 });
      
      // Create a URL for the compressed image
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(compressedFile);
    }
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(selectedImage, croppedArea);
      setCroppedImage(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [selectedImage, croppedArea]);

  const handleAspectRatioChange = (e) => {
    const value = e.target.value;
    setAspect(value === 'free' ? null : parseFloat(value));
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
        <div className="relative w-96 h-96">
          <Cropper
            image={selectedImage}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropComplete}
          />
        </div>
      )}
      <div className="flex justify-center space-x-2 mt-4">
        <label className="flex items-center space-x-2">
          <span>Zoom:</span>
          <input
            type="range"
            value={zoom}
            min={1}
            max={3}
            step={0.1}
            onChange={(e) => setZoom(e.target.value)}
            className="w-24"
          />
        </label>
        <label className="flex items-center space-x-2">
          <span>Aspect Ratio:</span>
          <select
            value={aspect || 'free'}
            onChange={handleAspectRatioChange}
            className="border rounded p-1"
          >
            <option value={1}>1:1</option>
            <option value={4 / 3}>4:3</option>
            <option value={16 / 9}>16:9</option>
            <option value="free">Free</option>
          </select>
        </label>
      </div>
      <button
        onClick={showCroppedImage}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Crop Image
      </button>
      {croppedImage && (
        <img
          src={croppedImage}
          alt="Cropped"
          className="mt-4 max-w-full h-auto rounded shadow"
        />
      )}
    </div>
  );
};

export default FileInputComponent;
