import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import './Header.css';

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      <div className="header__topContainer">
        
        <Link to="/" >
          <img className="header__logo" src="/output-onlinepngtools (1) (1).png" alt="Amazon Logo" />
        </Link>
        <div className="header__searchbar">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>
      </div>

      <div className="header__nav">
          <Link to="/login" className="header__link">
            <div className="header__option">
              <span className="header__option1">Hello</span>
              <span className="header__option2">Sign In</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__option1">Returns</span>
              <span className="header__option2">& Orders</span>
            </div>
          </Link>
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__option1">Your</span>
              <span className="header__option2">Prime</span>
            </div>
          </Link>
          <Link to={"/checkout"} className="header__link">
    <div className="header__cartContainer">
        <ShoppingCartIcon style={{ fontSize: '26px' }} />
        <span style={{ color: 'darkorange', fontSize: '19px' }}>{basket?.length}</span>
    </div>
</Link>
        </div>
      

    </nav>
  );
}

export default Header;