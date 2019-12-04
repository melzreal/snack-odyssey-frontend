import Post from '../../components/Post/Post';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState } from 'react';
import { deletePost } from '../../actions/blogPosts';





const Posts = ({currentUser}) => {
  const [state, setState] = useState({votes:0});

  const ratePost = (postId) => {
   
    
    const newVoteValue = state.votes + 1;
    setState({  postID: postId, votes: newVoteValue });
    debugger;
    console.log(state)
    //ratepost will add 1 to the rating of the selectedpost
    // .sort( (a,b) => b.post.id < a.post.id ? b.post.id : a.post.id ) 
  
  }

   return (
<div>
    { currentUser ?  
    
    currentUser.attributes.blog.posts.map( 
      post => { 
  
      return (
      <div className="Posts"> 
        <Post 
         
          key={post.id}
          title={post.title}
          body={post.body}
          clicked={() => deletePost(post.id)}
          ratepost={() => ratePost(post.id)}
          sortposts={() => sortByRating(post.id)}
        
          />

        </div>
    
        );
      })  : '' 
   }

    </div>
        );

        
}





const sortByRating = (postId) => {
  //sortByrating will sort all posts according to ratepost values
}

// our state has currentUser and that is why we can destructure
// and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps)(Posts);
