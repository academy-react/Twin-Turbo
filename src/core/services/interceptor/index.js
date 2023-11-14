import axios from 'axios'


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

// customAxios.interceptors.request.use()



export default customAxios