import account from '../../services/account';
import customAxios from '../../services/interceptor';

const changePic = async (e,userImage)=> {
    let src = e.target.files[0];

    let imageData = new FormData()
    imageData.append("formFile",src)
    
    let token = localStorage.getItem("token")

    let result = await customAxios.post("/SharePanel/AddProfileImage",imageData,{
        headers : {"Authorization" : "Bearer " + token}
    })
    alert("تغییر یافت")
    // console.log(result);
    
    let myresult = await customAxios.get("/SharePanel/GetProfileInfo",{
        headers : {"Authorization" : "Bearer " + token}
    })
    console.log(myresult);
    userImage.current.src = myresult.currentPictureAddress
}

const editProfileSubmit = async (values,userImage) => {
    // console.log(values);

    let token = localStorage.getItem("token")

    // let result = await customAxios.get("/SharePanel/GetProfileInfo",{
    //     headers : {"Authorization" : "Bearer " + token}
    // })

    // console.log(result);
    let res = customAxios.put("/SharePanel/UpdateProfileInfo",{

        lName : "fgggggggggg",
        fName : "fgggggggggg",
        UserAbout : "Fئئئئئئئئئئئئئئئئئئئئئئئئئئئئئ",
        LinkdinProfile : "https://acadapi.etacorealtime.ir/",
        TelegramLink : "f",
        ReceiveMessageEvent : true,
        HomeAdderess : "farhanguuuuuuuuuu",
        NationalCode : "201326949",
        Gender : true,
        BirthDay : "F",
        Latitude : "12.3",
        Longitude : "14.6",

    },
    {headers : {"Authorization" : "Bearer " + token}}
    )

    // console.log(res);

    // if(values.name.length !== 0){
    //     usename.innerHTML = values.name;
    //     account.username = values.name
    // }
    // picprofile.src = userImage.current.getAttribute("src")
    // account.image = userImage.current.getAttribute("src")
    
    // if(values.email.length !== 0) account.email = values.email
    // if(values.birthDayDate.length !== 0) account.birthDayDate = values.birthDayDate
    // if(values.nationalCode.length !== 0) account.nationalCode = values.nationalCode
    // if(values.phone.length !== 0) account.phone = values.phone
    // if(values.role.length !== 0) account.role = values.role

}

export {changePic , editProfileSubmit}