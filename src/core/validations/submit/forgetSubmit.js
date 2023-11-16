import { useParams } from "react-router-dom";
import customAxios from "../../services/interceptor";

const postEmail = async (email,baseUrl) => {

    
    let res = await customAxios.post("/Sign/ForgetPassword",
    {
        email: email,
        baseUrl: baseUrl
    })
    console.log(res);
    alert("لطفا ایمیل خود را چک کنید")

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

    console.log(values.bool);
    if(!values.bool) {
        postEmail(values.email,location.href)
    }
    else if (values.bool) {
        if(values.newPassword.length >= 8){
            postNewPass(values)
            alert("success")
            location.pathname = '/login'
        }
        else alert("رمز باید بیشتر از 8 کلمه باشد")
    }

}

export default forgetSubmit