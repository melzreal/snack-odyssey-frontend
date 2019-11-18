import React, { useState } from 'react'

const MemeSearch  = ({fetchGIFs}) => {

    
  const [inputs, setInputs] = useState({});
  

    const handleInputChange = (event) => {
      event.persist();
      setInputs(inputs => ({...inputs, 
        [event.target.name]: event.target.value}));
    }

    const handleSubmit = event => {
      event.preventDefault()
      fetchGIFs(inputs.query);
    }
  
  

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="query" 
          value={inputs.query}
          onChange={handleInputChange} />
        </form>
      </div>
    )
  
}

export default MemeSearch;