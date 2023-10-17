import TitleComponents from "./TitleComponents"
const Services = () => {

  return (
    <div className='h-[700px] max-[780px]:h-[500px] w-[full] flex flex-col justify-center items-center relative'>
      <TitleComponents title="خدمات" content="انچه به ان نیاز دارید" src="courses-title.png" className="hidden mb-16" />
      <div className='max-[420px]:w-[350px] max-[420px]:[&>*]:h-[45%] max-[380px]:[&>*]:h-[40%] max-[351px]:w-[300px] w-[650px] flex flex-wrap justify-between scale-[1%] transition-all duration-1000 max-[1350px]:w-[500px] max-[1350px]:h-[250px] max-[770px]:w-[400px] max-[770px]:h-[200px]' id='holder'>
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