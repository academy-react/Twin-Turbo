import {Header,Footer,Button,SelectOption,Sorts,View} from '../components/common'
import changeView from "../core/utils/changeView.utils";
import { useEffect, useRef, useState } from "react";
import BlogsMap from '../components/map/BlogsMap'
import resize from '../core/utils/resize.utils'


const Blogs = () => {
  let parent = useRef();
  
    useEffect(() => {
      window.addEventListener("resize",()=> resize(parent))
      return () => { window.removeEventListener("resize",()=> resize(parent)) }
    }, [])

  return (
    <div className="w-[1920px] max-[1920px]:w-full mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          بلاگ
        </div>

        <div className="w-[90%] h-[100px] flex items-center max-[801px]:justify-center min-[801px]:justify-between">
          <SelectOption />

          <div className="w-[30%] max-[801px]:ml-[25px] max-[770px]:mx-auto max-[770px]:scale-[90%] max-[770px]:w-full max-[770px]:[&>*]:text-[18px] max-[450px]:[&>*]:text-[14px] max-[1500px]:w-[65%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <Sorts id="radio5" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <Sorts id="radio4" htmlFor="radio4" text="برترین اخبار" defaultChecked={false}/>
            <Sorts id="radio3" htmlFor="radio3" text="مقالات" defaultChecked={false}/>
            <Sorts id="radio2" htmlFor="radio2" text="اخبار" defaultChecked={false}/>
            <Sorts id="radio1" htmlFor="radio1" text="بلاگ" defaultChecked={false}/>
          </div>

          <div className="max-[800px]:hidden w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
              <View id="radios1" htmlFor="radios1" defaultChecked={true} src="view (1).png" onInput={()=> changeView(parent)}/>
              <View id="radios2" htmlFor="radios2" defaultChecked={false} src="view (2).png" onInput={()=> changeView(parent)}/>
          </div>
        </div>
        <div
          dir="rtl"
          className="w-[90%] flex flex-wrap justify-around"
          ref={parent}
        >
          <BlogsMap />
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
