import React from 'react'

const Card = ({ data }) => {
  console.log(data);

   const readMore = (url) => {
     window.open(url);
   }
  
 
  return (
    <div className="cardContainer">
      
      {data.map((item, index) => {
        if (!item.urlToImage) {
          return null
        } else {
          return (
            <div className="card" key={index}>
              <img src={item.urlToImage} alt="news" />
              <div className="cardContent">
                <a className="title" onClick={() => readMore(item.url)}>
                  {item.title}
                </a>
                <p>{item.description}</p>
                <button
                  onClick={() => readMore(item.url)}
                  className="readMoreBtn"
                >
                  Read more
                </button>
              </div>
            </div>
          );
          
        }
          
  })}
    </div>
  );
}

export default Card;