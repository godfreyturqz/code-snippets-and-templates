import React from 'react'
import './styles.css'
import Logic from './logic'


const Cloudinary = () => {

  const {
    handleInput,
    handleUpload,
    images
  } = Logic()
    
    
  return (
    <div className="cloudinary">
      <div>
        <input type="file" onChange={handleInput}/>
        <button onClick={handleUpload}>Upload</button>
      </div>
      {
        images && images.map(item =>
          <div key={item.asset_id}>
            <img
              style={{"width": "300px"}}
              src={item.secure_url}
              alt='sample'
            />
          </div>
        )
      }
    </div>
  )
}

export default Cloudinary
