import {Header,Footer,SelectOption,Sorts,View} from '../components/common'
import changeViewCourses from "../core/utils/changeViewCourse.utils";
import { useEffect, useRef } from "react"
import CoursesMap from '../components/map/CoursesMap'
import resizeCourse from '../core/utils/resizeCourse.utils'


const Courses = () => {
  let parent = useRef();
  
    useEffect(() => {
      window.onresize = () => {resizeCourse(parent)}
      return () => { window.onresize = () => {return false}}
    }, [])

  return (
    <div className="w-[1920px] max-[1920px]:w-full mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          دوره
        </div>

        <div className="w-[90%] h-[100px] flex items-center max-[801px]:justify-center min-[801px]:justify-between">
          <SelectOption />

          <div className="w-[40%] min-w-[510px] [&>*]:mx-2 whitespace-nowrap max-[801px]:ml-[25px] max-[770px]:mx-auto max-[770px]:scale-[90%] max-[770px]:w-full max-[450px]:[&>*]:text-[14px] max-[1500px]:w-[65%] h-[60px] p-[7px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px] max-[1700px]:text-[20px] max-[1170px]:text-[18px] max-[990px]:text-[16px] max-[480px]:scale-75 max-[395px]:scale-50">
            <Sorts id="radio5" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <Sorts id="radio4" htmlFor="radio4" text="ظرفیت" defaultChecked={false}/>
            <Sorts id="radio3" htmlFor="radio3" text="ارزان ترین" defaultChecked={false}/>
            <Sorts id="radio2" htmlFor="radio2" text="تعداد " defaultChecked={false}/>
            <Sorts id="radio1" htmlFor="radio1" text="پرفروش ترین" defaultChecked={false}/>
          </div>

          <div className="max-[800px]:hidden w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
              <View id="radios1" htmlFor="radios1" defaultChecked={true} src="view (1).png" onInput={()=> changeViewCourses(parent)}/>
              <View id="radios2" htmlFor="radios2" defaultChecked={false} src="view (2).png" onInput={()=> changeViewCourses(parent)}/>
          </div>
        </div>
        <div
          dir="rtl"
          className="w-[90%] flex flex-wrap justify-around"
          ref={parent}
        >
          <CoursesMap />
        </div>
        <div className="w-full h-[70px] m-[25px] rounded-[25px] flex justify-center">
          <div className="w-[30%] h-full shadow-[0_0_7px_#ddd] rounded-[25px]"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
