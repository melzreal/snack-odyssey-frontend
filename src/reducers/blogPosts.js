export default (state = [], action ) => {

	switch(action.type){

	
		case 'GET_BLOG_POSTS_SUCCESS':
		return action.posts

		case 'UPDATED_DATA':
		return action.postFormData

		case 'ADD_POST_SUCCESS':
		debugger;
		return state.postFormData


		default:
		return state	
	}

}