import { useLocation } from "react-router-dom";
import courses from "../../core/services/courseDB";
import { useRef } from "react";
import { Button } from "../common";

const CoursesMap = () => {
    let location = useLocation();
    let item = useRef();

  return courses.map((element, index) => {
    return (
      <div key={index} className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden max-[600px]:scale-90" ref={item}>
        <div className="w-full h-170px overflow-hidden my-[10px]">
          <img src={"../src/assets/images/courses/" + element.src} alt="" className=" mx-auto h-full w-full rounded-[20px]"/>
        </div>

        <div dir="rtl" className="w-full h-[210px] mx-auto">
          <div className="w-[95%] h-[150px] mx-auto">
            <p className="text-[24px] text-right ">{element.name}</p>
          </div>

          <div className="w-full h-[50px] flex justify-between items-center">
            <img src="../src/assets/images/Educated.png" alt="" className="w-[100px] h-[29px]"/>
            <Button content="ادامه مطلب" className="whitespace-nowrap text-[16px] scale-[80%] " link={`${location.pathname}/${index + 1}`}/>
          </div>
        </div>
      </div>
    );
  });
};

export default CoursesMap;
