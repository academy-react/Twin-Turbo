import {Header,Footer,Button} from '../components/common'

import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

import changeView from '../core/utils/changeView.utils'
import View from '../components/common/View'

import CoursesMap from '../components/map/CoursesMap'
const Courses = () => {

  let parent = useRef();


  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          دوره
        </div>

        <div className="w-[90%] h-[100px] flex items-center justify-between">
          <select
            name=""
            id=""
            className="w-[80px] h-[60px] bg-white p-[5px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc]"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <div className="w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">

              <View id="radios1" htmlFor="radios1" defaultChecked={true} src="view (1).png" onInput={()=> changeView(parent)}/>
              <View id="radios2" htmlFor="radios2" defaultChecked={false} src="view (2).png" onInput={()=> changeView(parent)}/>

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
