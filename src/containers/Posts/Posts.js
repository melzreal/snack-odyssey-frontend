import Post from '../../components/Post/Post';
import StarRating from '../Stars/StarRating';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect  } from 'react';


const Posts = ({currentUser, postVotes =[]}) => {
  const [posts, setState] = useState({});
      useEffect(() => {
        if (currentUser) {
          setState(currentUser.attributes.blog.posts)
        }
    }, [currentUser]);

  const ratePost = (currentUser, postID) => {
     
   
   console.log(posts)

   // // setState( votes+1 )
   //  console.log(postVotes)
   //  console.log("votesState is " + votes)
   //sortBlogPosts();
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
          
          ratepost={() => ratePost(currentUser, post.id)}
          sortposts={() => sortByRating(currentUser)}
        />
        
        </div>
    
        );
      })  : '' 
   }

    </div>
        );

        
}




const sortByRating = currentUser => {
  console.log(currentUser)
  //sortByrating will sort all posts according to ratepost values
  console.log(currentUser.attributes.blog.posts.sort((a,b) => a.id < b.id ? 1 : -1))

}

// our state has currentUser and that is why we can destructure
// and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps)(Posts);
