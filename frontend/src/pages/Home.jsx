import React, {useState, useEffect } from 'react';
import {getNews} from '../services/newsServices.js'

const Home = () => {
   const [news, setNews] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
        const newsData = await getNews();
        setNews(newsData);
    };
  fetchData();
  },[]);

  return (
    <div>
      <h1>Noticias en Home</h1>
      {news.map(newsItem => (
        <div key={newsItem.id}>
          <h2>{newsItem.title}</h2>
          <p>{newsItem.content}</p>
      </div>
  ))}
  </div>
 );
};

export default Home;