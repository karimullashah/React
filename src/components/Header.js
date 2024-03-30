import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  // const btnName = "Login";

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
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
