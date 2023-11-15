import { useParams } from "react-router-dom";
import customAxios from "../../services/interceptor";

const postEmail = async (email,baseUrl) => {

    
    let res = await customAxios.post("/Sign/ForgetPassword",
    {
        email: email,
        baseUrl: baseUrl
    })
    console.log(res);
    get()
}


const get = async ()=> {
    
    let ConfigValue = location.pathname.slice(location.pathname.lastIndexOf("/")+1)
    let res = await customAxios.get("/Sign/Reset/" + ConfigValue)
    
    sessionStorage.setItem("userId",res.id)
    sessionStorage.setItem("userMessage",res.message)

}


const postNewPass = async (values)=> {

    let userId = sessionStorage.getItem("userId")
    let userMessage = sessionStorage.getItem("userMessage")

    userId = Math.ceil(userId)

    customAxios.post("/Sign/Reset",
    {
      userId: userId,
      newPassword: values.newPassword,
      resetValue: userMessage
    })

}


const forgetSubmit = (values) => {
    postEmail(values.email,location.href)
    if(values.newPassword.length >= 8){
        alert("success")
        postNewPass(values)
        location.pathname = "/login"
    }
    else {
        alert("رمز باید بیشتر از 8 کلمه باشد")
    }

}

export default forgetSubmit