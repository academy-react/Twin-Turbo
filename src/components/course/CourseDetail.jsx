const CourseDetail = ({ content , title , logo , noLogo}) => {
  return (
    <div className='flex w-full justify-between text-[22px] text-[#666] py-[10px] px-4'>
        <div>{content}</div>
        <div className="flex whitespace-nowrap items-center">{title} &nbsp; <img src={logo} className={`w-[22px] h-5 ${noLogo}`}/></div>
    </div>
  )
}

export default CourseDetail