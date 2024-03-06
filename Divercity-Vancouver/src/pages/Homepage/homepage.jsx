import React, { useEffect, useState } from 'react'
import backgroundImage from "../../assets/homepage_background.jpg";
import homepageIcon from "../../assets/homepage_icon.png";
import { NavLink, useLocation, Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { Button } from '../../components/ui/button';
import { CardContent, Card } from "../../components/ui/card"
import { HeartIcon } from "../../components/homepageIcon";
import { getFirestore, collection, query, orderBy, limit, getDocs } from 'firebase/firestore';

export default function Homepage() {

  const [userId, setUserId] = useState(null);
  const [trendingNews, setTrendingNews] = useState([]);
  const [likedEvents, setLikedEvents] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem('userid');
    setUserId(userId);

    const fetchData = async () => {
      try {
        const firestore = getFirestore();
        
        const trendingNewsQuery = query(collection(firestore, 'news'), limit(3));  // Once likes is added add this ← in front of limit3 orderBy('likes', 'desc'),
        const trendingNewsSnapshot = await getDocs(trendingNewsQuery);
        const trendingNewsData = trendingNewsSnapshot.docs.map(doc => doc.data());
        setTrendingNews(trendingNewsData);
        
        const likedEventsQuery = query(collection(firestore, 'event'),limit(3)); // Once likes is added add this ← in front of limit3 orderBy('likes', 'desc'),
        const likedEventsSnapshot = await getDocs(likedEventsQuery);
        const likedEventsData = likedEventsSnapshot.docs.map(doc => doc.data());
        setLikedEvents(likedEventsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();    
  }, [])


  return (
    <div>
      <Navbar />
      <div className="relative h-screen bg-cover bg-center flex justify-center items-center">
        <img className="absolute inset-0 h-full w-full object-cover" src={backgroundImage} alt="Background Image" />
        <div className="flex flex-col text-center items-center justify-center z-10">
          <img className="w-64 h-64 mr-8" src={homepageIcon} alt="Left Image" />
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {trendingNews.map((news, index) => (
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
                    <p className="text-gray-600">{news.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <HeartIcon className="h-6 w-6 text-pink-500" />
                        <span className="ml-1">{news.likes}</span>
                      </div>
                      <Button variant="ghost">Read more</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
          <main className="p-4">
            <h2 className="text-3xl font-bold text-center mb-6">Most Liked Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {likedEvents.map((event, index) => (
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
                    <p className="text-gray-600">{event.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <HeartIcon className="h-6 w-6 text-pink-500" />
                        <span className="ml-1">{event.likes}</span>
                      </div>
                      <Button variant="ghost">Read more</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </main>
        </>
      )}
    </div>  
  )
}