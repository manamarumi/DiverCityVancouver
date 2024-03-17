import React, { useEffect, useState } from 'react';
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Button } from '../../components/ui/button';
import { CardContent, Card } from "../../components/ui/card";
import { getFirestore, collection, query, orderBy, limit, getDocs, doc, updateDoc, increment } from 'firebase/firestore';

export default function Homepage() {
  const [userId, setUserId] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const firestore = getFirestore();

        const trendingNewsQuery = query(collection(firestore, 'news'), orderBy('likes', 'desc'), limit(4)); 
        const trendingNewsSnapshot = await getDocs(trendingNewsQuery);
        const trendingNewsData = trendingNewsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTrendingNews(trendingNewsData);

        const likedEventsQuery = query(collection(firestore, 'event'), orderBy('likes', 'desc'), limit(4)); 
        const likedEventsSnapshot = await getDocs(likedEventsQuery);
        const likedEventsData = likedEventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setLikedEvents(likedEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const userId = localStorage.getItem('userid');
    setUserId(userId);
  }, []);

  const handleLike = async (id, collectionName, isLiked) => {
    try {
      const firestore = getFirestore();
      const docRef = doc(firestore, collectionName, id);
      await updateDoc(docRef, {
        likes: isLiked ? increment(-1) : increment(1)
      });
      if (collectionName === 'news') {
        setTrendingNews(prevState =>
          prevState.map(item =>
            item.id === id ? { ...item, likes: isLiked ? item.likes - 1 : item.likes + 1 } : item
          )
        );
      } else if (collectionName === 'event') {
        setLikedEvents(prevState =>
          prevState.map(item =>
            item.id === id ? { ...item, likes: isLiked ? item.likes - 1 : item.likes + 1 } : item
          )
        );
      }
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-cover bg-center flex justify-center items-center">
        <img className="absolute inset-0 h-full w-full object-cover" src={backgroundImage} alt="Background Image" />
        <div className="flex flex-col text-center items-center justify-center z-10">
          <img className="w-64 h-64 mr-8 z-5" src={homepageIcon} alt="Left Image" />
          <div className="flex flex-col justify-center items-center text-white">
            <h1 className="text-7xl font-bold text-gray-800">
              DiverCity Vancouver
            </h1>
            <p className="text-3xl text-gray-900 mt-4">
              The platform for Vancouver events
            </p>
            {
              !userId ?
                <Link to={'/signup'}>
                  <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">
                    Join DiverCity!
                  </Button>
                </Link> :
                <Link to={'/events'}>
                  <Button className="mt-16 bg-bluee text-l text-white px-20 py-2 rounded-lg shadow-lg">
                    Explore DiverCity!
                  </Button>
                </Link>
            }
          </div>
        </div>
      </div>
      {userId && (
        <>
          <main className="p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Trending News</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {trendingNews.map((news, index) => (
                <div key={index}>
                  <TrendingNewsCard news={news} handleLike={handleLike} />
                </div>
              ))}
            </div>
          </main>
          <main className="p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Most Liked Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {likedEvents.map((event, index) => (
                <div key={index}>
                  <LikedEventsCard event={event} handleLike={handleLike} />
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  );
}

function LikedEventsCard({ event, handleLike }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    handleLike(event.id, 'event', isLiked);
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-full">
      <img
        alt={`Event ${event.id}`}
        className="w-full rounded-t-lg"
        height="200"
        src={event.event_image}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <CardContent>
        <h3 className="font-bold">{event.title}</h3>
        <p className="text-gray-600 overflow-hidden max-h-32">{event.description}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button className="p-2" onClick={toggleLike}>
              <HeartIcon className={`h-6 w-6 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
            </button>
            <span className="ml-1">{event.likes}</span>
          </div>
          <div>
            <Link to={`/events/explore/event/${event.id}`}>
              <Button className="bg-bluee text-l text-white px-4 py-2 rounded-lg shadow-lg">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function TrendingNewsCard({ news, handleLike }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    handleLike(news.id, 'news', isLiked);
    setIsLiked(!isLiked);
  };

  return (
    <Card className="w-full">
      <img
        alt={`News ${news.id}`}
        className="w-full rounded-t-lg"
        height="200"
        src={news.news_image}
        style={{
          aspectRatio: "300/200",
          objectFit: "cover",
        }}
        width="300"
      />
      <CardContent>
        <h3 className="font-bold">{news.title}</h3>
        <p className="text-gray-600 overflow-hidden max-h-32">{news.content}</p>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <button className="p-2" onClick={toggleLike}>
              <HeartIcon className={`h-6 w-6 ${isLiked ? 'text-red-500' : 'text-gray-500'}`} />
            </button>
            <span className="ml-1">{news.likes}</span>
          </div>
          <div>
            <Link to={`/news/explore/news/${news.id}`}>
              <Button className="bg-bluee text-l text-white px-4 py-2 rounded-lg shadow-lg">
                Read more
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
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
