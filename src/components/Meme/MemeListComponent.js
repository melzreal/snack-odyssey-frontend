import React from 'react'


const liStyle = {
   display: 'inline',
   width: 120,
   height: 140,

};

const MemeList = props => {

//there are a lot of images that come back as undefined - hence filter 
// let obj = props.gifs.map((meme) => meme.images)
// .filter(a => a)
// .map( inner => inner.map( i => i.link ))


//2 level nested array of links, we have to iterate through that level
//then grab just one of those links from each inner array using flat

let bo = props.gifs.map((meme) => meme.images).filter(a => a)
let linksies = bo.map( inner => inner.map( i => {
  if ( i.link.includes("jpg")){
    return i.link
  } else {
    return "https://i.imgur.com/ayUNF4o.jpg"
  }
})).flat(0)

let descriptors = bo.map( inner => inner.map( i => {
  if ( i.description !== null ){
    return i.description
  } else {
    return "random meme"
  }
})).flat(0)




  return (

    <div >
    
    {linksies.map((goodie, i) =>
     
      
            <img style={liStyle} key={i} src={goodie} alt={null} />

         
           
         )}
  

       
    </div>
  )
}

export default MemeList;