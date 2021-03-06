import Post from '../../components/Post/Post';
import './Posts.scss';
import { connect } from 'react-redux';
import React, { useState, useEffect  } from 'react';
import { resetFormData } from '../../actions/blogPosts';


const Posts = ({currentUser}) => {
  const [posts, setState] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  let [flipped, setFlipped] = useState(false)
    // const [votingSystem, setVotes] =  useState({ postCollection: [{ postId: '', votes: '' }]})
    
    useEffect(() => {
        if (currentUser) {
          setState(currentUser.attributes.blog.posts)
        }
    }, [currentUser]);

  const flipPosts = () => {  
    
    if (!flipped){
      let sorted = posts.sort((a,b) => a.id < b.id ? 1 : -1)
      setState([...sorted])  
      setFlipped(true);
    } else {
      let unsorted = posts.sort((a,b) => a.id > b.id ? 1 : -1)
      setState([...unsorted])  
      setFlipped(false);
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
