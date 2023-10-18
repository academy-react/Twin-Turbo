const CourseDetail = ({ content , title , logo , contentStyle , discountPercent , discount , noLogo}) => {
  return (
    <div className='flex w-full justify-between text-[22px] text-[#666] py-[10px] px-4'>
        <div dir="rtl" className={contentStyle}>{content}</div>
        <div className="flex whitespace-nowrap items-center"><div className={discount == true ? "visible py-1 px-2 text-[18px] flex justify-center items-center bg-[#36C54E] text-white rounded-2xl mr-2" : "invisible"}>{discountPercent}%</div> {title} &nbsp; <img src={"../src/assets/images/selectedCourse/" + logo} className={`w-[22px] h-5 ${noLogo}`}/></div>
    </div>
  )
}

export default CourseDetail