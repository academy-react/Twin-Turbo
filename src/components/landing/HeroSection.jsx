import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Typewriter from "./Typewriter";
import { useEffect, useRef, useState } from "react";
import heroStartBtn from '../../core/utils/heroStartBtn.utils'

const HeroSection = () => {
  let navigate = useNavigate();
  let btn = useRef()
  let parentText = useRef()

  useEffect(() => {

    heroStartBtn(parentText,btn)

    return () => {
     
    }

  }, [])
  
  return (
    <div className=" w-full h-[830px] relative max-[1400px]:h-[650px]">
      <img
        src="../src/assets/images/bg-top.png"
        alt=""
        className="max-[1020px]:hidden w-full h-full absolute left-0 -top-[2px] scale-x-[107%] scale-y-[117%] -z-10 "
      />
      <img
        src="../src/assets/images/woman.png"
        alt=""
        className=" absolute scale-[72%] left-[-10px] top-[80px] -z-10 max-[1500px]:scale-[50%] max-[1500px]:left-[-200px] max-[1020px]:hidden"
      />
      <img src="../src/assets/images/bg-top.png" alt="" className="scale-[130%] object-cover absolute top-0 left-0 w-full h-[90%] max-[1020px]:block hidden -z-[15]"/>

      <Header src="avatar.png" color="#5A0BA9" hClass="fixed" />
        <div dir="rtl" className=" w-[650px] h-[400px] max-[1020px]:w-full max-[1300px]:scale-[85%] max-[1300px]:right-0 max-[1020px]:items-center max-[1280px]:mx-auto flex flex-col justify-evenly absolute right-[150px] top-[200px]">
            <h1 className=" text-[36px] text-[#666] mr-[45px] max-[1020px]:mr-0">
              پژوهشگاه سپهر
            </h1>
            <div className="w-full" ref={parentText}>
                <Typewriter
                  text="پ ژوهشگاه سپهر با هدف تولید و انتشار محتوای با کیفیت اموزشی و همچنین
                  آشنایی جامعه با فضای کسب و کار در فضای مجازی ایجاد شده و امید داریم
                  بتوانیم با راه کار های نوین و استفاده از پتانسیل فضای مجازی ایجاد فرصت
                  کنیم برای افرادی که خواهان پیشرفت خود و کشورشان هستند"
                  speed={40}
              />

            </div>

            <button
              ref={btn}
              style={{opacity:0}}
              className="bg-gradient-to-r transition-opacity max-[1020px]:mx-auto duration-[.5s] from-[#5A0BA9] to-[#C003B2] hover:bg-gradient-to-l rounded-[25px] w-[200px] h-[55px] whitespace-nowrap  text-[19px]  text-[#fff]"
              onClick={() => navigate("/courses")
            }
            >
              شروع یادگیری
            </button>

        </div>
    </div>
  );
};

export default HeroSection;
