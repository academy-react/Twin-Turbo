import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="border border-[#ccc] h-[70px]">
        <div className="my-0 mx-auto w-[1279px] h-full border flex justify-between">
                <div className="w-[20%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>div]:py-[6px] [&>div]:px-[10px] [&>div]:bg-[#f1ebf8] [&>div]:m-[5px] [&>div]:rounded-[30px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div]:whitespace-nowrap [&>div]:text-x-[14px] [&>div]:cursor-pointer [&>div]:shadow-[0px_0px_7px_#ccc]">
                <div className="shop"><img src="../src/assets/images/shop.png" alt="" /></div>
                <div className="login">ورود</div>
                <div className="register">ثبت نام</div>
                <div className="search"><img src="../src/assets/images/search.png" alt="" /></div>
            </div>
            <div className="w-[35%] h-full flex flex-row-reverse justify-around items-center [&>a]:text-[#8043bd] [&>a]:pb-2">
                <img src="../src/assets/images/avatar.png" alt="" className="w-[40px] h-[40px]"/>
                <NavLink to={"/"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >اموزش</NavLink>
                <NavLink to={"/2"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >خانه</NavLink>
                <NavLink to={"/3"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >مالی</NavLink>
                <NavLink to={"/4"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >خدمات</NavLink>
                <NavLink to={"/5"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >بلاگ</NavLink>
                <NavLink to={"/6"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} >تماس به ما</NavLink>
            </div>
        </div>
    </header>
  )
}

export default Header