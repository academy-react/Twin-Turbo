import {Header,Footer,RightPanel} from '../components/common'

import  blogs  from "../core/services/blogDB";

import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import SelectedBlog from '../components/map/SelectedBlogMap'
const Blog = () => {
  const [item, setItem] = useState(blogs);
  let url = useParams();

  const finded = () => {
    let finded = item.find((element) => {
      return element.id == url.id;
    });
    return <RightPanel src={finded.src} name={finded.name} />;
  };

  

  return (
    <>
      <div className="w-[1920px] mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />

        <div className="w-[full] h-[1400px] flex justify-center items-center gap-[50px]">
          <div
            dir="ltr"
            className="w-[30%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white overflow-y-scroll"
          >
            <div
              dir="rtl"
              className="w-[28%] h-[52px] rounded-[18px] bg-white shadow-[0_0_7px_#ddd] flex justify-around items-center [&>img]:w-[30px] [&>p]:text-[20px] my-[20px] mx-[25px] relative left-[350px]"
            >
              <img src="../src/assets/images/menuu.png" alt="" />
              <p>بلاگ ها</p>
            </div>
            <div dir="rtl" className="w-full">
              <SelectedBlog />
            </div>
          </div>
          {finded()}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
