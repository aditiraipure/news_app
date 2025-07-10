import React, { useEffect } from 'react'
import Card from './card';
import { useState } from 'react';


const NewsApp = () => {


  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);
  

  const API_KEY = "7b1f70a612cd485c98ff1e57efa324a0";

  const getData = async() => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
    
    setSearch("");
  }

  useEffect(() => {
    getData();
  }, []);   

  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value); 
  }
  const userInput = (e) => {
    setSearch(e.target.value);
    
   }
  return (
    <div>
      <nav>
        <div className="navContainer">
          <h1>DailyNews</h1>
          <ul>
            <a href="">All news</a>
            <a href=""> Trending</a>
          </ul>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search News"
              value={search}
              onChange={handleInput}
            />
            <button onClick={getData}>Search</button>
          </div>
        </div>
      </nav>
      <div>
        <p className="para">Top-technology Headlines</p>
      </div>
      <div className="categoryContainer">
        <button onClick={userInput} value="Sports" className="categoryBtn">
          Sports
        </button>
        <button onClick={userInput} value="Politics" className="categoryBtn">
          Politics
        </button>
        <button
          onClick={userInput}
          value="Entertainment"
          className="categoryBtn"
        >
          Entertainment
        </button>
        <button onClick={userInput} value="Health" className="categoryBtn">
          Health
        </button>
        <button onClick={userInput} value="Fitness" className="categoryBtn">
          Fitness
        </button>
      </div>
      <div>{newsData ? <Card data={newsData}></Card> : null}</div>
    </div>
  );
}

export default NewsApp