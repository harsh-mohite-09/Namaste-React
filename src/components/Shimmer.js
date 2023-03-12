import { ShimmerCard } from "./RestaurantCard";

const ShimmerUI = () => {
  return (
    <div data-testid="shimmer">
      <div className="p-5 bg-pink-50 my-4 shadow-lg">
        <input type="text" className="p-3" placeholder="Search" />
        <button className="p-3 m-2 text-white bg-purple-500 rounded-lg">
          Search
        </button>
      </div>
      <div data-testid="shimmer-ui" className="flex flex-wrap">
        {Array(10)
          .fill({})
          .map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        {/* <RestaurantCard {...restaurantList[0]} /> */}
      </div>
    </div>
  );
};

export default ShimmerUI;
