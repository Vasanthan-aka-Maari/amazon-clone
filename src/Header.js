import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const login = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo */}
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header-logo"
        />
      </Link>

      {/* Search bar */}
      <div className="header-searchbar">
        <input type="text" className="header-searchInput" />
        <SearchIcon className="header-searchIcon" />
      </div>

      {/* Links */}
      <div className="header-nav">
        <Link to={!user && "/login"} className="header-link">
          <div onClick={login} className="header-option">
            <span className="header-optionLine1">{`Hello, ${
              user ? user.email : "user"
            }`}</span>
            <span className="header-optionLine2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLine1">Returns</span>
            <span className="header-optionLine2">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header-link">
          <div className="header-option">
            <span className="header-optionLine1">Try</span>
            <span className="header-optionLine2">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header-link">
          <div className="header-optionbasket">
            {/* Number of items in basket */}
            <span className="header-optionLine2 header-basketCount">
              {basket?.length}
            </span>
            {/* Basket Icon */}
            <ShoppingBasketIcon />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
