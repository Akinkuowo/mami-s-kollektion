import React from 'react';
import './subscribe.css';

const Subscribe = () =>{
    return(
        <div className="">
            <h3>Subscribe to our NewsLetter!</h3>
          
           <div className='center'>
                <input
                className='SubscribeBox'
                type='text' 
                placeholder='Subscribe to our NewsLetter' 
                />
                <button className="SubscribeButton">Subscribe</button>
            </div>
        </div>
    )
}

export default Subscribe;