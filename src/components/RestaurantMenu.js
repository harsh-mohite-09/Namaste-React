// import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_SRC } from "../config";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurantInfo = useRestaurant(id);

  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItem("grapes"));
  // };

  return !restaurantInfo ? (
    <h1>Loading...</h1>
  ) : (
    <div className="flex justify-start">
      <div className="w-[400px] h-fit mr-24 rounded-2xl p-3 bg-red-100">
        <h1 className="text-2xl font-bold mb-5">
          Restaurant: {restaurantInfo.name}
        </h1>
        <img
          alt="Image"
          src={IMG_SRC + restaurantInfo.cloudinaryImageId}
          className="w-full rounded-xl"
        ></img>
        <h3>Area: {restaurantInfo?.area}</h3>
        <h3>City: {restaurantInfo?.city}</h3>
        <h3>Rating: {restaurantInfo?.avgRating}</h3>
        <h3>Cost: {restaurantInfo?.costForTwoMsg}</h3>
      </div>
      <div>
        <h2 className="font-bold text-xl">Menu</h2>
        <ol className="h-[400px] overflow-auto" data-testid="res_menu">
          {Object.values(restaurantInfo?.menu?.items).map((item) => (
            <div className="flex">
              <li className="py-2 my-3 w-64" key={item.id}>
                {item.name}
              </li>
              <button
                data-testid="add-btn"
                className="p-2 m-3 bg-green-100 hover:bg-green-400 h-10 rounded-lg"
                onClick={() => dispatch(addItem(item))}
              >
                Add Item
              </button>
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RestaurantMenu;
