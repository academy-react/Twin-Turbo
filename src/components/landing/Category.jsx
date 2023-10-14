import { useState } from "react";
import Button from "../common/Button";
import LandingCat from "../map/LandingCat";

const Category = () => {

  return (
    <div className="w-full mb-10 flex flex-col justify-around items-center relative">
      <div className="relative max-[750px]:scale-[85%] transition-all duration-1000">
        <div className="text-[#5a0ba9] text-[38px] absolute left-[26%] top-7 z-10 max-[750px]:text-[32px]">
          دسته بندی ها
        </div>
        <div className="text-[#9c6dcb] text-[20px] absolute left-[26%] top-24 z-10 max-[750px]:text-[18px]">
          گستره وسیعی از موضوعات
        </div>
        <img
          src="../src/assets/images/landingCategory/category.png"
          alt=""
          className="drop-shadow-[0px_3px_6px_#5757574f] w-[450px]"
        />
      </div>
      <div className="w-[80%] my-10 flex flex-wrap justify-center [&>div]:bg-white [&>div]:w-[300px] [&>div]:h-[190px] max-[1000px]:[&>div]:w-[218px] max-[1000px]:[&>div]:h-[150px] max-[1000px]:[&>div]:transtion max-[1000px]:[&>div]:duration-1000 [&>div]:m-5 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-around  [&>div]:rounded-[15px] [&>div]:shadow-[0px_0px_2px_#5757574f] text-[27px] max-[1000px]:text-[20px]">
      <LandingCat />
      </div>
      <Button content="بیشتر" />
        <img src="../src/assets/images/landingCategory/n.png" alt="" className="absolute top-[180px] left-[800px] h-[85px] z-[-2] transition-all duration-[2s]" id="planet1" />
        <img src="../src/assets/images/landingCategory/n.png" alt="" className="absolute bottom-[150px] right-[800px] h-[55px] z-[-2] transition-all duration-[2s]" id="planet2" />
    </div>

  );
};

export default Category;
