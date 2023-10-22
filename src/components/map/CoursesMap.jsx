import { useLocation, useNavigate } from "react-router-dom";
import courses from "../../core/services/courseDB";
import { useRef } from "react";

const CoursesMap = () => {
    let location = useLocation();
    let item = useRef();
    let navigate = useNavigate()

  return courses.map((element, index) => {
    return (
        <div key={index} className="w-[350px] h-[400px] shadow-[0_0_7px_#ddd] m-[25px] rounded-[25px] relative px-[15px] bg-white flex flex-col justify-end overflow-hidden hover:shadow-[0_0_7px_#999] cursor-pointer " ref={item} onClick={()=> navigate(`${location.pathname}/${index + 1}`)} >
          <div className="w-full overflow-hidden my-[10px]">
            <img src={"../src/assets/images/courses/" + element.src} className=" mx-auto h-full w-full rounded-[20px]"/>
          </div>

          <div dir="rtl" className="w-full h-[210px] mx-auto relative">
            <p className="text-[24px] absolute right-2">{element.name}</p>

            <div className="w-12 h-24 rounded-[50px] absolute left-2 bottom-5 flex flex-col justify-between items-center overflow-hidden shadow-[0_0_7px_#ccc] [&>*:nth-child(even)]:bg-[#eee] [&>*]:bg-white [&>*]:w-full  [&>*]:h-[33.3%] [&>*]:flex [&>*]:items-center [&>*]:justify-center">
              <img src="../src/assets/images/selectedCourse/capacity.png" className="p-[6px] px-2" />
              <div>{element.fullStorage}</div>
              <div>{element.quantityStudent}</div>
            </div>

            <div className="w-[50px] h-[70px]" style={{display:"none"}}></div>


            <div className=" flex justify-between items-center absolute bottom-[20px] h-[100px]" style={{flexDirection:"column",width:"180px",bottom:"20px"}}>
                <div className="text-[20px]">{element.masterName}</div>
                <img src="../src/assets/images/star.png" className="w-36" />
                <span className="h-8 px-7 border border-[#58AD57] rounded-[50px] text-[#58AD57] flex justify-center items-center">{element.price} تومان</span>
            </div>

          </div>
        </div>
    );
  });
};

export default CoursesMap;
