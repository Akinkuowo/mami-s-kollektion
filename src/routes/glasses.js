import React from 'react';

import CardList from '../containers/card/cardList/cardList';

import { products } from '../containers/Database/product/product';

const Glasses = () => {
    return(
        <div className="center">
            <CardList products={products}/>
        </div>
    )
}

export default Glasses;