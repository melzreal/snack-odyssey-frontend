export const setBlogPosts = posts => {

	return{
		type: "GET_BLOG_POSTS_SUCCESS",
		posts
	}
}


export const getBlogPosts = () => {

	return dispatch => {
		return fetch(`http://localhost:3001/api/blogs/1/posts/`, {
		method: "GET",
		headers: {
		"Content-Type": "application/json"
		}, 
		body: JSON.stringify()
		})
		.then(resp => resp.json())
		.then(posts => {  
			dispatch(setBlogPosts(posts.data)) })
		.catch(error => console.log(error));
		
	}
	
}




		
		  