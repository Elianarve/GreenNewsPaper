import React from 'react'

const Home = () => {
  return (
    <div>Home</div>
  )
}
export default Homeimport React, { useState, useEffect } from 'react';
import { getNews } from '../services/newsServices.js';
import Card from '../components/Card.jsx';


const Home = () => {
 const [news, setNews] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      const newsData = await getNews();
      setNews(newsData);
    };
    fetchData();
 }, []);

 const handleDelete = (id) => {
  setNews(news.filter(item => item.id !== id));
};

 return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">Home con noticias</h1>
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
        {news.map((newsItem) => (
          <Card key={newsItem.id} news={newsItem} onDelete={handleDelete} />
        ))}
      </div>
    </div>
 );
};

export default Home;