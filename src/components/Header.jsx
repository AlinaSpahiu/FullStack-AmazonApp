import React from 'react';
import './styles/Header.css';
import logo from "./images/logo.png";
import {Link} from "react-router-dom"
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "../StateProvider";
import {auth} from "../firebase";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user) {
            auth.signOut();
        }
    }
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
                <Link to={!user && "/login"}>
                <div onClick={handleAuthentication} 
                     className="header-option">
                    <span className="header-optionLineOne"> Hello,</span>
                    <span className="header-optionLineTwo"> {user ? 'Sign Out' : 'Sign In' }</span>
                </div>
                </Link>
                <div className="header-option">
                     <span className="header-optionLineOne"> Returns </span>
                     <span className="header-optionLineTwo"> & Orders</span>
                </div>

                <div className="header-option">
                     <span className="header-optionLineOne"> Your</span>
                     <span className="header-optionLineTwo"> Prime</span>           
                </div>

                <div className='header-option'>
                    <Link to ="/checkout">
                         <ShoppingBasketIcon className="header-optionBasket"/>
                         <span className="header-optionLineTwo header-basketCount">{basket?.length}</span>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Header;