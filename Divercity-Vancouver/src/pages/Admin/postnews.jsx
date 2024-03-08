import React, { useState } from 'react';
import AdminNavber from "../../components/adminNavber.jsx";
import { Button } from "../../components/ui/button.jsx";
import { Input } from "../../components/ui/input.jsx";
import { Textarea } from "../../components/ui/textarea.jsx";
import { Switch } from "../../components/ui/switch.jsx";
import { Label } from "../../components/ui/label.jsx";
import { Link } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

export default function PostNews() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [newsTitle, setNewsTitle] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [isBreaking, setIsBreaking] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleUpload = async () => {
    const news = {
      title: newsTitle,
      content: newsContent,
      isBreaking: isBreaking,
      news_image: selectedImage,     
    };
    
    try {
      const docRef = await addDoc(collection(db, 'news'), news);
      console.log("Document written with ID: ", docRef.id);
      setUploadSuccess(true);
      // Clear all input fields after 3 seconds
      setTimeout(() => {
        clearInputs();
        setUploadSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const clearInputs = () => {
    setNewsTitle('');
    setNewsContent('');
    setIsBreaking(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Post News</h2>
          <Link to={'/'}>
            <Button className="bg-bluee rounded-lg shadow-lg h-13">
              <div className="flex items-center justify-center">
                <Signout />
                <p>Homepage</p>
              </div>
            </Button>
          </Link>
        </div>
        <div className='p-5 border border-black rounded-lg'>
          <div className="flex flex-col space-y-4">
            {uploadSuccess ? (
              <div className="flex items-center justify-center h-96">
                <p className="text-green-500 text-2xl">Upload successful</p>
              </div>
            ) : (
              <div className="relative flex flex-col items-center justify-center border-dashed border-2 rounded-lg h-96 mb-6">
                {selectedImage ? (
                  <img src={selectedImage} alt="Uploaded News" className="h-full w-full object-fit rounded-lg" />
                ) : (
                  <>
                    <label htmlFor="upload-photo" className="cursor-pointer flex flex-col items-center justify-center">
                      <PlusIcon className="h-24 w-24 text-gray-400 mb-2" />
                      <p className="text-gray-400">Click to add picture</p>
                    </label>
                    <input type="file" id="upload-photo" name="upload-photo" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </>
                )}
              </div>
            )}
            <Input placeholder="News Title" value={newsTitle} onChange={e => setNewsTitle(e.target.value)} />
            <Textarea placeholder="News Content" value={newsContent} onChange={e => setNewsContent(e.target.value)} />
            <div className="flex items-center">
              <Switch id="breaking-news" checked={isBreaking} onCheckedChange={setIsBreaking} />
              <Label className="ml-2" htmlFor="breaking-news">
                Is Breaking News?
              </Label>
            </div>
            <div className="flex items-center justify-center space-x-4">              
              <Button variant="outline" className="py-4 px-20" onClick={handleUpload}>Upload</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Signout(props) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="24"
      width="24"
      {...props}
    >
      <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z" />
      <path d="M10.828.122A.5.5 0 0111 .5V1h.5A1.5 1.5 0 0113 2.5V15h1.5a.5.5 0 010 1h-13a.5.5 0 010-1H3V1.5a.5.5 0 01.43-.495l7-1a.5.5 0 01.398.117zM11.5 2H11v13h1V2.5a.5.5 0 00-.5-.5zM4 1.934V15h6V1.077l-6 .857z" />
    </svg>
  );
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
  );
}
