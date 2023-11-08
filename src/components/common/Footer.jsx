import FooterSvg from "../landing/footerSvg";
import FooterList from '../common/FooterList'
import { useRef } from "react";
import RelationshipItem from '../common/RelationshipItem'
const Footer = () => {
  let btn = useRef()
  let input = useRef()
  
  const changer = ()=> {
      if(input.current.value.length !== 0) btn.current.style.background = "#36c54e";
      else btn.current.style.background = "#e0e0e2";
  }

  return (
    <>
        <div className="w-[1920px] overflow-hidden mx-auto max-[1919px]:w-full max-[1279px]:border-t-2 max-[1279px]:border-t-[#ccc]" >
          <FooterSvg />
          <div className="h-[200px] w-[95%] max-[470px]:[&>div]:scale-[50%] max-[1100px]:[&>div]:scale-[70%] max-[700px]:[&>div>p]:hidden mx-auto mt-[-75px] max-[1700px]:mt-[-50px] max-[1400px]:mt-[-25px] max-[1279px]:[&>div]:mt-[25px] flex [&>div]:w-[25%] [&>div]:h-full [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-center [&>div>img]:h-[90px] [&>div>p]:text-[#3f4064] [&>div>p]:text-[20px] [&>div>p]:my-[15px] max-[600px]:[&>div]:scale-[60%]">
              <div className="mt-[-105px]">
                <img src="../src/assets/images/footer/teach.png" alt="" />
                <p>تدریس عالی</p>
              </div>
              <div className="mt-[-55px]">
                <img src="../src/assets/images/footer/playtime.png" alt="" />
                <p>زمان ویدیو</p>
              </div>
              <div>
                <img src="../src/assets/images/footer/internet.png" alt="" />
                <p>کلاس انلاین</p>
              </div>
              <div className="mt-[-40px]">
                <img src="../src/assets/images/footer/headphone.png" alt="" />
                <p>پشتیبانی انلاین</p>
              </div>
              <div className="mt-[-105px]">
                <img src="../src/assets/images/footer/cloud.png" alt="" />
                <p>امنیت داده ها</p>
              </div>
          
          </div>
          
          <div className="[&>div]:h-full flex max-[1270px]:flex-col-reverse max-[1270px]:[&>div]:w-full">
            
            <div dir="rtl" className="w-[40%] flex flex-col justify-center pt-[30px] mb-7 max-[1270px]:mt-[-50px] max-[1270px]:flex-row max-[1270px]:w-full max-[1270px]:mb-[20px] max-[766px]:flex-col max-[766px]:[&>div]:w-full max-[766px]:pr-[30px]">
              
                <div className="mb-3">
                  
                    <p className="pr-[30px] h-[60px] text-[#3f4064] text-[25px]"> با ما همراه باشید !!!</p>
                    <div className="h-[70px] w-[80%] flex items-center justify-evenly [&>div]:mx-[10px] [&>div]:cursor-pointer ">
                      
                      <RelationshipItem src="aparat.png" beforeClass="before:bg-[#ee1b60]" />
                      <RelationshipItem src="insta.png" beforeClass="instagram" />
                      <RelationshipItem src="whatsapp.png" beforeClass="before:bg-[#51cc5e]" />
                      <RelationshipItem src="telegram.png" beforeClass="before:bg-[#36AEE0] " />
                    
                    </div>
                
                </div>
                <div className="max-[1270px]:flex max-[1270px]:flex-col max-[1270px]:w-[50%]">
                  
                  <p className="flex items-center pr-[30px] h-[65px] text-[#3f4064] text-[25px] max-[1480px]:text-[22px] max-[1350px]:text-[18px] max-[960px]:pr-0">با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</p>
                  <div className="h-[90px] flex items-center justify-around w-[90%]">
                    <input  type="text" className="w-[75%] max-[1300px]:w-[78%] outline-none text-[18px] bg-[#f0f0f1] rounded-[15px] border h-[70%] pr-[20px]" ref={input} placeholder="ایمیل خود را وارد کنید ...." onChange={changer}/>
                    <button className="w-[15%] max-[1300px]:w-[18%] border-none h-[70%] border rounded-[15px] bg-[#e0e0e2] text-[#fff] text-[25px]" ref={btn}>ثبت</button>
                  </div>
                
                </div>
            </div>
            
            <div className="w-[60%] flex justify-between pr-6 flex-wrap mb-2 max-[820px]:w-full max-[522px]:justify-center max-[522px]:[&>ul]:scale-[90%] max-[522px]:[&>ul]:flex max-[522px]:[&>ul]:flex-col max-[522px]:[&>ul]:items-center max-[522px]:[&>*]:border-[red]" dir="rtl">
              <FooterList title="سیستم های اطلاعات" content1="بهینه‌سازی هوشمند" content2="الگوریتم‌های تکاملی" content3="شبکه‌های عصبی" content4="هوش مصنوعی" content5="نگارش آکادمیک" />
              <FooterList title="کار با داده" hidden1="hidden" content1="وردپرس" content2="انگولار"  content3="آموزش‌های متلب" content4="داده‌کاوی و یادگیری ماشین "  content5="طراحی و گرافیک" />
              <FooterList title="برنامه نویسی" hidden1="hidden" hidedn2="hidden" content1="اندروید"  content2="پی اچ پی (PHP)" content3="پایتون (Python)" content4="جاوا (Java)" content5="مهندسی کامپیوتر" />
            </div>
          
          </div>
        
        </div>
    </>
  );
};

export default Footer;
