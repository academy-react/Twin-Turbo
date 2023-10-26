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
    <div className="border-[green] border w-full relative max-[1023px]:mb-44 max-[800px]:mb-80 max-[400px]:mb-60 max-[1600px]:flex-col">
        
        <div className="h-[250px]">

          <TitleComponents title="دوره ها" content="اخرین دوره های موجود" src="courses-title.png" className="flex mb-[45px]" />

        </div>

        <div className="w-[70%] mx-auto h-[800px] [&>div]:mx-[30px] [&>div]:my-[15px] flex min-[1601]:justify-between mt-[20px] max-[1600px]:h-[1200px] max-[1600px]:flex-col-reverse max-[1600px]:items-center justify-center">

            <div className="w-[30%] min-w-[373px] max-[1023px]:w-[90%] max-[800px]:scale-[90%] max-[620px]:scale-y-[75%] rounded-[20px] shadow-[0_0_7px_#ccc] bg-white max-[1600px]:mt-[20px]  h-[750px] flex flex-col items-center justify-around [&>img]:cursor-pointer [&>img]:w-[90%] [&>img]:h-[190px] max-[1600px]:h-[200px] max-[1600px]:[&>img]:h-[70px] max-[1600px]:[&>img]:w-[70px] max-[1600px]:w-[65%] max-[1600px]:flex-row max-[1600px]:[&>img]:w-[30%]">
                <img src={"../src/assets/images/courses/" + courseDB[0].src} alt="" className="rounded-[20px]" data-id="1" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[1].src} alt="" className="rounded-[20px]" data-id="2" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/>
                <img src={"../src/assets/images/courses/" + courseDB[2].src} alt="" className="rounded-[20px]" data-id="3" onClick={(e)=> landingCourseSelector(e,bigPic.current,title.current,master.current,content.current,landingCourse.current,setNum)}/> 
                <Button content="بیشتر" link="/blogs" className="max-[1600px]:hidden" />

            </div>

            <div className="w-[65%] min-w-[373px] max-[1023px]:w-[90%] max-[550px]:w-[110%] h-[750px] max-[1200px]:h-[620px] rounded-3xl bg-white p-5 relative shadow-[0_0_7px_#ccc] max-[800px]:scale-[90%] max-[620px]:scale-y-[75%] max-[620px]:my-[-50px]  max-[410px]:scale-y-[60%]" data-id="1" ref={landingCourse}>

                <img src="../src/assets/images/courses/01.png" alt="" className="w-full max-[1279px]:h-[350px] h-[400px] max-[1200px]:h-[300px] rounded-3xl" ref={bigPic}/>
                <div className=" text-[26px] absolute right-7 top-[65%] max-[1200px]:top-[55%] max-[770px]:text-[22px] max-[650px]:text-[18px]" ref={title}>دوره کامل : جی اس</div>
                <div className=" text-[22px] absolute left-[50px] top-[65%] max-[1200px]:top-[55%] max-[770px]:text-[18px] max-[650px]:text-[15px]" ref={master}> استاد بحرالعلوم</div>
                <div className="text-[#7f7f7f] absolute right-7 pl-4 top-[78%] text-[20px] max-[1200px]:top-[65%] max-[700px]:text-[16px]" dir="rtl" ref={content}>نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌ باز و چندسکویی برای زبان جاوااسکریپت است.</div>
                <Button content="مشاهده دوره" className="absolute left-7 bottom-4" link={"/courses/" + num } />

            </div>

        </div>
      

        <img src="../src/assets/images/landingCourse/c-i-1.png" alt="" className="absolute left-[-300px] bottom-0 w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden"  id="coursesHolder1" />
        <img src="../src/assets/images/landingCourse/c-i-2.png" alt="" className="absolute right-[-300px] top-[240px] w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden" id="coursesHolder2"/>
        <img src="../src/assets/images/landingCourse/c-i-1-h.png" className="absolute left-[-260px] bottom-[169px] -rotate-6 w-14 max-[1500px]:-rotate-[5deg] max-[1500px]:ml-4 max-[1620px]:ml-2 max-[1200px]:hidden transition-all duration-1000" id="coursesHolder3" />
    
    </div>
  );
};

export default Courses;

