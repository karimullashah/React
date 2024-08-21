import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";

import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );

    // 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=52631&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER'
    const json = await data.json();

    console.log(json);

    setResInfo(json?.data);
  };

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
