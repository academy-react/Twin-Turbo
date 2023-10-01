const Masters = () => {
  return (
    <div className='w-[full] h-[750px]  flex flex-col justify-center items-center pt-[100px] relative [&>div]:my-5'>
        <div className="bg-white w-[300px] h-[120px] rounded-[15px] flex flex-col items-center justify-center shadow-[0px_0px_6px_#ccc]">
            <h2 className="my-1 font-black text-[30px] text-[#5a0ba9]" > اساتید برتر</h2>
            <p className="my-1 text-[#5a0ba9]">استاد های مهربون و دوست داشتنی</p>
        </div>
        <div className="w-[550px] h-[220px] rounded-[15px]  flex flex-col items-center justify-center relative shadow-[0px_0px_6px_#ccc]">
            <img src="../src/assets/images/ostad.jpg" alt="" className="h-[150px] absolute right-[-58px] rounded-[15px]" />
            <p className="absolute right-[22%] top-[15%] text-[25px] font-extrabold">دکتر بحرالعلوم</p>
            <p className="absolute right-[22%] top-[38%] text-[20px] text-[#444]">مدیریت</p>
            <p className="w-[420px] absolute right-[22%] bottom-[20%] text-[#666]" dir="rtl" >مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب</p>
        </div>
        <div className="w-full h-[150px] flex justify-around items-center [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center ">
            <div className="w-[240px] h-[85px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8">
                <img src="../src/assets/images/ostad.jpg" alt="" className="h-[70px] absolute right-[10px] top-[-15px] rounded-[15px] "/>
                <p className="text-[18px]" >حامد نظری</p>
                <p className="text-[13px] text-[#444] ml-[13px]">طراح فرانت</p>
            </div>
            <div className="w-[240px] h-[85px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8">
                <img src="../src/assets/images/ostad.jpg" alt="" className="h-[70px] absolute right-[10px] top-[-15px] rounded-[15px] "/>
                <p className="text-[18px]" >حامد نظری</p>
                <p className="text-[13px] text-[#444] ml-[13px]">طراح فرانت</p>
            </div>
            <div className="w-[240px] h-[85px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8">
                <img src="../src/assets/images/ostad.jpg" alt="" className="h-[70px] absolute right-[10px] top-[-15px] rounded-[15px] "/>
                <p className="text-[18px]" >حامد نظری</p>
                <p className="text-[13px] text-[#444] ml-[13px]">طراح فرانت</p>
            </div>
        </div>
        <img src="../src/assets/images/Path 564.png" alt="" className="absolute bottom-[200px] right-[-50px] scale-[70%]" />
        <img src="../src/assets/images/77777.png" alt="" className="absolute top-[100px] left-[-120px] scale-[70%]" />
    </div>
  )
}

export default Masters