import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Posts.css';
import { connect } from 'react-redux';
import { getBlogPosts } from '../../actions/blogPosts';


class Posts extends Component {


    selectedPostHandler = ( id ) => {
        this.props.history.push('/' + id);
    }

	componentDidMount(){

		this.props.getBlogPosts();

	}


    render() {
    	const posts = this.props.posts.map( post => { 
		return (
	
			<Post 
				key={post.attributes.id}
				title={post.attributes.title}
				body={post.attributes.body}
				clicked={() => this.selectedPostHandler(post.attributes.id)}/>
	
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

const mapStateToProps = (state) => {
	
	
  return ({	
    posts: state.blogPosts
  })

}


export default connect(mapStateToProps,{ getBlogPosts })(Posts);

