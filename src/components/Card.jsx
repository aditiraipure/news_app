import React from "react";

const Card = ({ data, searchTerm = "" }) => {
  const readMore = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="cardContainer">
      {Array.isArray(data) && data.length > 0 ? (
  data.map((item, index) => (
    item.urlToImage ? (
      <div className="card" key={index}>
        <img
          src={item.urlToImage}
          alt="news"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/300x200?text=No+Image";
          }}
        />
        <div className="cardContent">
          <a
            className="title"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
          <p>{item.description || "No description available."}</p>
          <button
            onClick={() => window.open(item.url, "_blank")}
            className="readMoreBtn"
          >
            Read more
          </button>
        </div>
      </div>
    ) : null
  ))
) : (
  <p>No news found.</p>
)}
    </div>
  );
};

export default Card;
