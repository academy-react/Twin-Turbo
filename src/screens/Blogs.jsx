import {Header,Footer,Button,SelectOption,Sorts,View} from '../components/common'
import changeView from "../core/utils/changeView";


import  blogs  from "../core/services/blogDB";

import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const Blogs = () => {
  const [items, setItems] = useState(blogs);
  let location = useLocation();

  let item = useRef();
  let parent = useRef();
  let content = useRef();

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          بلاگ
        </div>

        <div className="w-[90%] h-[100px] flex items-center justify-between">
          <SelectOption />

          <div className="w-[30%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <Sorts id="radio5" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <Sorts id="radio4" htmlFor="radio4" text="برترین اخبار" defaultChecked={false}/>
            <Sorts id="radio3" htmlFor="radio3" text="مقالات" defaultChecked={false}/>
            <Sorts id="radio2" htmlFor="radio2" text="اخبار" defaultChecked={false}/>
            <Sorts id="radio1" htmlFor="radio1" text="بلاگ" defaultChecked={false}/>
          </div>

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
                      link={`${location.pathname}Details/${index + 1}`}
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

export default Blogs;
