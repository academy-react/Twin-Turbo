import { useEffect, useState } from "react";
import CourseDetail from "../components/selected-Blog-course/CourseDetail";
import { useParams } from "react-router-dom";

import {Header,Footer,RightPanel} from '../components/common'
import customAxios from "../core/services/interceptor";
import { ToastContainer, toast } from "react-toastify";

export let setComments;
const SelectedCourses = () => {

  const [item, setItem] = useState();
  const [teacher, setTeacher] = useState();
  const [comment, setComment] = useState();
  let url = useParams();
  let theme = localStorage.getItem("theme")

  const getCourseDetail = async () => {

    let result = await customAxios.get("/Home/GetCourseDetails?CourseId=" + url.id)
    setItem(result)

    let TeacherResult = await customAxios.get("/Home/GetTeacherDetails?TeacherId=" + result.teacherId)
    setTeacher(TeacherResult)

  }

  const getCommentCourse = async () => {

      let result = await customAxios.get("/Course/GetCourseCommnets/" + url.id)
      setComment(result)

  }

  const addToReserve = () => {
    if(item?.isCourseReseve == "0") {
      customAxios.post("/CourseReserve/ReserveAdd",{
          courseId: url.id
      })
      toast.success("این دوره با موفقیت رزرو شد")
    }
    else toast.error("این دوره از قبل رزرو شده است")
  }

  const addToFavorite = () => {
    if(!item?.isUserFavorite) {
      customAxios.post("/Course/AddCourseFavorite",{
          courseId: url.id
      })
      toast.success("این دوره با موفقیت به مورد علاقه ها اضافه شد")
    }
    else toast.error("این دوره در لیست علاقه مندی های شما موجود میباشد")
  }

  const likeCourse = async () => {
    if(item?.currentUserLike == "0") {
      await customAxios.post("/Course/AddCourseLike?CourseId=" + url.id)
      getCourseDetail()
      toast.success("نظر شما با موفقیت ثبت شد")
    }
    else toast.error("قادر به ثبت دوباره نظر نمی باشید")
  }

  const dissLikeCourse = async () => {
    if(item?.currentUserDissLike == "0") {
      await customAxios.post("/Course/AddCourseDissLike?CourseId=" + url.id)
      getCourseDetail()
      toast.success("نظر شما با موفقیت ثبت شد")
    }
    else toast.error("قادر به ثبت دوباره نظر نمی باشید")
  }

  useEffect(() => {
      setComments = setComment
      getCourseDetail()
      getCommentCourse()
      console.log(item);
  }, [])
  
  return (
    <>
      <div className="w-[1920px] max-[1919px]:w-full mx-[auto]">
        <ToastContainer theme={theme} autoClose={4000} position="top-center" limit={2}  /> 
        <Header src="avatar.png" color="#5A0BA9"/>
        <div className="w-[full] flex justify-center flex-wrap gap-[50px] my-5 mt-20 [&>div]:transition-all [&>div]:duration-100">
          <div dir="ltr" className="w-[580px] max-[1780px]:w-[500px] max-[1355px]:w-[400px] h-full flex flex-col items-center justify-center rounded-xl shadow-[0_0_7px_#ddd] bg-white py-5 max-[1150px]:order-2 max-[1150px]:w-[60%] max-[1150px]:mb-10 max-[715px]:w-[80%] max-[600px]:w-full max-[600px]:rounded-none" >
            <div className=" w-[80%] rounded-t-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[18px]">
              <div className="text-[28px] self-end p-3">مشخصات دوره</div>
              <CourseDetail content={item?.title} title="نام دوره" logo="courseName.png"/>
              <CourseDetail content={item?.courseStatusName} title="وضعیت دوره" logo="terms.png"/>
              <CourseDetail content={item?.courseLevelName} title="سطح دوره" logo="terms.png"/>
              <CourseDetail content={item?.startTime.slice(0,10)} title="شروع دوره" logo="startTerm.png"/>
              <CourseDetail content={item?.endTime.slice(0,10)} title="پایان دوره" logo="endTerm.png"/>
              <button className="h-12 flex justify-center items-center bg-[#c25ed6] text-white text-[22px] rounded-b-2xl transition-all duration-500 hover:bg-[#994aa9]" onClick={addToFavorite}> افزودن به علاقه مندی ها</button>
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[18px]">
              <div className="text-[28px] flex justify-between items-center p-3"> 
                <img src="../src/assets/images/selectedCourse/capacity.png" alt="" className="w-8 h-8"/> <div>ظرفیت</div>
              </div>
              <CourseDetail content={item?.capacity} title="ظرفیت کل" noLogo="hidden"/>
              <CourseDetail content={item?.currentRegistrants} title="تعداد دانشجو" noLogo="hidden"/>
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[17px] [&>div:nth-child(4)>div:first-child]:truncate">
              <div className="text-[28px] flex justify-between items-center p-3"> 
                <img src="../src/assets/images/selectedCourse/teacher.png" alt="" className="w-7 h-7"/> مدرس
              </div>
              <div className="w-[85%] h-20 mx-auto my-3 rounded-3xl bg-[#f5f5f5] flex justify-end items-center"> <div className="text-[24px] mr-3 text-[#555] max-[1360px]:text-[18px]">   {teacher?.fullName}  </div> 
                <img src={teacher?.pictureAddress} alt="" className="w-20 h-20 rounded-3xl"/>
              </div>
              <div className="text-[#444] text-[22px] self-end m-3"> : فعالیت ها</div>
              <CourseDetail content={teacher?.newsCount} title="تعداد خبرها" noLogo="hidden" dir={"rtl"}/>
              <CourseDetail content={teacher?.courseCounts} title="تعداد دوره ها" noLogo="hidden" dir={"rtl"}/>
            </div>

            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div]:text-[18px]">
              <div className="text-[28px] flex justify-between items-center p-3"> 
                <img src="../src/assets/images/selectedCourse/teacher.png" alt="" className="w-7 h-7"/> ثبت نام
              </div>
              <CourseDetail content={item?.likeCount} contentStyle="text-[#000]" title="تعداد لایک" logo="abcd.png"/>
              <CourseDetail content={item?.dissLikeCount} contentStyle="text-[#000]" title="تعداد دیسلایک" logo="abcd.png"/>
              <CourseDetail content={"  تومان  " + item?.cost} contentStyle="text-[#36C54E]" title="قیمت دوره" logo="abcd.png"/>
              <button className="h-12 flex justify-center items-center bg-[#36c54e] text-white  text-[22px] transition-all duration-500 hover:bg-[#34a647]" onClick={likeCourse}>لایک این دوره</button>
              <button className="h-12 flex justify-center items-center bg-[#c33b3b] text-white  text-[22px] transition-all duration-500 hover:bg-[#9b3d3d]" onClick={dissLikeCourse}>دیسلایک این دوره</button>
              <button className="h-12 flex justify-center items-center bg-[#346fa6] text-white  text-[22px] transition-all duration-500 hover:bg-[#24384b]" onClick={addToReserve}>{item?.isCourseReseve == "1" ? "این دوره رزرو شده است" : "رزرو این دوره"}</button>
              <button className="h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-b-2xl text-[22px] transition-all duration-500 hover:bg-[#34a647]">  ثبت نام در دوره</button>
            </div>
          </div>
          <RightPanel src={item?.tumbImageAddress} name={item?.title} text={item?.describe} db={comment} title="دوره"/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default SelectedCourses;
