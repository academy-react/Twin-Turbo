import { useRef } from "react"
import darkMode from '../../core/utils/darkMode'

const DarkBtn = () => {

    let darkBtn = useRef()

    return (

        <div className="w-[60px] bg-[#444] h-[60px] brightness-[120%] rounded-full fixed left-2 bottom-2 flex justify-center items-center cursor-pointer transition-all duration-[.5s] z-10 max-[768px]:scale-90 max-[590px]:scale-75" ref={darkBtn} onClick={()=> darkMode(darkBtn)} >

        </div>
    
    )
}

export default DarkBtn
