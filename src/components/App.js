import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  const deleteListing = (listingId) => {
    fetch(`http://localhost:6001/listings/${listingId}`, {
      method: 'DELETE'
    })
      .then(r => r.json())
      .then(deletedListing => {
        const newListingArr = listings.filter(listing => {
          return listing.id !== listingId
        })
        setListings(newListingArr)
      })
  } 

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(listings => {
        setListings(listings)
      })
    }, [])

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer deleteListing={deleteListing} listings={filteredListings} />
    </div>
  );
}

export default App;
