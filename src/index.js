import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import users from './reducers/usersreducer';
import currentUser from './reducers/currentUser';
import loginForm from './reducers/loginReducer';
import blogPosts from './reducers/blogPosts';



const reducer = combineReducers({
	users,
	currentUser, 
	loginForm, 
	blogPosts
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}> 
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	</Provider>, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

