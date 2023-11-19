import { useState } from "react";
import { useParams } from "react-router-dom";

import {Header,Footer,RightPanel} from '../components/common'
import  blogs  from "../core/services/blogDB";

import SelectedBlogMap from '../components/map/SelectedBlogMap'
import { useEffect } from "react";
import customAxios from "../core/services/interceptor";

const SelectedBlog = () => {
  const [item, setItem] = useState(blogs);
  let url = useParams();


  const getBlogs = async () => {
    let result = await customAxios.get("/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC") 
    setItem(result.news)
  }

  useEffect(() => {
    getBlogs()
  }, [])
  

  const finded = () => {
    let finded = item.find((element) => {
      return element.id == url.id;
    });
    return <RightPanel src={finded?.currentImageAddressTumb} name={finded?.title} text={finded?.describe} db={finded} title="بلاگ" />;
  };

  return (
    <>
      <div className="w-[1920px] max-[1919px]:w-full mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />

        <div className="w-[full] mb-10 flex justify-center flex-wrap items-start gap-[50px] mt-20 max-[1775px]:[&>div]:transition-all">
          <div dir="ltr" className="pr-[15px] w-[570px] max-[1775px]:w-[500px] max-[1355px]:w-[400px] h-[1200px] rounded-xl shadow-[0_0_7px_#ddd] bg-white overflow-y-auto mt-5 max-[1159px]:order-2">
            <div dir="rtl" className="w-[28%] h-[52px] rounded-[18px] bg-white shadow-[0_0_7px_#ddd] flex justify-around items-center [&>img]:w-[30px] [&>p]:text-[20px] my-[20px] mx-[25px]">
              <img src="../src/assets/images/menuu.png" alt="" />
              <p>بلاگ ها</p>
            </div>
            <div dir="rtl" className="w-full">
              <SelectedBlogMap />
            </div>
          </div>
          {finded()}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default SelectedBlog;
