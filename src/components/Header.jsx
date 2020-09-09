import React from 'react';
import './styles/Header.css';
import logo from "./images/logo.png";
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return(
        <div className="header">
            {/* Logo */}
            <Link to="/">
                <img src={logo} className="header-logo" />
            </Link>

            {/* input bar */}
            <div className="header-search">
                <input className="header-searchInput" type="text" /> 
                <SearchIcon className="header-searchIcon" />       
            </div>
            
            {/* Signin ... Cart */}
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne"> Hello Guest</span>
                    <span className="header-optionLineTwo"> SignIn</span>
                </div>

                <div className="header-option">
                     <span className="header-optionLineOne"> Returns </span>
                     <span className="header-optionLineTwo"> & Orders</span>
                </div>

                <div className="header-option">
                     <span className="header-optionLineOne"> Your</span>
                     <span className="header-optionLineTwo"> Prime</span>           
                </div>

                <div className='header-optionBasket'>
                    <Link to ="/checkout">
                         <ShoppingBasketIcon />
                         <span className="header-optionLineTwo header-basketCount"> 0 </span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;