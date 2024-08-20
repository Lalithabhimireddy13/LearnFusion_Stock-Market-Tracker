import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const API_KEY = '9YF4UW6A3W98HU9R';
        const url = `https://newsapi.org/v2/everything?q=stock market&apiKey=${API_KEY}`;
        const result = await axios.get(url);
        
        // If the articles array exists and is not empty, set it to state
        if (result.data.articles && result.data.articles.length > 0) {
          setNews(result.data.articles);
        } else {
          console.error('No articles found in the response');
        }
      } catch (error) {
        console.error('Error fetching news:', error);
        setNews([]); // Optionally set an empty array or a message
      }
    };
  
    fetchNews();
  }, []);
  
  return (
    <div>
      <h2>Financial News</h2>
      {news.length > 0 ? (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <a href={article.url}>{article.title}</a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
  
};

export default News;
