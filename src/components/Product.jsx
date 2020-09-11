import React from 'react'
import "./styles/Product.css"
import StarIcon from '@material-ui/icons/Star';
import {useStateValue} from "../StateProvider";

function Product({id, title, image, price, rating}) {
    
    const [{basket}, dispatch] = useStateValue();
    
    const addToBasket = () => {
        //dispatch the item into the data layer:
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
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

            <button onClick={addToBasket}> Add to basket</button>
        </div>
    )
}

export default Product
