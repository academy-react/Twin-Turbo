import { useNavigate } from 'react-router-dom'
import { useEffect , useState } from 'react'
import customAxios from '../../core/services/interceptor'
import TopDashboard from './TopDashboard'
import { Calendar } from 'react-multi-date-picker'

const DashBoard = () => {

  let navigate = useNavigate()

  const [myInfo, setMyInfo] = useState()

  const getInfo = async () => {
      let result = await customAxios.get("/SharePanel/GetProfileInfo")
      console.log(result);
      setMyInfo(result)
  }


  useEffect(() => {
    navigate('/panel/userpanel')
    getInfo()
  }, [])

  return (
    <div id='dashBoard' className="w-[79%] max-[1260px]:w-[94%] bg-[#f5f5f5] relative flex flex-col ">
        <div className='h-[200px] max-[1500px]:h-[300px] bg-[#f5f5f5] flex flex-wrap justify-around items-start relative top-[-13px] [&>div>div:first-child]:rounded-lg [&>div>div:first-child]:bg-[#EDF4FF] [&>div>div:last-child]:h-[80%] [&>div>div:last-child]:flex [&>div>div:last-child]:flex-col [&>div>div:last-child]:justify-evenly [&>div>div:last-child]:items-center'>
          <TopDashboard src="testPassed.svg" title="تست های قبول شده" content="10" />
          <TopDashboard src="testAttended.svg" title="تست های شرکت شده" content="16" />
          <TopDashboard src="allProjects.svg" title="پروژه ها" content="79" />
          <TopDashboard src="allCourses.svg" title="دوره ها" content="120" />
        </div>
        <div className='flex justify-between border border-[red] h-[80%]'>
          <div className='w-[30%] flex-col border border-[green]'>
            <Calendar className='dashboardCalender' />
          </div>
        </div>
    </div>
  )
}

export default DashBoard
{/* <div>نام کاربری:<span>{myInfo?.fName == "" ? "بدون نام" : myInfo?.fName} {myInfo?.lName ? myInfo?.lName : "بدون نام خانوادگی"}</span></div>
<div>ایمیل :  <span> {myInfo?.email == "" ? "بدون ایمیل" : myInfo?.email} </span></div>
<div>تاریخ تولد :  <span> {myInfo?.birthDay == "" ? "نا مشخص" : myInfo?.birthDay.slice(0,10)} </span></div>
<div>کد ملی : <span> {myInfo?.nationalCode == "" ? "نامشخص" : myInfo?.nationalCode} </span></div>
<div>شماره همراه : <span> {myInfo?.phoneNumber == "" ? "بدون شماره همراه" : myInfo?.phoneNumber } </span></div> */}