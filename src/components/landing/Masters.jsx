const Masters = () => {
  return (
    <div className='w-full h-[750px] flex flex-col justify-center items-center relative [&>div]:my-8'>
        <div className="bg-white w-[300px] h-[120px] rounded-[15px] flex flex-col items-center justify-center shadow-[0px_0px_6px_#ccc]">
            <h2 className="my-1 font-black text-[30px] text-[#5a0ba9]" > اساتید برتر</h2>
            <p className="my-1 text-[#5a0ba9]">استاد های مهربون و دوست داشتنی</p>
        </div>
        <div className="w-[550px] h-[220px] rounded-[15px] flex flex-col items-center justify-center relative shadow-[0px_0px_6px_#ccc] bg-white">
            <img src="../src/assets/images/ostad.jpg" alt="" className="h-[150px] absolute right-[-58px] rounded-[15px]" />
            <p className="absolute right-[22%] top-[15%] text-[25px] font-extrabold">دکتر بحرالعلوم</p>
            <p className="absolute right-[22%] top-[38%] text-[20px] text-[#444]">مدیریت</p>
            <p className="w-[420px] absolute right-[22%] bottom-[20%] text-[#666]" dir="rtl" >مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب</p>
        </div>
        <div className="w-52 h-[150px] opacity-0 flex justify-around items-center transition-all duration-1000 [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:items-center " id="holderMasters">
            <div className="w-[340px] h-[120px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8 bg-white">
                <img src="../src/assets/images/ostad-3.jpg" alt="" className="h-[90px] w-[90px] absolute right-[8px] top-[-35px] rounded-[15px] "/>
                <p className="text-[22px] mb-2" >حامد نظری</p>
                <p className="text-[17px] text-[#444] ml-[13px]">طراح فرانت</p>
            </div>
            <div className="w-[340px] h-[120px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8 bg-white">
                <img src="../src/assets/images/ostad-2.png" alt="" className="h-[90px] w-[90px] absolute right-[8px] top-[-35px] rounded-[15px] "/>
                <p className="text-[22px] mb-2" >مهدی اصغری</p>
                <p className="text-[17px] text-[#444] ml-[13px]">React Developer</p>
            </div>
            <div className="w-[340px] h-[120px] border rounded-[15px] shadow-[0px_0px_6px_#ccc] relative pr-8 bg-white">
                <img src="../src/assets/images/ostad.jpg" alt="" className="h-[90px] w-[90px] absolute right-[8px] top-[-35px] rounded-[15px] "/>
                <p className="text-[22px] mb-2" >محسن اسفندیاری</p>
                <p className="text-[17px] text-[#444] ml-[13px]">React Developer</p>
            </div>
        </div>
        <img src="../src/assets/images/Path 564.png" alt="" className="absolute bottom-[200px] right-[-50px] scale-[70%]" />
        <img src="../src/assets/images/77777.png" alt="" className="absolute top-[100px] left-[-120px] scale-[70%]" />
    </div>
  )
}

export default Masters