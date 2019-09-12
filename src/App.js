import React from 'react';
import  'tachyons';

import Particles from 'react-particles-js';

import './App.css';

import Header from './components/header/header';
import Home from './components/home/home';
import Bags from '../src/routes/bags';
import Shoes from '../src/routes/shoes';
import Clothes from '../src/routes/clothes';
import FootWear from '../src/routes/footwear';
import HotDeal from '../src/routes/hotdeal';
import Glasses from '../src/routes/glasses';
import WristWatch from '../src/routes/wristwatch';
import Accessories from '../src/routes/accessories';
import Chains from '../src/routes/chains';
import Login from '../src/routes/login/login';
import Register from './routes/register/register';
import NewArrivals from './routes/newarrivals';

const ParticlesOptions = {
  particles: {
    number: {
      value: 30
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3ca9d1",
        blur: 5
      }
    }
  } 
}


const initialState = {
  isSignedIn: false,
  isNotSignedIn: true,
	route: 'home'
}

class App extends React.Component{
 constructor(){
   super();
   this.state = initialState
 }

onRouteChange = (route) => {
  this.setState({ route: route})
}


  render(){
      return (
        <div className="App">
          <Header  onRouteChange={this.onRouteChange}/>
          <Particles className="particles" params={ParticlesOptions}/>
          { this.state.route === 'home' 
              ? <Home onRouteChange={this.onRouteChange}/>
              :(this.state.route === 'bags'
              ?<Bags onRouteChange={this.onRouteChange}/>
              :(this.state.route === 'shoes'
              ?<Shoes onRouteChange={this.onRouteChange}/>
              :(this.state.route === 'clothes'
              ?<Clothes onRouteChange={this.onRouteChange} />
              :(this.state.route === 'footwear'
              ?<FootWear onRouteChange={this.onRouteChange}/>
              :(this.state.route === 'hotdeal'
              ?<HotDeal onRouteChange={this.onRouteChange} /> 
              :(this.state.route === 'glasses'
              ?<Glasses onRouteChange={this.onRouteChange} />
              :(this.state.route === 'wristwatch'
              ?<WristWatch onRouteChange={this.onRouteChange} />
              :(this.state.route === 'accessories'
              ?<Accessories onRouteChange={this.onRouteChange} />
              :(this.state.route === 'Chains'
              ?<Chains onRouteChange={this.onRouteChange} />
              :(this.state.route === 'login'
              ?<Login onRouteChange={this.onRouteChange} />
              :(this.state.route === 'register'
              ?<Register onRouteChange={this.onRouteChange} />
              :(this.state.route === 'hotdeals' 
              ?<HotDeal onRouteChange={this.onRouteChange} />
              :(this.state.route === 'newArrivals'
              ?<NewArrivals onRouteChange={this.onRouteChange} />
              :<Home />
              )
              )
              )
              ) 
              )
              )
              )
              )
              )
              )
              )
              )
              )
            } 
        </div>
      );
    }

}

export default App;
