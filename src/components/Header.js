import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // const btnName = "Login";

  // if no dependency array, useEffect is called on every render
  // if dependency array is empty, useEffect is called on only initial render(just once)
  // if dependency array is [buttonName], then useEffect is called everytime buttonName changes.
  useEffect(() => {
    console.log("useEffect is called basically called after every render");
  }, []);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
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
