import React, {useState, useEffect } from 'react';
import {getNews} from '../services/newsServices.js'
import Card from '../components/Card.jsx';


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
        <Card key={newsItem.id} news={newsItem}/>
      ))}
   </div>
 );
};

export default Home;