import React from 'react';

import './Post.scss';

const Post = (props) => (
    <article className="Post" onClick={props.clicked}>
    
        <h1>{props.title}</h1>
        <h1>{props.body}</h1>
       
       <button className="sort" onClick={props.flipPosts}>Flip Posts Order</button>
     
       
    </article>
);

export default Post;