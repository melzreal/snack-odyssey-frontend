const API_URL = process.env.REACT_APP_API_URL;

//sync

export const updateFormData = postFormData => {
	
	
	return {
		type: 'UPDATED_DATA',
		postFormData
	} 			
  
}


export const resetFormData = () => {
	
	return {
		type: 'RESET_FORM'

	}
}

export const addPost = post => {


	return {
		type: 'ADD_POST_SUCCESS',
		post
	}
}

export const setBlogPosts = posts => {

	return{
		type: "GET_BLOG_POSTS_SUCCESS",
		posts
	}
}


//async actions

export const getBlogPosts = () => {


	return dispatch => {
		return fetch(`${API_URL}/blogs/1/posts/`)
		.then(resp => resp.json())

		.then(posts => {  

		   dispatch(setBlogPosts(posts.data)) })
		.catch(error => console.log(error));
		
	}
	
}



export const createPost = post => {


	return dispatch => {
	
		return fetch(`${API_URL}/blogs/1/posts`, {
			method: "POST",
			headers:{
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({post: post})
		})
		.then(resp => resp.json())
		.then(post => {

			dispatch(addPost(post.data))
			// dispatch(resetFormData())
		})
    }
}




		
		  