import { useEffect, useState } from "react"
import { Menu , LinkComponent , Linkes } from "./index"
import headerScroll from '../../core/utils/headerScroll.utils'
import NightMode from '../common/NightMode'
import customAxios from "../../core/services/interceptor"

const Header = ({className,src,color,borderClass,ml}) => {

  let token = localStorage.getItem("token");
  let classUnAuthorize = " [&>a:nth-child(3)]:max-[1020px]:hidden [&>a:nth-child(2)]:max-[1020px]:hidden "

    const [iconeUser, setIconeUser] = useState()
    const getProfileInformation = async() => {
        let result = await customAxios.get("/SharePanel/GetProfileInfo")
        setIconeUser(result.currentPictureAddress)
    }

  useEffect(() => {
    if(token) getProfileInformation()
    menuPic.onclick = () => { 
        menu.style.right = '0%';
        menu.style.opacity = 1;
    }
    closePic.onclick = ()=> { 
        menu.style.right = '-100%';
        menu.style.opacity = 0;
    }
    window.addEventListener("scroll",headerScroll)

    return () => {
      window.removeEventListener("scroll",headerScroll)
    }
  }, [])

  return (
    <>
      <header dir="rtl" className={"z-[100] relative w-full right-0 left-0 top-0 max-h-[80px] " + borderClass} id="header">
          <div className={`mx-auto w-[1920px] h-full flex justify-between max-[1919px]:w-full items-center`}>
              <div className="w-[35%] max-[1580px]:w-[40%] max-[1580px]:[&>a]:text-[16px] max-[1020px]:hidden whitespace-nowrap h-full flex  justify-around items-center [&>a]:pb-2 px-4 [&>a]:text-[20px] flex-row-reverse max-[1200px]:[&>a]:text-[15px]">
                  <Linkes to="/contact-us" content="تماس با ما" imgClassName="hidden" ejectedStyle="none" acceptedClassName={"text-[" + color + "] border-b-[2px] border-b-[#8043bd] dark:text-[#fff] dark:border-b-[#fff]"} ejectedClassName={"text-[" + color + "] headerItemHover relative dark:text-[#ddd] dark:before:bg-white"} />
                  <Linkes to="/blogs" content="خدمات" imgClassName="hidden" ejectedStyle="none" acceptedClassName={"text-[" + color + "] border-b-[2px] border-b-[#8043bd] dark:text-[#fff] dark:border-b-[#fff]"} ejectedClassName={"text-[" + color + "] headerItemHover relative dark:text-[#ddd] dark:before:bg-white"} />
                  <Linkes to="/courses" content="آموزش" imgClassName="hidden" ejectedStyle="none" acceptedClassName={"text-[" + color + "] border-b-[2px] border-b-[#8043bd] dark:text-[#fff] dark:border-b-[#fff]"} ejectedClassName={"text-[" + color + "] headerItemHover relative dark:text-[#ddd] dark:before:bg-white"} />
                  <Linkes to="/" content="خانه" imgClassName="hidden" ejectedStyle="none" acceptedClassName={"text-[" + color + "] border-b-[2px] border-b-[#8043bd] dark:text-[#fff] dark:border-b-[#fff]"} ejectedClassName={"text-[" + color + "] headerItemHover relative dark:text-[#ddd] dark:before:bg-white"} />
                  <img src={"../src/assets/images/header/" + src} alt="" className="scale-[70%]"/>
              </div>
              <img src="../src/assets/images/menu.png" alt="" id="menuPic" className="h-[30px] max-[1020px]:block m-[15px] cursor-pointer max-[500px]:scale-[83%] hidden "/>
              <div className={!token ? classUnAuthorize + "max-[500px]:scale-[83%] max-[500px]:ml-[-15px]" + " relative max-[1400px]:[&>*]:scale-[95%]  max-[1280px]:[&>*]:scale-[90%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px] [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a]:shadow-[0px_3px_6px_#5757574f] " : " scale-[120%] ml-[20px] relative max-[1400px]:[&>*]:scale-[95%] max-[500px]:scale-[83%] max-[500px]:ml-[-15px] max-[1280px]:[&>*]:scale-[90%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px] [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a]:shadow-[0px_3px_6px_#5757574f] " + className} style={{marginLeft:ml}}>
                <NightMode bgClass="bg-[#f1ebf8] px-[8px] absolute right-[-60px] " borderClass="border-2 border-black" />
                {(location.pathname !== "/login" && location.pathname !== "/forgetPassword" && location.pathname !== "/forgetpassword" && location.pathname !== "/register") && <>
                    {!token && <LinkComponent content="ثبت نام" link="/register" className='mx-[15px] w-[100px] px-4 select-none' />}
                    {!token && <LinkComponent content="ورود" link="/login" className='mx-[15px] w-[100px] px-4 select-none' />}
                    {token && <LinkComponent link="/panel/userpanel" content={<img src={iconeUser} alt="" className="w-[90%] h-[90%] object-cover rounded-[50%]" />} className='w-[50px]' />}
                    <LinkComponent content={<img src="../src/assets/images/header/shop.png" alt="" className="w-[34px] object-cover" />} className='w-[50px]' />
                </>}
              </div>
          </div>
      </header>
      <Menu />
    </>
  )
}

export default Header