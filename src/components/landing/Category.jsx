import { useState } from "react";
import Button from "../common/Button";
import LandingCat from "../map/LandingCat";
import TitleComponents from "./TitleComponents"


const Category = () => {

  return (
    <div className="w-full mb-10 flex flex-col justify-around items-center relative">
      
      <TitleComponents title="دسته بندی ها" content="گسترده وسیعی از موضوعات" src="courses-title.png" className="flex"/>

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
