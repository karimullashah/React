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
    <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-400" >
      <img
        className="rounded-lg h-[200px] w-full object-cover"
        alt="res-image"
        src={ImageURL + cloudinaryImageId}
      />
      <Link to={"/Restaurants/" + id}>
        <h4 className="font-bold py-1">{name}</h4>
      </Link>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRatingString + " stars"}</h6>
      <h6>{sla.deliveryTime + " minutes"}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
