import axios from 'axios'

export class ApiRequest {
    constructor(){
        this.url = process.env.REACT_APP_CLOUDINARY_API_URL
    }

    upload(data){
        return axios({
            url: this.url,
            method: 'POST',
            data: data
        })
    }
}
