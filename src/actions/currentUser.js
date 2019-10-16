const API_URL = process.env.REACT_APP_API_URL;


//synchronous

export const setCurrentUser = user => {

	return{
		type: "SET_CURRENT_USER",
		user
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
		user.error ? alert("Invalid Credentials") : dispatch(setCurrentUser(user))
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
		user.error ? alert("No user Credentials") : dispatch(setCurrentUser(user))
			})
		
	}
	
}

