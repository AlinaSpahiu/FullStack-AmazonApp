import React from 'react'
import "./styles/Product.css"
import StarIcon from '@material-ui/icons/Star';

function Product({title, image, price, rating}) {
    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className="product-price">
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
            </div>

            <div className="product-raiting">
                { Array(rating)
                      .fill()
                      .map((_, i) => (
                        <p> <StarIcon  /> </p>
                      ))
                } 
            </div>

            <img src={image}
                 alt="" />

            <button> Add to basket</button>
        </div>
    )
}

export default Product
