import Header from '../components/common/Header'
import { Outlet} from 'react-router-dom'
import Links from '../components/common/Linkes'
const Panel = () => {
  return (
    <>

        <div className="w-[1920px] mx-auto my-0 overflow-hidden max-[1919px]:w-full relative">

                <Header src="avatar.png" color="#5A0BA9" hClass="fixed" />
                <div className="h-[900px] w-[90%] mx-auto flex justify-between items-center [&>div]:h-[90%]">


                    <Outlet/>

                    <div className="w-[24%] [&>div:first-child]:h-[150px] [&>div:first-child]:flex [&>div:first-child]:flex-col [&>div:first-child]:items-center [&>div:first-child]:justify-center relative">
                        <div>

                            <div className='text-[25px] mr-[40px]'>HamidReza</div>
                            <div className='text-[#888]'>محمد شیخی</div>
                            <img src="../src/assets/images/khoros.jpg" alt="" className='h-[80px] w-[80px] rounded-[50%] absolute right-[35px] top-[35px]' />

                        </div>

                        <div dir='rtl' className='h-[380px] [&>a]:h-[20%] [&>a]:flex [&>a]:items-center [&>a]:pr-[15px] ' >
                            


                            <Links src="dashboard/home.png" to="/" content="پیشخوان" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                            <Links src="dashboard/editProfile.png" to="/" content="ویرایش پروفایل" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                            <Links src="dashboard/5.png" to="/" content="دوره های من" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                            <Links src="dashboard/menupanel.png" to="ListOfCourse" content="لیست دوره ها" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />

                            <Links src="dashboard/logout.png" to="/" content="خروج" acceptedClassName="text-[purple]" ejectedClassName="text-[black]" />




                        </div>

                    </div>


                </div>


        </div>

    </>
  )
}

export default Panel