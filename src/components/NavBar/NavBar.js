import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, NavLink} from 'react-router-dom';

import MemeListContainer from '../../containers/Memes/MemeListContainer';
import Posts from '../../containers/Posts/Posts';
import NewPost from '../../containers/NewPost/NewPost';
import LoginForm from '../Login/LoginForm';
import Logout from '../Logout/Logout';
import './NavBar.scss';



const NavBar = ({currentUser}) => {

	
   return (

   	<div>
   	 <div>
		<header className="Navbar">
			<ul>
					  
				<li> { currentUser ?  
					   <NavLink to="/logout">Logout </NavLink> : 
				       <NavLink to="/login">Login</NavLink>  }  </li>
				<li>   <NavLink to="/posts">Blog</NavLink>       </li>
				<li>   <NavLink to="/new-post">New Post</NavLink>       </li>
				  <li> <NavLink to="/memes">Memes</NavLink></li> <br/>
				<li> { currentUser ? `Hi ${currentUser.attributes.name}`: '' }  </li>
			</ul>
		</header>
			 </div>
		 <Switch>
		  
		  	 <Route  path="/posts" component={Posts} /> 
		  	 <Route  path="/new-post" component={NewPost} />
			 <Route  path="/login" component={LoginForm} />
			 <Route  path="/logout" component={Logout} /> 
			 <Route exact path="/memes" component={MemeListContainer} />
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