import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser';


class App extends Component {

	componentDidMount(){

		 this.props.getCurrentUser()
	}

   render(){

        return (
            <div className="App">
	          <NavBar/>
	          
         	 </div>
                
        );
 
    }
}


export default connect(null, { getCurrentUser })(App);

