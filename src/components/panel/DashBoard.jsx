import DashboardItemLeft from '../common/DashboardItemLeft'
import raiseUp from "../../core/utils/raiseUp.utils"
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const DashBoard = () => {

  let navigate = useNavigate()
  useEffect(() => {navigate('/panel/userpanel')}, [])
  

  return (
    <div className="w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd] [&>div]:w-[49%] [&>div]:h-[90%] [&>div]:rounded-[25px] flex items-center justify-between px-[30px]">
        <div className="[&>div]:h-[48.5%] [&>div]:rounded-[25px] [&>div]:shadow-[0_0_70px_#ccc] flex flex-col justify-between">
            <DashboardItemLeft title="اخرین خریداری شده" course="دوره اموزش جامع انگولار" master="مدرس : استاد اصغری" price="مبلغ : 250000 تومان" src="khoros.jpg" />
            <DashboardItemLeft title="دوره منتخب" course="دوره اموزش  نود جی اس" master="مدرس : استاد اصغری" price="مبلغ : 150000 تومان" src="bootstrap.jpg"/>
        </div>
        <div className="shadow-[0_0_70px_#ccc] flex flex-col justify-around pb-[25px]">
            <div className="text-center mt-[20px] text-[21px]">اطلاعات حساب کاربری</div>
            <div dir="rtl" className="h-[70%] [&>div]:h-[14.28%] pr-[10px] [&>div]:flex [&>div]:pr-[15px] [&>div]:text-[22px] [&>div]:items-center [&>div>span]:text-[#777] [&>div>span]:mr-[10px]">
              
              <div>نام کاربری:<span>Mmd</span></div>
              <div>نقش :  <span> student  </span></div>
              <div>جیمیل :  <span> stormy85@gmail.com  </span></div>
              <div>تاریخ تولد :  <span>  1385/7/17  </span></div>
              <div>کد ملی : <span>2081326948</span></div>
              <div>شماره همراه : <span>09909125482</span></div>
              <div>وضعیت :<span> inactive</span></div>

            </div>
            <div onClick={()=> raiseUp(navigate,"/panel/editprofile",true)} className="bg-[#36C54E] w-[90%] h-[60px] rounded-[15px] mx-auto flex justify-center items-center text-[#fff] text-[22px] cursor-pointer">ویرایش</div>
        </div>
    </div>
  )
}

export default DashBoard