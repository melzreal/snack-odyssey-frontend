const initialState = []

export default (state = initialState, action ) => {

	switch(action.type){

		case 'GET_BLOG_POSTS_SUCCESS':
		return action.posts

		case 'ADD_POST_SUCCESS':
		// return state.currentUser.attributes.blog.posts.concat(post);
		
		return [...state, action.post]
	
		//updated data was overriding blogposts, lets try to add former state
		case 'UPDATED_DATA':
		//{...state, action.postFormData}
		return  action.postFormData

		case 'SORT_POSTS_SUCCESS':
		return action.posts
	

		case 'RESET_FORM':
		return initialState;
		

		default:
		return state	
	}

}