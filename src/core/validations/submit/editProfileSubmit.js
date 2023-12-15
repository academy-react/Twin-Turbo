import { toast } from 'react-toastify';
import { setMyInf } from '../../../screens/Panel';
import customAxios from '../../services/interceptor';

let input ;
let token = localStorage.getItem("token")
const changePic = async (e,userImage)=> {
    
    userImage.current.src = URL.createObjectURL(e.target.files[0])
    input = e.target.files[0]
    
}

const editProfileSubmit = async (values,userImage) => {
    
    console.log(values);
    if(input) {
        
        let imageData = new FormData()
        imageData.append("formFile", input)
        
        // await customAxios.delete("/SharePanel/DeleteProfileImage",imageData)
        customAxios.post("/SharePanel/AddProfileImage",imageData)
        
    }
    
    let res = await customAxios.get("/SharePanel/GetProfileInfo")

    let formData = new FormData();
    formData.append("LName" , values.lName !== "" ? values.lName : res.lName)
    formData.append("FName" , values.fName !== "" ? values.fName : res.fName)
    formData.append("UserAbout" , values.userAbout !== "" ? values.userAbout : res.userAbout)
    formData.append("LinkdinProfile" , values.linkdinProfile !== "" ? values.linkdinProfile : res.linkdinProfile)
    formData.append("TelegramLink" , values.telegramLink !== "" ? values.telegramLink : res.telegramLink)
    formData.append("ReceiveMessageEvent" , values.receiveMessageEvent )
    formData.append("HomeAdderess" , values.homeAdderess !== "" ? values.homeAdderess : res.homeAdderess)
    formData.append("NationalCode" , values.nationalCode !== "" ? values.nationalCode : res.nationalCode)
    formData.append("Gender" , values.gender )
    formData.append("BirthDay" , values.birthDay ? values.birthDay : res.birthDay)
    formData.append("Latitude" , "12.3")
    formData.append("Longitude" , "14.6")

    let update = await customAxios.put("/SharePanel/UpdateProfileInfo",formData,
        {headers : {"Authorization" : "Bearer " + token}}
    )
    if(update.success) {
        let newRes = await customAxios.get("/SharePanel/GetProfileInfo")
        setMyInf(newRes)
        toast.success("عملیات با موفقیت انجام شد")
    }
    else toast.error("خطا در انجام عملیات")

}

export {changePic , editProfileSubmit}