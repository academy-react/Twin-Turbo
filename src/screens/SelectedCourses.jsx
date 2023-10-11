import { useState } from "react";
import CourseDetail from "../components/course/CourseDetail";
import Timer from "../components/course/Timer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import  courses  from "../core/services/courseDB";

import {Header,Footer,RightPanel} from '../components/common'


const SelectedCourses = () => {
  const [item, setItem] = useState(courses);

  let url = useParams();
  let navigate = useNavigate();
  let location = useLocation();

  const finded = () => {
    let finded = item.find((element) => {
      return element.id == url.id;
    });
    return <RightPanel src={finded.src} name={finded.name} />;
  };

  const findPath = (index) => {
    let num1 = location.pathname.indexOf("/");
    let num2 = location.pathname.lastIndexOf("/");
    let result = location.pathname.slice(num1, num2);
    navigate(`${result}/${index + 1}`);
  };

  return (
    <>
      <div className="w-[1920px] mx-[auto]">
        <Header src="avatar.png" color="#5A0BA9" />
        <div className="w-[full] flex justify-center gap-[50px] my-5">
          <div
            dir="ltr"
            className="w-[30%] flex flex-col items-center justify-center rounded-xl shadow-[0_0_7px_#ddd] bg-white py-5"
          >
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]">
              <div className="text-[28px] self-end p-3">مشخصات دوره</div>
              <CourseDetail
                content="Angular"
                title="نام دوره"
                logo="courseName.png"
              />
              <CourseDetail
                content="Angular"
                title="ترم ارائه"
                logo="terms.png"
              />
              <CourseDetail
                content="1402/7/7"
                title="شروع ترم"
                logo="startTerm.png"
              />
              <CourseDetail
                content="1402/7/16"
                title="پایان ترم"
                logo="endTerm.png"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]">
              <div className="text-[28px] flex justify-between items-center p-3">
                <img
                  src="../src/assets/images/selectedCourse/capacity.png"
                  alt=""
                  className="w-8 h-8"
                />
                <div>ظرفیت</div>
              </div>
              <CourseDetail
                content="400"
                title="ظرفیت کل دوره"
                noLogo="hidden"
              />
              <CourseDetail
                content="341"
                title="تعداد دانشجوی دوره"
                noLogo="hidden"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]">
              <div className="text-[28px] flex justify-between items-center p-3">
                <img
                  src="../src/assets/images/selectedCourse/teacher.png"
                  alt=""
                  className="w-7 h-7"
                />
                <div>مدرس</div>
              </div>
              <div className="w-[85%] h-20 mx-auto my-3 rounded-3xl bg-[#f5f5f5] flex justify-end items-center">
                <div className="text-[24px] mr-3 text-[#555]">
                  استاد بحرالعلوم
                </div>
                <img
                  src="../src/assets/images/bahr.png"
                  alt=""
                  className="w-20 h-20 rounded-3xl"
                />
              </div>
              <div className="text-[#444] text-[22px] self-end m-3">
                {" "}
                : راه های ارتباطی
              </div>
              <CourseDetail
                content="bahroololoom@gmail.com"
                title="آدرس ایمیل"
                noLogo="hidden"
              />
              <CourseDetail
                content="bahr_ac"
                title="اینستاگرام"
                noLogo="hidden"
              />
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(2)]:bg-[#f5f5f5]">
              <CourseDetail
                content="241000 تومن"
                contentStyle="text-[#C9292A] line-through "
                title="قیمت دوره"
                logo="abcd.png"
              />
              <CourseDetail
                content="211000 تومن"
                contentStyle="text-[#36C54E]"
                title="با تخفیف"
                logo="abcd.png"
                discount={true}
                discountPercent={20}
              />
              <Timer month={5} day={17} hour={1} minute={2} second={10} />
              <button className="h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-b-2xl text-[22px] transition-all duration-500 hover:bg-[#34a647]">
                ثبت نام
              </button>
            </div>
            <div className="w-[80%] rounded-2xl bg-white shadow-[0_0_7px_#ddd] flex flex-col my-5 [&>div:nth-child(even)]:bg-[#f5f5f5]">
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
