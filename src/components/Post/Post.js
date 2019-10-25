import React from 'react';

import './Post.css';

const Post = (props) => (
    <article className="Post" onClick={props.clicked}>
    
        <h1>{props.title}</h1>
         <h1>{props.body}</h1>
      
       
    </article>
);

export default Post;