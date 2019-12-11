import React, { Component } from 'react';
import './NewPost.scss';
import { connect } from 'react-redux';
import { createPost, resetFormData } from '../../actions/blogPosts';

class NewPost extends Component {
    

state = {
   
        title: '',
        body: '',
        blog_id: ''
    
  }



  handleOnChange = event => {
   
  const { name, value} = event.target
   
   //nested state assignment    
    // const currentFormData = Object.assign(this.state.postFormData, {
    //     postFormData: Object.assign(this.state.postFormData, { 
    //         [name]: value }),
    // });
  
     this.setState( { [name]: value,
     blog_id: this.props.currentUser.id });

  }




  handleOnSubmit = event => {

    event.preventDefault();
    
    this.props.createPost(this.state);   
   

    this.setState({ 
     
        title: '',
        body: '',
        blog_id: ''
    })

  }


  render() {

    const { title, body, blog_id } = this.state;


        return (

        <div className="NewPost">
            <form onSubmit={this.handleOnSubmit}>

                <h1>Add a Post</h1>
            <label htmlFor="title" className="col-md-4 control-label">Title</label>
                <input type="text" 
                name="title" 
                value={title} 
                onChange={this.handleOnChange} />
            <label htmlFor="body" className="col-md-4 control-label">Content</label>
                <textarea rows="4" 
                name="body" 
                value={body} 
                onChange={this.handleOnChange} />

              <input type="hidden" 
              name="blog_id" 
              value={blog_id}  />

                <button type="submit" className="btn btn-default">Add Post</button>
           </form>
            </div>
        );
    
    }
}

const mapStateToProps = ({currentUser}) => {
 

  return {
    currentUser

  }
}



export default connect(mapStateToProps, { createPost, resetFormData})(NewPost);

