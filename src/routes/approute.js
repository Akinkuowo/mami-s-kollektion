import React from 'react';

import Bags from './bags';
import Shoes from './shoes';
import Clothes from './clothes';
import FootWear from './footwear';
import HotDeal from './hotdeal';
import Glasses from './glasses';
import WristWatch from './wristwatch';
import Accessories from './accessories';
import Chains from './chains';



const Route = ({ onRouteChange }) => {
    return(
        <div>
            {
                this.state.route === 'bags'
                ?<Bags onRouteChange={onRouteChange}/>
                :(state.route === 'shoes'
                ?<Shoes onRouteChange={onRouteChange}/>
                :(state.route === 'clothes'
                ?<Clothes onRouteChange={onRouteChange} />
                :(state.route === 'footwear'
                ?<FootWear onRouteChange={onRouteChange}/>
                :(state.route === 'hotdeal'
                ?<HotDeal onRouteChange={onRouteChange} /> 
                :(state.route === 'glasses'
                ?<Glasses onRouteChange={onRouteChange} />
                :(state.route === 'wristwatch'
                ?<WristWatch onRouteChange={onRouteChange} />
                :(state.route === 'accessories'
                ?<Accessories onRouteChange={onRouteChange} />
                :<Chains onRouteChange={onRouteChange} />
                )
                )
                )
                )
                )
                )
                )
            }
        </div>
    )
}

export default Route;