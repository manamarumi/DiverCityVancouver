import React, { useState, useEffect } from 'react';
import AdminNavber from "../../components/adminNavber.jsx";
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Editnews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNewsFromFirestore();
  }, []);

  const fetchNewsFromFirestore = async () => {
    try {
      const newsSnapshot = await getDocs(collection(db, 'news'));
      const newsData = newsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setNews(newsData);
    } catch (error) {
      console.error('Error fetching news: ', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminNavber />
      <main className="flex-1 p-5">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">Edit News</h2>
        </div>
        <div className='p-5 border border-black rounded-lg'>
          <div className="flex flex-col space-y-4">
            {/* Render News cards */}
            {news.map(newsItem => (
              <div key={newsItem.id} className="border border-gray-200 rounded-lg p-4">
                <img src={newsItem.news_image} alt={newsItem.title} className="w-full h-32 object-cover mb-4" />
                <h3 className="text-lg font-semibold">{newsItem.title}</h3>
                <Link to={`/editnews/${newsItem.id}`}>
                  <button className="bg-bluee text-white py-2 px-4 rounded-lg">Edit</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
