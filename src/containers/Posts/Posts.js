import Post from '../../components/Post/Post';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';


const Posts = ({currentUser}) => {


 // useEffect(() => {
 //  debugger;
 //    // this.props.getCurrentUser()
 //  },[currentUser]);


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
          clicked={() => this.selectedPostHandler(post.id)}/>
        </div>
    
        );
      })  : '' 
   }

    </div>
        );
}


// our state has currentUser and that is why we can destructure
// and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps)(Posts);
