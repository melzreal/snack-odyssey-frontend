import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {
    state = {
        blog_id: 1,
        title: '',
        content: '',
      
    }

    newPostHandler = () => {
        debugger;
        const newpost = {
            blog_id: 1,
            title: this.state.title,
            content: this.state.content
          
        }

        fetch('http://localhost:3001/api/blogs/posts', {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newpost)
        })
        .then(resp => resp.json())
        .then(post => { 
            console.log(post)
           })

    }

    componentDidMount(){
        console.log(this.props)
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
               
                <button onClick={this.newPostHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;