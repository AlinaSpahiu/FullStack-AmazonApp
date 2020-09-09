import React from 'react';
import headerPhoto from "./images/header-image.jpg";
import Product from "./Product";
import "./styles/Home.css";


function Home(){
    return(
        <div className='home'>
            <div className="home-container">
                <img className="home-image"
                     src={headerPhoto}
                     alt=" "
                 />
            
             <div className="home-row">
                  <Product id="0001"
                           title='The lean start up'
                           price={29.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg'
                           rating={5}
                    />
                  <Product id="0002"
                           title="Samsung LC49RG90SSUXDN 49' Curved LED Gaming Monitor "
                           price={199.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
                           rating={3} 
                   />             
             </div>

             <div className="home-row">
                  <Product id="0002"
                           title="Samsung LC49RG90SSUXDN 49' Curved LED Gaming Monitor "
                           price={199.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
                           rating={3} 
                   /> 
                   <Product id="0001"
                           title='The lean start up'
                           price={29.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/51-cYrw1XpL._AC_SY400_.jpg'
                           rating={5}
                    />
                    <Product id="0002"
                           title="Samsung LC49RG90SSUXDN 49' Curved LED Gaming Monitor "
                           price={199.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
                           rating={3} 
                   /> 
             </div>

             <div className="home-row">
                   <Product id="0002"
                           title="Samsung LC49RG90SSUXDN 49' Curved LED Gaming Monitor "
                           price={199.99}
                           image='https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg'
                           rating={3} 
                   /> 
             </div>
            </div>
        </div>
    )
}

export default Home;