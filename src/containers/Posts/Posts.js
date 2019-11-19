import Post from '../../components/Post/Post';
import './Posts.scss';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';


const Posts = ({currentUser}) => {


  
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


//our state has currentUser and that is why we can destructure
//and just use the name of the incoming object

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps)(Posts);
