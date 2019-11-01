import React, { Component } from 'react';
import './NewPost.css';
import { connect } from 'react-redux';
import { updateFormData, createPost } from '../../actions/blogPosts';

class NewPost extends Component {
    

  state = { 
   postFormData: {
        title: '',
        body: '',
        blog_id: 1
    }
  }

  handleOnChange = event => {
   
  const { name, value} = event.target
   
   //nested state assignment

    const currentFormData = Object.assign(this.state, {
        postFormData: Object.assign(this.state.postFormData, { 
            [name]: value }),
    });

    //is this necessary or does mapStateToprops do it
     //this.setState(currentFormData);
        

    this.props.updateFormData(currentFormData);
  }




  handleOnSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state.postFormData);   

  }

  render() {


    const { title, body } = this.props;


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
               
                <button type="submit" className="btn btn-default">Add Post</button>
           </form>
            </div>
        );
    
    }
}


const mapStateToProps = (state) => {
   
    
  return ({
    postFormData: state.postFormData 
  })

}



export default connect(mapStateToProps, {updateFormData, createPost})(NewPost);

