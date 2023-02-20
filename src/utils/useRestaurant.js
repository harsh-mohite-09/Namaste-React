import { useState, useEffect } from "react";
import { RESTUARANT_INFO_URL } from "../config";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  // Get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(RESTUARANT_INFO_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  }

  return restaurant;
};

export default useRestaurant;
