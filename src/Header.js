import React from 'react';
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "./StateProvider";


function Header() {
  const [{ basket, user }, dispatch] = useStateValue();


  return ( 

  
    <nav className="header">    
    <Link to ="/">
      <img className="header__logo" src="/output-onlinepngtools (1).png" alt="Amazon Logo" />      
      </Link>


      <div className="header__search">
      <input type="text" className="header__searchInput"/>
      <SearchIcon className="header__searchIcon" />
      </div>
      
      <div className="header__nav">
        <Link to={"/login"} className="header__link">
        <div className="header__option">       
        <span className= "header__option1">Hello User</span>
        <span className="header__option2">Sign in</span>
        </div>
        </Link>

      
        <Link to={"/"} className="header__link">
        <div className="header__option">       
        <span className= "header__option1">Returns</span>
        <span className="header__option2">& Orders</span>
        </div>
        </Link>

      

      
        <Link to={"/"} className="header__link">
        <div className="header__option">       
        <span className="header__option1">Your</span>
        <span className="header__option2">Prime</span>
        </div>
        </Link>
        <Link to={"/checkout"} className="header__link">
    <div className="header__cartContainer">
        <ShoppingCartIcon style={{ fontSize: '28px' }} />
        <span style={{ color: 'darkorange', fontSize: '20px' }}>{basket?.length}</span>
    </div>
</Link>

      </div>




    </nav>
  );
}

export default Header;
