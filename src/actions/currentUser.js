import { resetLoginForm } from './loginForm'


const API_URL = process.env.REACT_APP_API_URL;

//synchronous

export const setCurrentUser = user => {

	return{
		type: "SET_CURRENT_USER",
		user
	}
}

export const clearCurrentUser = () => {

	return{
		type: "CLEAR_CURRENT_USER"
	}
}
//asynchronous 

export const login = credentials => {

	return dispatch => {
		return fetch(`${API_URL}/login`,{
			credentials: "include",
			method: "POST",
			headers: {
			"Content-Type": "application/json"
		}, 
		body: JSON.stringify(credentials)
		})
		.then(resp => resp.json())
		.then(user => {
	
		user.error ? alert("Invalid Credentials") : dispatch(setCurrentUser(user.data))
		})
		
	}
	
}




export const logout = () => {
	
	return dispatch => {

		dispatch(clearCurrentUser());
		return fetch(`${API_URL}/logout`,{
			credentials: "include",	
			method: "DELETE"		
		})
		
	}
	
}


export const getCurrentUser = () => {

	return dispatch => {

		return fetch(`${API_URL}/get_current_user`,{
			credentials: "include",
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(resp => resp.json())
		.then(user => {
		
		 if (user.error) { 

			alert(user.error);

	 	  }	else  {
	 	  	
			 dispatch(setCurrentUser(user.data))
			 dispatch(resetLoginForm())
		  }
		})
		
	}
	
}
