import React from 'react';

import Card from '../card/card';
import './cardList.css';


const CardList = ({ products }) => {
    const productComponent = products.map((product, i) =>{
        return(
            <Card key={i} image={products[i].image} name={products[i].name} price={products[i].price} />
        )
    })
    return(
        <div className="Product_Ma Product_Container">
           {productComponent}
        </div>
    )
}

export default CardList;