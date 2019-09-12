import React from 'react';

import './categories.css';


const Categoies = ({ onRouteChange }) => {
     return (
       	<div>
           <div className="categoriesHeader">
                <h3>Categories</h3>
           </div>

           <div className="categoriesContainer">
                <div className="firstCategory">
                    <p onClick={() => onRouteChange('clothes')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/dress.png')} />
                        <span>Ladies Wear</span>
                    </p>
                    <p onClick={() => onRouteChange('bags')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/bag.png')} />
                        <span>Ladies bag</span>
                    </p>
                    <p onClick={() => onRouteChange('footwear')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/slipper.png')} />
                        <span>Foot Wear</span>
                    </p>
                    <p onClick={() => onRouteChange('glasses')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/sun-glasses.png')} />
                        <span>Glasses</span>
                        </p>
                </div>
           </div>
              

           <div className="categoriesContainer">
                <div className="SecondCategory">
                    <p onClick={()=> onRouteChange('shoes')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/shoe.png')} />
                        <span>Women Shoes</span>
                    </p>
                    <p onClick={()=> onRouteChange('wristwatch')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/watch.png')} />
                        <span>wrist Watch</span>
                    </p>
                    <p onClick={()=> onRouteChange('accessories')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/jewel.png')} />
                        <span>Accessories</span>
                        </p>
                        <p onClick={()=> onRouteChange('Chains')} className="list"> 
                        <img alt="Ladies wear img" src={require('./images/necklace.png')} />
                        <span>Chains</span>
                    </p>
                </div>
           </div> 
        </div>
        )
}

export default Categoies;