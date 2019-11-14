const initialState = []

export default (state = initialState, action ) => {

	switch(action.type){

		case 'GET_BLOG_POSTS_SUCCESS':
		return action.posts

		case 'ADD_POST_SUCCESS':
		//intercept action, see if the action already has post instead of doing it this way
		//then we need to concat the post into the array of blogPosts
		//I still need to check if blogPosts exist at this point to then return the correct state
		//I will then need to update mapStateToProps in posts to make sure the post was received
		//blogPosts: state.blogPosts.concat(post)
		
		const post = state.postFormData
		// return state.currentUser.attributes.posts.concat(post);
		return {...state, post}
	
		//updated data was overriding blogposts, lets try to add former state
		case 'UPDATED_DATA':
		//{...state, action.postFormData}
		return  action.postFormData

		case 'RESET_FORM':
		return initialState;
		

		default:
		return state	
	}

}