import React, { useState, useEffect } from 'react';
import { getNews } from '../services/newsServices.js';
import Card from '../components/Card.jsx';
import { useUserContext } from '../context/UserContext';

const Home = () => {
 const [news, setNews] = useState([]);
 const [ reloadingData, setReloadingData  ] = useState(false);
 const { user, setUser  } = useUserContext();

 useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    fetchData();
    setReloadingData(false);
 }, [reloadingData]);

 return (
  <div className="w-full bg-neutral-900 flex justify-center min-h-screen">
    <h1 className="text-2xl font-bold mb-4 text-white text-4xl" >¡Bienvenid@ {user && user.name} 👋!</h1>
    <div className="grid grid-cols-3 gap-4 grid-rows-2">
      {news.map((newsItem, index) => (
        <div key={index}>
          <Card news={newsItem} setReloadingData={setReloadingData} />
        </div>
      ))}
    </div>
  </div>
);
};


export default Home;