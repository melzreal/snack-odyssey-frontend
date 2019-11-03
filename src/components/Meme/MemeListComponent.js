import React from 'react'

const MemeList = props => {

 

//there are a lot of images that come back as undefined
//so we handle that by using filter to remove undefined values
//then loop through the nested arrays of images returned
//so we can shove those images into an array, making it easier to display them
const linksCollection = []
let bo = props.gifs.map((meme) => meme.images).filter(a => a)


  for(var i = 0; i < bo.length; i++) {
    for(var j = 0; j < bo[i].length; j++) {
       
        linksCollection.push(bo[i][j].link);
        console.log(linksCollection)
    }
  }



  return (

    <div>
        {props.gifs.map(meme => 
          {linksCollection.forEach(a => 
        	

          	<img key={meme.id} src={a} alt={meme.title}/>
          	)
           }
         )}
    </div>
  )
}

export default MemeList;