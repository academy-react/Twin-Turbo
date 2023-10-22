import { useEffect } from "react"
import Menu from "./header/Menu"
import headerScroll from '../../core/utils/headerScroll.utils'
import Linkes from "./Linkes"
import LinkComponent from "./LinkComponent"

const Header = ({className,src,color}) => {


  useEffect(() => {
    menuPic.onclick = () => menu.style.right = '0%';
    closePic.onclick = ()=> menu.style.right = '-100%';
    window.addEventListener("scroll",headerScroll)

    return () => {
      window.removeEventListener("scroll",headerScroll)
    }

}, [])

  return (
    <>
      <header dir="rtl" className="z-[100] relative w-full right-0 left-0 top-0 h-[80px]" id="header">
          <div className="mx-auto w-[1920px] h-full flex justify-between max-[1919px]:w-full items-center" >
              <div className="w-[35%] max-[1580px]:w-[45%] max-[1020px]:hidden whitespace-nowrap h-full flex  justify-around items-center [&>a]:pb-2 px-4 [&>a]:text-[20px] flex-row-reverse max-[1200px]:[&>a]:text-[15px]">
                  <Linkes to="/contact-us" content="تماس با ما" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/blogs" content="خدمات" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/basket" content="مالی" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/courses" content="آموزش" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/" content="خانه" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <img src={"../src/assets/images/header/" + src} alt="" className="scale-[70%]"/>
              </div>
              <img src="../src/assets/images/menu.png" alt="" id="menuPic" className="h-[30px] max-[1020px]:block m-[15px] cursor-pointer hidden "/>
              <div className={"max-[799px]:w-[20%] max-[599px]:w-[30%] max-[399px]:w-[40%] max-[1020px]:w-[15%] max-[1024px]:w-[35%] w-[25%] max-[1280px]:w-[30%] max-[1280px]:[&>*]:scale-[90%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px] [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a:nth-child(2)]:max-[1020px]:hidden [&>a:nth-child(3)]:max-[1020px]:hidden [&>a]:shadow-[0px_3px_6px_#5757574f] " + className}>
                <LinkComponent content={<img src="../src/assets/images/header/shop.png" alt="" className="w-[27px] h-[27px] object-cover" />} link="/panel" className='w-[50px]' />
                <LinkComponent content={<img src="../src/assets/images/header/search.png" alt="" className="w-[25px] h-[25px] object-cover"  />} link="/" className='w-[50px]' />
                <LinkComponent content="ورود" link="/login" className='mx-[15px] w-[100px] px-4 select-none' />
                <LinkComponent content="ثبت نام" link="/register" className='mx-[15px] w-[100px] px-4 select-none' />
              </div>
          </div>
      </header>
      <Menu />
    </>
  )
}

export default Header