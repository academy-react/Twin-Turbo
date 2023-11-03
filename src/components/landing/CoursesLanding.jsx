import { useRef, useState } from "react";
import Button from "../common/Button";
import TitleComponents from "./TitleComponents";
import { landingCourseSelector } from '../../core/utils/landingCourseSelector.utils'
import courseDB from '../../core/services/courseDB'
const Courses = () => {

  let bigPic = useRef()
  let title = useRef()
  let master = useRef()
  let content = useRef()

  let landingCourse = useRef()
  const [num, setNum] = useState()
  setTimeout(() => {setNum(landingCourse.current.getAttribute("data-id"))}, 10);

  return (
    <div className="w-full relative max-[1600px]:flex-col">
        
        <div className="h-[250px] flex justify-center">

          <TitleComponents title="دوره ها" content="اخرین دوره های موجود" src="courses-title.png" className="flex mb-[45px]" />

        </div>

        <div className="max-[1250px]:w-[90%] [&>div]:shadow-[0_0_7px_#ccc] max-[400px]:[&>div]:scale-x-[90%] mx-auto [&>div]:mx-[30px] flex min-[1601px]:justify-center justify-center max-[1600px]:[&>div]:my-[15px]" >

            <div className="bg-white w-[350px] h-[600px] rounded-[25px] flex flex-col justify-around items-center transition-all duration-100 relative" >
                <img src="../src/assets/images/landingCourse/c-i-1.png" alt="" className="absolute left-[-160%] bottom-0 z-10 transition-all duration-1000 h-[250px]"  id="coursesHolder1" />

                <img src={"../src/assets/images/courses/" + courseDB[0].src} alt="" className="w-[85%] h-[150px] cursor-pointer rounded-[20px]" data-id="1" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[1].src} alt="" className="w-[85%] h-[150px] cursor-pointer rounded-[20px]" data-id="2" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[2].src} alt="" className="w-[85%] h-[150px] cursor-pointer rounded-[20px]" data-id="3" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/> 
                <Button content="بیشتر" link="/blogs" className="mx-auto" />

            </div>

            <div className="bg-white w-[650px] h-[600px] relative py-[15px] rounded-[25px] transition-all duration-150" data-id="1" ref={landingCourse}>
                <img src="../src/assets/images/landingCourse/c-i-2.png" alt="" className="absolute right-[-100%] top-[0px] w-28 -z-10 transition-all duration-1000 " id="coursesHolder2"/>
                <img src="../src/assets/images/courses/01.png" alt="" className="w-[90%] h-[280px] mx-auto rounded-xl" ref={bigPic}/>
                <div className="w-[90%] h-[250px] mx-auto relative">
                    <div className="px-[10px] mt-[20px] h-[50px] flex justify-between items-center">
                        <div className="text-[18px]" ref={master}> استاد بحرالعلوم</div>
                        <div className="text-[24px]" ref={title}>دوره کامل : جی اس</div>
                    </div>
                    <div className="mt-[30px] text-[#777] px-[10px]" dir="rtl" ref={content}>آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی استآموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است</div>
                </div>
                <Button content="مشاهده دوره" className="absolute left-7 bottom-4" link={"/courses/" + num } />


            </div>

        </div>
    </div>
  );
};

export default Courses;

