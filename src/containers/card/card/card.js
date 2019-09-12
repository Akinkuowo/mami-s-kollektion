import React from 'react';
import './card.css';

const Card = ({  name, price })=> {
    return(
        <div className="tc bg-light-green pa10 ma3 br3 bw2 dib grow shadow-5 Products_Container">
            <img src={require('./images/bag1.jpg')} alt="products images" />
            <div> 
                <h4 className="Product_Name">{name}</h4>
                <p className="price"> {price}</p>
                <button className="place_Order">Place Your Order</button>
            </div>

        </div>

        );
}


export default Card;