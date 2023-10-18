import Comment from "../selected-Blog-course/Comment";
import Description from "../selected-Blog-course/Description";
import { useState } from "react";
import changeColor from '../../core/utils/changeColor.utils'

const RightPanel = ({ src, name , text , db, title}) => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="w-[1150px] h-full pt-5 pb-10 rounded-xl shadow-[0_0_7px_#ddd] bg-white max-[1775px]:w-[1000px] max-[1560px]:w-[800px] max-[1560px]:[&>*]:mt-[-30px] max-[800px]:[&>div:nth-child(2)]:mt-[-150px] max-[670px]:[&>div:nth-child(2)]:mt-[-180px] max-[800px]:[&>div:nth-child(2)]:relative max-[800px]:[&>div:nth-child(2)]:left-[-120px] max-[540px]:[&>div:nth-child(2)]:left-[-30px] max-[540px]:[&>div:nth-child(2)]:top-[-50px] max-[1260px]:w-[700px] max-[1149px]:order-1 max-[1149px]:w-[90%] ">
      <div className="w-full h-[530px] flex justify-center items-center">
        <img src={"../src/assets/images/courses/" + src} alt="" className="w-[90%] h-[90%] rounded-[20px] max-[1560px]:w-[80%] max-[1560px]:h-[70%] max-[800px]:h-[60%] max-[800px]:mt-[-150px] max-[670px]:h-[45%] max-[670px]:mt-[-190px]" id="bigpic"/>
      </div>
      <div className="w-full flex justify-center items-center text-[40px] max-[1560px]:text-[30px] ">{name}</div>
      <div dir="rtl" className="w-full px-[20px]">
        <button className="p-[10px] border border-[#dddd] relative right-[35px] top-[8px] rounded-xl " onClick={() => changeColor(true,setFlag)} id="btn1" style={{ background: "#f1ebf8" }}> نظرات</button>
        <button className="p-[10px] border border-[#dddd] relative right-[65px] top-[8px] rounded-xl " onClick={() => changeColor(false,setFlag)} id="btn2">توضیحات</button>
        {flag == true && <Comment db={db} />}
        {flag == false && <Description text={text} title={title} />}
      </div>
    </div>
  );
};

export default RightPanel;
