import { useEffect } from "react"
import { Menu , LinkComponent , Linkes } from "./index"
import headerScroll from '../../core/utils/headerScroll.utils'
import { useRef } from "react"

const Header = ({className,src,color}) => {

  const sircle = useRef()

  useEffect(() => {
    
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
  

  let flag = true
  const change = ()=> {
      sircle.current.children[0].classList.toggle("translate-x-[-36px]")
      if(!flag) { 
          sircle.current.children[0].src = "../src/assets/images/header/sun.png"
          flag = true
          sircle.current.style.background = 'url(../src/assets/images/header/sky.png) 0 0 / 75%';
      }
      else if(flag) { 
          sircle.current.children[0].src = "../src/assets/images/header/moon.png"
          flag = false
          sircle.current.style.background = 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%';
      }

  }

  return (
    <>
      <header dir="rtl" className="z-[100] relative w-full right-0 left-0 top-0 max-h-[80px]" id="header">
          <div className="mx-auto w-[1920px] h-full flex justify-between max-[1919px]:w-full items-center" >
              <div className="w-[35%] max-[1580px]:w-[40%] max-[1580px]:[&>a]:text-[16px] max-[1020px]:hidden whitespace-nowrap h-full flex  justify-around items-center [&>a]:pb-2 px-4 [&>a]:text-[20px] flex-row-reverse max-[1200px]:[&>a]:text-[15px]">
                  <Linkes to="/contact-us" content="تماس با ما" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/blogs" content="خدمات" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/courses" content="آموزش" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <Linkes to="/" content="خانه" imgClassName="hidden" acceptedStyle="2px solid #8043bd" ejectedStyle="none" acceptedClassName={"text-[" + color + "]"} ejectedClassName={"text-[" + color + "]"} />
                  <img src={"../src/assets/images/header/" + src} alt="" className="scale-[70%]"/>
              </div>
              <img src="../src/assets/images/menu.png" alt="" id="menuPic" className=" h-[30px] max-[1020px]:block m-[15px] cursor-pointer hidden "/>
              <div className={"max-[799px]:w-[20%] max-[1400px]:[&>*]:scale-[95%] max-[599px]:w-[30%] max-[399px]:w-[40%] max-[325px]:w-[54%] max-[1020px]:w-[15%] max-[1080px]:w-[33%] w-[600px] max-[1400px]:w-[30%] max-[1280px]:[&>*]:scale-[90%] h-full flex justify-around items-center pl-1 text-[#8043bd] [&>a]:h-[45px] [&>a]:bg-[#f1ebf8] [&>a]:mx-[8px] [&>a]:rounded-[30px] [&>a]:flex [&>a]:justify-center [&>a]:items-center [&>a]:whitespace-nowrap [&>a]:text-[18px] [&>a]:cursor-pointer [&>a:nth-child(2)]:max-[1020px]:hidden [&>a:nth-child(3)]:max-[1020px]:hidden [&>a]:shadow-[0px_3px_6px_#5757574f] " + className}>
                <div className="rounded-[25px] p-[5px]">
                  <div ref={sircle}  dir="rtl" className="flex items-center transition-all duration-500 h-[30px] w-[70px] px-[3px] py-[1px] rounded-[50px]" onClick={change} style={{background : 'url(../src/assets/images/header/sky.png) 0 0 / 70%'}}>
                    <img src="../src/assets/images/header/sun.png" alt="" className="w-[40%] h-[90%] rounded-[50%] transition-all duration-50" />
                  </div>
                </div>
                <LinkComponent content={<img src="../src/assets/images/header/search.png" alt="" className="w-[25px] h-[25px] object-cover"  />} link="/" className='w-[50px]' />
                <LinkComponent content="ثبت نام" link="/register" className='mx-[15px] w-[100px] px-4 select-none' />
                <LinkComponent content="ورود" link="/login" className='mx-[15px] w-[100px] px-4 select-none' />
                <LinkComponent content={<img src="../src/assets/images/header/shop.png" alt="" className="w-[27px] h-[27px] object-cover" />} className='w-[50px]' />
              </div>
          </div>
      </header>
      <Menu />
    </>
  )
}

export default Header