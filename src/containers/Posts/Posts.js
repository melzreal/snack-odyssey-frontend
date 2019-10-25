import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Posts.css';

class Posts extends Component {

    state = {
        posts: []
       
    }

    selectedPostHandler = ( id ) => {
        this.props.history.push('/' + id);
    }

	componentDidMount(){

		
		fetch('http://localhost:3001/api/blogs/1/posts/', {
		method: "GET",
		headers: {
		"Content-Type": "application/json"
		}, 
		body: JSON.stringify()
		})

		.then(resp => resp.json())

		.then(post => { 

			
		    const slicePosts = post.data.slice(0, 6)
		   

		    const freshPosts = slicePosts.map( p => {
		    	 
		        return {

		            ...p.attributes,
		          

		        }
		    })
		this.setState({posts: freshPosts})})
		  


	}


    render() {

	const posts = this.state.posts.map( post => { 
		return (
	
			<Post 
				key={post.id}
				title={post.title}
				body={post.body}
				clicked={() => this.selectedPostHandler(post.id)}/>
	
			);
		});


        return (
            <div>
				<section className="Posts">
					{posts}
				</section>

            </div>
        );
    }
}

export default Posts;

