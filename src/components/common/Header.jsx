import { NavLink , Link } from "react-router-dom";

const Header = ({className,src,color}) => {

  return (
    <header dir="rtl" className="h-[80px] relative z-50" id="header">
        <div className="mx-auto w-[1920px] h-full flex justify-between " >
            <div className="w-[35%] h-full flex  justify-around items-center [&>a]:pb-2 px-4 [&>a]:text-[20px]">
                <img src={"../src/assets/images/" + src} alt="" className="scale-[70%]"/>
                <NavLink to={"/"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خانه</NavLink>
                <NavLink to={"/2"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >اموزش</NavLink>
                <NavLink to={"/3"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >مالی</NavLink>
                <NavLink to={"/4"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >خدمات</NavLink>
                <NavLink to={"/5"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >بلاگ</NavLink>
                <NavLink to={"/6"} style={({isActive})=>({borderBottom : isActive ? "2px solid #8043bd" : "none"})} className={"text-[" + color + "]"} >تماس به ما</NavLink>
            </div>
            <div className={"w-[20%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px]  [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a]:shadow-[0px_3px_6px_#5757574f] " + className}>
                <Link className="w-[50px]"><img src="../src/assets/images/shop.png" alt="" className="w-[27px] h-[27px]" /></Link>
                <Link to={"/login"} className='mx-[15px] w-[100px] px-4 select-none' >ورود</Link>
                <Link to={"/register"} className='mx-[15px] w-[100px] px-4 select-none'  >ثبت نام</Link>
                <Link className="w-[50px] "><img src="../src/assets/images/search.png" alt="" className="w-[25px] h-[25px]" /></Link>
            </div>
        </div>
    </header>
  )
}

export default Header