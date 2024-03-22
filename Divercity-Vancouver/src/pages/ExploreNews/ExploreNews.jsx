import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/navbar";
import { doc, getDoc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase";

export default function ExploreNews() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      const newsRef = doc(db, "news", id);
      const newsDoc = await getDoc(newsRef);
      if (newsDoc.exists()) {
        const newsData = newsDoc.data();
        setNews({ id: newsDoc.id, ...newsData });
        setLikes(newsData.likes || 0);
        // Check if event is bookmarked by the current user
        // Assuming user ID is stored in localStorage
        const userId = JSON.parse(localStorage.getItem('userid'));
        if (userId) {
          try {
            const userDocRef = doc(db, "users", userId);
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              // Do something if needed
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
          }
        }
      } else {
        // Handle event not found
        console.log("Event not found");
      }
    };

    getNews();
  }, [id]);

  const handleLike = async () => {
    setIsLiked(!isLiked);
    const newsRef = doc(db, "news", id);
    await updateDoc(newsRef, {
      likes: isLiked ? increment(-1) : increment(1)
    });
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  if (!news) {
    return <div>Loading...</div>; // You can display a loader while fetching the event
  }

  return (
    <div>
      <Navbar />
      <div key={news.id} className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <Link to={"/"}>
            <ArrowLeftIcon className="mt-3 text-blue-500 h-6 w-6" />
          </Link>
        </div>
        <div className="my-6">
          <img
            alt="Event"
            className="rounded-lg"
            height="300"
            src={news.news_image}
            style={{
              aspectRatio: "1343/300",
              objectFit: "cover",
            }}
            width="1343"
          />
          <h1 className="text-4xl font-bold flex justify-between">
            {news.title}
            <button className="p-3" onClick={handleLike}>
              <HeartIcon className={`h-6 w-6 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
            </button>
          </h1>
          <p className="mt-4 text-lg">{news.content}</p>
          <div className="flex justify-between items-center mt-6">

          </div>
        </div>
      </div>
    </div>
  );
}


function ArrowLeftIcon(props) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
