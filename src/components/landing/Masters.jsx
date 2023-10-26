import TitleComponents from "./TitleComponents"
import Master from '../common/Master'
const Masters = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center relative [&>div]:my-8'>
        <TitleComponents title="اساتید برتر" content="استاد های مهربون و دوست داشتی" src="courses-title.png" className="flex" />

        <div className="w-[550px] h-[220px] rounded-[15px] flex flex-col items-center justify-center relative shadow-[0px_0px_6px_#ccc] bg-white max-[1300px]:scale-[90%] transition-all duration-1000 max-[1023px]:w-[90%] max-[600px]:h-[400px]">
            <img src="../src/assets/images/landingMaster/ostad.jpg" alt="" className="h-[150px] absolute right-[-58px] rounded-[15px] max-[700px]:scale-[85%] max-[600px]:top-4 max-[600px]:left-[12%]" />
            <p className="absolute right-[22%] top-[15%] text-[25px] font-extrabold max-[600px]:top-[42%] max-[600px]:right-[2%] max-[700px]:text-[22px]">دکتر بحرالعلوم</p>
            <p className="absolute right-[22%] top-[38%] text-[20px] text-[#444] max-[600px]:top-[52%] max-[600px]:right-[2%] max-[700px]:text-[17px]">مدیریت</p>
            <p className="w-[70%] absolute right-[22%] bottom-[20%] text-[#666] max-[600px]:top-[65%] max-[600px]:right-[2%] max-[700px]:text-[15px]" dir="rtl" >مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب</p>
        </div>

        <div className="w-52 opacity-0 transition-all duration-1000 flex flex-wrap justify-around items-center [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center [&>div]:max-[1300px]:scale-[90%] [&>div]:transition-all [&>div]:duration-500 [&>div]:max-[1024px]:w-[90%] whitespace-nowrap" id="holderMasters">
            
            <Master name="حامد نظری" ability="طراخ فرانت" src="ostad-3.jpg" />
            <Master name="مهدی اصغری" ability=" React Developer" src="ostad-2.png" />
            <Master name="محسن اسفندیاری" ability=" React Developer" src="ostad.jpg" />

        </div>
        <img src="../src/assets/images/landingMaster/Path 564.png" alt="" className="absolute bottom-[200px] right-[-50px] scale-[70%] max-[1300px]:scale-[60%] max-[1300px]:right-[-65px] max-[1120px]:scale-[55%] max-[1023px]:hidden transition-all duration-700" />
        <img src="../src/assets/images/landingMaster/77777.png" alt="" className="absolute top-[100px] left-[-120px] scale-[70%] max-[1300px]:scale-[60%] max-[1300px]:left-[-135px] max-[1120px]:scale-[50%] max-[1120px]:left-[-158px] max-[1023px]:hidden transition-all duration-700" />
    </div>
  )
}

export default Masters