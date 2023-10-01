const Masters = () => {
  return (
    <div className='w-[full] h-[610px]  flex flex-col justify-center items-center pt-[100px] relative border border-[red] [&>div]:my-5'>
        <div className="w-[300px] h-[120px] rounded-[15px] shadow-[0px_0px_6px_#5757574f] flex flex-col items-center justify-center">
            <h2 className="my-1 font-black text-[30px] text-[#882e86]" > اساتید برتر</h2>
            <p className="my-1 text-[#b944b7]">استاد های مهربون و دوست داشتنی</p>
        </div>
        <div className="w-[550px] h-[190px] rounded-[15px] shadow-[0px_0px_6px_#5757574f] flex flex-col items-center justify-center relative">
            <img src="../src/assets/images/ostad.jpg" alt="" className="h-[150px] absolute right-[-58px]" />
            <p className="absolute right-[22%] top-[15%] text-[25px] font-extrabold">دکتر بحرالعلوم</p>
            <p className="absolute right-[22%] top-[38%] text-[20px] text-[#444]">مدیریت</p>
            <p className="w-[420px] absolute right-[22%] bottom-[20%] text-[#666]" dir="rtl" >مدرس در آموزشگاه  , مدرس در دانشگاه علم و فناوری مازندران مستقر در بهشهر , مدرس دوره های وب</p>
        </div>
        <div className="w-[]"></div>
        <img src="../src/assets/images/Path 564.png" alt="" className="absolute bottom-[200px] right-0 scale-[70%]" />
        <img src="../src/assets/images/77777.png" alt="" className="absolute top-[100px] left-0 scale-[70%]" />
    </div>
  )
}

export default Masters