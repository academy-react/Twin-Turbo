import React from "react";
import More from "./common/Button";

const Courses = () => {
  return (
    <div className="w-[full] h-[750px] mb-10 flex flex-col justify-around items-center relative">
      <div className="relative">
        <div className="text-[#5a0ba9] text-[38px] absolute left-[36%] top-4 z-10">
          دوره ها
        </div>
        <div className="text-[#9c6dcb] text-[20px] absolute left-[29%] top-24 z-10">
          آخرین دوره های موجود
        </div>
        <img
          src="../src/assets/images/courses-title.png"
          alt=""
          className="drop-shadow-[0px_3px_6px_#5757574f]"
        />
      </div>
      <div className="w-[80%] h-[70%] flex justify-between">
        <div className="w-[30%] h-[550px] rounded-3xl bg-white flex flex-col items-center justify-around [&>img]:w-[90%] [&>img]:h-[150px]">
          <img src="../src/assets/images/vs.png" alt="" />
          <img src="../src/assets/images/angular.png" alt="" />
          <img src="../src/assets/images/nest.png" alt="" />
          <More content="بیشتر" />
        </div>
        <div className="w-[65%] h-[550px] rounded-3xl bg-white p-5 relative">
          <img src="../src/assets/images/node.png" alt="" />
          <div className="font-semibold text-[24px] absolute right-7 top-[65%]"> نود جی اس : دوره کامل</div>
          <div className="text-[#7f7f7f] text-[20px] absolute left-7 top-[65%]"> محمد بحرالعلوم</div>
          <div className="absolute right-7 top-[78%] " dir="rtl">نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌ باز و چندسکویی برای زبان جاوااسکریپت است.</div>
          <More content="مشاهده دوره" className="absolute left-7 bottom-4" />
        </div>
      </div>
      <img
        src="../src/assets/images/c-i-1.png"
        alt=""
        className="absolute left-10 bottom-0 w-28 -z-10"
      />
      <img
        src="../src/assets/images/c-i-2.png"
        alt=""
        className="absolute right-[85px] top-40 w-28 -z-10"
      />
    </div>
  );
};

export default Courses;
