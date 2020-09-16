import React from 'react';
import './styles/Checkout.css';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import image from "../../src/components/images/header-image.jpg"
import { getBasketTotal } from '../reducer';
import {useStateValue} from "../StateProvider";

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout-left">
                {/* Banner - Ad */}
                <img className="checkout-ad" 
                     src="https://www.tea-for-two.com/wp-content/uploads/2013/10/teafortwo_web_banners_rumbo_2_1.gif" />          
                <div>
                   <h3>Hello, {user.email}</h3>
                   <h2 className="checkout-title">Your shopping basket</h2>
                   {/* CheckoutProduct */}
                   {basket.map(item => (
                        <CheckoutProduct
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                         />
                   ))}                     
                </div>
            </div>

           <div className="checkout-right">
               <Subtotal />               
            </div>
        </div>
    )
}

export default Checkout
