const initialState = []

export default (state = initialState, action ) => {

	switch(action.type){

		case 'GET_BLOG_POSTS_SUCCESS':
		return action.posts

		case 'ADD_POST_SUCCESS':
		const post = state.postFormData
		// return state.currentUser.attributes.posts.concat(post);
		return {...state, post}
	
		case 'UPDATED_DATA':
		return action.postFormData

		case 'RESET_FORM':
		return initialState;
		

		default:
		return state	
	}

}