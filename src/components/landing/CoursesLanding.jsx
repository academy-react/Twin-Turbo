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

        <div className="border border-[green]  max-[400px]:[&>div]:scale-x-[90%] mx-auto [&>div]:mx-[30px] flex min-[1601px]:justify-center justify-center max-[1600px]:[&>div]:my-[15px]">

            <div className="w-[300px] h-[600px] border border-[red] rounded-[25px] flex flex-col justify-around items-center [&>img]:w-[85%] [&>img]:cursor-pointer [&>img]:h-[150px]">
                
                <img src={"../src/assets/images/courses/" + courseDB[0].src} alt="" className="rounded-[20px]" data-id="1" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[1].src} alt="" className="rounded-[20px]" data-id="2" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[2].src} alt="" className="rounded-[20px]" data-id="3" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/> 
                <Button content="بیشتر" link="/blogs" className="mx-auto" />

            </div>

            <div className="w-[500px] h-[600px] relative py-[15px] border border-[red] rounded-[25px]" data-id="1" ref={landingCourse}>

                <img src="../src/assets/images/courses/01.png" alt="" className="w-[90%] h-[250px] mx-auto rounded-xl" ref={bigPic}/>
                <div className="w-[90%] h-[250px] mx-auto relative">
                    <div className="h-[50px] flex justify-between items-center">
                        <div className="text-[18px]" ref={master}> استاد بحرالعلوم</div>
                        <div className="text-[24px]" ref={title}>دوره کامل : جی اس</div>
                    </div>
                    <div className="mt-[30px] text-[#777]" dir="rtl" ref={content}>آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی استآموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است</div>
                </div>
                <Button content="مشاهده دوره" className="absolute left-7 bottom-4" link={"/courses/" + num } />


            </div>

        </div>
      

        <img src="../src/assets/images/landingCourse/c-i-1.png" alt="" className="absolute left-[-300px] bottom-0 w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden "  id="coursesHolder1" />
        <img src="../src/assets/images/landingCourse/c-i-2.png" alt="" className="absolute right-[-300px] top-[240px] w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden " id="coursesHolder2"/>
        <img src="../src/assets/images/landingCourse/c-i-1-h.png" className="absolute left-[-260px] bottom-[169px] -rotate-6 w-14 max-[1500px]:-rotate-[5deg] max-[1500px]:ml-4 max-[1620px]:ml-2 max-[1200px]:hidden transition-all duration-1000" id="coursesHolder3" />
    
    </div>
  );
};

export default Courses;

