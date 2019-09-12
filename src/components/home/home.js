import React from 'react';

import Banner from '../banner/banner';
import Categoies from '../categories/categories';
import Deals from '../deals/deals';
import Guarantee from '../guarantee/guarantee';
import Deal from '../deal/deal';
import Subscribe from '../subscribe/subscribe';
import Recommended from '../recommended/recommended';
import Footer from '../footer/footer';

const Home = ({ onRouteChange }) => {
    return(
        <div>
            <Banner onRouteChange={onRouteChange}/>
            <Categoies onRouteChange={onRouteChange} />
            <Deals onRouteChange={onRouteChange}/>
            <Deal onRouteChange={onRouteChange}/>
            <Guarantee onRouteChange={onRouteChange}/>
            <Deals onRouteChange={onRouteChange}/>
            <Deal onRouteChange={onRouteChange}/>
            <Recommended onRouteChange={onRouteChange}/>
            <Subscribe />
            <Footer /> 

        </div>
    )
}

export default Home;