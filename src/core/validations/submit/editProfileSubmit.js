import account from '../../services/account';
import customAxios from '../../services/interceptor';

const changePic = async (e,userImage)=> {
    let src = e.target.files[0];
    let token = localStorage.getItem("token")
    let imageData = new FormData()
    imageData.append("formFile",src)

    console.log(imageData);

    let result = await customAxios.post("/SharePanel/AddProfileImage",imageData,{
        headers : {"Authorization" : "Bearer " + token}
    })
    console.log(result);
    
    let myresult = await customAxios.post("/SharePanel/GetProfileInfo",{
        headers : {"Authorization" : "Bearer " + token}
    })
    userImage.current.src = myresult.userImage[0].puctureAddress
}

const editProfileSubmit = (values,userImage) => {
    console.log(values);

    if(values.name.length !== 0){
        usename.innerHTML = values.name;
        account.username = values.name
    }
    picprofile.src = userImage.current.getAttribute("src")
    account.image = userImage.current.getAttribute("src")
    
    if(values.email.length !== 0) account.email = values.email
    if(values.birthDayDate.length !== 0) account.birthDayDate = values.birthDayDate
    if(values.nationalCode.length !== 0) account.nationalCode = values.nationalCode
    if(values.phone.length !== 0) account.phone = values.phone
    if(values.role.length !== 0) account.role = values.role
}

export {changePic , editProfileSubmit}