import { useState } from 'react'
import { ApiRequest } from './services'


const Logic = () => {

    const [file, setFile] = useState('')
    const images = JSON.parse(localStorage.getItem('images'))

    const handleInput = (e) => {
      setFile(e.target.files[0])
    }
  
    const handleUpload = async () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET_NAME)

        try {
            const response = await new ApiRequest().upload(formData)
            if(response.data){
                saveToLocalStorage(response.data)
                window.location.assign('/cloudinary')
            }
        } catch (error) {
            console.log(error)
        }
    }
  
    const saveToLocalStorage = (data) => {
      const keyName = 'images'
      let images = localStorage.getItem(keyName)
      images = images ? JSON.parse(images) : []
      images.push(data)
      localStorage.setItem(keyName, JSON.stringify(images))
    }


    return {
        handleInput,
        handleUpload,
        images
    }
}

export default Logic
