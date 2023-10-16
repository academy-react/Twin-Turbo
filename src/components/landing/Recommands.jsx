import TitleComponents from "./TitleComponents"
const Recommands = () => {
  return (
    <div className='w-full h-[870px] flex flex-col justify-center items-center pt-[10px] relative'>
        <TitleComponents title="نظر خواهی" content="نظرات و انتقادات" src="courses-title.png" className="flex" />

        <div className="w-full relative h-[65%] mt-28">
            <img src="../src/assets/images/re-i.png" className="h-full relative max-[1630px]:left-[-45px] max-[1630px]:scale-[90%] transition-all duration-1000 max-[1510px]:left-[-94px] max-[1510px]:scale-[80%] max-[1510px]:h-[85%] max-[1510px]:top-20 max-[1170px]:hidden" />
            <div className="w-[600px] shadow-[0_0_7px_#ddd] h-0 opacity-0 bg-white absolute right-24 top-0 rounded-3xl flex flex-col items-center justify-evenly transition-all duration-1000 max-[1630px]:scale-[90%] max-[1510px]:scale-[80%] max-[1510px]:w-[550px] max-[1170px]:relative max-[1170px]:left-0 max-[1170px]:mx-auto max-[530px]:scale-[70%] max-[530px]:left-[-50px] max-[480px]:scale-[60%] max-[480px]:left-[-80px] max-[378px]:w-[480px]" id="recommandsForm">
                <div className="relative w-[85%] flex justify-between items-center border rounded-lg pr-[15px] overflow-hidden">
                    <input type="text" className="text-[18px] w-[75%] placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[#70707023] outline-none rounded-lg h-12 pl-5" placeholder="name"/>
                    <div className="text-[20px] text-[#67008F] transiition-all duration-[.5s]">نام کامل</div>
                </div>
                <div className="relative w-[85%] flex justify-between items-center border rounded-lg pr-[15px] overflow-hidden">
                    <input type="text" className="text-[18px] w-[75%]  placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[#70707023] outline-none  h-12 pl-5" placeholder="enter your email address"/>
                    <div className="text-[20px] text-[#67008F] transiition-all duration-[.5s]">ایمیل</div>
                </div>
                <div className="relative w-full flex justify-center">
                    <textarea type="text" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707023] outline-none rounded-lg w-[85%] h-80 pl-5 pt-10 px-[5px] resize-none"/>
                    <div className="text-[20px] text-[#67008F] absolute right-[58px] top-3 transiition-all duration-[.5s]">متن پیام</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommands