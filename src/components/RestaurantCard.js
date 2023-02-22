import { IMG_SRC } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <>
      <div className="w-64 h-80 mx-4 my-2 bg-pink-100 font-sans rounded-lg shadow-lg overflow-hidden">
        <img src={IMG_SRC + cloudinaryImageId} className="object-cover" />
        <div className="p-2">
          <h2 className="text-xl font-bold mb-2 mt-1">{name}</h2>
          <h3>Cuisine: {cuisines.join(", ")}</h3>
          <h4>Rating: {avgRating} stars</h4>
        </div>
      </div>
    </>
  );
};

export const ShimmerCard = () => {
  return (
    <>
      <div className="w-64 h-80 mx-4 my-2 bg-gray-200 rounded-lg overflow-hidden">
        {/* <img alt = "" src={} /> */}
        <h2>{}</h2>
        <h3>{}</h3>
        <h4>{}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
