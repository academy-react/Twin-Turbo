import { useRef } from "react";
import { useLocation } from "react-router-dom";

import blogs from "../../core/services/blogDB";
import { Button } from "../common";
import { useState } from "react";

let setBlog;
const BlogsMap = () => {

    let location = useLocation();
    let item = useRef();
    let content = useRef();

    const [blogsItem, setBlogsItem] = useState(blogs.slice(0,4))

    setBlog = setBlogsItem
    
    return (
        blogsItem.map((element, index) => {
            return (
              <div
                key={index}
                className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end max-[450px]:justify-center overflow-hidden"
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
                    <p className="text-[24px] text-right max-[450px]:text-center">{element.name}</p>
                    <div
                      className="text-[#777] w-full mt-[15px] max-[450px]:text-center"
                      ref={content}
                    >
                      {element.content}
                    </div>
                  </div>
    
                  <div className="w-full h-[50px] flex justify-between items-center">
                    <img
                      src="../src/assets/images/Educated.png"
                      alt=""
                      className="w-[100px] h-[29px] max-[450px]:hidden mb-[10px]"
                    />
                    <Button
                      content="ادامه مطلب"
                      className="whitespace-nowrap text-[16px] scale-[80%] max-[450px]:mx-auto"
                      link={`${location.pathname}/${index + 1}`}
                    />
                  </div>
                </div>
              </div>
            );
        })
    )
}
export {setBlog}
export default BlogsMap