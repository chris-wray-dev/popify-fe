import React from 'react';
import './ResultCard.css';

const ResultCard = ({ item }) => {
  let images = [];
  if (item.images) images = item.images;
  return (
    <a href={item.external_urls.spotify} target="blank" style={{ textDecoration: "none" }}>
      <div className="card text-white bg-dark mb-3">
        { images.length > 0 
          ? <img src={images[0].url} className="card-img-top" alt={item.name} />
          : <img src="/images/no-image-available.jpg" alt="no image available" />
        }
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
        </div>
      </div>
    </a>
  );
};

export default ResultCard;
