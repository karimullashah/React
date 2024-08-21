import ImageURL from "../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
    id,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-image"
        src={ImageURL + cloudinaryImageId}
      />
      <Link to={"/Restaurants/" + id}>
        <h4>{name}</h4>
      </Link>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRatingString + " stars"}</h6>
      <h6>{sla.deliveryTime + " minutes"}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
