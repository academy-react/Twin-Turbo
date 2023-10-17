import Comment from "../selected-Blog-course/Comment";
import Description from "../selected-Blog-course/Description";
import { useState } from "react";
import changeColor from '../../core/utils/changeColor.utils'
const RightPanel = ({ src, name , text}) => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="w-[60%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white ">
      <div className="w-full h-[530px] flex justify-center items-center">
        <img
          src={"../src/assets/images/courses/" + src}
          alt=""
          className=" w-[90%] h-[90%] rounded-[20px]"
          id="bigpic"
        />
      </div>
      <div className="w-full  flex justify-center items-center text-[40px]">
        {name}
      </div>
      <div dir="rtl" className="w-full h-[600px] px-[20px]">
        <button
          className="p-[10px] border border-[#dddd] relative right-[35px] top-[8px] rounded-xl "
          onClick={() => changeColor(true,setFlag)}
          id="btn1"
          style={{ background: "#f1ebf8" }}
        >
          نظرات
        </button>
        <button
          className="p-[10px] border border-[#dddd] relative right-[65px] top-[8px] rounded-xl "
          onClick={() => changeColor(false,setFlag)}
          id="btn2"
        >
          توضیحات
        </button>
        {flag == true && <Comment />}
        {flag == false && <Description text={text} />}
      </div>
    </div>
  );
};

export default RightPanel;
