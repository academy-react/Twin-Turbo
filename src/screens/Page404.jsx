import Footer from "../components/common/Footer";
import {Link} from "react-router-dom"
const Page404 = () => {
  return (
    <div className=' w-[1920px] mx-[auto]'>
        <div className='w-full h-[400px] flex flex-col items-center justify-center'>
          <div className='relative w-[450px] h-[400px] flex justify-center items-center'>
            <img src="../src/assets/images/404.png" alt="" />
            <img src="../src/assets/images/sircle.png" alt="" className='scale-[70%] absolute right-[45px] top-[140px]' id='sircle1' />
            <img src="../src/assets/images/sircle.png" alt="" className='scale-[70%] absolute left-[45px] top-[105px]' id='sircle2' />
          </div>
            <Link className="w-[20%] h-[45px] rounded-[15px] bg-[#A644C1] flex justify-center items-center text-[#fff] cursor-pointer hover:bg-[#8e2aae] transition-all duration-300">بازگشت به صفحه اصلی</Link>
        </div>
        <Footer />
    </div>
  )
}

export default Page404