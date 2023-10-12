import {Header,Footer,Button} from '../components/common'

import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";

import courses from "../core/services/courseDB";
import changeView from '../core/utils/changeView.utils'
import View from '../components/common/View'
const Courses = () => {
  const [items, setItems] = useState(courses);
  let location = useLocation();

  let item = useRef();
  let parent = useRef();
  let content = useRef();


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
          {items.map((element, index) => {
            return (
              <div
                key={index}
                className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden"
                ref={item}
              >
                <div className="w-full h-170px overflow-hidden my-[10px]">
                  <img
                    src={"../src/assets/images/courses/" + element.src}
                    alt=""
                    className=" mx-auto h-full w-full rounded-[20px]"
                  />
                </div>

                <div dir="rtl" className="w-full h-[210px] mx-auto">
                  <div className="w-[95%] h-[150px] mx-auto">
                    <p className="text-[24px] text-right ">{element.name}</p>
                    <div
                      className="text-[#777] w-full mt-[15px] "
                      ref={content}
                    >
                      {element.content}
                    </div>
                  </div>

                  <div className="w-full h-[50px] flex justify-between items-center">
                    <img
                      src="../src/assets/images/Educated.png"
                      alt=""
                      className="w-[100px] h-[29px]"
                    />
                    <Button
                      content="ادامه مطلب"
                      className="whitespace-nowrap text-[16px] scale-[80%] "
                      link={`${location.pathname}/${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
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
