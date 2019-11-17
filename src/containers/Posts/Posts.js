import React, { Component } from 'react';
import Post from '../../components/Post/Post';
import './Posts.scss';
import { connect } from 'react-redux';
import { getBlogPosts } from '../../actions/blogPosts';
import { getCurrentUser } from '../../actions/currentUser';


class Posts extends Component {


    selectedPostHandler = ( id ) => {
        this.props.history.push('/' + id);
    }

	componentDidMount(){
		this.props.getBlogPosts(1)
	}


    render() {
    	
    	const posts = this.props.posts.map( post => { 
	
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

const mapStateToProps = (state) => {
	
 switch (state.currentUser) {
    case "null":
      return {
       posts: state.blogPosts
      };
    case !null:
      return {
         currentUser: state.currentUser.id
      };
    default:
      return ({	
      	posts: state.blogPosts,
   	})
  }

}


export default connect(mapStateToProps,{ getBlogPosts, getCurrentUser })(Posts);

