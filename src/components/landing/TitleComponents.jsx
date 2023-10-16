const TitleComponents = ({title,content,src,className}) => {
  return (
    <div className={"min-w-[600px] max-[520px]:scale-[70%] mr-[-40px] max-[750px]:scale-[85%] transition-all duration-1000 max-[930px]:flex flex-col items-center justify-around max-[540px]:scale-[60%] max-[410px]:scale-[55%] max-[350px]:scale-[45%] " + className}>

          <div className=" text-[#5a0ba9] text-[38px] z-10 max-[750px]:text-[32px] relative top-[110px] right-[30px]">
                {title}
          </div>
          <div className="text-[#9c6dcb] text-[20px] z-10 max-[750px]:text-[18px] relative top-[115px] right-[30px]">
               {content}
          </div>
          <img src={"../src/assets/images/landingCourse/" + src} alt="" className="drop-shadow-[0px_3px_6px_#5757574f]"/>
          
    </div>
  )
}

export default TitleComponents