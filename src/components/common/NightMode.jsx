import { useEffect, useRef } from "react"
import headerScroll from "../../core/utils/headerScroll.utils"
import darkMode from "../../core/utils/darkMode.utils"
import { setttttttt } from "../landing/TitleComponents"
import { useLocation } from "react-router-dom"

const NightMode = ({bgClass}) => {
    
    let location = useLocation()
    let local = localStorage.getItem("theme")
    if(!local) localStorage.setItem("theme","light")

    const pic = useRef()

    useEffect(() => {
        darkMode()
    }, [])

    const changeMode = ()=> {

        let local = localStorage.getItem("theme")
            
        if(local == "light") {

            pic.current.src = "../src/assets/images/header/sun.png"
            localStorage.setItem("theme","dark")
            if(location.pathname == "/")  setttttttt(`../src/assets/images/landingCourse/courses-title-dark.png`)
        }
        else if(local == "dark") {

            pic.current.src = "../src/assets/images/header/moon.png"
            localStorage.setItem("theme","light")
            if(location.pathname == "/")  setttttttt(`../src/assets/images/landingCourse/courses-title.png`)
        }
        darkMode()
        // for darkMode the header it should call here
        headerScroll()
        
    }

    return (
        <div className={"w-[50px] h-[45px] rounded-full p-[5px] max-[321px]:right-[-75px] flex justify-center items-center cursor-pointer " + bgClass} onClick={changeMode} >
            <img src={local == "dark" ? "../src/assets/images/header/sun.png" : "../src/assets/images/header/moon.png" } alt="" className="w-[28px] h-[28px]" ref={pic}/>
        </div>
    )
}

export default NightMode