import {Header,Footer,Button} from '../components/common'


import  blogs  from "../core/services/blogDB";

import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
const Blogs = () => {
  const [items, setItems] = useState(blogs);
  let location = useLocation();

  let item = useRef();
  let parent = useRef();
  let content = useRef();

  let view1 =
    "w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden";
  let view2 =
    "w-[95%] h-[300px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex overflow-hidden [&>div:nth-child(2)>div:first-child]:h-[20%] [&>div:nth-child(2)>div:first-child]:h-[80%] [&>div:nth-child(2)>div:first-child]:w-full [&>div:nth-child(2)>div:first-child]:pt-[30px] [&>div:nth-child(2)]:h-full [&>div:nth-child(2)>div:first-child>p]:text-[28px] [&>div:nth-child(2)]:w-[60%] [&>div:nth-child(2)>div:first-child>div]:my-[40px] [&>div:first-child]:w-[31%]";
  let rowView = "آموزشگاه در تدارک دوره های جدید برنامه نویسی است";
  let colView =
    "آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است آموزشگاه در تدارک دوره های جدید برنامه نویسی است";

  const View = () => {
    let children = parent.current.children;

    for (let i = 0; i < children.length; i++) {
      if (radios1.checked == true) {
        parent.current.children[i].lastChild.firstChild.lastChild.innerHTML =
          rowView;
        children[i].className = "";
        children[i].className = view1;
      } else if (radios1.checked == false) {
        parent.current.children[i].lastChild.firstChild.lastChild.innerHTML =
          colView;
        children[i].className = "";
        children[i].className = view2;
      }
    }
  };

  return (
    <div className="w-[1920px] mx-auto my-0 overflow-hidden">
      <Header src="avatar.png" color="#5A0BA9" />

      <div className="w-full  flex flex-col items-center">
        <div className="inline-block my-[55px] px-[95px] py-[12px] rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] bg-white">
          بلاگ
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

          <div className="w-[30%] h-[60px] p-[7px] flex items-center justify-evenly rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>input]:hidden [&>label]:py-[8px] [&>label]:cursor-pointer [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <input type="radio" name="radio" id="radio1" />
            <label htmlFor="radio1">بلاگ</label>
            <input type="radio" name="radio" id="radio2" />
            <label htmlFor="radio2">اخبار</label>
            <input type="radio" name="radio" id="radio3" />
            <label htmlFor="radio3">مقالات</label>
            <input type="radio" name="radio" id="radio4" />
            <label htmlFor="radio4">برترین اخبار</label>
            <input
              type="radio"
              name="radio"
              id="radio5"
              defaultChecked={true}
            />
            <label htmlFor="radio5">سایر</label>
          </div>

          <div className="w-[120px] h-[60px] p-[5px] flex items-center justify-around rounded-[18px] text-[25px] shadow-[0_0_7px_#ccc] [&>img]:h-[35px] [&>img]:mx-[5px] [&>img]:cursor-pointer [&>input]:hidden [&>label]:cursor-pointer [&>label]:py-[8px] [&>input:checked+label]:border-b [&>input:checked+label]:border-b-[#333] bg-white [&>input:checked+label]:border-b-[4px]">
            <input type="radio" name="r" id="radios2" onChange={View} />
            <label htmlFor="radios2">
              <img src="../src/assets/images/view (2).png" alt="" />
            </label>
            <input
              type="radio"
              name="r"
              id="radios1"
              onChange={View}
              defaultChecked={true}
            />
            <label htmlFor="radios1">
              <img src="../src/assets/images/view (1).png" alt="" />
            </label>
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

export default Blogs;
