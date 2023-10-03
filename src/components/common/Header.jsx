import { NavLink } from "react-router-dom";

const Header = ({className,src,color}) => {

  return (
    <header dir="rtl" className="h-[70px] relative z-50" id="header">
        <div className="my-0 mx-auto w-[1280px] h-full flex justify-between" >
            <div className="w-[35%] h-full flex  justify-around items-center [&>a]:pb-2 px-4">
                <img src={"../src/assets/images/" + src} alt="" className="w-[40px] h-[40px]"/>
                <NavLink to={"/"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خانه</NavLink>
                <NavLink to={"/2"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >اموزش</NavLink>
                <NavLink to={"/3"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >مالی</NavLink>
                <NavLink to={"/4"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خدمات</NavLink>
                <NavLink to={"/5"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >بلاگ</NavLink>
                <NavLink to={"/6"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >تماس به ما</NavLink>
            </div>
            <div className={"h-full flex justify-around items-center pl-1 text-[#8043bd] [&>div]:h-[36px]  [&>div]:bg-[#f1ebf8] [&>div]:mx-[8px] [&>div]:rounded-[30px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:whitespace-nowrap [&>div]:text-x-[14px] [&>div]:cursor-pointer [&>div]:shadow-[0px_3px_6px_#5757574f] " + className}>
                <div className="w-10"><img src="../src/assets/images/shop.png" alt="" className="w-[25px] h-[25px]" /></div>
                <div className="mx-[15px] w-20 px-4 select-none" >ورود</div>
                <div className="mx-[15px] w-20 px-4 select-none" >ثبت نام</div>
                <div className="w-10 "><img src="../src/assets/images/search.png" alt="" className="w-[25px] h-[25px]" /></div>
            </div>
        </div>
    </header>
  )
}

export default Header