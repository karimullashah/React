import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import Shimmer from "./Shimmer";
import useRestaurntMenu from "../utils/useRestaurntMenu";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);
  const {id} = useParams();

  const resInfo = useRestaurntMenu();

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[2]?.card.card.info;
  const { itemCards } =
    resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{costForTwoMessage}</h3>
      <h3>Cuisines</h3>
      <ul>
        {cuisines.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((card) => (
          <li key={card?.card?.info?.id}>
            {card?.card?.info?.name} - {"Rs."}
            {card?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
