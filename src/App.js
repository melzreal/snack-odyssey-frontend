import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar';
import { connect } from 'react-redux';
import './App.scss';
import { getCurrentUser } from './actions/currentUser';
import 'font-awesome/css/font-awesome.css';
import './style.scss';


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

