import { Header , Linkes} from '../components/common/'
import { Outlet, useLocation } from 'react-router-dom'
import account from '../core/services/Account'

const Panel = () => {

    let location = useLocation()

    const panelLayout = "w-[90%] mx-auto flex justify-between items-center [&>div]:h-[90%]"

  return (
    <>
        <div className="w-[1920px] mx-auto my-0 max-[1919px]:w-full relative">

            <Header src="avatar.png" color="#5A0BA9" hClass="fixed" />
            <div className={location.pathname !== "/panel/editprofile" ? "h-[900px] " + panelLayout : "h-[1100px] " + panelLayout }>

                <Outlet/>

                <div className="bg-white rounded-3xl shadow-[0_0_7px_#ddd] w-[415px] [&>div:first-child]:h-[150px] relative">
                    <div className="flex justify-around items-center px-3">
                        <div className='text-[25px] truncate w-60' id='usename'>{account.username}</div>
                        <img src={account.image} alt="" id='picprofile' className='h-[80px] w-[80px] rounded-[50%]' />
                    </div>

                    <div dir='rtl' className='h-[380px] [&>a]:h-[20%] [&>a]:flex [&>a]:items-center [&>a]:pr-[15px] ' >
                        
                        <Linkes src="dashboard/home.png" imgClassName="w-10" to="/panel/userpanel" content="پیشخوان" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                        <Linkes src="dashboard/editProfile.png" imgClassName="w-10" to="/panel/editprofile" content="ویرایش پروفایل" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                        <Linkes src="dashboard/selectedCourses.png" imgClassName="w-10" to="/panel/mycourse" content="دوره های من" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                        <Linkes src="dashboard/menupanel.png" imgClassName="w-10" to="ListOfCourse" content="لیست دوره ها" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                        <Linkes src="dashboard/logout.png" imgClassName="w-10" to="/" content="خروج" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                    </div>

                </div>

            </div>

        </div>

    </>
  )
}

export default Panel