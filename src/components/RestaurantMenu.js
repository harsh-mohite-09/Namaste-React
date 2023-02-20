// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_SRC } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurant(id);

  return !restaurantInfo ? (
    <h1>Loading...</h1>
  ) : (
    <div className="restaurant-info">
      <div className="restaurant-overview">
        <h1>Restaurant: {restaurantInfo.name}</h1>
        <img
          alt="Image"
          src={IMG_SRC + restaurantInfo.cloudinaryImageId}
          className="restaurant-img"
        ></img>
        <h3>Area: {restaurantInfo?.area}</h3>
        <h3>City: {restaurantInfo?.city}</h3>
        <h3>Rating: {restaurantInfo?.avgRating}</h3>
        <h3>Cost: {restaurantInfo?.costForTwoMsg}</h3>
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
