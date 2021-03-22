import React, {useState} from "react";

function ListingCard({image, description, location, deleteListing, id}) {
  const [isFaved, setIsFaved] = useState(false)
  const faveListing = () => {
    setIsFaved(!isFaved)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFaved ? (
          <button className="emoji-button favorite active" onClick={faveListing} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={faveListing}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => {deleteListing(id)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
