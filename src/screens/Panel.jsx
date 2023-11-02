import { Header , Linkes} from '../components/common/'
import { Outlet } from 'react-router-dom'
import account from '../core/services/account'

const Panel = () => {

  return (
    <>
        <div className=" w-[1920px] mx-auto my-0 max-[1919px]:w-full relative">

            <Header src="avatar.png" color="#5A0BA9" hClass="fixed" />
            <div className="w-[90%] h-[900px] mx-auto my-10 flex justify-evenly [&>div]:h-[90%] [&>div#dashBoard]:max-[1023px]:h-[1200px] max-[1020px]:w-full [&>div#editProfile]:h-[1100px] max-[1800px]:w-[100%] [&>div#editProfile]:max-[1200px]:h-[1900px]">

                <Outlet/>

                <div className="max-[1200px]:w-[360px] max-[1020px]:hidden bg-white rounded-3xl shadow-[0_0_7px_#ddd] w-[415px] relative">

                    <div className="h-[150px] flex justify-center items-center px-3">
                        <div className='text-[25px] truncate w-60' id='usename'>{account.username}</div>
                        <img src={"../src/assets/images/dashboard/" + account.image} alt="" id='picprofile' className='h-[80px] w-[80px] rounded-[50%]' />
                    </div>

                    <div dir='rtl' className='h-[380px] [&>a]:h-[20%] [&>a]:flex [&>a]:items-center [&>a]:pr-[15px]' >
                        
                        <Linkes src="dashboard/home.png" imgClassName="w-10" to="/panel/userpanel" content="پیشخوان" acceptedClassName="hover:bg-[#eee] text-[purple]" ejectedClassName="hover:bg-[#eee] text-[black]" />

                        <Linkes src="dashboard/editProfile.png" imgClassName="w-10" to="/panel/editprofile" content="ویرایش پروفایل" acceptedClassName="hover:bg-[#eee] text-[purple]" ejectedClassName="hover:bg-[#eee] text-[black]" />

                        <Linkes src="dashboard/selectedCourses.png" imgClassName="w-10" to="/panel/mycourse" content="دوره های من" acceptedClassName="hover:bg-[#eee] text-[purple]" ejectedClassName="hover:bg-[#eee] text-[black]" />

                        <Linkes src="dashboard/menupanel.png" imgClassName="w-10" to="ListOfCourse" content="لیست دوره ها" acceptedClassName="hover:bg-[#eee] text-[purple]" ejectedClassName="hover:bg-[#eee] text-[black]" />

                        <Linkes src="dashboard/logout.png" imgClassName="w-10" to="/" content="خروج" acceptedClassName="hover:bg-[#eee] text-[purple]" ejectedClassName="hover:bg-[#eee] text-[black]" />

                    </div>

                </div>

            </div>
        </div>

    </>
  )
}

export default Panel