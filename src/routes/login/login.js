import React from 'react';
import './login.css';

class Login extends React.Component {
  render(){
		const { onRouteChange } = this.props
		return (
	 		<div className="br3 shadow-5 mv4 w-100 w-50-m v-25-1 mw5 center SignIn">
	 			<main className="pa4 black-80">
				  <div className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f2 fw6 ph0 mh0 center">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        onChange={this.onEmailChange}
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address" 
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
				        <input 
				        onChange={this.onPasswordChange}
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password" 
				        />
				      </div>
				    </fieldset>
				    <div className="center">
				      <input 
				      onClick={this.onSubit} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" />
				    </div>
				    <div className="lh-copy mt3 center">
				      <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p>
				    </div>
				  </div>
				</main>
		 	</div>
	 	); 	
	}
 	

}


export default Login;
