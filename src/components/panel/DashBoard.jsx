import DashboardItemLeft from '../common/DashboardItemLeft'
import raiseUp from "../../core/utils/raiseUp.utils"
import { useNavigate } from 'react-router-dom'
import { useEffect , useState } from 'react'
import customAxios from '../../core/services/interceptor'

const DashBoard = () => {

  let navigate = useNavigate()

  const [myInfo, setMyInfo] = useState()

  const getInfo = async () => {
      let result = await customAxios.get("/SharePanel/GetProfileInfo")
      setMyInfo(result)
      console.log(result);
  }


  useEffect(() => {
    navigate('/panel/userpanel')
    getInfo()
  }, [])

  return (
    <div id='dashBoard' className="w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd] [&>div]:w-[49%] [&>div]:h-[90%] [&>div]:rounded-[25px] flex items-center justify-between px-[30px] mr-2 max-[1350px]:flex-col-reverse max-[1350px]:[&>div]:w-full max-[1350px]:[&>div:first-child]:h-[50%] max-[1023px]:[&>div:first-child]:h-[100%] max-[1350px]:[&>div]:my-2 max-[1020px]:w-full max-[1020px]:rounded-none max-[1020px]:shadow-none max-[1020px]:mr-0 max-[1020px]:bg-transparent max-[1020px]:[&>div]:bg-white max-[1020px]:px-0 max-[1020px]:[&>div]:rounded-none">
        <div className="[&>div]:h-[48.5%] [&>div]:rounded-[25px] [&>div]:shadow-[0_0_70px_#ccc] flex flex-col justify-between max-[1350px]:flex-row max-[1350px]:[&>div]:w-[200%] max-[1350px]:[&>div]:h-[300px] max-[1023px]:flex-col max-[1023px]:[&>div]:h-[60%] max-[1023px]:[&>div]:w-[100%] max-[1020px]:bg-transparent max-[1020px]:[&>div]:rounded-none max-[1020px]:[&>div]:shadow-[0_0_10px_#ccc]">
            <DashboardItemLeft title="اخرین خریداری شده" course="دوره اموزش جامع انگولار" master="مدرس : استاد اصغری" price="250000 تومان" src="web.jpg" />
            <DashboardItemLeft title="دوره منتخب" course="دوره اموزش  نود جی اس" master="مدرس : استاد اصغری" price="150000 تومان" src="bootstrap.jpg"/>
        </div>
        <div className="shadow-[0_0_70px_#ccc] flex flex-col justify-around pb-[25px] ">
            <div className="text-center mt-[20px] text-[21px]">اطلاعات حساب کاربری</div>
            <div dir="rtl" className="h-[70%] [&>div]:h-[14.28%] pr-[10px] [&>div]:flex [&>div]:pr-[15px] [&>div]:text-[22px] [&>div]:items-center [&>div>span]:text-[#777] [&>div>span]:mr-[10px] max-[1540px]:[&>div]:text-[20px]">
              
              <div>نام کاربری:<span>{myInfo?.lName} {myInfo?.fName}</span></div>
              <div>نقش :  <span> {myInfo?.role}  </span></div>
              <div>ایمیل :  <span> {myInfo?.email} </span></div>
              <div>تاریخ تولد :  <span> {myInfo?.birthDay.slice(0,10)} </span></div>
              <div>کد ملی : <span> {myInfo?.nationalCode} </span></div>
              <div>شماره همراه : <span> {myInfo?.phoneNumber} </span></div>
              <div>جنسیت :<span> {myInfo?.gender ? "مرد" : "زن"} </span></div>

            </div>
            <div onClick={()=> raiseUp(navigate,"/panel/editprofile",true)} className="bg-[#36C54E] w-[90%] h-[60px] rounded-[15px] mx-auto flex justify-center items-center text-[#fff] text-[22px] cursor-pointer">ویرایش</div>
        </div>
    </div>
  )
}

export default DashBoard