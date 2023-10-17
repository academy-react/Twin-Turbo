import { useEffect, useRef } from "react"
import { NavLink , Link } from "react-router-dom"

const Header = ({className,src,color}) => {


  useEffect(() => {
    menuPic.onclick = () => menu.style.right = '0%';
    closePic.onclick = ()=> menu.style.right = '-30%';
    window.addEventListener("resize",()=> {if(window.innerWidth > 1020) menu.style.right = '-30%'})

}, [])


  return (
    <>
      <header dir="rtl" className="z-[100] relative w-full right-0 left-0 top-0 h-[80px]" id="header">
          <div className="mx-auto w-[1920px] h-full flex justify-between max-[1919px]:w-full items-center" >
              <div className="w-[35%] max-[1280px]:w-[45%] max-[1020px]:hidden whitespace-nowrap h-full flex  justify-around items-center [&>a]:pb-2 px-4 [&>a]:text-[20px] flex-row-reverse max-[1200px]:[&>a]:text-[15px]">
                  <NavLink to={"/contact-us"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >تماس با ما</NavLink>
                  <NavLink to={"/blogs"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خدمات</NavLink>
                  <NavLink to={"/3"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >مالی</NavLink>
                  <NavLink to={"/courses"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >اموزش</NavLink>
                  <NavLink to={"/"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خانه</NavLink>
                  <img src={"../src/assets/images/header/" + src} alt="" className="scale-[70%]"/>
              </div>
              <img src="../src/assets/images/menu.png" alt="" id="menuPic" className="h-[30px] max-[1020px]:block m-[15px] cursor-pointer hidden "/>
              <div className={"max-[799px]:w-[20%] max-[599px]:w-[30%] max-[399px]:w-[40%] max-[1020px]:w-[15%] max-[1024px]:w-[35%] w-[25%] max-[1280px]:w-[30%] max-[1280px]:[&>*]:scale-[90%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px] [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a:nth-child(2)]:max-[1020px]:hidden [&>a:nth-child(3)]:max-[1020px]:hidden [&>a]:shadow-[0px_3px_6px_#5757574f] " + className}>
                  <Link className="w-[50px]"><img src="../src/assets/images/header/shop.png" alt="" className="w-[27px] h-[27px] object-cover" /></Link>
                  <Link to={"/login"} className='mx-[15px] w-[100px] px-4 select-none ' >ورود</Link>
                  <Link to={"/register"} className='mx-[15px] w-[100px] px-4 select-none '  >ثبت نام</Link>
                  <Link className="w-[50px]"><img src="../src/assets/images/header/search.png" alt="" className="w-[25px] h-[25px] object-cover" /></Link>
              </div>
          </div>
          
      </header>

        <div id="menu" className="bg-white w-[30%] h-[100vh] fixed top-0 z-[1000] hidden max-[1020px]:block transition-all duration-1000 rounded-l-[15px] border" style={{right:"-30%"}}>
          <div className=" w-full h-[50px] flex items-center pl-[15px]" >
              <img src="../../src/assets/images/close.svg" title="بستن" alt="" className=" w-[25px] h-[25px] cursor-pointer" id="closePic" />
          </div>
          <div className="w-full h-[80px] flex [&>div>a]:text-[13px] [&>div>a]:text-[#777] [&>div>img]:ml-[10px]">
              <div className="h-full w-[50%] flex justify-center items-center">
              <Link to={'/login'}>ورود</Link>
                <img src="../../src/assets/images/panel/log-in.png" alt="" className="h-[20px]"/>
              </div>
              <div className="h-full w-[50%] flex justify-center items-center">
                <Link to={'/register'}>ثبت نام</Link>
                <img src="../../src/assets/images/panel/user.png" alt="" className="h-[25px]"/>
              </div>
          </div>
          <div dir="rtl" className="w-full h-[250px] flex flex-col [&>a]:h-[40px] [&>a]:flex [&>a]:items-center [&>a]:pr-[5px] text-[13px]">
            <NavLink style={({isActive})=>({backgroundImage : isActive ? "linear-gradient(90deg, rgba(102,0,140,1) 0%, rgba(159,0,153,1) 100%)" : "none",color : isActive ? "#fff" : "#000"})} to={"/"}>خانه</NavLink>
            <NavLink style={({isActive})=>({backgroundImage : isActive ? "linear-gradient(90deg, rgba(102,0,140,1) 0%, rgba(159,0,153,1) 100%)" : "none",color : isActive ? "#fff" : "#000"})} to={"/courses"}>اموزش</NavLink>
            <NavLink style={({isActive})=>({backgroundImage : isActive ? "linear-gradient(90deg, rgba(102,0,140,1) 0%, rgba(159,0,153,1) 100%)" : "none",color : isActive ? "#fff" : "#000"})} to={"/panel"}>مالی</NavLink>
            <NavLink style={({isActive})=>({backgroundImage : isActive ? "linear-gradient(90deg, rgba(102,0,140,1) 0%, rgba(159,0,153,1) 100%)" : "none",color : isActive ? "#fff" : "#000"})} to={"/blogs"}>خدمات</NavLink>
            <NavLink style={({isActive})=>({backgroundImage : isActive ? "linear-gradient(90deg, rgba(102,0,140,1) 0%, rgba(159,0,153,1) 100%)" : "none",color : isActive ? "#fff" : "#000"})} to={"/contact-us"}>تماس با ما</NavLink>
          </div>

        </div>

    </>
  )
}

export default Header