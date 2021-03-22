import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({deleteListing, listings}) {
  
  return (
    <main>
      <ul className="cards">
        {listings.map(listing => {
          return <ListingCard 
          key={listing.id}
          id={listing.id}
          description={listing.description} 
          image={listing.image}
          location={listing.location}
          deleteListing={deleteListing}
          />
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
