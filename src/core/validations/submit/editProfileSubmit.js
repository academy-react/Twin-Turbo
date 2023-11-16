import axios from 'axios';
import account from '../../services/account';

const changePic = async (e,userImage)=> {
    let src = e.target.files[0];

    let imageData = new FormData()
    imageData.append("image",src)


    let result = await axios.post("https://api.admin.sepehracademy.ir/api/upload/image",imageData)
    userImage.current.src = result.data.result
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