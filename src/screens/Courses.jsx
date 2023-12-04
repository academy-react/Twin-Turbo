import { Header,Footer,SelectOption,View, Paginate } from '../components/common'
import changeViewCourses from "../core/utils/changeViewCourse.utils";
import { useEffect, useRef } from "react"
import CoursesMap, { settingInput } from '../components/map/CoursesMap'
import resizeCourse from '../core/utils/resizeCourse.utils'
import courses from '../core/services/courseDB'
import SortCourse from '../components/course&blog/SortCourse'
import { useState } from 'react';

export let settingCountCourse;

const Courses = () => {
    let parent = useRef();
    const time = useRef()
    const input = useRef()
    const [counter, setCounter] = useState(4)

    let state = sessionStorage.getItem("courseClass")  

    useEffect(() => {
      settingCountCourse = setCounter
        if(!state) sessionStorage.setItem("courseClass" , "grid")
        window.onresize = () => {resizeCourse(parent)}
        return () => { window.onresize = () => {return false}}
    }, [])


  const changer = (e) => {
    clearTimeout(time.current)
    let timeOut = setTimeout(() => {
      settingInput(e.target.value)
    }, 1000);
    time.current = timeOut
      
  }
  

  return (
    <div className="w-[1920px] max-[1920px]:w-full mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          دوره
        </div>
        <div className="bg-[#EEE6F6] w-[400px] h-[50px] my-[15px] rounded-[50px] flex items-center justify-around overflow-hidden pr-[10px]">
            <img src="../src/assets/images/header/search.png" alt="" className=" w-[30px] h-[30px]" />
            <input dir="rtl" ref={input} onInput={(e)=>changer(e)} type="text" className="w-[75%] h-full border-none outline-none bg-[#EEE6F6] placeholder:text-[#7F42BC] text-[#7F42BC]" placeholder="جستجو" id='inpurSearch'/>
        </div>
        <div className="w-[90%] h-[100px] flex items-center max-[801px]:justify-center min-[801px]:justify-between">
          <SelectOption />

          <div className="w-[40%] min-w-[510px] [&>*]:mx-2 whitespace-nowrap max-[801px]:ml-[25px] max-[770px]:mx-auto max-[770px]:scale-[90%] max-[770px]:w-full max-[450px]:[&>*]:text-[14px] max-[1500px]:w-[65%] h-[60px] p-[7px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px] max-[1700px]:text-[20px] max-[1170px]:text-[18px] max-[990px]:text-[16px] max-[480px]:scale-75 max-[395px]:scale-50">
            <SortCourse type="Active" id="radio5" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <SortCourse type="insertDate" id="radio4" htmlFor="radio4" text="جدید ترین" defaultChecked={false}/>
            <SortCourse type="likeCount" id="radio3" htmlFor="radio3" text="محبوب ترین" defaultChecked={false}/>
            <SortCourse type="currentRegistrants" id="radio2" htmlFor="radio2" text=" تعداد دانشجو" defaultChecked={false}/>
            <SortCourse type="cost" id="radio1" htmlFor="radio1" text="پرفروش ترین" defaultChecked={false}/>
          </div>

          <div className="max-[800px]:hidden w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <View id="radios1" htmlFor="radios1" defaultChecked={state == "grid" ? true : false} src="view (1).png" onInput={()=> {changeViewCourses(parent);sessionStorage.setItem("courseClass","grid")}}/>
            <View id="radios2" htmlFor="radios2" defaultChecked={state == "table" ? true : false} src="view (2).png" onInput={()=> {changeViewCourses(parent);sessionStorage.setItem("courseClass","table")}}/>
          </div>
        </div>
        <div dir="rtl" className="w-[90%] flex flex-wrap justify-around" ref={parent}>
          <CoursesMap parent={parent} />
        </div>
        <div className="w-full h-[70px] m-[25px] rounded-[25px] flex justify-center items-center">
          <div className="w-[400px] h-full shadow-[0_0_7px_#ddd] rounded-[25px] bg-white">
            <Paginate itemsPerPage={counter} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Courses;
