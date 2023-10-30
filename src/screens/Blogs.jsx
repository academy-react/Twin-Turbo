import {Header,Footer,SelectOption,Sorts,View,Paginate} from '../components/common'
import changeView from "../core/utils/changeViewBlog.utils";
import { useEffect, useRef } from "react";
import BlogsMap from '../components/map/BlogsMap'
import resizeBlog from '../core/utils/resizeBlog.utils'
import filterBlogs from '../core/utils/filterBlogs.utils'
import blogs from "../core/services/blogDB";

const Blogs = () => {
  let parent = useRef();
  
    useEffect(() => {
      window.onresize = () => {resizeBlog(parent)}
      return () => { window.onresize = () => {return false}}
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

          <div className="w-[30%] max-[801px]:ml-[25px] max-[770px]:mx-auto max-[770px]:scale-[90%] max-[770px]:w-full max-[770px]:[&>*]:text-[18px] max-[450px]:[&>*]:text-[14px] max-[1500px]:w-[65%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <Sorts id="radio5" func={filterBlogs} type="all" htmlFor="radio5" text="همه" defaultChecked={true}/>
            <Sorts id="radio4" func={filterBlogs} type="bestNews" htmlFor="radio4" text="برترین اخبار" defaultChecked={false}/>
            <Sorts id="radio3" func={filterBlogs} type="articles" htmlFor="radio3" text="مقالات" defaultChecked={false}/>
            <Sorts id="radio2" func={filterBlogs} type="news" htmlFor="radio2" text="اخبار" defaultChecked={false}/>
            <Sorts id="radio1" func={filterBlogs} type="blog" htmlFor="radio1" text="بلاگ" defaultChecked={false}/>
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
              <Paginate itemsPerPage={4} db={blogs} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Blogs;
