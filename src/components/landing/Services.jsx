const Services = () => {

  return (
    <div className='w-[full] h-[700px] flex justify-center items-center pt-[100px] relative'>
      <div className="absolute top-0 mx-auto hidden max-[930px]:block max-[750px]:scale-[85%] transition-all duration-1000">
          <div className="text-[#5a0ba9] text-[38px] absolute left-[37%] top-3 z-10 max-[750px]:text-[32px]">
            خدمات
          </div>
          <div className="text-[#9c6dcb] text-[20px] absolute left-[32%] top-20 z-10 max-[750px]:text-[18px]">
            تمام آنچه نیاز دارید
          </div>
          <img
            src="../src/assets/images/landingCourse/courses-title.png"
            alt=""
            className="drop-shadow-[0px_3px_6px_#5757574f] w-[450px]"
          />
      </div>
      <div className='w-[650px] h-[330px] flex flex-wrap justify-between scale-[1%] transition-all duration-1000 max-[1350px]:w-[500px] max-[1350px]:h-[250px] max-[770px]:w-[400px] max-[770px]:h-[200px]' id='holder'>
          <img src="../src/assets/images/landingService/blue.png" alt="" className='w-[50%] h-[50%] mb-5'/>
          <img src="../src/assets/images/landingService/purple.png" alt="" className='w-[50%] h-[50%] '/>
          <img src="../src/assets/images/landingService/yellow.png" alt="" className='w-[50%] h-[50%] '/>
          <img src="../src/assets/images/landingService/red.png" alt="" className='w-[50%] h-[50%] '/>
      </div>
      <img src="../src/assets/images/landingService/Group 159.png" alt="" className='absolute left-[-500px] bottom-[-70px] scale-[70%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[60%] max-[930px]:hidden' id='woman'/>
      <img src="../src/assets/images/landingService/Path 620.png" alt="" className='absolute left-[-250px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[40%] max-[930px]:hidden '/>
      <img src="../src/assets/images/landingService/Group 160.png" alt="" className='absolute right-[-550px] top-[-20px] scale-[70%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000 max-[1350px]:scale-[60%] max-[930px]:hidden' id='man'/>
    </div>
  )
}

export default Services