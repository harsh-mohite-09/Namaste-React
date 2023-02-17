import { ShimmerCard } from "./RestaurantCard";

const ShimmerUI = () => {
  return (
    <>
      <input type="text" className="search-input" placeholder="Search" />
      <button className="search-btn">Search</button>
      <div className="card-container">
        {Array(10)
          .fill({})
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        {/* <RestaurantCard {...restaurantList[0]} /> */}
      </div>
    </>
  );
};

export default ShimmerUI;
