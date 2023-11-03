import { useRef } from "react"
const NightMode = () => {

    const sircle = useRef()

    let flag = true
    const change = ()=> {
      sircle.current.children[0].classList.toggle("translate-x-[-43px]")
      if(!flag) { 
          sircle.current.children[0].src = "../src/assets/images/header/sun.png"
          flag = true
          sircle.current.style.background = 'url(../src/assets/images/header/sky.png) 0 0 / 62px';
      }
      else if(flag) { 
          sircle.current.children[0].src = "../src/assets/images/header/moon.png"
          flag = false
          sircle.current.style.background = 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%';
      }

    }
    
    return (
        <div className="rounded-[25px] p-[5px] absolute right-[-100px] max-[1300px]:right-[-90px] max-[321px]:right-[-75px]">
            <div ref={sircle} dir="rtl" className="cursor-pointer flex items-center transition-all duration-500 h-[35px] w-[80px] px-[3px] py-[1px] rounded-[50px]" onClick={change} style={{background : 'url(../src/assets/images/header/sky.png) 0 0 / 62px'}}>
            <img src="../src/assets/images/header/sun.png" alt="" className="w-[42%] h-[90%] rounded-[50%] transition-all duration-50" />
            </div>
        </div>
    )
}

export default NightMode