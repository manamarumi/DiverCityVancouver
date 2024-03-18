import React, { useEffect, useState } from 'react'
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { NavLink, useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Button } from '../../components/ui/button';
import { CardContent, Card } from "../../components/ui/card"
import { getFirestore, collection, query, orderBy, limit, getDocs} from 'firebase/firestore';

export default function Homepage() {

  const [userId, setUserId] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);
  const [likes, setLikes] = useState(0);
  const [likedEvents, setLikedEvents] = useState([]);


  useEffect(() => {
    const userId = localStorage.getItem('userid');
    setUserId(userId);

    const fetchData = async () => {
      try {
        const firestore = getFirestore();

        const trendingNewsQuery = query(collection(firestore, 'news'), orderBy('likes', 'desc'), limit(3)); 
        const trendingNewsSnapshot = await getDocs(trendingNewsQuery);
        const trendingNewsData = trendingNewsSnapshot.docs.map(doc => doc.data());
        setTrendingNews(trendingNewsData);

        const likedEventsQuery = query(collection(firestore, 'event'), orderBy('likes', 'desc'), limit(3)); 
        const likedEventsSnapshot = await getDocs(likedEventsQuery);
        const likedEventsData = likedEventsSnapshot.docs.map(doc => doc.data());
        setLikedEvents(likedEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [])

  const handleLike = async () => {
    setIsLiked(!isLiked);
    const eventRef = doc(db, "event", id);
    await updateDoc(eventRef, {
      likes: isLiked ? increment(-1) : increment(1)
    });
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
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
                </Link> : <Link to={'/events'}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              {trendingNews.map((news, index) => (
                <div className="max-w-xs" key={index}>
                  <TrendingNewsCard news={news} handleLike={handleLike} />
                </div>
              ))}
            </div>
          </main>
          <main className="p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Most Liked Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
              {likedEvents.map((event, index) => (
                <div className="max-w-xs " key={index}>
                  <LikedEventsCard event={event} handleLike={handleLike} />
                </div>
              ))}
            </div>
          </main>
        </>
      )}
    </div>
  )
}

function LikedEvents({ event, index }) {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <Card key={index} className="w-full">
      <img
        alt={`Event ${index + 1}`}
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
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span onClick={() => {
              setIsLiked(!isLiked);
              handleLike(id);
            }}>
              <HeartIcon className={`h-6 w-6  ${isLiked ? "text-pink-500" : "text-gray-500"}`} />
            </span>
            <span className="ml-1">{event.likes}</span>
          </div>
          <Button variant="ghost">Read more</Button>
        </div>
      </CardContent>
    </Card>
  )

}
function TrendingNews({ news, index }) {
  const [isLiked, setIsLiked] = useState(false)
  return (
    <Card key={index} className="w-full">
      <img
        alt={`News ${index + 1}`}
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
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <span onClick={() => setIsLiked(!isLiked)}>
              <HeartIcon className={`h-6 w-6  ${isLiked ? "text-pink-500" : "text-gray-500"}`} />
            </span>
            <span className="ml-1">{news.likes}</span>
          </div>
          <Button variant="ghost">Read more</Button>
        </div>
      </CardContent>
    </Card>
  )
}
function BookmarkIcon(props) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
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