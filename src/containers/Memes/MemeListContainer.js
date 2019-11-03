import React, { Component } from 'react';
import MemeList from '../../components/Meme/MemeListComponent';
import MemeSearch from '../../components/Meme/MemeSearch';


class MemeListContainer extends Component {

  state = {
    gifs: []
  }


  render() {
    return(
      <div>
        <MemeSearch fetchGIFs={this.fetchGIFs} />
        <MemeList gifs={this.state.gifs} />
      </div>
    )
  }


// https://api.imgur.com/3/gallery/t/funny/
//response is in data.items.images.link



fetchGIFs = (tag = "funny") => {

var clientID = process.env.CLIENT_ID;

//we map first through the array of data 
//then within the array of images for each data item
//data.items.filter(meme => (meme.images))
// meme.images[0].link 


fetch(`https://api.imgur.com/3/gallery/t/${tag}/`, {


      method: 'GET',
      headers: {
        "Authorization": "Client-ID 24d509e682e1651" ,
         "Content-Type": "application/json"
      },
        credentials: "same-origin"
      })
      .then(res => res.json())
      .then(({data}) => {
        debugger;
        this.setState({ gifs: data.items.filter( meme => ({ link: meme.images }) ) })
      })
  }
 // fetchGIFs = (query = "pandas") => {
 //    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
 //      .then(res => res.json())
 //      .then(({data}) => {
 //        this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
 //      })
 //  }

  componentDidMount() {
    this.fetchGIFs()
  }


}

export default MemeListContainer;