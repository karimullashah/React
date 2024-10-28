import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // const btnName = "Login";

  // if no dependency array, useEffect is called on every render
  // if dependency array is empty, useEffect is called on only initial render(just once)
  // if dependency array is [buttonName], then useEffect is called everytime buttonName changes.
  useEffect(() => {
    console.log("useEffect is called basically called after every render");
  }, []);

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-50 shadow-lg mb-2 sm:bg-yellow-50">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status: {onlineStatus? "✅":"🔴"}
          </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              // btnName = "Logout";
              // console.log(btnName);
              // console.log print Logout, but buttonName will be displayed as Login only this is where state comes into Picture

              setButtonName((name) => (name == "Login" ? "Logout" : "Login"));
            }}
          >
            {buttonName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
