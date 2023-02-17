import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchTxt, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.2976944&lng=73.203784&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    //Optional Chaining
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Need to filter the data
            setFilteredRestaurants(
              allRestaurants.filter((e) =>
                e.data.name.toLowerCase().startsWith(searchTxt.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants.length === 0 ? (
          <h1>No Match Found!</h1>
        ) : (
          filteredRestaurants.map((item) => (
            <Link to={"restaurant/" + item.data.id} key={item.data.id}>
              <RestaurantCard {...item.data} />
            </Link>
          ))
        )}
        {/* <RestaurantCard {...restaurantList[0]} /> */}
      </div>
    </>
  );
};

export default Body;
