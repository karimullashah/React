import ImageURL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    sla,
    costForTwo,
  } = resData?.info;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-image"
        src={ImageURL + cloudinaryImageId}
      />
      <h4>{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{avgRatingString + " stars"}</h6>
      <h6>{sla.deliveryTime + " minutes"}</h6>
      <h6>{costForTwo}</h6>
    </div>
  );
};

export default RestaurantCard;
