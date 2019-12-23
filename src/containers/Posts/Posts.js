import Post from '../../components/Post/Post';
import StarRating from '../Stars/StarRating';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect  } from 'react';
import { resetFormData } from '../../actions/blogPosts';

const Posts = ({currentUser}) => {
  const [posts, setState] = useState([]);

      useEffect(() => {
        if (currentUser) {
          setState(currentUser.attributes.blog.posts)
        }
    }, [currentUser]);

  const flipPosts = () => {
    // console.log(posts)
    let flipped = false;
    if (flipped === false ){
    const sorted = currentUser.attributes.blog.posts.sort((a,b) => a.id < b.id ? 1 : -1)
    setState([...sorted])    
    flipped = true ;
    } else {
      const unflip = currentUser.attributes.blog.posts.sort((a,b) => a.id > b.id ? 1 : -1)
      setState([...unflip])  
      flipped = false ;
    }
  }

  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  let filtered = posts.filter( term => { 
      return term.body.toLowerCase().indexOf(searchTerm.toLowerCase())  !== -1;
  });

   return (
<div>
   <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> 
    { posts ?  filtered.map( 

      (post, i) => { 
       
      return (
      <div className="Posts" key={i}> 
        <Post 
         
          key={post.id}
          title={post.title}
          body={post.body}
          flipPosts={() => flipPosts()}
         
        />
        
        </div>
    
        );
      })  : '' 
   }

    </div>
        );

        
}

const searchPosts = (event, term) => {
  event.preventDefault();
  console.log("yay clicked")
//  let filteredPosts = posts.filter( a => a.contains(searchterm) ? a : '')
//  setState(filteredPosts)

}


const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps, resetFormData )(Posts);
