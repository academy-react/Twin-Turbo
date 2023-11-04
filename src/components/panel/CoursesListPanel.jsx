import { useRef } from 'react'
import ListCousePanelMap from '../map/ListCousePanelMap'
import Paginate from '../common/Paginate'
import courses from '../../core/services/courseDB'

const CoursesListPanel = ({bool,content}) => {

    const inpurSearch = useRef()

  return (
    <div className="w-[73%] bg-white rounded-3xl shadow-[0_0_7px_#ddd]">


        <div className="h-[15%] [&>div]:h-full [&>div]:w-[35%] flex justify-between ">

            <div className="flex justify-center items-center"> 
            
                <div className="bg-[#EEE6F6] w-[75%] h-[40%] rounded-[50px] flex items-center justify-around overflow-hidden pr-[10px]">
                    <img src="../src/assets/images/header/search.png" alt="" className=" w-[30px] h-[30px]" />
                    <input ref={inpurSearch} dir="rtl" type="text" className="w-[75%] h-full border-none outline-none bg-[#EEE6F6] placeholder:text-[#7F42BC] text-[#7F42BC]" placeholder="جستجو" id='inpurSearch'/>
                </div>

            </div>
            <div dir="rtl" className="flex items-center px-[15px]">
                <span>{content}</span>
            </div>

        </div>
        <div className="h-[70%] m-[25px] mt-[0] bg-[#f1f1f1] rounded-[25px] max-[1350px]:overflow-x-scroll" dir='rtl'>
            <div className="w-[75%] h-[15%] flex flex-row-reverse justify-around items-center mx-[auto] max-[1350px]:w-[900px]">
                <span>قیمت</span>
                <span>تاریخ پایان</span>
                <span>تاریخ شروع</span>
                <span>نام ترم</span>
                <span>نام استاد</span>
                <span>نام دوره</span>
            </div>
            <div className="h-[85%] mx-auto px-[15px] max-[1350px]:h-[80%]">
                {bool && <ListCousePanelMap inpurSearch={inpurSearch} />}
                {!bool && <div>ddd</div> }
                  
            </div>
        </div>
        <div className='h-[10%] w-[30%] mx-auto'>
            {bool && <Paginate itemsPerPage={5} db={courses} />}
        </div>


    </div>

  )
}

export default CoursesListPanel