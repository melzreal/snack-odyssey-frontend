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

	return fetch(`${API_URL}/user`,{
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		}, body: JSON.stringify({email: "bojack@bojack.com", password: "bobo"})
	})
			
		
	}
	
}