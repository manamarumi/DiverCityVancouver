import React from 'react';
import { Button } from "../../components/ui/button.jsx";

export default function ImageUploader({ selectedImage, setSelectedImage, setUploadSuccess }) {
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
      setUploadSuccess(false); 

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
    setUploadSuccess(false); 
  };

  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center border-dashed border-2 rounded-lg h-96 mb-6">
        {selectedImage ? (
          <img src={selectedImage} alt="Uploaded Event" className="h-full w-full object-fit rounded-lg" />
        ) : (
          <>
            <PlusIcon className="h-24 w-24 text-gray-400" />
            <p className="text-gray-400">Click to add picture</p>
            <Button className="absolute top-0 left-0 w-full h-full opacity-0" variant="ghost">
              <input type="file" id="upload-photo" name="upload-photo" accept="image/*" onChange={handleImageUpload} />
            </Button>
          </>
        )}
      </div>
      {selectedImage && (
        <button onClick={handleImageRemove} className="absolute top-2 right-2 text-red-500 bg-white rounded-full p-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  );
}
}

function PlusIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }
  