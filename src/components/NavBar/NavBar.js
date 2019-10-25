import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link, NavLink} from 'react-router-dom';
import MasterContainer from '../../containers/MasterContainer';
import Posts from '../../containers/Posts/Posts';


import LoginForm from '../Login/LoginForm';
import Logout from '../Logout/Logout';
import './NavBar.css';

const NavBar = ({currentUser}) => {


   return (

   	<div>
   	 <div>
		<header className="Navbar">
			<ul>
					  
				<li> { currentUser ?  
					   <NavLink to="/logout">Logout </NavLink> : 
				       <NavLink to="/login">Login</NavLink>  }  </li>
				<li>   <NavLink to="/home">Home</NavLink>       </li> 
				<li>   <NavLink to="/posts">Blog</NavLink>       </li> <br/>
				<li> { currentUser ? `Hi ${currentUser.name}`: '' }  </li>
			</ul>
		</header>
			 </div>
		 <Switch>
		  	 <Route  path="/home" component={MasterContainer} /> 
		  	 <Route  path="/posts" component={Posts} /> 
			 <Route  path="/login" component={LoginForm} />
			 <Route  path="/logout" component={Logout} /> 
		 </Switch>
	

    </div>
        );
}


//our state has currentUser and that is why we can destructure
//and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
	return {
		currentUser
	}
}


export default connect(mapStateToProps)(NavBar);