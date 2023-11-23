const TitleComponents = ({title,content,className}) => {

  return (
    <div className={"w-[530px] max-[530px]:w-[410px]  max-[500px]:w-[380px] max-[400px]:w-[350px] max-[500px]:h-[185px]  h-[228px] relative mx-[auto] transition-all flex justify-center items-center   " + className}>

          <div className=" relative top-[25px] z-10 text-center [&>div:last-child]:text-[#9c6dcb] [&>div:first-child]:text-[#5a0ba9] [&>div:first-child]:text-[28px] [&>div]:my-[8px] ">
              <div>{title}</div>
              <div>{content}</div>
          </div>
          <img src={"../src/assets/images/landingCourse/courses-title.png"} alt="" className="titleLand drop-shadow-[0px_3px_6px_#5757574f] w-full h-full absolute left-0 top-0"/>
          
    </div>
  )
}

export default TitleComponents