import React from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import Logout from './Logout';

const NavBar = ({currentUser}) => {


   return (
    <div className="navbar">
	   
	      	  { currentUser ? `Hi ${currentUser.name}`: '' }
	          { currentUser ? <Logout/> : <LoginForm/> }
	   
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