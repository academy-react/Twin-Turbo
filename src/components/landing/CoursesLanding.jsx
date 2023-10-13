import Button from "../common/Button";

const Courses = () => {
  return (
    <div className="w-full mb-10 flex flex-col justify-around items-center relative">
      <div className="relative mx-auto mb-[40px]">
        <div className="text-[#5a0ba9] text-[38px] absolute left-[35%] top-3 z-10">
          دوره ها
        </div>
        <div className="text-[#9c6dcb] text-[20px] absolute left-[26%] top-20 z-10">
          آخرین دوره های موجود
        </div>
        <img
          src="../src/assets/images/landingCourse/courses-title.png"
          alt=""
          className="drop-shadow-[0px_3px_6px_#5757574f] w-[450px]"
        />
      </div>
      <div className="w-[80%] flex justify-between max-[1023px]:justify-center">
        <div className="w-[30%] h-[700px] max-[1200px]:h-[620px] max-[1023px]:hidden rounded-3xl bg-white flex flex-col items-center justify-around [&>img]:cursor-pointer [&>img]:w-[90%] max-[1200px]:[&>img]:w-[80%] [&>img]:h-[190px] max-[1200px]:[&>img]:h-[150px] shadow-[0_0_7px_#ccc] ">
          <img src="../src/assets/images/courses/git.jpg" alt="" className="rounded-[20px]"/>
          <img src="../src/assets/images/courses/web.jpg" alt="" className="rounded-[20px]"/>
          <img src="../src/assets/images/courses/bootstrap.jpg" alt="" className="rounded-[20px]"/>
          <Button content="بیشتر" />
        </div>
        <div className="w-[65%] max-[1023px]:w-[90%] max-[550px]:w-[100%] h-[700px] max-[1200px]:h-[620px] rounded-3xl bg-white p-5 relative shadow-[0_0_7px_#ccc] ">
          <img src="../src/assets/images/courses/bootstrap.jpg" alt="" className="w-full h-[400px] max-[1200px]:h-[300px] rounded-3xl" />
          <div className="font-semibold text-[26px] absolute right-7 top-[65%] max-[1200px]:top-[55%] max-[670px]:text-[22px] max-[550px]:text-[18px]"> نود جی اس : دوره کامل</div>
          <div className="text-[#7f7f7f] text-[22px] absolute left-7 top-[65%] max-[1200px]:top-[55%] max-[670px]:text-[18px] max-[550px]:text-[15px]"> محمد بحرالعلوم</div>
          <div className="absolute right-7 pl-4 top-[78%] text-[20px] max-[1200px]:top-[65%] max-[670px]:text-[16px]" dir="rtl">نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ سمت سرورِ متن‌ باز و چندسکویی برای زبان جاوااسکریپت است.</div>
          <Button content="مشاهده دوره" className="absolute left-7 bottom-4" />
        </div>
      </div>
      <img
        src="../src/assets/images/landingCourse/c-i-1.png"
        alt=""
        className="absolute left-[-300px] bottom-0 w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden"
        id="coursesHolder1"
      />
      <img
        src="../src/assets/images/landingCourse/c-i-2.png"
        alt=""
        className="absolute right-[-300px] top-[125px] w-28 -z-10 transition-all duration-1000 max-[1200px]:hidden"
        id="coursesHolder2"
      />
      <img src="../src/assets/images/landingCourse/c-i-1-h.png" className="absolute left-[-260px] bottom-[169px] -rotate-6 w-14 max-[1500px]:-rotate-[5deg] max-[1500px]:ml-4 max-[1620px]:ml-2 max-[1200px]:hidden transition-all duration-1000" id="coursesHolder3" />
    </div>
  );
};

export default Courses;
