import Post from '../../components/Post/Post';
import StarRating from '../Stars/StarRating';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState } from 'react';




const Posts = ({currentUser, postVotes =[]}) => {
  
  const [votes, setState] = useState(0);

  const ratePost = (postId, currentUser) => {
    
    postVotes = { [postId]: votes }
    setState( { [postId]: votes+1 })
    // setState( votes+1 )
     console.log(postVotes)
     console.log("votesState is " + votes)
    
  }

   return (
<div>
    { currentUser ?  
    currentUser.attributes.blog.posts.map( 

      (post, i) => { 
       
      return (
      <div className="Posts" key={i}> 
        <Post 
         
          key={post.id}
          title={post.title}
          body={post.body}
          
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
