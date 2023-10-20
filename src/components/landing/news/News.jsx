import TitleComponents from "../TitleComponents";
import ItemNews from "./ItemNews";
import TitleItemNews from './TitleItemNews'
import Button from "../../common/Button";


const News = () => {
  return (
    <div className="w-full flex flex-col items-center">

      <div className="w-[32%] h-[180px] relative max-[1279px]:scale-x-[120%] max-[1023px]:hidden">
        <img src="../src/assets/images/Group 135.png" alt="" className="w-full h-full"/>
        <p className="text-[#5a0ba9] absolute top-[25%] right-[38%] text-[24px]">اخبار و مقالات</p>
      </div>

      <TitleComponents title="اساتید برتر" content="استاد های مهربون و دوست داشتی" src="courses-title.png" className="max-[1023px]:flex min-[1023px]:hidden mb-[40px]" />

      <div className=" w-[95%] flex [&>div]:w-[50%] [&>div]:shadow-[0_0_7px_#ccc] [&>div]:mx-3 [&>div]:relative [&>div]:rounded-[15px] [&>div]:flex [&>div]:pt-[55px] [&>div]:items-center [&>div]:flex-col [&>div]:h-[450px] max-[1050px]:flex-col max-[1050px]:[&>div]:mx-auto max-[1050px]:[&>div]:w-[85%] max-[1050px]:[&>div]:my-[10px] max-[600px]:w-[95%] max-[600px]:[&>div]:w-[400px] max-[450px]:[&>div]:w-full [&>div]:bg-white ">
          <div>
              <TitleItemNews content="اخبار"/>
              <ItemNews  />
              <Button content="بیشتر" className=" scale-[90%] absolute left-4 bottom-2" link="/blogs" />
          </div>
          <div>
              <TitleItemNews content="مقالات"/>
              <ItemNews />
              <Button content="بیشتر" className=" scale-[90%] absolute left-4 bottom-2" link="/blogs" />
          </div>
      </div>
      <div dir="rtl" className="mt-[25px] w-[32%] h-[55px] border border-[#ccc] my-3 rounded-[15px] flex justify-between items-center overflow-hidden pr-6 max-[1200px]:w-[80%] max-[500px]:hidden">
          <p className="text-[#5a0ba9] whitespace-nowrap">عضویت در خبرنامه : </p>
          <input dir="ltr" type="text" className="w-[70%] h-full border-none outline-none placeholder:text-[#5a0ba951] text-[#5A0BA9] px-3 bg-[#f5f5f5] text-[18px]" placeholder="enter your email address"/>
      </div>
    </div>
  );
};

export default News;
