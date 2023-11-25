import axios from 'axios'

let token = localStorage.getItem("token")

const customAxios = axios.create({

    baseURL : "https://acadapi.etacorealtime.ir/api"
    
})

const succses = (response)=> {
    return response.data
}

const error = (err) => {
    return Promise.reject(err)
}

customAxios.interceptors.response.use(succses,error)

customAxios.interceptors.request.use((option)=> {
    option.headers["Authorization"] = "Bearer" + token
    return option 
})






export default customAxios