import { useEffect, useState } from "react";

const useRestaurntMenu = (resId) => {
  // fetch the data

  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetctData();
  }, []);

  fetctData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const json = await data.json();
    setResInfo(json);
  };

  return resInfo;
};

export default useRestaurntMenu;
