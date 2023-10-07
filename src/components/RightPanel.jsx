import DescriptionBlog from '../components/DescriptionBlog'
import CommentBlog from '../components/CommentBlog'
import { useState } from 'react'

const RightPanel = ({src,name}) => {

    const [flag, setFlag] = useState(true)

    const change = (num) => {
        setFlag(num)

        if(num == true) {
            btn2.style.background = "transparent";
            btn1.style.background = "#f1ebf8";
        }
        else if(num == false) {
            btn1.style.background = "transparent";
            btn2.style.background = "#f1ebf8";
        }
    }


    return (
        <div className="w-[60%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white ">
            <div className='w-full h-[530px] flex justify-center items-center'><img src={"../src/assets/images/" + src} alt="" className='scale-x-[110%]'/></div>
            <div className='w-full  flex justify-center items-center text-[40px]'>{name}</div>
            <div dir='rtl' className='w-full h-[600px] px-[20px]'>
                <button className='p-[10px] border border-[#dddd] relative right-[35px] top-[8px] rounded-xl ' onClick={(e)=> change(true)} id='btn1' style={{background:"#f1ebf8"}}>نظرات</button>
                <button className='p-[10px] border border-[#dddd] relative right-[65px] top-[8px] rounded-xl ' onClick={(e)=> change(false)} id='btn2'>توضیحات</button>
                {flag == true && <DescriptionBlog/>}
                {flag == false && <CommentBlog />}
            </div>
        </div> 
    )
}

export default RightPanel