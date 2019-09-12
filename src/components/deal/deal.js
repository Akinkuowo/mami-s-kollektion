import React from 'react';
import './deal.css'


const Deal = ({ onRouteChange }) => {
    return (
        <div className="DealsContainters">
            <div className="DealLeftSide">
                    <p className="Hotdeals" onClick={() => onRouteChange('hotdeals')}>
                        <img alt="Hot Deals" src={require('./images/image_4.jpg')} />
                    </p>

                    <p className="Hotdeals" onClick={() => onRouteChange('hotdeals')}  >
                        <img alt="New Arrival" src={require('./images/image_4.jpg')} />
                    </p > 


            </div>
        </div>
    )
}

export default Deal;