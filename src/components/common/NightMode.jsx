import { useEffect } from "react"
import headerScroll from "../../core/utils/headerScroll.utils"
import darkMode from "../../core/utils/darkMode.utils"

const NightMode = ({bgClass,borderClass}) => {

    let sircleImgClassName = "w-[42%] h-[90%] rounded-[50%] transition-all duration-50 "
    let local = localStorage.getItem("theme")
    if(!local) localStorage.setItem("theme","light")

    useEffect(() => {
        darkMode()
    }, [])

    const changeMode = ()=> {

        let local = localStorage.getItem("theme")
            
        if(local == "light") {

            sircle.children[0].src = "../src/assets/images/header/moon.png"
            sircle.style.border = "2px solid #fbc058";
            sircle.style.background = 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%';
            localStorage.setItem("theme","dark")

        }
        else if(local == "dark") {

            sircle.children[0].src = "../src/assets/images/header/sun.png"
            sircle.style.border = "2px solid black";
            sircle.style.background = 'url(../src/assets/images/header/sky.png) 0 0 / 62px';
            localStorage.setItem("theme","light")

        }
        sircle.children[0].classList.toggle("translate-x-[-40px]")
        darkMode()
        // for darkMode the header it should call here
        headerScroll()
        
    }

    return (
        <div className={"rounded-[25px] p-[5px] max-[1300px]:right-[-90px] max-[321px]:right-[-75px] " + bgClass}>
            <div id="sircle" className={"cursor-pointer flex items-center transition-all duration-500 h-[35px] w-[80px] px-[3px] py-[1px] rounded-[50px]  " + borderClass} onClick={changeMode} style={local == "dark" ? {background : 'url(../src/assets/images/header/night-sky.png) 0 0 / 62px'} : {background : 'url(../src/assets/images/header/sky.png) 0 0 / 100%'}}>
                <img src={local == "dark" ? "../src/assets/images/header/moon.png" : "../src/assets/images/header/sun.png" } alt="" className={local == "dark" ? sircleImgClassName + "translate-x-[-40px]" : sircleImgClassName } />
            </div>
        </div>
    )
}

export default NightMode