import {Header,Footer,SelectOption,Sorts,View,Paginate} from '../components/common'
import changeView from "../core/utils/changeViewBlog.utils";
import { useEffect, useRef } from "react";
import BlogsMap, { setingInput } from '../components/map/BlogsMap'
import resizeBlog from '../core/utils/resizeBlog.utils'
import { useState } from 'react';


export let settingCountBlog;

const Blogs = () => {
  let parent = useRef();
  const input = useRef()
  const time = useRef()
  const [counter, setCounter] = useState(4)

  
    useEffect(() => {
      settingCountBlog = setCounter
      window.onresize = () => {resizeBlog(parent)}
      return () => { window.onresize = () => {return false}}
    }, [])

    const changer = (e) => {

      clearTimeout(time.current)
      let timeOut = setTimeout(() => {
          // setCounter(parent.current.childNodes.length)
          setingInput(e.target.value)

      }, 1000);
      time.current = timeOut

    }
  return (
    <div className="w-[1920px] max-[1920px]:w-full mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          بلاگ
        </div>
        <div className="bg-[#EEE6F6] w-[400px] h-[50px] my-[15px] rounded-[50px] flex items-center justify-around overflow-hidden pr-[10px]">
            <img src="../src/assets/images/header/search.png" alt="" className=" w-[30px] h-[30px]" />
            <input dir="rtl" ref={input} onInput={(e)=>changer(e)} type="text" className="w-[75%] h-full border-none outline-none bg-[#EEE6F6] placeholder:text-[#7F42BC] text-[#7F42BC]" placeholder="جستجو" id='inpurSearch'/>
        </div>
        <div className="w-[90%] h-[100px] flex items-center max-[801px]:justify-center min-[801px]:justify-between">
          
          <SelectOption />

          <div className="w-[45%] max-[801px]:ml-[25px] max-[770px]:mx-auto max-[770px]:scale-[90%] max-[770px]:w-full max-[770px]:[&>*]:text-[18px] max-[450px]:[&>*]:text-[14px] max-[1500px]:w-[65%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <Sorts id="radio5" type="Active" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <Sorts id="radio4" type="currentView" htmlFor="radio4" text=" پر بازدید ترین" defaultChecked={false}/>
            <Sorts id="radio3" type="currentLikeCount" htmlFor="radio3" text="محبوب ترین" defaultChecked={false}/>
            <Sorts id="radio2" type="currentRate" htmlFor="radio2" text="بیشترین امتیاز" defaultChecked={false}/>
            <Sorts id="radio1" type="insertDate" htmlFor="radio1" text="جدیدترین" defaultChecked={false}/>
          </div>

          <div className="max-[800px]:hidden w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <View id="radios1" htmlFor="radios1" defaultChecked={true} src="view (1).png" onInput={()=> changeView(parent)}/>
            <View id="radios2" htmlFor="radios2" defaultChecked={false} src="view (2).png" onInput={()=> changeView(parent)}/>
          </div>
        </div>
        <div dir="rtl" className="w-[90%] flex flex-wrap justify-around" ref={parent}>
          <BlogsMap  />
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

export default Blogs;
