import customAxios from '../../services/interceptor';


let input ;
const changePic = async (e,userImage)=> {

    userImage.current.src = URL.createObjectURL(e.target.files[0])
    input = e.target.files[0]

}

const editProfileSubmit = async (values,userImage) => {
    
    if(input) {
        
        let imageData = new FormData()
        imageData.append("formFile", input)
        
        // await customAxios.delete("/SharePanel/DeleteProfileImage",imageData)
        await customAxios.post("/SharePanel/AddProfileImage",imageData)
        
    }
    
    let res = await customAxios.get("/SharePanel/GetProfileInfo")

    let formData = new FormData();
    formData.append("LName" , values.lName !== "" ? values.lName : res.lName)
    formData.append("FName" , values.fName !== "" ? values.fName : res.fName)
    formData.append("UserAbout" , values.userAbout !== "" ? values.userAbout : res.userAbout)
    formData.append("LinkdinProfile" , values.linkdinProfile !== "" ? values.linkdinProfile : res.linkdinProfile)
    formData.append("TelegramLink" , values.telegramLink !== "" ? values.telegramLink : res.telegramLink)
    formData.append("ReceiveMessageEvent" , values.receiveMessageEvent ? values.receiveMessageEvent : res.receiveMessageEvent)
    formData.append("HomeAdderess" , values.homeAdderess !== "" ? values.homeAdderess : res.homeAdderess)
    formData.append("NationalCode" , values.nationalCode !== "" ? values.nationalCode : res.nationalCode)
    formData.append("Gender" , values.gender ? values.gender : res.gender)
    formData.append("BirthDay" , "2006-10-09")
    formData.append("Latitude" , "12.3")
    formData.append("Longitude" , "14.6")

    customAxios.put("/SharePanel/UpdateProfileInfo",formData,
        {headers : {"Authorization" : "Bearer " + token}}
    )


}

export {changePic , editProfileSubmit}