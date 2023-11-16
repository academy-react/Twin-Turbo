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

// customAxios.interceptors.request.use((req)=> {
//     req.headers["Authorization"] = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4ZDQxY2QzNi05NDY3LTRmNmYtOGZmNC05MzE1NTk4NzM2YTEiLCJqdGkiOiJkOWYzNDlhNy1mOGQ2LTRjMzMtOGEzZS04OTI3Mzg1YjJlMmMiLCJlbWFpbCI6InN0b3JteXN0b3JteTY0QGdtYWlsLmNvbSIsIlVpZCI6InNNMzV5SnBHSFFaMk84RXFRNHg2K05maGdJcHdjRVlmelMxSm1DRTEwaUk9RXM3ODg5MjA4ZWYxNmMzZjRkNmM2M2FkNGZmNGI1MTE5NWJkYjU1NzAxYmMyNzEwN2QyYTQyM2FlNzI2Yzk5YzkyYjQ4ZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6WyJTdHVkZW50IiwiQWRtaW5pc3RyYXRvciIsIlRlYWNoZXIiXSwiZXhwIjoxNzAwMjE2ODg2LCJpc3MiOiJTZXBlaHJBY2FkZW15IiwiYXVkIjoiU2VwZWhyQWNhZGVteSJ9.YSaAoIUKygmMW0SnFC3wipumf51Ll7NXFHdhAngbdEc"
//     return req
// })



export default customAxios