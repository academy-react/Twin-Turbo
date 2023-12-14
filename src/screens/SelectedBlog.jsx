import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import {Header,Footer,RightPanel} from '../components/common'

import SelectedBlogMap from '../components/map/SelectedBlogMap'
import customAxios from "../core/services/interceptor";
import CourseDetail from "../components/selected-Blog-course/CourseDetail";
import { ToastContainer, toast } from "react-toastify";

export let setingBlogs ;
export let setingItemComment ;
export let setComment ;
export let functionGetCommentNews ;

const SelectedBlog = () => {
  const [blog, setBlog] = useState({});
  const [itemComment, setItemComment] = useState([]);
  let url = useParams();
  let theme = localStorage.getItem("theme")

  setingBlogs = setBlog
  setingItemComment = setItemComment

  const getBlogDetail = async () => {
    let result = await customAxios.get("/News/" + url.id) 
    setBlog(result.detailsNewsDto)
  }

  const getBlogComment = async () => {
    let resultComment = await customAxios.get("/News/GetNewsComments?NewsId=" + url.id)
    setItemComment(resultComment)
  }
  
  useEffect(() => {
      functionGetCommentNews = getBlogComment
      setComment = setItemComment
      getBlogDetail()
      getBlogComment()
  }, [])


  const addToFavorite = async (e) => {
    if(!blog?.isCurrentUserFavorite) {
      await customAxios.post("/News/AddFavoriteNews?NewsId=" + url.id)
      getBlogDetail()
      toast.success("این خبر با موفقیت به مورد علاقه ها اضافه شد")
      e.target.innerHTML = "حذف از علاقه مندی ها"
    }
    else if(blog?.isCurrentUserFavorite) {
      await customAxios.delete("/News/DeleteFavoriteNews" , {
        data : {deleteEntityId : blog?.currentUserFavoriteId}
      })
      getBlogDetail()
      toast.success("این خبر با موفقیت از مورد علاقه ها حذف شد")
      e.target.innerHTML = "افزودن به علاقه مندی ها"
    }
  }

  const likeNews = async (e) => {
    if(!blog?.currentUserIsLike) {
      await customAxios.post("/News/NewsLike/" + url.id)
      getBlogDetail()
      toast.success("نظر شما با موفقیت ثبت شد")
      e.target.innerHTML = "حذف لایک"
    }
    else if(blog?.currentUserIsLike) {
      await customAxios.delete("/News/DeleteLikeNews" , {
        data : {deleteEntityId : blog?.likeId}
      })
      getBlogDetail()
      toast.success("نظر شما با موفقیت ثبت شد")
      e.target.innerHTML = "لایک خبر"
    }
  }

  const dissLikeNews = async () => {
    if(!blog?.currentUserIsDissLike) {
      await customAxios.post("/News/NewsDissLike/" + url.id)
      getBlogDetail()
      toast.success("نظر شما با موفقیت ثبت شد")
    }
    else toast.error("قادر به ثبت دوباره نظر نمی باشید")
  }

  return (
    <>
      <div className="w-[1920px] max-[1919px]:w-full mx-[auto]">
        <ToastContainer theme={theme} autoClose={4000} position="top-center" limit={2}  /> 
        <Header src="avatar.png" color="#5A0BA9" />

        <div className="w-[full] mb-10 flex justify-center flex-wrap items-start gap-[50px] mt-20 max-[1775px]:[&>div]:transition-all">
          <div className="flex flex-col">
            <div className="w-full rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 dark:[&>div:nth-child(even)]:bg-[#2a375c] [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div]:text-[18px]">
                <div className="text-[28px] self-end p-3 dark:text-white">مشخصات خبر</div>
                <CourseDetail content={blog?.currentLikeCount} contentStyle="text-[#000]" title="تعداد لایک" noLogo="hidden"/>
                <CourseDetail content={blog?.currentDissLikeCount} contentStyle="text-[#000]" title="تعداد دیسلایک" noLogo="hidden"/>
                <CourseDetail content={blog?.currentView} contentStyle="text-[#36C54E]" title="بازدید" noLogo="hidden"/>
              <button className="h-12 flex justify-center items-center bg-[#36c54e] text-white text-[22px] transition-all duration-500 hover:bg-[#34a647]" onClick={e => likeNews(e)}>{blog?.currentUserIsLike ? "حذف لایک" : "لایک خبر"}</button>
              <button className="h-12 flex justify-center items-center bg-[#c33b3b] text-white text-[22px] transition-all duration-500 hover:bg-[#9b3d3d]" onClick={dissLikeNews}>{blog?.currentUserIsDissLike ? "حذف دیسلایک" : "دیسلایک خبر"}</button>
              <button className="h-12 flex justify-center items-center bg-[#c25ed6] text-white text-[22px] rounded-b-2xl transition-all duration-500 hover:bg-[#994aa9]" onClick={e => addToFavorite(e)}>{blog?.isCurrentUserFavorite ? "حذف از علاقه مندی ها" : "افزودن به علاقه مندی ها"}</button>
            </div>
            <div dir="ltr" className="pr-[15px] w-[570px] max-[1775px]:w-[500px] max-[1355px]:w-[400px] h-[1200px] rounded-xl shadow-[0_0_7px_#ddd] bg-white overflow-y-auto mt-5 max-[1159px]:order-2">
              <div dir="rtl" className="w-[28%] h-[52px] rounded-[18px] bg-white shadow-[0_0_7px_#ddd] flex justify-around items-center [&>img]:w-[30px] [&>p]:text-[20px] my-[20px] mx-[25px]">
                <img src="../src/assets/images/icons/view (2).png" alt="" />
                <p>اخبار</p>
              </div>
              <div dir="rtl" className="w-full">
                <SelectedBlogMap />
              </div>
            </div>
          </div>
          <RightPanel details={blog ? blog : blog} title="خبر" db={itemComment} />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SelectedBlog;
