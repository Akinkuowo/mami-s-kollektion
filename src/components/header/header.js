import React from 'react';
import './header.css'

const Header = ({ onRouteChange, isSignedIn, isNotSignedIn }) => {
			if(isSignedIn){
				return (
					<div>	
						<div className="center">
							<div className="lc">
								<div className="logo">
								<p onClick={() => onRouteChange('home')} className="userLogin">Logo</p>
								</div>
		
								<div className='search'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>
		
								<div className="login">
									<div className="loginC">
										<p  className="userLogin">user's name</p>
										<p onClick={() => onRouteChange('home')} className="userLogin">Sign Out</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>

						<div className="center">
							<div className="lcm">
								<div className="logoMobile">
									<p onClick={() => onRouteChange('home')} className="userLogin">Logo</p>
								</div>

								<div className='searchMobile'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>

								<div className="loginMobile">
									<div className="loginC">
									<p  className="userLogin">user's name</p>
										<p onClick={() => onRouteChange('home')} className="userLogin">Sign Out</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);

			}else if(isNotSignedIn){
				return(
					<div>
						<div className="center">
							<div className="lc">
								<div className="logo">
									<p onClick={() => onRouteChange('home')} className="userLogin">Logo</p>
								</div>
		
								<div className='search'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>
		
								<div className="login">
									<div className="loginC">
										<p onClick={() => onRouteChange('login')} className="userLogin">login</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="center">
							<div className="lcm">
								<div className="logoMobile">
									logo
								</div>

								<div className='searchMobile'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>

								<div className="loginMobile">
									<div className="loginC">
										<p onClick={() => onRouteChange('login')} className="userLogin">login</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}else{
				return(
					<div>
						<div className="center">
							<div className="lc">
								<div className="logo">
									logo
								</div>
		
								<div className='search'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>
		
								<div className="login">
									<div className="loginC">
										<p onClick={() => onRouteChange('login')} className="userLogin">login</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>
						
						<div className="center">
							<div className="lcm">
								<div className="logoMobile">
									logo
								</div>

								<div className='searchMobile'>
									<input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search products' />
									<button className="search_button">Search</button>
								</div>

								<div className="loginMobile">
									<div className="loginC">
										<p onClick={() => onRouteChange('login')} className="userLogin">login</p>
										<p className="cart">cart</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			}

		
}

export default Header;