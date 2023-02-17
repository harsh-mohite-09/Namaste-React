import { IMG_SRC } from "../config";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating }) => {
  return (
    <>
      <div className="card">
        <img src={IMG_SRC + cloudinaryImageId} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} stars</h4>
      </div>
    </>
  );
};

export const ShimmerCard = () => {
  return (
    <>
      <div className="card shimmer">
        {/* <img alt = "" src={} /> */}
        <h2>{}</h2>
        <h3>{}</h3>
        <h4>{}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
