import { useEffect, useState } from 'react';
import Card from './Card';
import Spinner from './Spinner';

const API_KEY = "7b1f70a612cd485c98ff1e57efa324a0";

const NewsApp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  const getData = async (query) => {
    try {
      const encodedQuery = encodeURIComponent(`"${query}"`);
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodedQuery}&language=en&sortBy=relevancy&apiKey=${API_KEY}`
      );
      const jsonData = await response.json();
      setNewsData(jsonData.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    getData(search);
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    if (search.trim() !== "") {
      getData(search.trim());
    }
  };

  const handleCategoryClick = (e) => {
    const category = e.target.value;
    setSearch(category);
    getData(category);
  };

  return (
    <div>
      <nav>
        <div className="navContainer">
          <h1>DailyNews</h1>
          <ul>
            <a href="#all-news">All News</a>
            <a href="#trending">Trending</a>
          </ul>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Search News"
              value={search}
              onChange={handleInput}
            />
            <button onClick={handleSearchClick}>Search</button>
          </div>
        </div>
      </nav>

      <p className="para">Top Headlines</p>

      <div className="categoryContainer">
        <button onClick={handleCategoryClick} value="Sports" className="categoryBtn">
          Sports
        </button>
        <button onClick={handleCategoryClick} value="Politics" className="categoryBtn">
          Politics
        </button>
        <button onClick={handleCategoryClick} value="Entertainment" className="categoryBtn">
          Entertainment
        </button>
        <button onClick={handleCategoryClick} value="Health" className="categoryBtn">
          Health
        </button>
        <button onClick={handleCategoryClick} value="Fitness" className="categoryBtn">
          Fitness
        </button>
      </div>

      <div>
        {newsData ? <Card data={newsData} searchTerm={search} /> : <Spinner />}
      </div>
    </div>
  );
};

export default NewsApp;

