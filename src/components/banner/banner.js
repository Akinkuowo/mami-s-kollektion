import React from 'react';
import './banner.css';

import { Slide } from 'react-slideshow-overlay';

import slide_1 from './images/sales.jpg';
import slide_2 from './images/image_4.jpg';
import slide_3 from './images/wallpaper3.jpg';


 
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}


 
const Banner = ({ onRouteChange }) =>   {
    return (
            <div>
                <Slide {...properties}>
                    <div className="each-slide">
                        <div style={{ backgroundImage: `url(${slide_1})` }}>
                            <span onClick={()=> onRouteChange('bags')} > Shop Now </span>                            
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ backgroundImage: `url(${slide_2})` }}>
                            <span onClick={()=> onRouteChange('shoes')} >Shop Now </span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div style={{ backgroundImage: `url(${slide_3})` }}>
                            <span onClick={()=> onRouteChange('clothes')}> Shop Now </span>
                        </div>
                    </div>
                </Slide>
            </div>
    )
    
}

export default Banner;