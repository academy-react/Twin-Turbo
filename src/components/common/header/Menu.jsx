import { Link } from "react-router-dom"
import Linkes from "../Linkes"

const Menu = () => {
    return (
      <div id="menu" className="bg-white w-[30%] h-full fixed top-0 z-[1000] hidden max-[1020px]:block transition-all duration-700 ease-in rounded-l-[15px] border max-[900px]:w-[40%] max-[800px]:w-[50%] max-[700px]:w-[60%] max-[600px]:w-[70%] max-[550px]:w-[80%] max-[450px]:w-[100%] max-[450px]:rounded-none overflow-y-auto" style={{right:"-100%"}}>
      <div className=" w-full h-[50px] flex items-center pl-[15px]" >
          <img src="../../src/assets/images/close.svg" alt="" className=" w-[25px] h-[25px] cursor-pointer [&:hover]:drop-shadow-[0_0_1px_#5A0BA9]" id="closePic" />
          <img src="../../src/assets/images/logo.png" className="w-full h-full scale-75 max-[600px]:scale-[60%]" />
      </div>
      <div className="w-full h-[80px] flex [&>div>a]:text-[13px] [&>div>a]:text-[#777] [&>div>img]:ml-[10px]">
          <Link to={'/login'} className="h-full w-[50%] flex justify-center items-center max-[600px]:[&>div]:text-[13px]" onClick={()=> raiseUp(undefined,"",false)}>
            <div>ورود</div>
            <img src="../../src/assets/images/panel/log-in.png" alt="" className="h-[20px] ml-2"/>
          </Link>
          <Link to={'/register'} className="h-full w-[50%] flex justify-center items-center max-[600px]:[&>div]:text-[13px]" onClick={()=> raiseUp(undefined,"",false)}>
            <div>ثبت نام</div>
            <img src="../../src/assets/images/panel/user.png" alt="" className="h-[25px] ml-2"/>
          </Link>
      </div>
      <div dir="rtl" className="w-full h-[250px] flex flex-col [&>a]:h-[40px] [&>a]:flex [&>a]:items-center [&>a]:pr-[5px] [&>a]:text-[16px] max-[600px]:[&>a]:text-[13px] [&>a:hover]:bg-[#eee]">
        <Linkes to={"/"} src="header/home.png" imgClassName="w-[25px] h-[25px]" content="خانه" acceptedClassName="bg-gradient-to-r from-[rgb(102,0,140)] to-[#fff] text-[#000] " ejectedClassName="bg-none text-[#888]" />
        <Linkes to={"/courses"} src="header/education.png" imgClassName="w-[25px] h-[25px]" content="آموزش" acceptedClassName="bg-gradient-to-r from-[rgb(102,0,140)] to-[#fff] text-[#000] " ejectedClassName="bg-none text-[#888]" />
        <Linkes to={"/basket"} src="header/salary.png" imgClassName="w-[25px] h-[25px]" content="مالی" acceptedClassName="bg-gradient-to-r from-[rgb(102,0,140)] to-[#fff] text-[#000] " ejectedClassName="bg-none text-[#888]" />
        <Linkes to={"/blogs"} src="header/services.png" imgClassName="w-[25px] h-[25px]" content="خدمات" acceptedClassName="bg-gradient-to-r from-[rgb(102,0,140)] to-[#fff] text-[#000] " ejectedClassName="bg-none text-[#888]" />
        <Linkes to={"/contact-us"} src="header/contact-us.png" imgClassName="w-[25px] h-[25px]" content="تماس با ما" acceptedClassName="bg-gradient-to-r from-[rgb(102,0,140)] to-[#fff] text-[#000] " ejectedClassName="bg-none text-[#888]" />
      </div>
    </div>
    )
  }
  
  export default Menu