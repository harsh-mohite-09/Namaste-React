import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import { ALL_RESTAURANTS_URL } from "../config";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchTxt, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setallRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(ALL_RESTAURANTS_URL);
    const json = await data.json();

    //Optional Chaining
    setallRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!</h1>;
  }

  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-4 shadow-lg">
        <input
          type="text"
          className="p-3"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-3 m-2 text-white bg-purple-500 rounded-lg hover:bg-purple-700"
          onClick={() => {
            // Need to filter the data

            const data = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.length === 0 ? (
          <h1>No Match Found!</h1>
        ) : (
          filteredRestaurants.map((item) => (
            <Link to={"restaurant/" + item.data.id} key={item.data.id}>
              <RestaurantCard {...item.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};
export default Body;
