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
            sircle.style.border = "2px solid white";
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
    


    // let local = localStorage.getItem("theme")
    // let sircleImgClassName = "w-[42%] h-[90%] rounded-[50%] transition-all duration-50 "
   
    // if(!local) localStorage.setItem("theme" , "light")
    // const changeMode = ()=> {
    //     let local = localStorage.getItem("theme")
        
    //     sircle.children[0].classList.toggle("translate-x-[-40px]")
    //     if(local == "dark") { 
    //       document.documentElement.className = "light"
    //       sircle.children[0].src = "../src/assets/images/header/sun.png"
    //       sircle.style.border = "2px solid black";
    //       localStorage.setItem("theme" , "light")
    //       sircle.style.background = 'url(../src/assets/images/header/sky.png) 0 0 / 62px';
    //       if(location.pathname == "/") {
    //           heroSection.children[0].src = "../src/assets/images/heroSection/bg-top.png"
    //           heroSectionWoman.src = "../src/assets/images/heroSection/woman.png"
    //           servicesWoman.src = "../src/assets/images/landingService/Group 159.png"
    //           servicesMan.src = "../src/assets/images/landingService/Group 160.png"
    //           servicesPath.src = "../src/assets/images/landingService/Path 620.png"
    //       }
    //     }
    //     else if(local == "light") { 
    //         document.documentElement.className = "dark"
    //         sircle.children[0].src = "../src/assets/images/header/moon.png"
    //         sircle.style.border = "2px solid #fbc058";
    //         localStorage.setItem("theme" , "dark")
    //         sircle.style.background = 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%';
    //         if(location.pathname == "/") {
    //             heroSection.children[0].src = "../src/assets/images/heroSection/bg-top-dark.png"
    //             heroSectionWoman.src = "../src/assets/images/heroSection/woman-dark.png"
    //             servicesWoman.src = "../src/assets/images/landingService/Group 159-dark.png"
    //             servicesMan.src = "../src/assets/images/landingService/Group 160-dark.png"
    //             servicesPath.src = "../src/assets/images/landingService/Path 620-dark.png"
    //         }
    //     }
        // for darkMode the header it should call here
        // headerScroll()
    
    
    return (
        <div className={"rounded-[25px] p-[5px] max-[1300px]:right-[-90px] max-[321px]:right-[-75px] " + bgClass}>
            <div id="sircle" className={"cursor-pointer flex items-center transition-all duration-500 h-[35px] w-[80px] px-[3px] py-[1px] rounded-[50px]  " + borderClass} onClick={changeMode} style={local == "light" ? {background : 'url(../src/assets/images/header/sky.png) 0 0 / 62px'} : {background : 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%'}}>
                <img src={local == "light" ? "../src/assets/images/header/sun.png" : "../src/assets/images/header/moon.png" } alt="" className={local == "light" ? sircleImgClassName : sircleImgClassName + "translate-x-[-40px]" } />
            </div>
        </div>
    )
}

export default NightMode





// import { useEffect, useRef } from "react"
// const NightMode = ({bgClass,borderClass}) => {

//     const sircle = useRef()

    // let sercleClass = "w-[42%] h-[90%] rounded-[50%] transition-all duration-50 "
    // let loc = localStorage.getItem("theme")
    // if(!loc) localStorage.setItem("theme","light")

    // const change = ()=> {

    //     let loc = localStorage.getItem("theme")
            
    //     if(loc == "light") {

    //         sircle.current.children[0].src = "../src/assets/images/header/moon.png"
    //         sircle.current.style.border = "2px solid white";
    //         sircle.current.style.background = 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%';
    //         localStorage.setItem("theme","dark")

    //     }
    //     else if(loc == "dark") {

    //         sircle.current.children[0].src = "../src/assets/images/header/sun.png"
    //         sircle.current.style.border = "2px solid black";
    //         sircle.current.style.background = 'url(../src/assets/images/header/sky.png) 0 0 / 62px';
    //         localStorage.setItem("theme","light")

    //     }

           
    //     sircle.current.children[0].classList.toggle("translate-x-[-40px]")

    // }


    
    
//     return (
//         <div className={"rounded-[25px] p-[5px] absolute right-[-100px] max-[1300px]:right-[-90px] max-[321px]:right-[-75px] " + bgClass}>
//             <div ref={sircle} dir="rtl" className={"cursor-pointer flex items-center transition-all duration-500 h-[35px] w-[80px] px-[3px] py-[1px] rounded-[50px]  " + borderClass} onClick={change} style={loc == "light" ? {background : 'url(../src/assets/images/header/sky.png) 0 0 / 62px'} : {background : 'url(../src/assets/images/header/night-sky.png) 0 0 / 100%'}}>
//                 <img src={loc == "light" ? "../src/assets/images/header/sun.png" : "../src/assets/images/header/moon.png" } alt="" className={loc == "light" ? sercleClass : sercleClass + "translate-x-[-40px]"} />
//             </div>
//         </div>
//     )
// }

// export default NightMode