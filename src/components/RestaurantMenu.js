import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_SRC } from "../config";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const [restaurantInfo, setRestaurantInfo] = useState("");

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=22.2976944&lng=73.203784&menuId=" +
        id
    );
    const json = await data.json();
    console.log(json);
    setRestaurantInfo(json.data);
  }

  return !restaurantInfo ? (
    <h1>Loading...</h1>
  ) : (
    <div className="restaurant-info">
      <div className="restaurant-overview">
        <h1>
          Restaurant: {restaurantInfo ? restaurantInfo.name : "Loading..."}
        </h1>
        <img
          alt="Image"
          src={IMG_SRC + restaurantInfo.cloudinaryImageId}
          className="restaurant-img"
        ></img>
        <h3>Area: {restaurantInfo?.area}</h3>
        <h3>City: {restaurantInfo?.city}</h3>
        <h3>Rating: {restaurantInfo?.avgRating}</h3>
        <h3>Cost for two: {restaurantInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h2>Menu</h2>
        <ol className="menu-list">
          {Object.values(restaurantInfo?.menu?.items).map((item) => (
            <li className="menu-item" key={item.id}>
              {item.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantMenu;
