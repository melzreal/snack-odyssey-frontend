import Post from '../../components/Post/Post';
import StarRating from '../Stars/StarRating';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect  } from 'react';
import { resetFormData } from '../../actions/blogPosts';

const Posts = ({currentUser}) => {
  const [posts, setState] = useState();

      useEffect(() => {
        if (currentUser) {
          setState(currentUser.attributes.blog.posts)
        }
    }, [currentUser]);

  const ratePost = (currentUser, postID) => {
    // console.log(posts)
    const sorted = currentUser.attributes.blog.posts.sort((a,b) => a.id < b.id ? 1 : -1)
    setState([...sorted])
    
   
   console.log(sorted)

  }
  

   return (
<div>
    { posts ?  posts.map( 

      (post, i) => { 
       
      return (
      <div className="Posts" key={i}> 
        <Post 
         
          key={post.id}
          title={post.title}
          body={post.body}
          
          ratepost={() => ratePost(currentUser, post.id)}
          sortposts={() => sortByRating(posts)}
        />
        
        </div>
    
        );
      })  : '' 
   }

    </div>
        );

        
}




const sortByRating =  posts => {
 
  //sortByrating will sort all posts according to ratepost values
  const sorted = posts.sort((a,b) => a.id < b.id ? 1 : -1)
  console.log(posts)
  // setState(sorted)

}

// our state has currentUser and that is why we can destructure
// and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps, resetFormData )(Posts);
