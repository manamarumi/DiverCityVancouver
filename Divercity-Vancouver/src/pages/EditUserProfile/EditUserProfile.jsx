import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import Navbar from "../../components/navbar";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export default function EditUserProfile() {
  const [userProfile, setUserProfile] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const userId = JSON.parse(localStorage.getItem("userid"));
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      setUserProfile(userData);
      setSelectedImage(userData.image); // Set selected image from user data
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const updateProfile = async () => {
    const userId = JSON.parse(localStorage.getItem("userid"));
    const docRef = doc(db, "users", userId);

    try {
      const updatedUserProfile = {
        ...userProfile,
        image: selectedImage,
      };

      await updateDoc(docRef, updatedUserProfile);
      alert("Data Saved");
      navigate("/userprofile"); // Navigate to the profile page after data is saved
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex bg-gray-100">
        <nav className="w-64 px-8 py-4 bg-white border-r">
          <div className="flex flex-col space-y-8">
            <div className="space-y-2">
              <Link
                to={"/userprofile"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
              >
                <UserIcon className="text-gray-400" />
                <span>Profile</span>
              </Link>

              <Link
                to={"/subscription"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
              >
                <MailboxIcon className="text-gray-400" />
                <span>Subscription</span>
              </Link>

              <Link
                to={"/changepassword"}
                className="flex items-center space-x-2 text-gray-700 hover:text-black-900"
              >
                <LockIcon className="text-gray-400" />
                <span>Password</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="w-3/4 p-8">
          <div className="flex justify-between">
            <div className="w-1/2 pr-4">
              <div className="flex flex-col items-center pb-6">
                <div className="relative mb-4">
                  <label htmlFor="imageInput">
                    <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200">
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt="Selected Image"
                          className="h-full w-full object-cover rounded-full"
                        />
                      ) : (
                        <CameraIcon className="h-6 w-6 text-gray-600" />
                      )}
                    </div>
                  </label>
                  <input
                    id="imageInput"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </div>
                <Textarea
                  value={userProfile?.description || ""}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, description: e.target.value })
                  }
                  placeholder="Write an introduction"
                />
              </div>
            </div>
            <div className="w-1/2 pl-4">
              <div className="flex flex-col space-y-4">
                <Input
                  value={userProfile?.name || ""}
                  onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                  placeholder="Name"
                />
                <Input
                  value={userProfile?.email || ""}
                  onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                  placeholder="Email"
                  type="email"
                />
                <Input
                  value={userProfile?.phoneNumber || ""}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, phoneNumber: e.target.value })
                  }
                  placeholder="Phone Number"
                  type="number"
                />
                <Input
                  value={userProfile?.address || ""}
                  onChange={(e) => setUserProfile({ ...userProfile, address: e.target.value })}
                  placeholder="Address"
                />
                <Input
                  value={userProfile?.postalCode || ""}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, postalCode: e.target.value })
                  }
                  placeholder="Postal Code"
                />
              </div>
              <div className="flex justify-between mt-6">
                <Button className="w-1/3" variant="outline">
                  Cancel
                </Button>
                <Button className="w-1/3" onClick={updateProfile}>
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CameraIcon(props) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
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

function LockIcon(props) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function MailboxIcon(props) {
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
      <path d="M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z" />
      <polyline points="15,9 18,9 18,11" />
      <path d="M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0" />
      <line x1="6" x2="7" y1="10" y2="10" />
    </svg>
  );
}