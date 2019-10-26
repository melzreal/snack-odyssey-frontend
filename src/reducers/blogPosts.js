export default (state = [], action ) => {

	switch(action.type){

		case 'GET_BLOG_POSTS_SUCCESS':
		return action.posts
	
		default:
		return state	
	}

}