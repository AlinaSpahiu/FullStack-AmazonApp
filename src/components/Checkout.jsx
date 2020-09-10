import React from 'react';
import './styles/Checkout.css';
import Subtotal from "./Subtotal";

function Checkout() {
    return (
      
        <div className="checkout">
            <div className="checkout-left">
                {/* Banner - Ad */}
                <img className="checkout-ad" 
                     src="https://www.tea-for-two.com/wp-content/uploads/2013/10/teafortwo_web_banners_rumbo_2_1.gif" />
            
                <div>
                   <h2 className="checkout-title">Your shopping basket</h2>
                </div>
            </div>

           <div className="checkout-right">
               <Subtotal />
               
            </div>
        </div>
    )
}

export default Checkout
