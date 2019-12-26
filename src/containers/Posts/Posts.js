import Post from '../../components/Post/Post';
import StarRating from '../Stars/StarRating';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect  } from 'react';
import { resetFormData } from '../../actions/blogPosts';


const Posts = ({currentUser}) => {
  const [posts, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');


    // check if the currentUser exists in the redux store
    // grab posts from redux into a local state called posts 
    // then run portfolio state exercises using hooks


      useEffect(() => {
        if (currentUser) {
          setState(currentUser.attributes.blog.posts)
        }
    }, [currentUser]);

  const flipPosts = () => {  
    let flipped = false;
    if (!flipped){
      let sorted = posts.sort((a,b) => a.id < b.id ? 1 : -1)
      setState([...sorted])  
      flipped = true;
    } else {
      let unsorted = posts.sort((a,b) => a.id > b.id ? 1 : -1)
      setState([...unsorted])  
      flipped = false;
    }

  }
 
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };


  let filtered = posts.filter(term => { 
      return term.title.toLowerCase().indexOf(searchTerm.toLowerCase())  !== -1;
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



const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}


export default connect(mapStateToProps, resetFormData )(Posts);
