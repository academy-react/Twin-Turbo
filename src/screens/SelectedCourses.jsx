import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RightPanel from "../components/common/RightPanel";
import CourseDetail from "../components/course/CourseDetail";

const SelectedCourses = () => {

  return (
    <>
      <div className="w-[1920px] mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />
        <div className="w-[full] h-[1400px] flex justify-center items-center gap-[50px]">
          <div  dir="ltr"  className="w-[30%] h-[1300px] flex flex-col items-center justify-center rounded-xl shadow-[0_0_7px_#ddd] bg-white">
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]" >
              <div className="text-[28px] self-end p-3">مشخصات دوره</div>
              <CourseDetail content={"Angular"} title={"نام دوره"} logo={"../src/assets/images/selectedCourse/courseName.png"} />
              <CourseDetail content={"Angular"} title={"ترم ارائه"} logo={"../src/assets/images/selectedCourse/terms.png"} />
              <CourseDetail content={"1402/7/7"} title={"شروع ترم"} logo={"../src/assets/images/selectedCourse/startTerm.png"} />
              <CourseDetail content={"1402/7/16"} title={"پایان ترم"} logo={"../src/assets/images/selectedCourse/endTerm.png"} />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]" >
              <div className="text-[28px] flex justify-between items-center p-3">
                <img src="../src/assets/images/selectedCourse/capacity.png" alt="" className="w-8 h-8" />
                <div>ظرفیت</div>
              </div>
              <CourseDetail content={"400"} title={"ظرفیت کل دوره"} noLogo="hidden" />
              <CourseDetail content={"341"} title={"تعداد دانشجوی دوره"} noLogo="hidden" />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]" >
              <div className="text-[28px] flex justify-between items-center p-3">
                <img src="../src/assets/images/selectedCourse/teacher.png" alt="" className="w-7 h-7" />
                <div>مدرس</div>
              </div>
              <div className="w-[85%] h-20 mx-auto my-3 rounded-3xl bg-[#f5f5f5] flex justify-end items-center">
                <div className="text-[24px] mr-3 text-[#555]">استاد بحرالعلوم</div>
                <img src="../src/assets/images/bahr.png" alt="" className="w-20 h-20 rounded-3xl" />
              </div>
            </div>
          </div>
          <RightPanel src="angularCourses.png" name="انگولار" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SelectedCourses;