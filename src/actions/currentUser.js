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

	console.log("credentials are", credentials)
	console.log(API_URL)
	debugger

	return dispatch => {

	return fetch(`${API_URL}/login`,{
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

