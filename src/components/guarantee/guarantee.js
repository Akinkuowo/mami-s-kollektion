import React from 'react';

import './guarantee.css';

const Guarantee = () => {
    return(
        <div className="guarantee">
            <div className="guaranteeContainer">
                <div className="delivery">
                    <img alt="Free Delivery" src={require('./images/tracking.png')} />
                    <h4>FREE DELIVERY</h4>
                    <p>
                        We offer FREE DELIVERY to any location in Nigeria.<br />
                        Free Delivery is only applicable to orders from <br />
                        N10,000 and above.
                    </p>
                </div>
                <div className="delivery">
                <img alt="Free Delivery" src={require('./images/clock_1.png')} />
                    <h4>30 DAYS MONEY  BACK</h4>
                    <p>
                       To prove our confidence in the products we.<br />
                        provide and their value to you, we are offering <br />
                        a 30-days, money-back guarantee.
                    </p>
                </div>
                <div className="delivery">
                <img alt="Free Delivery" src={require('./images/customer-service.png')} />
                    <h4>SUPPORT 24/7</h4>
                    <p>
                        Our expectly trained support team is ready to <br />
                        answer your questions and solve your problems <br />
                        24/7 via phone, email or chat.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Guarantee;