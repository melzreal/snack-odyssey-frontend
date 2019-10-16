import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';


class App extends Component {

	componentDidMount(){
		this.props.getCurrentUser()
	}

    render() {
        return (
            
            this.props.currentUser ? <Logout/> : <LoginForm/>

                  
           
        );
    }
}

//our state has currentUser and that is why we can destructure
//and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
	return {
		currentUser
	}
}

export default connect(mapStateToProps, { getCurrentUser })(App);

