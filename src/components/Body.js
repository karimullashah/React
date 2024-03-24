import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    // code here will run after every render
    console.log("after every render", listOfRestaurants);
  });

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            setListOfRestaurants((listOfRestaurants) =>
              listOfRestaurants.filter((res) => res.info.avgRating > 4)
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* RestaurantCard   */}
        {/* dont use index as key, as it is anti pattern */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
