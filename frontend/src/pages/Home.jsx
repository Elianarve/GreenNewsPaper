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

 const handleDelete = (id) => {
  setNews(news.filter(item => item.id !== id));
};

 return (
  <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-neutral-900 py-6 sm:py-12">
    <div className="mx-auto max-w-screen-xl px-4 w-full">
    <h1 className="text-3xl font-bold mb-8 text-white">¡ Bienvenid@ {user && user.name} 👋 !</h1>
    <div className="grid grid-cols-3 gap-4 grid-rows-2">
      {news.map((newsItem, index) => (
        <div key={index}>
          <Card news={newsItem} setReloadingData={setReloadingData} />
        </div>
      ))}
    </div>
    </div>
    </div>
);
};


export default Home;