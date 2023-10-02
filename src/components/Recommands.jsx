const Recommands = () => {
  return (
    <div className='w-full h-[750px] flex flex-col justify-center items-center pt-[10px] relative'>
        <div className="bg-white w-[300px] h-[80px] rounded-[15px] flex flex-col items-center justify-center shadow-[0px_0px_6px_#ccc]">
            <h2 className="my-1 font-black text-[30px] text-[#5a0ba9]" > پیشنهاد و انتقادات</h2>
        </div>
        <div className="w-full relative h-[65%] mt-28">
            <img src="../src/assets/images/re-i.png" className="h-full" />
            <div className="w-[450px] h-[490px] bg-white absolute right-24 top-0 rounded-3xl flex flex-col items-center justify-evenly">
                <div className="relative w-full flex justify-center">
                    <input type="text" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707070] outline-none rounded-lg w-[85%] h-12 pl-5" placeholder="name"/>
                    <div className="text-[18px] text-[#67008F] absolute right-12 top-3">نام کامل</div>
                </div>
                <div className="relative w-full flex justify-center">
                    <input type="text" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707070] outline-none rounded-lg w-[85%] h-12 pl-5" placeholder="enter your email address"/>
                    <div className="text-[18px] text-[#67008F] absolute right-12 top-3">ایمیل</div>
                </div>
                <div className="relative w-full flex justify-center">
                    <textarea type="text" className="placeholder:text-[#5a0ba951] text-[#5A0BA9] border border-[#70707070] outline-none rounded-lg w-[85%] h-80 pl-5 pt-10 resize-none"/>
                    <div className="text-[18px] text-[#67008F] absolute right-12 top-3">متن پیام</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommands