import React from 'react';
import './deals.css'


const Deals = ({ onRouteChange }) => {
    return (
        <div className="DealsContainters">
            <div className="DealLeftSide">                    
                <p className="Hotdeals" onClick={() => onRouteChange('hotdeals')}> 
                    <img alt="Hot Deals" src={require('./images/wallpaper4.jpg')} />
                </p>

                <p className="Hotdeals" onClick={() => onRouteChange('newArrivals')}> 
                    <img alt="New Arrival" src={require('./images/wallpaper2.jpg')} />
                </p> 

            </div>
        </div>
    )
}

export default Deals;