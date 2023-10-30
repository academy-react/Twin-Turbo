import { useState } from "react";
import CourseDetail from "../components/selected-Blog-course/CourseDetail";
import Timer from "../components/selected-Blog-course/Timer";
import { useParams } from "react-router-dom";
import  courses  from "../core/services/courseDB";

import {Header,Footer,RightPanel} from '../components/common'

const SelectedCourses = () => {

  const [item, setItem] = useState(courses);

  let url = useParams();

  const finded = () => {
    let finded = item.find((element) => {
      return element.id == url.id;
    });
    return <RightPanel src={finded.src} name={finded.name} text={finded.content} db={courses} title="دوره" />;
  };

  return (
    <>
      <div className="w-[1920px] max-[1919px]:w-full mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />
        <div className="w-[full] flex justify-center flex-wrap gap-[50px] my-5 mt-20 [&>div]:transition-all [&>div]:duration-100">
          <div dir="ltr" className="w-[580px] max-[1780px]:w-[500px] max-[1355px]:w-[400px] h-full flex flex-col items-center justify-center rounded-xl shadow-[0_0_7px_#ddd] bg-white py-5 max-[1150px]:order-2 max-[1150px]:w-[60%] max-[1150px]:mb-10 max-[715px]:w-[80%] max-[600px]:w-full max-[600px]:rounded-none" >
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[18px]">
              <div className="text-[28px] self-end p-3">مشخصات دوره</div>
              <CourseDetail
                content={courses[url.id-1].courseName}
                title="نام دوره"
                logo="courseName.png"
              />
              <CourseDetail
                content={courses[url.id-1].courseName}
                title="ترم ارائه"
                logo="terms.png"
              />
              <CourseDetail
                content={courses[url.id-1].startTime}
                title="شروع ترم"
                logo="startTerm.png"
              />
              <CourseDetail
                content={courses[url.id-1].endTime}
                title="پایان ترم"
                logo="endTerm.png"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[18px]">
              <div className="text-[28px] flex justify-between items-center p-3">
                <img
                  src="../src/assets/images/selectedCourse/capacity.png"
                  alt=""
                  className="w-8 h-8"
                />
                <div>ظرفیت</div>
              </div>
              <CourseDetail
                content={courses[url.id-1].fullStorage}
                title="ظرفیت کل دوره"
                noLogo="hidden"
              />
              <CourseDetail
                content={courses[url.id-1].quantityStudent}
                title="تعداد دانشجوی دوره"
                noLogo="hidden"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div:not(&>div:first-child)]:text-[17px] [&>div:nth-child(4)>div:first-child]:truncate">
              <div className="text-[28px] flex justify-between items-center p-3">
                <img
                  src="../src/assets/images/selectedCourse/teacher.png"
                  alt=""
                  className="w-7 h-7"
                />
                مدرس
              </div>
              <div className="w-[85%] h-20 mx-auto my-3 rounded-3xl bg-[#f5f5f5] flex justify-end items-center">
                <div className="text-[24px] mr-3 text-[#555] max-[1360px]:text-[18px]">
                  {courses[url.id-1].masterName} 
                </div>
                <img
                  src={courses[url.id-1].masterImage}
                  alt=""
                  className="w-20 h-20 rounded-3xl"
                />
              </div>
              <div className="text-[#444] text-[22px] self-end m-3">
                : راه های ارتباطی
              </div>
              <CourseDetail
                content={courses[url.id-1].gmail}
                title="آدرس ایمیل"
                noLogo="hidden"
                dir={"rtl"}
              />
              <CourseDetail
                content={courses[url.id-1].insta}
                title="اینستاگرام"
                noLogo="hidden"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(2)]:bg-[#f5f5f5] max-[1360px]:[&>div]:text-[18px]">
              <CourseDetail
                content={"  تومان  " + courses[url.id-1].price}
                contentStyle="text-[#C9292A] line-through "
                title="قیمت دوره"
                logo="abcd.png"
              />
              <CourseDetail
                content={"  تومان  "  + courses[url.id-1].discount}
                contentStyle="text-[#36C54E]"
                title="با تخفیف"
                logo="abcd.png"
                discount={true}
                discountPercent={courses[url.id-1].discountPercent}
              />
              <Timer month={courses[url.id-1].month} day={courses[url.id-1].day} hour={courses[url.id-1].hour} minute={courses[url.id-1].minute} second={courses[url.id-1].secend} />
              <button className="h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-b-2xl text-[22px] transition-all duration-500 hover:bg-[#34a647]">
                ثبت نام
              </button>
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5] max-[1360px]:[&>div]:text-[18px]">
              <div className="text-[24px] self-end m-3">
                مزایای شرکت در دوره
              </div>
              <CourseDetail
                content=""
                title="ارتباط مستقیم با مدرس"
                logo="advantage.png"
              />
              <CourseDetail
                content=""
                title="ساخت رزومه مناسب برای بازار کار"
                logo="advantage.png"
              />
              <CourseDetail
                content=""
                title="معرفی به بهترین شرکت ها"
                logo="advantage.png"
              />
            </div>
          </div>
          {finded()}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SelectedCourses;
