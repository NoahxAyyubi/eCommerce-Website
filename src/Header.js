import React from 'react';
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";
import './Header.css';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src="/output-onlinepngtools (1) (1).png" alt="Amazon Logo" />
      </Link>
      <div className="header__searchbar">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <nav className="header__nav">
        <Link to="/login" className="header__link">
          <span style={{ fontSize: '12px', fontWeight: 750 }}>
            Hello {user ? user.displayName : 'Guest'}
          </span><br />
          <span style={{ fontSize: '16px', fontWeight: 800 }}>Sign In</span>
        </Link>
        <Link to="/login" className="header__link">
          <span style={{ fontSize: '12px', fontWeight: 750 }}>Returns</span><br />
          <span style={{ fontSize: '16px', fontWeight: 800 }}>& Orders</span>
        </Link>
        <Link to="/login" className="header__link">
          <span style={{ fontSize: '12px', fontWeight: 750 }}>Your</span><br />
          <span style={{ fontSize: '16px', fontWeight: 800 }}>Prime</span>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__cartContainer">
            <ShoppingCartIcon style={{ fontSize: '26px' }} />
            <span style={{ color: 'darkorange', fontSize: '19px' }}>{basket?.length}</span>
          </div>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
