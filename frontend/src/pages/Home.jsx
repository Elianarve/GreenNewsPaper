import React, { useState, useEffect } from 'react';
import { getNews } from '../services/newsServices.js';
import Card from '../components/Card.jsx';


const Home = () => {
 const [news, setNews] = useState([]);

 const [reloadingData, setReloadingData] = useState(false);

 useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    fetchData();
    setReloadingData(false)
 }, [reloadingData]);

 return (
  <div className="container mx-auto px-4">
    <h1 className="text-2xl font-bold mb-4">Home con noticias</h1>
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