import React from 'react'

const MemeList = props => {

  console.log(props);

  return (
    <div>
        {props.gifs.map(meme => 
        	
        	<img key={meme.id} src={meme.link} alt={meme.title}/>
        	)
         }
    </div>
  )
}

export default MemeList;