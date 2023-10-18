import { useState } from "react";
import { useParams } from "react-router-dom";

import {Header,Footer,RightPanel} from '../components/common'
import  blogs  from "../core/services/blogDB";

import SelectedBlog from '../components/map/SelectedBlogMap'

const Blog = () => {
  const [item, setItem] = useState(blogs);
  let url = useParams();

  const finded = () => {
    let finded = item.find((element) => {
      return element.id == url.id;
    });
    return <RightPanel src={finded.src} name={finded.name} text={finded.content} db={blogs} title="بلاگ" />;
  };

  return (
    <>
      <div className="w-[1920px] max-[1919px]:w-full mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />

        <div className="w-[full] flex justify-center items-start gap-[50px] mt-20">
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
